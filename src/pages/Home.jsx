import { useState } from "react"
import axios from "axios"
import "./Home.css"

/*Consumindo a API*/
const Home = () => {

  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do GitHub:', error);
    }
  };

  return (
    <div className="containe">
      <h1>JGitFinder</h1>
      <p className="dgt">Digite o nome do usuário do GitHub</p>
      <img src="https://pngimg.com/uploads/github/github_PNG84.png" alt="" className="git" />
      <label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
         className="Inputbox"/>
      </label>
      <button className="Botão" onClick={fetchData}>Buscar</button>

      {userData && (
        <div className="resposta">
          <br/><br />
          <h2>Dados do Usuário</h2>
          <div className="containe2">
          <img className="Foto" src={userData.avatar_url} />
          <p className="Nome1">{userData.name}</p>
          <p className="Followers2">Seguidores: {userData.followers}</p>
          <p className="Repos3">Repositórios públicos: {userData.public_repos}</p>
          <p className="Perfil4"> <a href={userData.html_url} target="_blank" rel="noopener noreferrer">{userData.html_url}</a></p>
        </div>
        </div>
      )}

    </div>
  );
}

export default Home
import { useState } from "react"
import axios from 'axios'
import "./Busca.css"


function Busca () {
    
    const [username, setUserName] = useState('')
    const [userData, setUserData] = useState([])

        const UserNData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`)
                setUserData(response.data)
            } catch (error) {

                console.error('Erro ao buscar repositórios do GitHub')
            }
        }

  return (
    <div className="pro">
    <h1>Repositórios GitHub</h1>
    <p className="dgt">Digite o nome do usuário do GitHub</p>
      <img src="https://pngimg.com/uploads/github/github_PNG84.png" alt="" className="git" />
    <label>
        <input className="Inputbox"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value) }
        />
       <button className="Botão"onClick={UserNData}>Buscar</button>
    </label>
    {userData.map((cadaRepo) => {
        return(
            <div className="Repo">
                <div className="Nome">
                <h4>{cadaRepo?.name}</h4>
                <span className="Data">{cadaRepo?.created_at}</span>
                </div>
                <div>
                    <a className="Link" href={cadaRepo?.html_url} target="_blank">{cadaRepo?.html_url}</a>
                    <span className="LNG">{cadaRepo?.language}<span className="circle"></span></span>
                </div>
            </div>
       
        )
    })}
    
         
    </div>
  );
}
      
      export default Busca
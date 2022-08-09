import {useEffect,useState} from 'react'
import axios from 'axios'



function Basketball() {
    const [stats, setStat] = useState([])
    const [currentPageUrl , setCurrentPageUrl] = useState("https://www.balldontlie.io/api/v1/players")

    useEffect(() => {
        if(!stats.length)
        axios.get(currentPageUrl).then((response) => {
            setStat(response.data.data)
        })
    },[currentPageUrl])


  return (
    <div>
        <h4>
            Players
        </h4>
        {stats.map((player)=> {
            return(
                <div key={player.id}>
                    <p>{player.first_name} {player.last_name}</p> 
                </div>
            )
        })}
    </div> 
  )
}

export default Basketball
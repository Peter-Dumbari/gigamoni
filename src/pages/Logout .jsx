import axios from 'axios'
import { useNavigate } from 'react-router'


function Logout () {
  const access = JSON.parse(localStorage.getItem('tokens'));
  const reFresh = localStorage.getItem('tokens')
  let items = new FormData();

  items.append('refresh', reFresh)


    const navigate = useNavigate();
    let info = {headers: {"Authorization": "Token " + access} }
    axios.post('https://test-gig.herokuapp.com/api/v1/accounts/logout/', items, info)
    .then((response)=>{
      if(response.status === 200){
        navigate('/login')
        localStorage.clear();
      }
    })
    .catch((error) =>{
      console.log(error)
    })

  } 

export default Logout 
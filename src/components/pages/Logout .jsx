import axios from 'axios'
import { useNavigate } from 'react-router'


function Logout (context) {
    const navigate = useNavigate();
    const refresh = JSON.parse(localStorage.getItem('tokens')).refresh
    const items = {headers: {"Authorization": "Bearer "+ refresh}}
    console.log(items);
    axios.post('https://test-gig.herokuapp.com/api/v1/accounts/logout/', items)
    localStorage.clear("balance");
    window.location.reload(false);
    context.commit("user_data", {
      token: null,  }); 
      navigate('/login')

  } 

export default Logout 
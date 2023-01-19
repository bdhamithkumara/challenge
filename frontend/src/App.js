import Form from './components/Form.jsx';
import Allcomments from './components/Allcomments.jsx';
import { useState } from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
import { useEffect } from "react";

function App() {

  const [users, setUsers] = useState([]);

  const getAllComments = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a,b) =>(a.name > b.name ? 1 : -1)));
    }catch (error){
      toast.error(error);
    }
  }

  useEffect(()=>{
    getAllComments();
  },[setUsers]);


  return (
    <div className='container mx-auto px-4 mt-5'>
      <Form getAllComments={getAllComments}/>
      <Allcomments users={users}/>
    </div>
  );
}

export default App;

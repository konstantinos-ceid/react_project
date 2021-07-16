import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import { useState} from "react";
import Axios from "axios";

var x ;

 function  App() 
  
 {
 
  
  const [id, setId] = useState(0);
  const [last_name, setLast] = useState("");
  const [first_name, setFirst] = useState("");
  const [is_active, setActive] = useState("");
  const [date_of_birth, setDate] = useState("");
  
      


  const [newLast, setNewLast] = useState("");
  const [newFirst, setNewFirst] = useState("");
  const [newActive, setNewActive] = useState("");
  const [newDate, setNewDate] = useState("");
  
 

  const [employeeList, setEmployeeList] = useState([]);

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/update'), [history]);
  

  

  
  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      
      
      last_name: last_name,
      first_name: first_name,
      is_active: is_active,
      date_of_birth : date_of_birth,
       
    }).then(() => {
      console.log("success");
    });
  };
  const getEmployees = () => {
    Axios.get("http://localhost:3001/users").then((response) =>{
    console.log("success");
    
    setEmployeeList(response.data);
      
    });
  };
  


  const getId = (id) =>{
    x = id;
localStorage.setItem("key", x);

  }

  

  
   
   

  
  
  const deleteEmployee = (id) =>{
    Axios.delete(`http://localhost:3001/delete/${id}`)
    .then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
        );
      });
  };
  

  return (




    <div className="info">
      
{getEmployees()}
{employeeList.map((val, key) =>{
return (
<div className="employe">
  <div>
  <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Active</th>
                    <th>Date of Birth</th>
                    <button onClick={() => {
                 getId(val.id);
                 
                 console.log(date_of_birth);
                 console.log(is_active);
                   handleOnClick();

                  }}> Update</button>
                  <button onClick={() => {deleteEmployee(val.id)}}>

                    Delete
                  </button>
                </tr>
                </thead>
                <tbody>
                    
                       
                            <tr key={val.id}>
                              <td>{val.id}</td>
                              <td>{val.first_name}</td>
                                <td>{val.last_name}</td>
                                <td>{val.is_active}</td>
                                <td>{val.date_of_birth}</td>
                                <td/>
                            </tr>
                        
                    
                </tbody>
            </table>
    
  
</div>
  
</div>

    
  );
  
})}
</div>

  );
}

export default App;


import { useState} from "react";
import Axios from "axios";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import App from "./App";

function Update() {
    
  
  
  const getE = (id) =>{
    Axios.get(`http://localhost:3001/users/${x}`).then((response) =>{
      console.log("ep");
      setEmployeeList(response.data);
      
      });
    };
    
    
    const [newLast, setNewLast] = useState("");
  const [newFirst, setNewFirst] = useState("");
  const [newActive, setNewActive] = useState("false");
  const [newDate, setNewDate] = useState("");


    const history = useHistory();

    const [employeeList, setEmployeeList] = useState([]);

  const handleOnClick = useCallback(() => history.push('/'), [history]);


  var x = localStorage.getItem("key");
  
  



  const updateEmployee = (x) => {
    
        Axios.put("http://localhost:3001/update", { 
        last_name : newLast, 
        first_name : newFirst, 
        is_active :newActive,
        date_of_birth : newDate, id: x }).then(
          (response) => {
            
            setEmployeeList(
              employeeList.map((val) => {
                return val.id === x
                  ? {
                      id: val.id,
                      last_name : newLast, 
                      first_name : newFirst, 
                      is_active : newActive,
                      date_of_birth : newDate,
                      
                    }
                  : val;
                 
              })
            );
          }
        );
      };
      
return(

  <div className="information">
      
{getE()}
{employeeList.map((val, key) =>{
return (
<div className="employee">
  
    <div>
    <input type="text" 
    placeholder="First Name"
    onChange={(event) => {
      setNewFirst(event.target.value);
    }}/>
    <input type="text" 
    placeholder="Last Name"
   
    onChange={(event) => {
      setNewLast(event.target.value);
    }}/>
    
    <input type = "checkbox"
    onChange={(event) => {
      setNewActive( "true");
    }
    }/>
    <input type="date"
    placeholder="Date of Birth"
    onChange={(event) => {
      setNewDate(event.target.value);
    }}/>
  <button onClick={() => {
                    updateEmployee(val.id);
                    handleOnClick();
                  }}> Update</button>
                  
  </div>
</div>

    
  );
  
})}
</div>

  );
}
  
  
    
  
export default Update;
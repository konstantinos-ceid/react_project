import { useState} from "react";
import Axios from "axios";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';


 function  Create ()   {
  
    const [last_name, setLast] = useState("");
    const [first_name, setFirst] = useState("");
    const [is_active, setActive] = useState("false");
    const [date_of_birth, setDate] = useState("00-00-0000");
    
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);
  
    
  
    
    const addEmployee = () => {
      Axios.post("http://localhost:3001/create", {
        last_name: last_name,
        first_name: first_name,
        is_active: is_active,
        date_of_birth : date_of_birth,
        
      }
      
      ).then(() => {
        
        console.log("Employed just Added");
      });
      
    };
    
    
  
  
    
  
  
    return (
  
  
  
  
      <div className="information">
       
 
  
  
  
        <label>First Name:</label>
        <input type="text"
        onChange={(event) => {
          setFirst(event.target.value);
        }}/>
        <label>Last Name:</label>
        <input type="text"
        onChange={(event) => {
          setLast(event.target.value);
        }}/>
        <label>Is Active?:</label>
        <input type = "checkbox"
        onChange={(event) => {
          setActive( "true");
        }
        }/>
        <label>Date of Birth:</label>
        <input type="date"
        onChange={(event) => {
          setDate(event.target.value);
        }}/>
        <button type ="button" onClick={() =>{

          addEmployee();
          
          
          handleOnClick();
        }}
          
          >Add Employee</button>
        
  
  </div>
  
    );
      }

export default Create;
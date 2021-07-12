
import './App.css';

import { useState} from "react";
import Axios from "axios";

function App() {
  
  const [last_name, setLast] = useState("");
  const [first_name, setFirst] = useState("");
  const [is_active, setActive] = useState(true);
  const [date_of_birth, setDate] = useState("2021-12-12");
  

  const [newLast, setNewLast] = useState("");
  const [newFirst, setNewFirst] = useState("");
  const [newActive, setNewActive] = useState(true);
  const [newDate, setNewDate] = useState(2012-12-12);
  
const [employeeList, setEmployeeList] = useState([]);

  
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
  


  const updateEmployee = (id) => {
    Axios.put("http://localhost:3001/update", { 
    last_name : newLast, 
    first_name : newFirst, 
    is_active :newActive,
    date_of_birth : newDate, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === id
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
      <input type = "boolean"
      onChange={(event) => {
        setActive(event.target.value);
      }}/>
      <label>Date of Birth:</label>
      <input type="date"
      onChange={(event) => {
        setDate(event.target.value);
      }}/>
      <button onClick={addEmployee}>Add Employee</button>
      <button onClick={getEmployees}>Get All Employees</button>

{employeeList.map((val, key) =>{
return (
<div className="employee">
  <div>
  <h3>{val.last_name}</h3>
  <h3>{val.first_name}</h3>
  <h3>{val.is_active}</h3>
  <h3>{val.date_of_birth}</h3>
</div>
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
    <input type="boolean" 
    placeholder="Is Active?"
    onChange={(event) => {
      setNewActive(event.target.value);
    }}/>
    <input type="text" 
    placeholder="Date of Birth"
    onChange={(event) => {
      setNewDate(event.target.value);
    }}/>
  <button onClick={() => {
                    updateEmployee(val.id);
                  }}> Update</button>
                  <button onClick={() => {deleteEmployee(val.id)}}>

                    Delete
                  </button>
  </div>
</div>

    
  );
  
})}
</div>

  );
}

export default App;

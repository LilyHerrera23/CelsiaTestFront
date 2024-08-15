import React, { useEffect, useState } from "react";
import "./App.css";
import FormUser from "./components/forms/FormUser";

const CardUser = ({ type, numberType, name, lastName, tel, email }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "80% 20%" }}>
      <div
        style={{
          display: "grid",
          alignContent: "center",
          border: "2pt solid red",
          maxHeight: "76pt",
          padding: "5pt",
          borderRadius: "8pt",
          gap: "4pt",
        }}
      >
        <label htmlFor="">
          {type}: {numberType}
        </label>
        <label htmlFor="">
          {name} {lastName}
        </label>
        <label htmlFor="">{tel}</label>
        <label htmlFor="">{email}</label>
      </div>
      <div></div>
    </div>
  );
};

const App = () => {

  const [formUser, setformUser] = useState(null);

  useEffect(() => {
    allusers()
   
  }, []);

 const allusers = () => {
  fetch("http://127.0.0.1:8080/CustomerController/getAllCustomers", {
    //   mode: "no-cors",
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
     })
       .then((response) => response.json())
       .then((data) => {
         console.log(data);
         setformUser(data);
       })
       .catch((error) => console.error(error));
 }

  return (
    <div className="container">
      <div className="forms">
        <FormUser />  
      </div>
      <div className="loads">
        {formUser!== null && formUser.map((user) => {
          
          return (
          <CardUser
            key={user.numberType}
            type={user.identificationType}
            numberType={user.identification}
            name={user.name}
            lastName={user.lastName}
            tel={user.phoneNumber}
            email={user.email}
          />
        )})}
      </div>
    </div>
  );
};

export default App;

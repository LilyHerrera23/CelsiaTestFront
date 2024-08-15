import React, { useEffect } from "react";
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
  const example = [
    {
      type: "CC",
      numberType: "123",
      name: "ZHD",
      lastName: "CROIX",
      tel: 27458,
      email: "abc@abc.com",
    },
    {
      type: "nit",
      numberType: "85474",
      name: "john",
      lastName: "arteaga",
      tel: 27458,
      email: "abc@abc.com",
    },
  ];
  return (
    <div className="container">
      <div className="forms">
        <FormUser />
      </div>
      <div className="loads">
        {example.map((user) => (
          <CardUser
            key={user.numberType}
            type={user.type}
            numberType={user.numberType}
            name={user.name}
            lastName={user.lastName}
            tel={user.tel}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

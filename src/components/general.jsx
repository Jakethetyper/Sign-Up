import React from "react";
import { useNavigate } from "react-router-dom";

const General = ({ generalInfo, changeOfInfo }) => {
  const navigate = useNavigate();
  return (
    <section>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/education");
        }}
      >
        <h1>General Information</h1>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={generalInfo.firstName}
          onChange={(event) => changeOfInfo(event)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={generalInfo.lastName}
          onChange={(event) => changeOfInfo(event)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={generalInfo.email}
          onChange={(event) => changeOfInfo(event)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={generalInfo.password}
          onChange={(event) => changeOfInfo(event)}
        />
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default General;

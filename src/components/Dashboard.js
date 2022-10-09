import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.user);
  
  return (
    <React.Fragment>
      <h1>Strona która powinna się pojawić po zalogowanniu</h1>
    </React.Fragment>
  )
}

export default Dashboard
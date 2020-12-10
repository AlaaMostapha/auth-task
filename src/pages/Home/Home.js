import React from "react";
import ButtonAppBar from "../../components/AppBar/AppBar";
import { useSelector } from "react-redux";
function Home(props) {
  const user_data = useSelector((state) => state.loginReducer.user_data);
  return (
    <>
      {user_data ? (
        <>
          <ButtonAppBar name={user_data.name} />
          <h1> welcome</h1>
          <b id="userName">{user_data.name}</b>
        </>
      ) : null}
    </>
  );
}

export default Home;

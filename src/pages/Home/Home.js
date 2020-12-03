import React from "react";
import { connect } from "react-redux";
import ButtonAppBar from "../../components/AppBar/AppBar";
function Home(props) {
  const { user_data } = props;
  // const { name } = user_data;
  console.log(user_data);
  return (
    <>
      {user_data ? (
        <>
          <ButtonAppBar name={user_data.name} />
          <h1> welcome</h1>
          <b>{user_data.name}</b>
        </>
      ) : null}
    </>
  );
}
function mapStateToProps(state) {
  //   console.log(state);
  return {
    user_data: state.loginReducer.user_data,
  };
}
export default connect(mapStateToProps, null)(Home);

import React from "react";
import { connect } from "react-redux";

function Home(props) {
  const { user_data } = props;
  // const { name } = user_data;
  console.log(user_data);
  return (
    <div>
      <h1> welcome</h1>
      {user_data ? <b>{user_data.name}</b> : null}
    </div>
  );
}
function mapStateToProps(state) {
  //   console.log(state);
  return {
    user_data: state.loginReducer.user_data,
  };
}
export default connect(mapStateToProps, null)(Home);

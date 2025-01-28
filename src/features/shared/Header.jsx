import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setLoggedIn } from "../user/loginSlice";

function Header() {
  useSelector(state=>console.log(state.loginReducer.isLoggedIn))
  var isLoggedIn = useSelector(state=>state.loginReducer.isLoggedIn)
  var navigate = useNavigate();
  var dispatch = useDispatch();
  function logout(){
    dispatch(setLoggedIn(false));
    navigate("/login")
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Ticket APP
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            {
              isLoggedIn && <button onClick={()=>{logout()}}>Logout</button>
            }
            {
              !isLoggedIn && <button>Login</button>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

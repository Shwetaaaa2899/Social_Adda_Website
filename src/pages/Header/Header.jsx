import "./Header.css";

import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
// import { Outlet } from "react-router-dom"
import { useAuth } from "../../context/authcontext";
import { AiFillGithub } from "react-icons/ai";
import CreatePost from "../CreatePostModal/Modal";
// night mode icon
import { MdOutlineDarkMode } from "react-icons/md";
// light mode
import { MdLightMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import logo from "./logo.png"
const Header = () => {
  const { token, isLoggedIn, userInfo, logoutHandler } = useAuth();
  const [modal, setModal] = useState(false);
  {
    /* --header logic */
  }
  const username = userInfo?.firstName
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h2>Social Adda</h2></div>

        <ul className="nav-right">




          <li className="item">{isLoggedIn && token &&
            <h2>   Hello! {username}</h2>}
          </li>


          <li className="item">
            <Link
              target="_blank"
              to="https://github.com/Shwetaaaa2899/Social_Adda_Website"

            >
              <AiFillGithub />
            </Link>
          </li>


          <li className="item">
            {isLoggedIn && token && (
              <NavLink to="/">
                <FiLogOut onClick={logoutHandler} />
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div >
  );
};
export default Header;

{
  /*  
 {
   isLoggedIn && token &&  <NavLink to ="/profile" >Profile</NavLink>
 } */
}

//  <img  style ={{height:"100px",width:"100px",borderRadius:"70%"}}
//  src = "https://img.myloview.com/stickers/black-music-player-icon-isolated-on-white-background-portable-music-device-yellow-speech-bubble-symbol-vector-700-276541448.jpg"/ >

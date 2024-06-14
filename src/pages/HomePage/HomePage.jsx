import CopySideBar from "../../components/CopySideBar/CopySideBar";
import LogoutButton from "../../components/Sidebar/Components/LogoutButton.jsx";
import { react } from "react";
import css from "./HomePage.module.css";
import { createColumn } from "../../redux/columns/operations";
import { useSelector, useDispatch } from "react-redux";
import CopyBoardItem from "../../components/CopyBoardItem/CopyBoardItem";
import TestLogOut from "../../components/TestLogOut/TestLogOut";

export default function HomePage() {
  return (
    <div>
      <p>Hello on HomePagePage</p>
      <TestLogOut />

      <div className={css.container}>
        <CopySideBar />
        <CopyBoardItem />
      </div>

      <LogoutButton />
    </div>
  );
}

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Sidebar from './Components/Sidebar.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Sidebar />
//   </React.StrictMode>,
// )

import CopySideBar from "../../components/CopySideBar/CopySideBar";
import { react } from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <p>Hello on HomePagePage</p>

      <div className={css.container}>
        <CopySideBar />
        {/* <TestLogOut /> */}
      </div>
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

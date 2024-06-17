import { react } from "react";
import LogoutButton from "../../components/Sidebar/Components/LogoutButton.jsx";
import Sidebar from "../../components/Sidebar/Components/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";
import ScreensPage from "../../pages/ScreensPage/ScreensPage.jsx";
import css from "./HomePage.module.css";
import { useState, useEffect } from "react";
// import CopySideBar from "../../components/CopySideBar/CopySideBar";
// import CopyBoardItem from "../../components/CopyBoardItem/CopyBoardItem";

export default function HomePage() {
  let [trueBoardId, setTrueBoardId] = useState("");
  const getId = (id) => {
    setTrueBoardId((trueBoardId = id));
  };

  return (
    <div className={css.div}>
      <div className={css.sidebar}>
        <Sidebar getId={getId} />
      </div>

      <div className={css.container}>
        <Header className={css.header} />
        <ScreensPage idBoard={trueBoardId} className={css.screensPage} />
      </div>
      {/* <TestLogOut /> */}

      {/* <div className={css.container}> */}
      {/* <CopySideBar getId={getId} />
      <CopyBoardItem /> */}
      {/* </div> */}

      {/* <LogoutButton /> */}
    </div>
  );
}

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Sidebar from '../../components/Sidebar/Components/Sidebar.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Sidebar />
//   </React.StrictMode>,
// )

// import React from 'react';
// import Sidebar from '../../components/Sidebar/Components/Sidebar.jsx';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <Sidebar />
//       {/* Здесь вы можете добавить другие компоненты для главной страницы */}
//     </div>
//   );
// };

// export default HomePage;

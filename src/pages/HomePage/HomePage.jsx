import { react } from "react";
// import CopySideBar from "../../components/CopySideBar/CopySideBar";
import LogoutButton from "../../components/Sidebar/Components/LogoutButton.jsx";
// import CopyBoardItem from "../../components/CopyBoardItem/CopyBoardItem.jsx";
import Sidebar from "../../components/Sidebar/Components/Sidebar.jsx";

export default function HomePage() {
  return (
    <div>
      <p>Hello on HomePagePage</p>

      {/* <TestLogOut /> */}

      {/* <div className={css.container}> */}
      {/* <CopySideBar /> */}
      {/* <CopyBoardItem /> */}
      {/* </div> */}

      <LogoutButton />

      {/* <Sidebar/> */}
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

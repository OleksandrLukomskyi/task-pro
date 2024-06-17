import Sidebar from '../../components/Sidebar/Components/Sidebar.jsx';
import Header from '../../components/Header/Header.jsx';
import ScreensPage from '../../pages/ScreensPage/ScreensPage.jsx';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.div}>
      <div className={css.sidebar}>
        <Sidebar />
      </div>

      <div className={css.container}>
        <Header className={css.header} />
        <ScreensPage className={css.screensPage} />
      </div>
    </div>
  );
}

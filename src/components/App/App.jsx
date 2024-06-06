import { Suspense, lazy  } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from '../Layout/Layout.jsx';



const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage.jsx'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage.jsx'));
const ScreensPage = lazy(() => import('../../pages/ScreensPage/ScreensPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFound/NotFound.jsx'));

export default function App() {

  return (
    <Layout>
         <Suspense fallback={"LOADING"}>
            <Routes> 
              <Route path="/welcome" element={<WelcomePage/>}/>
              <Route path="/auth/:id" element={<AuthPage />}>
                {/* <Route path="LoginForm" element={<LoginForm />} />
                <Route path="RegisterForm" element={<RegisterForm />} /> */}
              </Route>
              <Route path="/home" element={<HomePage />} />
              <Route path="/home/:boardName" element={<ScreensPage />}></Route>
              <Route path='*' element={<NotFoundPage/>} />
            </Routes>
          </Suspense>
    </Layout>
  )
}
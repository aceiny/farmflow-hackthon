import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Redirect from "./comps/redirect";
import 'react-toastify/dist/ReactToastify.css'
import Main from "./pages/Main";
import AuthPage from "./pages/AuthPage";
import Marketplace from "./pages/Marketplace";
import NotFound from "./comps/NotFound";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Recruiments from "./pages/recruiments";
function App() {
  const Routes = [
          {
            name: 'Home',
            path: '/',
            exact: true,
            component: <Main/>,
          },
          {
            name : "auth",
            path : "/auth",
            exact : true,
            component : <AuthPage/>,
          },
          {
            name : "marketplace",
            path : "/marketplace",
            exact : true,
            component : <Marketplace/>,
          },
          {
            name : "marketplace",
            path : "/marketplace/:productID",
            exact : true,
            component : <ProductPage/>,
          },
          {
            name : "profile",
            path : "/profile",
            exact : true,
            component : <Profile/>,
          },
          {
            name : "recruietments",
            path : "/recruietments",
            exact : true,
            component : <Recruiments/>,
          },
          {
            name : "experts",
            path : "/experts",
            exact : true,
            component : <Recruiments/>,
          },
          {
            name : "notfound",
            path : "*",
            exact : true,
            component : <NotFound/>,
          }
        ]
  return (
    <>
    <BrowserRouter>
    <Routes>
      {
        Routes.map((v,i)=>{
          return <Route key={i} path={v.path} element={v.component}/>
        })
      }
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

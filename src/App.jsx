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
  const isAuth = useSelector(state=>state.auth.isLogged)
      /*<Route  path="/" exact element={(!isAuth ? <Main/> : <AuthPage/>)} />
        <Route  path="/auth" exact element={(!isAuth ? <AuthPage/> : <Redirect/> )} />*/
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route  path="/" exact element={( isAuth?<Main/>:<AuthPage/>)} />
    <Route  path="/auth" exact element={( isAuth?<Redirect/>:<AuthPage/>)} />
    <Route  path="/marketplace" exact element={(isAuth?<Marketplace/>:<AuthPage/>)} />
    <Route  path="/marketplace/:productID" exact element={(isAuth?<ProductPage/>:<AuthPage/>)} />
    <Route  path="*" exact element={<NotFound/>} />
    <Route  path="profile" exact element={( isAuth?<Profile/>:<AuthPage/>)}/>
    <Route  path="/recruietments" exact element={( isAuth?<Recruiments/>:<AuthPage/>)}/>
    <Route  path="/experts" exact element={( isAuth?<Recruiments/>:<AuthPage/>)}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

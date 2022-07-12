import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/style.css";
import {InProgress} from "./components/inProgress";
import {About} from "./components/about";
import {Home} from "./components/home";

function Application()
    {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/explore"} element={<InProgress/>}/>
                    <Route path={"/chat"} element={<InProgress/>}/>
                    <Route path={"/profile"} element={<InProgress/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/sign-in"} element={<InProgress/>}/>
                    <Route path={"/sign-up"} element={<InProgress/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

ReactDOM.render(
    <Application/>
, document.getElementById("app"));
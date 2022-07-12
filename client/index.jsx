import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/style.css";
import {InProgress} from "./components/general/inProgress";
import {About} from "./components/about/about";
import {Home} from "./components/home/home";
import {Explore} from "./components/explore/explore";
import {Profile} from "./components/profile/profile";

function Application()
    {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/explore"} element={<Explore/>}/>
                    <Route path={"/chat"} element={<InProgress/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
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
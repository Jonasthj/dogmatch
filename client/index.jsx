import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "./style/style.css";
import {Navbar} from "./components/navbar";
import {Hero} from "./components/hero";
import {HomeContent} from "./components/homeContent";

function Home() {
    return (
      <div>
        {Hero()}
        {HomeContent()}
      </div>
    );
}

function Explore()
    {
        return <h1>Explore</h1>;
    }

function Chat()
    {
        return <h1>Chat</h1>;
    }

function Profile()
    {
        return <h1>Profile</h1>;
    }

function Application()
    {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/explore"} element={<Explore/>}/>
                    <Route path={"/chat"} element={<Chat/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

ReactDOM.render(
    <Application/>
, document.getElementById("app"));
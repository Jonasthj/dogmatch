import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "./style/style.css";
import {FrontpageHero} from "./components/frontpageHero";
import {ContentWhatWeDo} from "./components/contentWhatWeDo";
import {MediumSection} from "./components/mediumSection";
import {ContentWhyUseUs} from "./components/contentWhyUseUs";
import {Footer} from "./components/footer";

function Home() {
    return (
      <div>
        {FrontpageHero()}
          {MediumSection(ContentWhatWeDo(), "content-hero-1")}
          {MediumSection(ContentWhyUseUs(), "content-hero-2")}
          {Footer()}
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
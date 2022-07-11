import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/style.css";
import {FrontpageHero} from "./components/frontpageHero";
import {ContentWhatWeDo} from "./components/contentWhatWeDo";
import {MediumSectionStyleable} from "./components/mediumSection";
import {ContentWhyUseUs} from "./components/contentWhyUseUs";
import {Footer} from "./components/footer";
import {InProgress} from "./components/inProgress";

function Home() {
    return (
      <div>
          {FrontpageHero()}
          {MediumSectionStyleable(ContentWhatWeDo(), "content-hero-1")}
          {MediumSectionStyleable(ContentWhyUseUs(), "content-hero-2")}
          {Footer()}
      </div>
    );
}

function Application()
    {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/explore"} element={<InProgress/>}/>
                    <Route path={"/chat"} element={<InProgress/>}/>
                    <Route path={"/profile"} element={<InProgress/>}/>
                    <Route path={"/about"} element={<InProgress/>}/>
                    <Route path={"/sign-in"} element={<InProgress/>}/>
                    <Route path={"/sign-up"} element={<InProgress/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

ReactDOM.render(
    <Application/>
, document.getElementById("app"));
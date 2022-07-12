import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Navbar} from "./navbar";

export function FrontpageHero() {

    return (
      <section className={"hero is-large header-image"}>
        <div className={"hero-head"}>
          {Navbar()}
        </div>

        <div className={"hero-body"}>
          <div className={"columns has-text-centered is-vcentered"}>
            <div className={"column"}>
              <p className={"title is-size-1 has-text-white"}>Dogmatch</p>
              <p className={"subtitle is-size-5 has-text-white"}>
                Find your buddy!
              </p>
            </div>
            <div className={"column"}>
              <button className={"button is-large is-responsive is-success"}>
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}
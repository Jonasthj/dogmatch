import React, {useState} from "react";
import {Link} from "react-router-dom";

export function FrontpageHero() {

    const [isActive, setIsActive] = useState(false);

    return (
      <section className={"hero is-large header-image"}>
        <div className={"hero-head"}>
          <nav className={"navbar"}>
            <div className={"container"}>
              <div className={"navbar-brand"}>
                <a className={"navbar-item"}>
                  <img
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span
                  onClick={() => setIsActive(!isActive)}
                  className={`navbar-burger ${isActive ? "is-active" : ""}`}
                  data-target="navbarMenuHeroB"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div
                id="navbarMenuHeroB"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}
              >
                <div className={"navbar-end"}>
                  <Link to={"/"} className="navbar-item is-active">
                    Home
                  </Link>
                  <Link to={"/explore"} className={"navbar-item"}>
                    Explore
                  </Link>
                  <Link to={"/chat"} className={"navbar-item"}>
                    Chat
                  </Link>
                  <Link to={"/about"} className={"navbar-item"}>
                    About
                  </Link>
                  <span className={"navbar-item"}>
                    <Link
                      className={"button is-info is-inverted"}
                      to={"/sign-in"}
                    >
                      <span className={"icon"}>
                        <i className={"fas fa-solid fa-user"}></i>
                      </span>
                      <span>Sign In</span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </nav>
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
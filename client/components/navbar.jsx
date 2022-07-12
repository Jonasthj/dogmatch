import { Link } from "react-router-dom";
import {useState} from "react";
import {ContentSignInModalBody} from "./contentSignInModalBody";

export function Navbar() {
  const signInModalTitle = "Sign in"
  const [burgerActive, setBurgerActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  return (
      <div>
        <nav className={"navbar"}>
          <div className={"container"}>
            <div className={"navbar-brand"}>
              <a className={"navbar-item"}>
                <img
                    src="https://bulma.io/images/bulma-logo.png"
                    alt="Logo"
                />
              </a>
              <span
                  onClick={() => setBurgerActive(!burgerActive)}
                  className={`navbar-burger ${burgerActive ? "is-active" : ""}`}
                  data-target="navbarMenuHeroB"
              >
            <span></span>
            <span></span>
            <span></span>
          </span>
            </div>
            <div
                id="navbarMenuHeroB"
                className={`navbar-menu ${burgerActive ? "is-active" : ""}`}
            >
              <div className={"navbar-end"}>
                <Link to={"/"} className="navbar-item is-active">
                  Hjem
                </Link>
                <Link to={"/explore"} className={"navbar-item"}>
                  Utforsk
                </Link>
                <Link to={"/chat"} className={"navbar-item"}>
                  Chat
                </Link>
                <Link to={"/about"} className={"navbar-item"}>
                  Om oss
                </Link>
                <span className={"navbar-item"}>
              <button className={"button is-info is-inverted"}
                    onClick={() => {setModalActive(!modalActive)}}>
                <span className={"icon"}>
                  <i className={"fas fa-solid fa-user"}></i>
                </span>
                <span>Logg på</span>
              </button>
            </span>
              </div>
            </div>
          </div>
        </nav>

        <div className={`modal ${modalActive ? "is-active" : ""}`}>
          <div className={"modal-background"}
               onClick={() => setModalActive(!modalActive)}></div>
          <div className={"modal-card"}>
            <header className={"modal-card-head"}>
              <p className={"modal-card-title"}>Sign In</p>
              <button className={"delete"}
                      aria-label="close"
                      onClick={() => setModalActive(!modalActive)}
              ></button>
            </header>
            <section className={"modal-card-body"}>
              {ContentSignInModalBody()}
            </section>
            <footer className={"modal-card-foot"}>
              <button className={"button is-success"}>Sign In</button>
            </footer>
          </div>
        </div>

      </div>

  );
}

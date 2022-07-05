import {MediumSection} from "./mediumSection";

export function InProgress(){
    return (
        <div className={"columns mt-5"}>
            <div className={"column is-vcentered has-text-centered"}>
                <h1 className={"title mb-5"}>This site is currently under development!</h1>
                <button
                    className={"button is-success"}
                    onClick={() => {
                        window.location = window.location.origin
                    }}>
                    Home
                </button>
            </div>

        </div>
    );
}
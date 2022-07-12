import {Navbar} from "./navbar";
import {ContentAboutUs} from "./contentAboutUs";

export function About(){
    return (
        <div>
            {Navbar()}
            {ContentAboutUs()}
        </div>
    );
}
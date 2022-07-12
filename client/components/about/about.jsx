import {Navbar} from "../general/navbar";
import {ContentAboutUs} from "./contentAboutUs";
import {Footer} from "../general/footer";

export function About(){
    return (
        <div>
            {Navbar()}
            {ContentAboutUs()}
            {Footer()}
        </div>
    );
}
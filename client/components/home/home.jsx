import {FrontpageHero} from "./frontpageHero";
import {MediumSectionStyleable} from "../general/mediumSection";
import {ContentWhatWeDo} from "./contentWhatWeDo";
import {ContentWhyUseUs} from "./contentWhyUseUs";
import {Footer} from "../general/footer";
import React from "react";

export function Home() {
    return (
        <div>
            {FrontpageHero()}
            {MediumSectionStyleable(ContentWhatWeDo(), "content-hero-1")}
            {MediumSectionStyleable(ContentWhyUseUs(), "content-hero-2")}
            {Footer()}
        </div>
    );
}
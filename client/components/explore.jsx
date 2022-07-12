import {Navbar} from "./navbar";
import {Footer} from "./footer";
import {ExploreSearch} from "./exploreSearch";
import {ExploreResults} from "./exploreResults";

export function Explore(){
    return (
        <div>
            {Navbar()}
            <section className={"section"}>
                <div className={"columns"}>
                    <div className={"column"}>
                        {ExploreSearch()}
                    </div>
                    <div className={"column is-two-thirds"}>
                        {ExploreResults()}
                    </div>
                </div>
            </section>
            {Footer()}
        </div>
    );
}
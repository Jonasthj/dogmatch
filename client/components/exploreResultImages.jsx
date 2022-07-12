import {ImageCard} from "./imageCard";

export function ExploreResultImages(){

    // TODO: Get images from db
    const sampleImage = "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

    return (
        <div className={"columns has-text-centered"}>
            <div className={"column"}>
                {ImageCard("", sampleImage)}
                {ImageCard("", sampleImage)}
            </div>
            <div className={"column"}>
                {ImageCard("", sampleImage)}
                {ImageCard("", sampleImage)}
            </div>
            <div className={"column"}>
                {ImageCard("", sampleImage)}
                {ImageCard("", sampleImage)}
            </div>
        </div>
    );
}

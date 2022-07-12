import {ImageCard} from "../general/imageCard";

export function ExploreResultImages(){

    // TODO: Get images from db
    const sampleImage = "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

    return (
        <div className={"columns has-text-centered"}>
            <div className={"column"}>
                {ImageCard(ExploreResultImageContent(), sampleImage)}
                {ImageCard(ExploreResultImageContent(), sampleImage)}
            </div>
            <div className={"column"}>
                {ImageCard(ExploreResultImageContent(), sampleImage)}
                {ImageCard(ExploreResultImageContent(), sampleImage)}
            </div>
            <div className={"column"}>
                {ImageCard(ExploreResultImageContent(), sampleImage)}
                {ImageCard(ExploreResultImageContent(), sampleImage)}
            </div>
        </div>
    );
}

function ExploreResultImageContent(){
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-8 has-text-left"}>
                    <h1 className={"title"}>Petter</h1>
                    <p>Hunderase: Golden Retriever</p>
                    <p>Alder: 6 år</p>
                    <p>Farge: Lys</p>
                </div>
                <div className={"column is-4 is-flex is-align-items-end"}>
                    <button className={"button is-success"}
                    onClick={() => {
                        window.location.href = window.location.origin + "/profile";
                    }}>Se profil</button>
                </div>
            </div>

        </div>
    );
}

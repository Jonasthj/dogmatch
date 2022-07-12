import {ImageCard} from "../general/imageCard";

export function ContentWhatWeDo(){

    // TODO: Get images and content from DB!

    const imageUrls = [
        "https://images.unsplash.com/photo-1597046835715-16f81ac132c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1524641234638-4c303747c310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ];

    const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aspernatur blanditiis, deserunt dolorum esse eum explicabo iure labore maxime minima nam natus officia perferendis porro quam reiciendis sit vitae!";

    return (
        <div>
            <div className={"has-text-centered"}>
                <h1 className={"title mb-5 is-1"}>Hva vi gjør</h1>
            </div>
            <div className={"columns has-text-centered is-vcentered"}>
                <div className={"column"}>
                    {ImageCard(content, imageUrls[0])}
                </div>
                <div className={"column"}>
                    {ImageCard(content, imageUrls[1])}
                </div>
            </div>
        </div>
    );
}
import {Footer} from "./footer";

export function ContentAboutUs(){
    return (
        <div>
            <section className={"column"}>
                <h1 className={"title is-1 has-text-centered mb-5"}>About us</h1>
                <h1 className={"title is-3 has-text-centered mb-5 is-italic"}>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, laudantium!"</h1>
            </section>
            {AboutSection("Our Mission", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, atque autem commodi consequuntur cumque doloribus et ex hic, illo illum labore minima natus obcaecati quasi qui repellat voluptates? Aliquid corporis distinctio eius, fugiat, hic in ipsam molestias nemo quidem ratione repellat temporibus ullam voluptatem! Aliquid cupiditate dolor dolore enim unde.")}
            {AboutSection("Subtitle", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, atque autem commodi consequuntur cumque doloribus et ex hic, illo illum labore minima natus obcaecati quasi qui repellat voluptates? Aliquid corporis distinctio eius, fugiat, hic in ipsam molestias nemo quidem ratione repellat temporibus ullam voluptatem! Aliquid cupiditate dolor dolore enim unde.")}
            {Footer()}
        </div>
    );
}

function AboutSection(title, content){
    return (
        <section className={"section columns"}>
            <section className={"column"}>
                <h1 className={"subtitle is-3 has-text-black has-text-weight-bold has-text-centered"}>{title}</h1>
            </section>
            <section className={"column"}>
                <h1 className={"subtitle has-text-centered"}>{content}</h1>
            </section>
        </section>
    );
}
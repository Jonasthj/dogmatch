import {Navbar} from "../general/navbar";
import {Footer} from "../general/footer";
import {MediumSection} from "../general/mediumSection";

export function Profile(){

    const sampleImgUrlPerson = "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
    const sampleImgUrlDog = "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid at beatae consequuntur debitis dignissimos dolore earum eum explicabo fugiat in inventore ipsam minima odio quos sed sequi soluta sunt, tempore voluptates. Distinctio odio officia tempora vitae? Consequatur dignissimos, est fugit ipsum, iure nulla provident sapiente sed tempore ullam voluptates?";

    return (
        <div>
            {Navbar()}
            {MediumSection(ProfileSection(sampleImgUrlPerson, "", "Person", lorem))}
            {MediumSection(ProfileSectionFlipped(sampleImgUrlDog, "", "Hund", lorem))}
            <section className={"section has-text-centered"}>
                <h1 className={"title is-1"}>Interessert?</h1>
                <h2 className="subtitle">epost@epost.com</h2>
            </section>
            {Footer()}
        </div>
    );
}

function ProfileSection(url, alt, title, content){
    return (
        <div className={"columns"}>
            <div className={"column is-6 has-text-centered"}>
                <div className={"columns"}>
                    <div className={"column is-half is-offset-one-quarter"}>
                        <figure className="image">
                            <img src={url} alt={alt ? alt : ""} />
                        </figure>
                    </div>
                </div>
            </div>
            <div className={"column has-text-centered is-flex is-justify-content-center is-flex-direction-column"}>
                <h1 className={"title is-1 mb-5"}>{title}</h1>
                <p className={"subtitle mt-5"}>{content}</p>
            </div>
        </div>
    );
}

function ProfileSectionFlipped(url, alt, title, content){
    return (
        <div className={"columns"}>
            <div className={"column has-text-centered is-flex is-justify-content-center is-flex-direction-column"}>
                <h1 className={"title is-1 mb-5"}>{title}</h1>
                <p className={"subtitle mt-5"}>{content}</p>
            </div>
            <div className={"column is-6 has-text-centered"}>
                <div className={"columns"}>
                    <div className={"column is-half is-offset-one-quarter"}>
                        <figure className="image">
                            <img src={url} alt={alt ? alt : ""} />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}
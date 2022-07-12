import {MediumSectionStyleable} from "../general/mediumSection";

export function ContentWhyUseUs(){
    return (
        <div className={"has-text-centered is-vcentered"}>
            <h1 className={"title mb-5 is-1"}>Hvorfor bruke oss?</h1>
            <div className={"columns has-text-centered is-vcentered"}>
                <div className={"column"}>
                    <img src={"https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"} />
                </div>
                <div className={"column"}>
                    <div className={"subtitle"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque enim ex, expedita fugiat impedit ipsum iste nesciunt porro quis quo repudiandae tenetur voluptatem. Beatae illo ipsum similique veniam? Distinctio impedit molestiae officia quaerat quia quo sequi vel! Cum delectus doloribus expedita laudantium magnam optio pariatur sed ullam voluptate voluptates!
                    </div>
                    <button className={"button is-success is-large is-responsive"}
                    onClick={() => {
                        window.location.href = window.location.origin + "/about";
                    }}>About us</button>
                </div>
            </div>
        </div>
    );
}
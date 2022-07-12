export function ImageCard(content, imageUrl, imageAlt) {
    const placeHolderUrl = "https://bulma.io/images/placeholders/96x96.png";
    const placeHolderAlt = "Placeholder Image";
    return (
      <div className={"card mb-5"}>
        <div className={"card-image"}>
          <figure className={"image is-4by3"}>
            <img
              src={`${imageUrl ? imageUrl : placeHolderUrl}`}
              alt={`${imageAlt ? imageAlt : placeHolderAlt}`}
            />
          </figure>
        </div>
        <div className={"card-content"}>{content}</div>
      </div>
    );
}
import { ExploreResultImages } from "./exploreResultImages";

export function ExploreResults() {
  return (
    <div>
      <h1 className={"title has-text-centered is-1"}>Resultater</h1>

      <div className="control mt-5 mb-5 has-text-right">
        <div className="select">
          <select>
            <option>Sorter</option>
            <option>Publisert</option>
            <option>Alder</option>
          </select>
        </div>
      </div>

      {ExploreResultImages()}
    </div>
  );
}

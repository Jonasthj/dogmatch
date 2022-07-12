import {ExploreSearchDropdown} from "./exploreSearchDropdown";

export function ExploreSearch() {

  const breeds = ["Golden Retriever", "Cocker Spaniel", "Labrador"];
  const colors = ["Mørk", "Lys"];
  const ageGroup = ["1 - 5 år", "5 - 10 år", "10 - 15 år", "20 - 25 år"];

  return (
    <div>
      <h1 className={"title is-1"}>Søk</h1>

      <div>
        {ExploreSearchDropdown("Hunderase", "breed", breeds)}
      </div>

      <div>
        {ExploreSearchDropdown("Farge", "color", colors)}
      </div>

      <div>
        {ExploreSearchDropdown("Aldersgruppe", "age", ageGroup)}
      </div>

    </div>
  );
}

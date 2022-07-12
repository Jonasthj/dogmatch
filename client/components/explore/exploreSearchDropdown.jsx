export function ExploreSearchDropdown(label, name, options) {
  return (
    <div className={"mt-5"}>
      <div className={"field"}>
        <label className={"label"}>{label}</label>
      </div>

      <div className={"field has-addons"}>
        <div className={"control is-expanded"}>
          <div className={"select is-fullwidth"}>
            <select name={`${name}`}>
              {options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={"control"}>
          <button className={"button is-success"}>Velg</button>
        </div>
      </div>
    </div>
  );
}
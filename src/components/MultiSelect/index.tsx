import React from "react";
import { FormatOptionLabelMeta } from "react-select";
import AsyncSelect from "react-select/async";
import { useLoading } from "../../context/LoadingContext";
import { Character } from "../../models/Character";
import { multiSelectStyles } from "./styles";

const formatOptionLabel = (
  option: Character,
  input: FormatOptionLabelMeta<Character>
) => {
  const { name, episode, image, value } = option;
  const inputValue = input.inputValue.toLowerCase();
  const index = name.toLowerCase().indexOf(inputValue);

  if (index === -1 || input.context === "value") return name;

  const isChecked = input?.selectValue?.some(
    (selectedObj: Character) => selectedObj.value === value
  );
  const episodeLength = episode?.length || 0;

  return (
    <div className="formatOptionLabelContainer">
      <input
        key={value}
        readOnly
        checked={isChecked || false}
        type="checkbox"
      />
      {image && (
        <img src={image} alt={name} className="formatOptionLabelImage" />
      )}
      <div className="formatOptionLabelContent">
        <span>
          {name.slice(0, index)}
          <strong>{name.slice(index, index + input.inputValue.length)}</strong>
          {name.slice(index + input.inputValue.length)}
        </span>
        <span className="subContentSpan">{episodeLength} Episodes</span>
      </div>
    </div>
  );
};

export interface MultiSelectArgs {
  searchData: (
    inputValue: string,
    setLoading: (loading: boolean) => void,
    setError: (error: string | null) => void
  ) => Promise<any[]>;
}

const MultiSelect = ({ searchData }: MultiSelectArgs) => {
  const { loading, setLoading, setError } = useLoading();

  return (
    <AsyncSelect
      cacheOptions
      styles={multiSelectStyles}
      isMulti
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      isLoading={loading}
      loadOptions={(inputValue) => searchData(inputValue, setLoading, setError)}
      defaultOptions
      placeholder="Karakter ara"
      formatOptionLabel={formatOptionLabel}
    />
  );
};
export { MultiSelect };

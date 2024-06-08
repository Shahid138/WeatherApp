import React, { useEffect, useState } from "react";
import { LOCATION_URL } from "../../utils/constants";

const key = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [loc, setLoc] = useState("");
  const [options, setOptions] = useState([]);
  const [submit, setSubmit] = useState(false);

  const handleSearchInput = (e) => {
    setLoc(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmit(()=>!submit);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (!loc) return;

      try {
        const resource = `${LOCATION_URL}${loc}&limit=3&appid=${key}`;
        const data = await fetch(resource);
        const json = await data.json();
        setOptions(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchLocation();
  }, [submit]);

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter a location"
          value={loc}
          onChange={handleSearchInput}
        />
        <button type="submit">Submit</button>
      </form>

      {console.log(options) }

      {options.length > 0  && (
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              {option.name}, {option.country}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;

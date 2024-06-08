/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useLocation from "../../utils/custom hooks/useLocation";

const Search = () => {
  const [loc, setLoc] = useState("");
  const { location } = useLocation();

  const handleSearchInput = (e) =>{
    const val = e.target.value;
    setLoc(()=>)
  }

  const handleSearchSubmit = (e) =>{
    e.preventDefault();
  }


  return (
    <>
      <form>
        <input type="text" placeholder="Delhi" value={loc} onChange={handleSearchInput}/>
        <button onSubmit={handleSearchSubmit} type="submit">Submit</button>
      </form>
    </>
  );
};

export default Search;

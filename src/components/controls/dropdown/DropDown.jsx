import React from "react";
import "./DropDown.css";
import { categoriesForPriceFilter } from "./priceFilter";

const Dropdown = ({ sortedProducts, handleForPriceFilter }) => {
  return (
    <select
      className="dropdown-select"
      value={sortedProducts}
      onChange={(e) => handleForPriceFilter(e.target.value)}
    >
      {categoriesForPriceFilter.map((data) => {
        return (
          <option
            key={data.id}
            value={data.name}
            style={{ fontWeight: 600}}
          >
            {data.label}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;

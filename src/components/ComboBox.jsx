import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGlobalContext } from "../context";

const ComboBox = () => {
  const [searchTerms, setSearchTerms] = useState([]);

  const { products } = useGlobalContext();
  useEffect(() => {
    if (products) {
      const newSearchTerms = products.map((item) => {
        const { title, id } = item;
        return {
          label: title,
          id: id,
        };
      });

      setSearchTerms(newSearchTerms);
    }
  }, [products]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={searchTerms}
      style={{ width: 300 }}
      onChange={(e, value) => console.log(value.id)}
      renderInput={(params) => (
        <TextField {...params} label="Search...." variant="outlined" />
      )}
      //onChange={(value) => console.log(value.id)}
      // onChange={(e, value) => console.log(e.target, value.id)}
      //is all you need to get the id
    />
  );
};
export default ComboBox;

import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchTerm) {
          navigate(`/search/${searchTerm}`);
        }
      }}
      sx={{ borderRadius: "20px", pl: 2, boxShadow: "none", mr: { sm: 5 } }}
    >
      <input
        className="search-bar"
        placeholder="Search.."
        value={searchTerm}
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      ></input>
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants.js";
import { SearchBar } from "./common.js";
const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          padding: "8px 5px",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
      </Stack>
    </>
  );
};

export default Navbar;

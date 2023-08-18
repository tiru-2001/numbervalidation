import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((categ) => {
        return (
          <button
            onClick={() => {
              setselectedCategory(categ.name);
            }}
            className="category-btn"
            style={{
              background: categ.name === selectedCategory && "#FC1506",
              color: "white",
            }}
            key={categ.name}
          >
            <span
              style={{
                color: categ.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {categ.icon}
            </span>
            <span
              style={{ opacity: categ.name === selectedCategory ? "1" : "0.8" }}
            >
              {categ.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Nav = ({ setTxt }) => {
  return (
    <div className="Nav-main">
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <img src="Images/pickupbiz-logo.jpg" alt="" width={150} height={50} />
        </Grid>
        <Grid item xs={8}>
          <TextField
            sx={{ bgcolor: "white", borderRadius: "10px" }}
            onChange={(e) => setTxt(e.target.value)}
            variant="outlined"
            label="search"
            fullWidth
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            color="warning"
            variant="contained"
            style={{ height: "52px" }}
            fullWidth
          >
           <ShoppingCartOutlinedIcon sx={{ fontSize: "35px" }} />
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            color="warning"
            variant="contained"
            style={{ height: "52px" }}
            fullWidth
          >
            <AccountCircleSharpIcon sx={{ fontSize: "35px" }} />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nav;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardContent, Grid } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { Data } from "../Data/Data";
import Nav from "./Nav";
import { Home } from "./Home";

const Product = () => {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");
  const [data2, setData2] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:4545/products");
    setData(result.data);
    setData2(result.data);
  };

  useEffect(() => {
    const filed = data2.filter(
      (item) =>
        item.Brand.toUpperCase().includes(txt.toUpperCase()) ||
        item.model.toUpperCase().includes(txt.toUpperCase())
    );
    setData(filed);
  }, [txt]);

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div style={{ backgroundColor: "#F5F4F0" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Nav setTxt={setTxt} />
        </Grid>
        <Grid item xs={12} sx={{ position: "relative", top: "-10px" }}>
          <Home />
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={3}>
            <Card sx={{ margin: "10px" }}>
              <CardContent>
                <img src={item.img} width="250px" height="300px" alt="" />
                <h3> {item.Brand} </h3>
                <p> {item.model} </p>
                <span style={{ fontSize: "40px" }}> ₹ {item.price} </span>
                <span style={{ fontSize: "20px" }}>
                  {" "}
                  <del> {item.price} </del>{" "}
                </span>

                <br />
                {/* <p>{item.description.substr(0, 50) + "..."} </p> */}
                <br />

                <Button fullWidth variant="contained" color="warning">
                  Add to Cart
                </Button>
                <br />
                <br />
                <Button fullWidth variant="contained">
                  BUY
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;

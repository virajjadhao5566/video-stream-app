import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import "./styles/navbar.css"

const Navbar = () => (
  <Stack className="nav" direction="row" alignItems="center" p={1} sx={{ position: "sticky", top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <h1 style={{ color:"white" ,marginLeft:"3px"}}>Xtrim</h1>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

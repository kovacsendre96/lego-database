import { Grid, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <Grid container className="nav">
            <Link className="link" to={'/'}> <MenuItem>Készlet lista</MenuItem></Link>
            <Link className="link" to={'/missing-pieces'}> <MenuItem>Hiányzó elemek</MenuItem></Link>
        </Grid>
    );
};

export default Nav;
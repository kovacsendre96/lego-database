import { Grid } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <Grid container justifyContent={'center'}>
            <Grid className="lego-font margin-lg">
               {' Endre & Sanyi Lego sets'}
            </Grid>
        </Grid>
    );
};

export default Header;
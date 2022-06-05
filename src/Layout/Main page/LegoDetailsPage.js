import { Grid } from "@mui/material";
import React from "react";

const LegoDetailsPage = ({ legoData }) => {
    console.log(legoData);
    const { banner_picture, box_picture, id, missing_pieces, name, number_of_pieces, real_picture, year_released } = legoData
    return (
        <Grid container justifyContent={'space-around'}>
            <Grid item xs={10} md={4} className="img-border" container alignItems={'center'}>
                <img
                    src={banner_picture}
                    className="full-width"
                />
            </Grid>
            <Grid item xs={10} md={4} className="img-border" container alignItems={'center'}>
                <img
                    src={box_picture}
                    className="full-width"
                />
            </Grid>
            <Grid item xs={10} md={4} className="img-border" container alignItems={'center'}>
                <img
                    className="full-width"
                    src={real_picture}
                />
            </Grid>

            {id}
            {missing_pieces}
            {name}
            {number_of_pieces}
            {year_released}
        </Grid>

    );
};

export default LegoDetailsPage;
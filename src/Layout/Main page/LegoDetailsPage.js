import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "../../Helpers/Slider";
import DetailsPageBottomBox from "./DetailsPageBottomBox";

const LegoDetailsPage = ({ legoData }) => {
    const { banner_picture, box_picture, id, missing_pieces, name, number_of_pieces, real_picture, year_released, min_price, max_price } = legoData

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    })
    return (
        <Grid direction={'column'} container justifyContent={'center'} alignItems={'center'}>
            <p className="lego-font">{name}</p>
            <Grid container justifyContent={'center'}>
                <Grid item xs={11} md={8}>
                    <Slider
                        banner_picture={banner_picture}
                        box_picture={box_picture}
                        real_picture={real_picture}
                    />
                </Grid>
            </Grid>

            <DetailsPageBottomBox
                id={id}
                missing_pieces={missing_pieces}
                name={name}
                number_of_pieces={number_of_pieces}
                year_released={year_released}
                min_price={min_price}
                max_price={max_price}
            />
        </Grid>

    );
};

export default LegoDetailsPage;
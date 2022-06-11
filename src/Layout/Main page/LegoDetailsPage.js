import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "../../Helpers/Slider";
import NewDialog from "./AddNewSets/NewDialog";
import DetailsPageBottomBox from "./DetailsPageBottomBox";
import EditIcon from '@mui/icons-material/Edit';
import MissingPieces from "./MissingPieces/MissingPieces";

const LegoDetailsPage = ({ afterGetDatabase, legoData, setLegoData, index }) => {
    const { banner_picture, box_picture, id, missing_pieces, name, number_of_pieces, real_picture, year_released, min_price, max_price } = legoData

    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSnakcbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleButtonClick = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
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

            <NewDialog
                dialogType={'setDetailsDialog'}
                legoData={legoData}
                setLegoData={setLegoData}
                snackbarOpen={snackbarOpen}
                index={index}
                handleButtonClick={handleButtonClick}
                handleDialogClose={handleDialogClose}
                dialogOpen={dialogOpen}
                handleSnakcbarClose={handleSnakcbarClose}
                afterGetDatabase={afterGetDatabase}
            />
            <Grid container justifyContent={'center'} className="margin-md">
                <Button variant="contained"
                    startIcon={<EditIcon />}
                    children={'Szerkesztés'}
                    onClick={() => { setDialogOpen(true) }}
                    className="margin-sm"
                />
                <MissingPieces
                    legoData={legoData}
                    setLegoData={setLegoData}
                />
            </Grid>
        </Grid>

    );
};

export default LegoDetailsPage;
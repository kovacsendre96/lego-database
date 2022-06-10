import { Alert, Grid, Paper, Snackbar } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import AddNewSet from "./AddNewSets/AddNewSet";
import LegoList from "./LegoList";
import Sort from "./Sort";

const MainPage = ({ legoData, setLegoData, afterGetDatabase }) => {

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSnakcbarClose = () => {
        setSnackbarOpen(false);
    };
    console.log('main', legoData);
    return (
        <Grid container justifyContent={'center'}>
            {legoData.length > 0 &&
                <React.Fragment>
                    <Header />
                    <Grid container justifyContent={'space-around'} alignItems={'center'} component={Paper} className="margin-md">
                        <Sort
                            legoData={legoData}
                            setLegoData={setLegoData}
                        />
                        <AddNewSet
                            legoData={legoData}
                            setLegoData={setLegoData}
                            handleSnakcbarClose={handleSnakcbarClose}
                            snackbarOpen={snackbarOpen}
                            setSnackbarOpen={setSnackbarOpen}
                            afterGetDatabase={afterGetDatabase}
                        />
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <LegoList
                            legoData={legoData}
                        />
                    </Grid>
                    <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnakcbarClose}>
                        <Alert onClose={handleSnakcbarClose} severity="success" sx={{ width: '100%' }}>
                            Sikeres mentés
                        </Alert>
                    </Snackbar>
                </React.Fragment>
            }
        </Grid>
    );
};

export default MainPage;
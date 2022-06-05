import { Alert, Grid, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { sendData } from "../../Helpers/axios";
import AddNewSet from "./AddNewSets/AddNewSet";
import LegoList from "./LegoList";

const MainPage = () => {

    const [legoData, setLegoData] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        sendData('GET', 'https://lego-project-da06d-default-rtdb.firebaseio.com/.json', null, afterGetDatabase);
    }, []);

    const afterGetDatabase = (response) => {
        if (response.status === 200) {
            setLegoData(response.data)
        }
    };

    const handleSnakcbarClose = () => {
        setSnackbarOpen(false);
    }


    return (
        <Grid container justifyContent={'center'}>
            {
                legoData !== null &&
                <LegoList
                    legoData={legoData}
                />
            }
            <Grid container justifyContent={'center'}>
                <Grid item container justifyContent={'center'}>
                    <AddNewSet
                        legoData={legoData}
                        setLegoData={setLegoData}
                        handleSnakcbarClose={handleSnakcbarClose}
                        snackbarOpen={snackbarOpen}
                        setSnackbarOpen={setSnackbarOpen}
                    />
                </Grid>
            </Grid>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnakcbarClose}>
                <Alert onClose={handleSnakcbarClose} severity="success" sx={{ width: '100%' }}>
                    Sikeres mentés
                </Alert>
            </Snackbar>
        </Grid>
    );
};

export default MainPage;
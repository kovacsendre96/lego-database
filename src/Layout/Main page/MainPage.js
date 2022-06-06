import { Alert, Grid, Skeleton, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { sendData } from "../../Helpers/axios";
import Header from "../Header";
import AddNewSet from "./AddNewSets/AddNewSet";
import LegoList from "./LegoList";
import legoSpinner from './../../assets/Lego Spinner.gif';

const MainPage = () => {

    const [legoData, setLegoData] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const dataIsLoaded = legoData !== null;

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

    const renderSkeleton = () => {
        return (
            <img src={legoSpinner} alt="lego spinner" className="lego-spinner" width="250" />
        );
    }


    return (
        <Grid container justifyContent={'center'}>
            <Header />
            {
                dataIsLoaded ?
                    <LegoList
                        legoData={legoData}
                    />
                     :
                    renderSkeleton()
            }
            {dataIsLoaded &&
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
            }
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnakcbarClose}>
                <Alert onClose={handleSnakcbarClose} severity="success" sx={{ width: '100%' }}>
                    Sikeres mentés
                </Alert>
            </Snackbar>
        </Grid>
    );
};

export default MainPage;
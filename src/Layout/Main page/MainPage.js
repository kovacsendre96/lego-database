import { Alert, Grid, Paper, Snackbar } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header/Header";
import AddNewSet from "./AddNewSets/AddNewSet";
import LegoList from "./LegoList";
import Sort from "./Sort";
import Filter from "./Filter";

const MainPage = ({ legoData, setLegoData, afterGetDatabase }) => {

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnakcbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <Grid container justifyContent={'center'}>
      <React.Fragment>
        <Header />
        <Grid container justifyContent={'space-around'} alignItems={'center'} component={Paper} className="margin-md">
          <Grid item xs={12} container justifyContent={'center'} alignItems={'center'}>
            <Sort
              legoData={legoData}
              setLegoData={setLegoData}
            />
          </Grid>
          <Grid item xs={12} container justifyContent={'center'} alignItems={'center'}>
            <Filter
              legoData={legoData}
              setLegoData={setLegoData}
            />
          </Grid>
          <Grid item xs={12} container justifyContent={'space-around'} alignItems={'center'}>
            <AddNewSet
              legoData={legoData}
              setLegoData={setLegoData}
              handleSnakcbarClose={handleSnakcbarClose}
              snackbarOpen={snackbarOpen}
              setSnackbarOpen={setSnackbarOpen}
              afterGetDatabase={afterGetDatabase}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={'center'}>
          {legoData.length > 0 ?
            <LegoList
              legoData={legoData}
            />
            :
            'Nincs adat'

          }
        </Grid>
        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnakcbarClose}>
          <Alert onClose={handleSnakcbarClose} severity="success" sx={{ width: '100%' }}>
            Sikeres mentés
          </Alert>
        </Snackbar>
      </React.Fragment>

    </Grid>
  );
};

export default MainPage;

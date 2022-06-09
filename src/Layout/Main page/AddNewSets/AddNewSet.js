import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NewDialog from "./NewDialog.js";


const AddNewSet = ({ legoData, setLegoData, handleSnakcbarClose, snackbarOpen, setSnackbarOpen }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleButtonClick = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="contained"
                startIcon={<AddIcon />}
                children={'Új hozzáadás'}
                onClick={handleButtonClick}
                className="margin-sm"
            />
            <NewDialog
                handleButtonClick={handleButtonClick}
                handleDialogClose={handleDialogClose}
                dialogOpen={dialogOpen}
                legoData={legoData}
                setLegoData={setLegoData}
                handleSnakcbarClose={handleSnakcbarClose}
                snackbarOpen={snackbarOpen}
                setSnackbarOpen={setSnackbarOpen}
            />
        </React.Fragment>
    );
};

export default AddNewSet;
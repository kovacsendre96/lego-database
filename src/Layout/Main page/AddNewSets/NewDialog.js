import React from "react";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import DialogForm from "./DialogForm";

const NewDialog = ({ dialogOpen, handleDialogClose, legoData, setLegoData, handleSnakcbarClose, snackbarOpen,setSnackbarOpen}) => {

    return (
        <React.Fragment>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
            >
                <DialogTitle>
                    Új Lego készlet hozzáadása
                </DialogTitle>
                <DialogContent>
                    <DialogForm
                        handleDialogClose={handleDialogClose}
                        legoData={legoData}
                        setLegoData={setLegoData}
                        handleSnakcbarClose={handleSnakcbarClose}
                        snackbarOpen={snackbarOpen}
                        setSnackbarOpen={setSnackbarOpen}
                    />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default NewDialog;
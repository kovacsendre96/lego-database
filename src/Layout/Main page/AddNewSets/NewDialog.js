import React from "react";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import DialogForm from "./DialogForm";

const NewDialog = ({ afterGetDatabase, index, dialogOpen, handleDialogClose, legoData, setLegoData, handleSnakcbarClose, snackbarOpen, setSnackbarOpen, dialogType }) => {

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
                        dialogType={dialogType}
                        handleDialogClose={handleDialogClose}
                        legoData={legoData}
                        setLegoData={setLegoData}
                        handleSnakcbarClose={handleSnakcbarClose}
                        snackbarOpen={snackbarOpen}
                        setSnackbarOpen={setSnackbarOpen}
                        index={index}
                        afterGetDatabase={afterGetDatabase}
                    />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default NewDialog;
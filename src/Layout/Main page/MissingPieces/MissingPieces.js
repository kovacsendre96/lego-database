import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import PiecesTable from "./PiecesTable";
import ExtensionIcon from '@mui/icons-material/Extension';

const MissingPieces = ({ legoData, setLegoData }) => {

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

    return (
        <>
            <Button variant="contained"
                children={'Hiányzó elemek'}
                onClick={handleButtonClick}
                className="margin-sm"
                startIcon={<ExtensionIcon />}
            />
            <Dialog
                fullScreen
                open={dialogOpen}
                onClose={handleDialogClose}
            >
                <DialogTitle>
                    Hiányzó elemek
                </DialogTitle>
                <DialogContent>
                    <PiecesTable
                        legoData={legoData}
                        setLegoData={setLegoData}
                    />
                    <Button autoFocus onClick={handleDialogClose} variant="text">
                        Vissza
                    </Button>
                </DialogContent>

            </Dialog>
        </>
    );
};

export default MissingPieces;
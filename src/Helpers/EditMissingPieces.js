import { Grid, TableCell, TextField, Tooltip } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import { sendData } from "./axios";

const EditMissingPieces = ({ missingPiecesRow, setIsEditingState }) => {

    const { img, id, name, piece, color } = missingPiecesRow;

    const handleCancelClick = () => {
        setIsEditingState(null);
    };

    const handleDeleteClick = () => {
    /*     sendData('PUT', `https://lego-project-da06d-default-rtdb.firebaseio.com.json`, null, afterDeletedMissingPiece); */
        console.log(missingPiecesRow);
    };

    const afterDeletedMissingPiece = (response) => {
        console.log(response);
    };

    return (
        <Fragment>
            <TableCell align="left" key="1" component="th" scope="row">
                <TextField
                    value={img}
                />
            </TableCell>
            <TableCell key='2' align="left">
                <TextField
                    value={id}
                />
            </TableCell>

            <TableCell key='3' align="left">
                <TextField
                    value={name}
                />
            </TableCell>
            <TableCell key='4' align="left">
                <TextField
                    value={piece}
                />
            </TableCell>
            <TableCell key='5' align="left">
                <TextField
                    value={color}
                />
            </TableCell>
            <TableCell key='6' align="left">
                <Grid container justifyContent={'space-around'}>
                    <Tooltip title="Mentés" placement="top">
                        <SaveIcon className="main-blue-color pointer-cursor" />
                    </Tooltip>
                    <Tooltip title="Törlés" placement="top">
                        <DeleteIcon className="main-blue-color pointer-cursor" onClick={handleDeleteClick} />
                    </Tooltip>
                    <Tooltip title="Mégsem" placement="top">
                        <CancelIcon className="main-blue-color pointer-cursor" onClick={handleCancelClick} />
                    </Tooltip>
                </Grid>
            </TableCell>
        </Fragment>
    );
};

export default EditMissingPieces;
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import AddMissingPieces from "./AddMissingPieces";

const PiecesTable = ({ legoData, setLegoData }) => {

    const [missingPiecesList, setMissingPiecesList] = useState(Object.values(legoData.missing_pieces));

    return (
        <Grid container justifyContent={'center'}>
            <Grid item xs={12} component={Paper} className="margin-md">
                <AddMissingPieces
                    missingPiecesList={missingPiecesList}
                    setMissingPiecesList={setMissingPiecesList}
                    legoData={legoData}
                    setLegoData={setLegoData}
                />
            </Grid>
            <TableContainer component={Paper} className="margin-md">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" key={'head-cell-1'}>Kép</TableCell>
                            <TableCell align="left" key={'head-cell-2'}>Cikkszám</TableCell>
                            <TableCell align="left" key={'head-cell-3'}>Elem neve</TableCell>
                            <TableCell align="left" key={'head-cell-4'}>Darabszám</TableCell>
                            <TableCell align="left" key={'head-cell-5'}>Szín</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {missingPiecesList.length > 0 && missingPiecesList.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" key="1" component="th" scope="row">
                                    <img style={{ width: 75 }} src={row.img} alt={row.img} />
                                </TableCell>
                                <TableCell key='2' align="left">{row.id}</TableCell>
                                <TableCell key='3' align="left">{row.name}</TableCell>
                                <TableCell key='4' align="left">{row.piece}</TableCell>
                                <TableCell key='5' align="left">{row.color}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default PiecesTable;
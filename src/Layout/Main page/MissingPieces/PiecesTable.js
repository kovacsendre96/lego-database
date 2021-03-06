import React, { useState, useEffect, Fragment } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import AddMissingPieces from "./AddMissingPieces";
import EditIcon from '@mui/icons-material/Edit';
import EditMissingPieces from "../../../Helpers/EditMissingPieces";
import { Link } from "react-router-dom";

const PiecesTable = ({ legoData, setLegoData, from, listOfAllLegoSet }) => {
    const initialDefaultValue = from === 'missing-pieces-page' ? legoData : legoData.missing_pieces;
    const [missingPiecesList, setMissingPiecesList] = useState(Object.values(initialDefaultValue));
    const [isEditingState, setIsEditingState] = useState(null);

    const handleEditClick = (row, index) => {
        setIsEditingState(index);
    };

    const renderTableBody = (row, index) => {

        if (index === 0 && from !== 'missing-pieces-page') { return; }
        else {
            return (
                <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    {row.setName === undefined && row.setImg === undefined &&
                        <Fragment>
                            <TableCell key='0' align="left">{from !== 'missing-pieces-page' ? index : index + 1}</TableCell>
                            {isEditingState === index ?
                                <EditMissingPieces
                                    missingPiecesRow={row}
                                    setIsEditingState={setIsEditingState}
                                />
                                :
                                <Fragment>
                                    <TableCell align="left" key="1" component="th" scope="row">
                                        <img style={{ width: 75 }} src={row.img} alt={row.img} />
                                    </TableCell>
                                    <TableCell key='2' align="left">{row.id}</TableCell>
                                    <TableCell key='3' align="left">{row.name}</TableCell>
                                    <TableCell key='4' align="left">{row.piece}</TableCell>
                                    <TableCell key='5' align="left">{row.color}</TableCell>
                                </Fragment>
                            }
                   {/*          {index !== isEditingState &&
                                <TableCell key='6' align="left" >
                                    <EditIcon
                                        className="main-blue-color pointer-cursor"
                                        onClick={() => handleEditClick(row, index)}
                                    />
                                </TableCell>
                            } */}
                        </Fragment>
                    }
                    {row.setName && row.setImg && row.setId &&
                        <TableCell
                            colSpan={7}
                            key="6"
                            className="missing-piece-main-set"
                        >
                            <Link to={`/${row.setId}`} style={{ padding: 10, fontWeight: 'bold' }} className='link main-blue-color' >
                                <Grid container justifyContent={'space-evenly'} alignItems={'center'}>
                                    {row.setName}
                                    <img style={{ width: 75, maxHeight:55, objectFit:'contain' }} src={row.setImg} alt={row.setImg} />
                                    {row.setId}
                                </Grid>
                            </Link>
                        </TableCell>
                    }
                </TableRow>
            )
        }
    };
    return (
        <Grid container justifyContent={'center'}>
            <Grid item xs={12} component={Paper} className="margin-md">
                <AddMissingPieces
                    from={from}
                    missingPiecesList={missingPiecesList}
                    setMissingPiecesList={setMissingPiecesList}
                    legoData={legoData}
                    setLegoData={setLegoData}
                    listOfAllLegoSet={listOfAllLegoSet}
                />
            </Grid>
            {`${from === 'missing-pieces-page' ? missingPiecesList.length : missingPiecesList.length - 1} tal??lat`}
            <TableContainer component={Paper} className="margin-md">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" key={'head-cell-0'}>Sorsz??m</TableCell>
                            <TableCell align="left" key={'head-cell-1'}>K??p</TableCell>
                            <TableCell align="left" key={'head-cell-2'}>Cikksz??m</TableCell>
                            <TableCell align="left" key={'head-cell-3'}>Elem neve</TableCell>
                            <TableCell align="left" key={'head-cell-4'}>Darabsz??m</TableCell>
                            <TableCell align="left" key={'head-cell-5'}>Sz??n</TableCell>
                           {/*  <TableCell align="left" key={'head-cell-6'}>Szerkeszt??s</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {missingPiecesList.length > 0 && missingPiecesList.map((row, index) => renderTableBody(row, index))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default PiecesTable;
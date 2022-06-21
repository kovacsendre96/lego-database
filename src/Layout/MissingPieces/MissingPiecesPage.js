import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PiecesTable from "../Main page/MissingPieces/PiecesTable";

const MissingPiecesPage = ({ legoData, setLegoData }) => {
    const [allMissingPieces, setAllMissingPieces] = useState([]);
    let allMissingPiecesHelper;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        allMissingPiecesHelper = legoData.filter(data => data.missing_pieces.length !== 1);
        let helper = [];
        let helper_2 = [];
        let helper_3 = [];
        allMissingPiecesHelper.map(data => helper = [...helper, data.missing_pieces]);
        helper.map(data => helper_2 = [...helper_2, Object.values(data)]);
        helper_2.map(data =>
            data.map(data_2 =>
                helper_3 = [...helper_3, data_2]
            ))
        setAllMissingPieces(helper_3);
        setLoading(false)
    }, []);
    const filteredPieces = allMissingPieces.filter(data => !data.a);

    return (
        <Grid container justifyContent={'center'}>
            {!loading &&
                < PiecesTable
                    legoData={filteredPieces}
                    setLegoData={setLegoData}
                    from={'missing-pieces-page'}
                    listOfAllLegoSet={legoData}
                />}
        </Grid>
    );
};

export default MissingPiecesPage;
import { Box, Grid } from "@mui/material";
import React from "react";
import LegoCard from "./LegoCard";
import { Link } from 'react-router-dom';


const LegoList = ({ legoData }) => {
    return (
        legoData.map((data, index) => (
            <Grid item container xs={10} sm={5} md={3} key={index} justifyContent={'center'}>
                <Link className="link" to={`/lego-database/${data.id}`}>
                    <Box margin={'10px'} width={'100%'}>
                        <LegoCard
                            key={`card-${index}`}
                            legoData={data}
                        />
                    </Box>
                </Link>
            </Grid>
        ))
    );
};

export default LegoList;
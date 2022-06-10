import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LegoCard from "./LegoCard";
import { Link } from 'react-router-dom';


const LegoList = ({ legoData }) => {
  return (
    <React.Fragment>
      <Grid item xs={12} className="margin-sm">
        <Typography
          align="center"
          children={`${legoData.length} találat`}
        />
      </Grid>
      {
        legoData.map((data, index) => {
          return (
            <Grid item container xs={10} sm={6} md={4} key={index} justifyContent={'center'}>
              <Link className="link full-width margin-sm" to={`/lego-database/${data.id}`}>
                <LegoCard
                  key={`card-${index}`}
                  legoData={data}
                />
              </Link>
            </Grid>
          )
        })
      }
    </React.Fragment>
  );
};

export default LegoList;

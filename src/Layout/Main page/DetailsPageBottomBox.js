import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExtensionIcon from '@mui/icons-material/Extension';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TagIcon from '@mui/icons-material/Tag';

const DetailsPageBottomBox = ({ id, missing_pieces, name, number_of_pieces, year_released, min_price, max_price }) => {

    const legoDetailsArray = [
        {
            logo: <TagIcon className="details-icon" />,
            value: id,
            text: 'Cikkszám'
        },
        {
            logo: <LocalOfferIcon className="details-icon" />,
            value: name,
            text: 'Név'
        },
        {
            logo: <ExtensionIcon className="details-icon" />,
            value: number_of_pieces,
            text: 'Darabszám'
        },
        {
            logo: <DateRangeIcon className="details-icon" />,
            value: year_released,
            text: 'Megjelenés'
        }
    ]
    return (
        <Grid container justifyContent={'space-around'} className="detailsBoxWrapper">
            {legoDetailsArray.map((data, index) => {
                const hideLastElement = index + 1 === legoDetailsArray.length;
                return (
                    < Grid key={index} item xs={10} sm={6} md={2} container direction={'column'} alignItems={'center'} className="margin-sm details-box">
                        {data.logo}
                        <Typography
                            variant="h4"
                            children={
                                <p className="details-value">{data.value}</p>
                            }
                        />
                        <Typography
                            variant="subtitle1"
                            children={
                                <p className="details-text">{data.text}</p>
                            }
                        />
                        <hr className="full-width separator-horizontal" style={{ visibility: hideLastElement ? 'hidden' : 'visible' }} />
                        <hr className="full-width separator-vertical" style={{ display: hideLastElement ? 'none ' : 'block' }} />
                    </Grid>


                )
            }
            )}


        </Grid >
    );
};

export default DetailsPageBottomBox;
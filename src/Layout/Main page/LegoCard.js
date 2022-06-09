import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const LegoCard = ({ legoData }) => {
    const { banner_picture, name, id, year_released } = legoData;
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    style={{ objectFit: 'contain' }}
                    component="img"
                    height="140"
                    image={banner_picture}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        {name}
                        <div>
                            {`# ${id}`}
                        </div>

                        <div>
                            {year_released}
                        </div>

                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default LegoCard;


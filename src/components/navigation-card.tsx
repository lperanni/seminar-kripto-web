import {JSX} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";

interface Props {
    title: string,
    description: string,
    link: string
}

export const NavigationCard = ({title, description, link}: Props): JSX.Element => {
    return (
        <Card sx={{width: 500, margin: "20px"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={link}>Go</Link>
            </CardActions>
        </Card>
    );
}
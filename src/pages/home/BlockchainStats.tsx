import {Container, List, ListItem, ListItemText} from "@mui/material";
import {BlockchainInfo} from "../../types.ts";

interface Props {
    stats: BlockchainInfo
}

export const BlockchainStats = ({stats}: Props) => {

    const {
        blocks,
        difficulty,
        mediantime,
        bestblockhash,
        header,
        chain
    } = stats

    return (
        <Container fixed className="black-text container">
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                <ListItem key="height">
                    <ListItemText primary={`Height: ${blocks}`}/>
                </ListItem>
                <ListItem key="diff">
                    <ListItemText primary={`Difficulty: ${difficulty}`}/>
                </ListItem>
                <ListItem key="median">
                    <ListItemText primary={`Median Time: ${mediantime}`}/>
                </ListItem>
                <ListItem key="bbh">
                    <ListItemText primary={`Best block hash: ${bestblockhash}`}/>
                </ListItem>
                <ListItem key="header">
                    <ListItemText primary={`Header: ${header}`}/>
                </ListItem>
                <ListItem key="chain">
                    <ListItemText primary={`Chain: ${chain}`}/>
                </ListItem>
            </List>
        </Container>
    );
}
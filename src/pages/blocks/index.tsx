import {JSX, useEffect, useState} from "react";
import {BlockInfo} from "../../types.ts";
import {client} from "../../services/bitcoin-client.ts";
import {Button, Container, Grid, MenuItem, Select, TextField, Tooltip} from "@mui/material";
import {BlockDetailsCard} from "../../components/block-details-card.tsx";

enum SearchOption {
    HASH = 'HASH',
    HEIGHT = 'HEIGHT'
}

export const Blocks = (): JSX.Element => {

    const [selectedBlock, setSelectedBlock] = useState<BlockInfo>({});
    const [searchOption, setSearchOption] = useState(SearchOption.HEIGHT);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.getInfo();
            const block = await client.getBlockByHeight(data.blocks);
            setSelectedBlock(block);
        }

        fetchData();
    }, []);

    const search = async () => {
        try {
            if (SearchOption.HEIGHT === searchOption) {
                const searched = await client.getBlockByHeight(Number(searchTerm))
                await setSelectedBlock(searched);
                return;
            }

            const searched = await client.getBlockByHash(searchTerm);
            await setSelectedBlock(searched);

        } catch (e: Error) {
            alert('Error searching block, try again')
        }

    }

    return (
        <Container fixed className="black-text container" sx={{width: '1200px', bgcolor: 'background.paper'}}>
            <Grid container spacing={2} className="card-list">
                <Grid xs={7}>
                    <BlockDetailsCard block={selectedBlock}/>
                </Grid>
                <Grid xs={4}>
                    <Grid container spacing={0} className="card-list">
                        <Grid xs={11}>
                            <TextField id="outlined-basic" label="Search" variant="outlined"
                                       onChange={(e) => setSearchTerm(e.target.value as string)}/>
                        </Grid>
                        <Grid xs={1}>
                            <Tooltip title="Search by height or hash. Choose From Select">
                                ℹ️
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className="card-list">
                        <Grid xs={10}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={searchOption}
                                label="Age"
                                onChange={(e) => setSearchOption(e.target.value as SearchOption)}
                            >
                                <MenuItem value={SearchOption.HASH}>Hash</MenuItem>
                                <MenuItem value={SearchOption.HEIGHT}>Height</MenuItem>
                            </Select>
                        </Grid>
                        <Grid xs={2}>
                            <Button variant="outlined" onClick={search}>Go</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

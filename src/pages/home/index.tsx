import {NavigationCard} from "../../components/navigation-card.tsx";
import {BlockchainInfo, NavigationOptions} from "../../types.ts";
import {Grid} from "@mui/material";
import './index.css';
import {useEffect, useState} from "react";
import {client} from "../../services/bitcoin-client.ts";
import {BlockchainStats} from "./BlockchainStats.tsx";

const items: NavigationOptions[] = [
    {
        title: 'Blocks',
        description: 'Overview of the latest blocks. Allows for search of specific blocks',
        link: '/blocks'
    },
    {
        title: 'Transactions',
        description: 'Overview of the latest transactions. Allows for search of specific transactions',
        link: '/transactions'
    }
]
export const Home = () => {

    const [info, setInfo] = useState<BlockchainInfo>({})

    useEffect(() => {
        client.getInfo().then(setInfo)
    }, [])

    return (
        <>
            <h2>Blockchain Explorer</h2>

            <Grid container spacing={1} className="card-list">
                <Grid xs={12}>
                    <BlockchainStats stats={info}/>
                </Grid>
                <Grid xs={12}>
                    {items.map(({title, description, link}) => {
                        return (
                            <Grid xs={5}>
                                <NavigationCard title={title} description={description} link={link}/>
                            </Grid>);
                    })}
                </Grid>

            </Grid>
        </>
    );
}
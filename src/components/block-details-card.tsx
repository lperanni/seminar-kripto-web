import {JSX} from "react";
import {BlockInfo} from "../types.ts";
import {Card, CardContent, Typography} from "@mui/material";

interface Props {
    block: BlockInfo
}

export const BlockDetailsCard = ({block}: Props): JSX.Element => {

    const {
        hash,
        nonce, confirmations,
        merkleroot,
        size,
        weight,
        tx,
        height,
        chainwork,
        bits,
        time,
        version
    } = block;

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Block Details
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="text.primary">
                        Hash: {hash}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Height: {height}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Weight: {weight}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Size: {size}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Version: {version}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Nonce: {nonce}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <h4>Transactions</h4>
                        {tx && tx.map(t => {
                            return (
                                <>
                                    <hr/>
                                    <p>{t}</p>
                                </>
                            );
                        })}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
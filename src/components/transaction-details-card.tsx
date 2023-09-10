import {JSX} from "react";
import {BlockInfo, TransactionInfo} from "../types.ts";
import {Card, CardContent, Typography} from "@mui/material";

interface Props {
    transaction: TransactionInfo
}

export const TransactionDetailsCard = ({transaction}: Props): JSX.Element => {

    const {
        txid,
        hash,
        size,
        weight,
        fee
    } = transaction;

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Transaction Details
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="text.primary">
                        Hash: {hash}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Tx Id: {txid}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Weight: {weight}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Size: {size}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Fee: {fee}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
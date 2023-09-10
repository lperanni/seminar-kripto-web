import {JSX, useState} from "react";
import {TransactionInfo} from "../../types.ts";
import {client} from "../../services/bitcoin-client.ts";
import {Button, Container, Grid, TextField, Tooltip} from "@mui/material";
import {TransactionDetailsCard} from "../../components/transaction-details-card.tsx";

export const Transactions = (): JSX.Element => {
    const [selectedTransaction, setSelectedTransaction] = useState<TransactionInfo | undefined>();
    const [selectedTransactionFee, setSelectedTransactionFee] = useState<number | undefined>();
    const [searchTerm, setSearchTerm] = useState('');

    const search = async () => {
        try {
            const searched = await client.getTransactionById(searchTerm);
            await setSelectedTransaction(searched);
        } catch (e: Error) {
            alert('Error searching transaction, try again')
        }
    }

    return (
        <Container fixed className="black-text container" sx={{width: '1200px', bgcolor: 'background.paper'}}>
            <Grid container spacing={2} className="card-list">
                <Grid xs={7}>
                    { selectedTransaction && <TransactionDetailsCard transaction={selectedTransaction} />}
                </Grid>
                <Grid xs={4}>
                    <Grid container spacing={0} className="card-list">
                        <Grid xs={12}>
                            <TextField id="outlined-basic" label="Search" variant="outlined"
                                       onChange={(e) => setSearchTerm(e.target.value as string)}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className="card-list">
                        <Grid xs={12}>
                            <Button variant="outlined" onClick={search}>Go</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
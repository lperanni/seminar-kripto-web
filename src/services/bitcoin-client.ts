import axios from 'axios';
import {BitcoinClient} from "../types.ts";

const httpClient = axios.create({
    baseURL: 'http://localhost:3000'
});

export const client: BitcoinClient = {
    getBlockByHash: (hash: string) => httpClient.get(`/blocks/hash/${hash}`).then(({ data }) => data),
    getBlockByHeight: (height: number) => httpClient.get(`/blocks/height/${height}`).then(({ data }) => data),
    getTransactionById: (hash: string) => httpClient.get(`/transactions/${hash}`).then(({ data }) => data),
    getInfo: () => httpClient.get('/').then(({ data }) => data)
}

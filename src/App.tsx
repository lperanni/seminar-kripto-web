import './App.css'
import {Home} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Blocks} from "./pages/blocks";
import {Transactions} from "./pages/transactions";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/blocks" element={ <Blocks /> }/>
                <Route path="/transactions" element={ <Transactions /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App

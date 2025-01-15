import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./page/list.page";
import Detail from "./page/detail.page";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/spa/S00001" element={ <List /> } />
                <Route path="/spa/S00002" element={ <Detail /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
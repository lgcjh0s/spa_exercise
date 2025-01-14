import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./page/list.page";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/mpa/S00001" element={ <List /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
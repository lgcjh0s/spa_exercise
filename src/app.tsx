import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./page/list.page";
import Detail from "./page/detail.page";
import { Provider } from "jotai";

const App = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/spa/S00001" element={ <List /> } />
                    <Route path="/spa/S00002" element={ <Detail /> } />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
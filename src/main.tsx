import ReactDOM from 'react-dom/client';
import App from "./app";

const rootNode = document.getElementById('app') as HTMLElement;
ReactDOM.createRoot(rootNode).render(<App />);
import ReactDOM from 'react-dom/client';
import App from "./app";

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

ReactDOM.createRoot(rootNode).render(<App />);
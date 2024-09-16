import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import ContextProvider from "./context/UserContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>,
)

import { render } from "react-dom";
import App from "./routes/App";
import Home from './routes/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Mint" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
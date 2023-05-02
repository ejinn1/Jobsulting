import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/index.css";
import MainPage from "./pages/main";
import { JoinPage, LoginPage } from "pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import {
  MainPage,
  JoinPage,
  LoginPage,
  ProfilForm,
  JobPage,
  SelectPage,
} from "pages";
import Profil from "pages/profil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profilForm" element={<ProfilForm />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

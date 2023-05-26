import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import {
  MainPage,
  JoinPage,
  LoginPage,
  ProfilForm,
  JobPage,
  RecommendPage,
  ProfilPage,
  PostingPage,
  KakaoPage,
  ResultPage,
  TrendPage,
} from "pages";
import { Header } from "components";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedId, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [access_token, SetToken] = useState("");

  return (
    <BrowserRouter>
      <Header
        name={name}
        setName={setName}
        setEmail={setEmail}
        access_token={access_token}
        SetToken={SetToken}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<JoinPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/profilForm" element={<ProfilForm />} />
        <Route
          path="/profil"
          element={<ProfilPage name={name} email={email} />}
        />
        <Route path="/job" element={<JobPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/posting" element={<PostingPage />} />
        <Route
          path="/kakao"
          element={
            <KakaoPage
              setName={setName}
              setEmail={setEmail}
              SetToken={SetToken}
            />
          }
        />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/trend" element={<TrendPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

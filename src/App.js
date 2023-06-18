import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import {
  MainPage,
  JoinPage,
  ProfilForm,
  JobPage,
  RecommendPage,
  ProfilPage,
  PostingPage,
  KakaoPage,
  ResultPage,
  TrendPage,
  SearchPage,
  MiniConsultingPage,
} from "pages";
import { Header, ScrollToTop } from "components";

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [access_token, setToken] = useState("");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        setToken={setToken}
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
              setToken={setToken}
            />
          }
        />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/trend" element={<TrendPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/miniconsulting" element={<MiniConsultingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

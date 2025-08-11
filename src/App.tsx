import { Routes, Route, Navigate } from "react-router-dom";
import SigninPage from "./components/SigninPage";
import SignUpPage from "./components/SignUpPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<SigninPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

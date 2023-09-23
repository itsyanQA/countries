import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ThemeContextProvider from "./contexts/theme-context";
import CountryPage from "./pages/CountryPage/CountryPage";
import Header from "./components/Header/Header";
import CodedBy from "./components/CodedBy/CodedBy";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="country/:country" element={<CountryPage />} />
      </Routes>
      <CodedBy />
    </ThemeContextProvider>
  );
}

export default App;

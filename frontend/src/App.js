import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignSystem from "./pages/DesignSystem";
import Header from "./components/Header";

const App = () => {
  return (
    <StrictMode>
      <div className="font-Jost">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/ds" element={<DesignSystem />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));

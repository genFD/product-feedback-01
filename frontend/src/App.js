import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignSystem from "./pages/DesignSystem";
// import Header from "./components/Header";
import Home from "./pages/Home";
import FeedbackDetail from "./pages/FeedbackDetail";
import FeedbackEdit from "./pages/FeedbackEdit";
import FeedbackNew from "./pages/FeedbackNew";
import Roadmap from "./pages/Roadmap";
import { AppProvider } from "./context";

const App = () => {
  return (
    <StrictMode>
      <AppProvider>
        <div className="font-Jost">
          <BrowserRouter>
            {/* <Header /> */}
            <Routes>
              <Route path="/ds" element={<DesignSystem />} />
              <Route path="/" element={<Home />} />
              <Route path="/feedbackdetail" element={<FeedbackDetail />} />
              <Route path="/feedbackedit" element={<FeedbackEdit />} />
              <Route path="/feedbacknew" element={<FeedbackNew />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppProvider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));

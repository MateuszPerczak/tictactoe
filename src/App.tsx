import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import GlobalStyle from "./Global/Global";

const Main = lazy(() => import("./Pages/Main"));
const About = lazy(() => import("./Pages/About"));
const Play = lazy(() => import("./Pages/Play"));

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Play />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;

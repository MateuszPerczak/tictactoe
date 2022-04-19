import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Global, css } from "@emotion/react";

const MainPage = lazy(() => {
  return import("./Pages/MainPage");
});
const PlayPage = lazy(() => {
  return import("./Pages/PlayPage");
});
const AboutPage = lazy(() => {
  return import("./Pages/AboutPage");
});

const App = () => {
  return (
    <BrowserRouter>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: "Dongle", sans-serif;
            font-size: 1.5rem;
            color: #fff;
            background: #212121;
            overflow: hidden;
          }
          @font-face {
            font-family: "Segoe Fluent Icons";
            src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
          }
        `}
      />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
// import Loading from "./components/pages/Loading.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    {/* <Suspense fallback={<Loading />}> */}
      <App />
    {/* </Suspense> */}
  </StrictMode>
);
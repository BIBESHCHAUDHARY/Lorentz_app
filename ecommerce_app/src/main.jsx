import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "./index.css";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, Zoom } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          closeButton={true}
          transition={Zoom}
          limit={1}
        />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

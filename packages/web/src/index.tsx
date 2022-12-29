import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { AccountSettings } from "./pages/AccountSettings/AccountSettings";
import App from "./pages/App/App";
import { Login } from "./pages/Login/Login";
import { MainScreen } from "./pages/MainScreen/MainScreen";
import { RegisterUser } from "./pages/Register/Register";
import reportWebVitals from "./reportWebVitals";
import relayEnvironment from "./utils/relayEnvironment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/home" element={<MainScreen />} />
      <Route path="/conta" element={<AccountSettings />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

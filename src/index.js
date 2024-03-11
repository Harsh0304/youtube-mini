import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <div className="w-[95%] gap-5 mt-10 mx-auto flex">
        <Sidebar />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  </Provider>
);

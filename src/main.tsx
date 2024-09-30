import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./global.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./store";
import { Toaster } from "./components/ui";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
      <Toaster
        position="bottom-right"
        richColors
        expand={false}
        toastOptions={{}}
      />
    </PersistGate>
  </Provider>,
);

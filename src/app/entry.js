import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import App from "./app";
import "./assets/css/custom.css";
import "./assets/css/noty.css";
import "./assets/css/metroui.css";
import "./assets/css/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";


const onBeforeLift = () => {
};


const Entry = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift}>
                    <App />
                </PersistGate>
            </Provider>
        </React.StrictMode >
    );
}




export default Entry;

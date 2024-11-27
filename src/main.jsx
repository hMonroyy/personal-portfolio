import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";

import "./index.css";

import { I18nextProvider } from "react-i18next";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

import i18next from "i18next";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
        es: {
            global: global_es,
        },
        en: {
            global: global_en,
        },
    },
    ns: ["global"],
    defaultNS: "global"
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <NextUIProvider>
                <div className="dark text-foreground bg-background">
                    <App />
                </div>
            </NextUIProvider>
        </I18nextProvider>
    </React.StrictMode>
);
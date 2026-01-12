import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";
import WhatsAppFloat from "./components/WhatsappAppFloat";

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setLoaded(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <>
            {/* غير المحتوى اللي نديرولو animation */}
            <div className={`app ${loaded ? "is-loaded" : ""}`}>
                <MainPage />
            </div>

            {/* ✅ خارج app باش تبقى fixed مع الشاشة */}
            <WhatsAppFloat />
        </>
    );
}

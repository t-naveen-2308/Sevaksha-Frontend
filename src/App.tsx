import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import BrowserRouterProvider from "./BrowserRouterProvider";

function App() {
    const [currentToastId, setCurrentToastId] = useState<
        string | number | null
    >(null);

    const [toastStyle, setToastStyle] = useState<{
        backgroundColor: string;
        color: string;
    }>(
        { backgroundColor: "#ffffff", color: "#1f2937" }
    );
    

    return (
        <>
            <div>
                <ToastContainer toastStyle={toastStyle} position="top-center" />
                <BrowserRouterProvider />
            </div>
        </>
    );
}

export default App;

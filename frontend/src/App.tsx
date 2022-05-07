import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";
import Balance from "./pages/balance/Balance";
import Sign from "./pages/sign/Sign";

function App() {
    return (
        <SessionProvider>
            <div className="container mx-auto h-screen text-white App bg-primary">
                <BrowserRouter>
                    <Routes>
                        <Route path="/signin" element={<Sign isSignIn={true} />} />
                        <Route path="/signup" element={<Sign isSignIn={false} />} />
                        <Route path="/balance" element={<Balance />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </SessionProvider>
    );
}

export default App;

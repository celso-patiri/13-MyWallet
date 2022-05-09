import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";
import Balance from "./pages/balance/Balance";
import TransactionForm from "./pages/balance/TransactionForm";
import Sign from "./pages/sign/Sign";

function App() {
    return (
        <div className="container mx-auto h-screen text-white App bg-primary">
            <BrowserRouter>
                <SessionProvider>
                    <Routes>
                        <Route path="/" element={<Sign isSignIn={true} />} />
                        <Route path="/signin" element={<Sign isSignIn={true} />} />
                        <Route path="/signup" element={<Sign isSignIn={false} />} />
                        <Route path="/balance" element={<Balance />}></Route>
                        <Route path="income">
                            <Route
                                path="new"
                                element={<TransactionForm action="New" type="income" />}
                            />
                            <Route
                                path="update/:transactionId"
                                element={<TransactionForm action="Update" type="income" />}
                            />
                        </Route>
                        <Route path="expense">
                            <Route
                                path="new"
                                element={<TransactionForm action="New" type="expense" />}
                            />
                            <Route
                                path="update/:transactionId"
                                element={<TransactionForm action="Update" type="expense" />}
                            />
                        </Route>
                    </Routes>
                </SessionProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

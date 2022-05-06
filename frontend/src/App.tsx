import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";
import Sign from "./pages/sign/Sign";

function App() {
  return (
    <SessionProvider>
      <div className="App bg-primary container mx-auto h-screen text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Sign signIn={true} />} />
            <Route path="/signup" element={<Sign signIn={false} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </SessionProvider>
  );
}

export default App;

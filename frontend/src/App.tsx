import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Sign from "./pages/sign/Sign";

function App() {
  return (
    <UserProvider>
      <div className="App bg-primary container mx-auto h-screen text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Sign signIn={true} />} />
            <Route path="/signup" element={<Sign signIn={false} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;

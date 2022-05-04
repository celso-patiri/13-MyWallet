import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import SignIn from "./routes/signin/SignIn";
import SignUp from "./routes/signup/SignUp";

function App() {
  return (
    <UserProvider>
      <div className="App bg-primary container mx-auto h-screen text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;

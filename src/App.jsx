import {BrowserRouter, Routes, Route} from "react-router-dom";
// import UserSignInPage from "./pages/user-signin-page";
// import UserSignupPage from "./pages/user-signup-page";
import UserProfilePage from "./pages/user-profilepage.jsx";
import UserHomePage from "./pages/user-homepage.jsx";
import UserConnectionPage from "./pages/user-connectionpage.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserHomePage/>}/>
            <Route path="/connections" element={<UserConnectionPage/>}/>
            <Route path="/user" element={<UserProfilePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

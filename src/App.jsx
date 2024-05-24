import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserSignInPage from "./pages/user-signin-page";
import UserSignupPage from "./pages/user-signup-page";
import ArtisanSignUpPage from "./pages/artisan-signuppage";
import ArtisanSignInPage from "./pages/artisan-signinpage.jsx";
import UserHomePage from "./pages/user-homepage.jsx";
import UserConnectionPage from "./pages/user-connectionpage.jsx";
import SectionPage from "./pages/sectionpage.jsx";
import ArtisanProfilePage from "./pages/artisanprofilepage.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/sectionpage' element={<SectionPage/>}/>
            <Route path="/userhome" element={<UserHomePage/>}/>
            <Route path="/connections" element={<UserConnectionPage/>}/>
            <Route path="/artisansignup" element={<ArtisanSignUpPage/>}/>
            <Route path="/artisansignin" element={<ArtisanSignInPage/>}/>
            <Route path="/usersignup" element={<UserSignupPage/>}/>
            <Route path="/usersignin" element={<UserSignInPage/>}/>
            <Route path="/artisanprofile" element={<ArtisanProfilePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
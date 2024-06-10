import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserSignInPage from "./pages/client/user-signin-page";
import UserSignupPage from "./pages/client/user-signup-page";
import ArtisanSignUpPage from "./pages/artisan/artisan-signuppage";
import ArtisanSignInPage from "./pages/artisan/artisan-signinpage.jsx";
import UserHome from "./pages/client/user-homepage.jsx";
import UserContactsPage from "./pages/client/user-connectionpage.jsx";
import SectionPage from "./pages/client/sectionpage.jsx";
import ChatPage from "./pages/client/chatpage.jsx";
import UserProfilePage from "./pages/client/userprofilepage.jsx";
import AppointmentPage from "./pages/client/apointmentpage.jsx";
import TransactionPage from "./pages/client/transactionpage.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SectionPage/>}/>
            <Route path='/chat' element={<ChatPage/>}/>
            <Route path="/home" element={<UserHome/>}/>
            <Route path='/transactions' element={<TransactionPage/>}/>
            <Route path='appointments' element={<AppointmentPage/>}/>
            <Route path="/connections" element={<UserContactsPage/>}/>
            <Route path="/artisansignup" element={<ArtisanSignUpPage/>}/>
            <Route path="/artisansignin" element={<ArtisanSignInPage/>}/>
            <Route path="/usersignup" element={<UserSignupPage/>}/>
            <Route path="/usersignin" element={<UserSignInPage/>}/>
            <Route path="/userprofile" element={<UserProfilePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
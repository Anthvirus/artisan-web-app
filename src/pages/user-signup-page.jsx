import UserSignUpForm from '../components/user-signup';
import Header from "../components/Header";
import painter from "../assets/images/painter.jpg";

function UserSignupPage(){
    return(
        <>
               <div className="box-border max-w-[100vw]">
               <Header/>
               <div className="flex">
                    <img src={painter} className="hidden w-1/3 h-2/5 lg:flex"/>
                    <UserSignUpForm/>
                </div>
            </div>
        </>
    )
}

export default UserSignupPage;
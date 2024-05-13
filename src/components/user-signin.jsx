import Button from "./Button";
import InputBox from "./Input";

function UserSignInForm(){
    return(
      <>
        <div className="m-auto flex-1 min-h-full px-6 py-12 w-[40rem] lg:px-8 lg:-mt-[-10rem]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="w-auto h-10 mx-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
              Welcome Back
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <InputBox for="Email Address" Label="Email" type="email" name="email_address" id="email"/>
              </div>  
              <div>
                <InputBox for="Password" Label="Password" type="password" name="password" id="password"/>
              </div>
              <div className="text-md">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
              </div>
  
              <div>
                <Button type="submit" Text="Sign In"/>
              </div>
            </form>
  
            <p className="mt-10 text-lg text-center text-gray-500">
               Don't have an account?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Create an account.
              </a>
            </p>
          </div>
        </div>
      </>  
    )
}

export default UserSignInForm;
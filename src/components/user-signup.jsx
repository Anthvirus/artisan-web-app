import Button from "./Button";
import InputBox from "./Input";

function UserSignUpForm(){
    return (
        <div className="flex-1 min-h-full px-1 w-full lg:w-[40rem] m-auto py-12 lg:px-8 lg:-mt-[-10rem]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="w-auto h-10 mx-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
              Create Account
            </h2>
          </div>
          <div className="w-full mt-10 sm:mx-auto sm:max-w-sm">
            <form className="w-full space-y-6" action="#" method="POST">
                <div className="flex flex-col gap-5 lg:flex-row">
                <div>
                    <InputBox for="First Name" Label="First Name" type="text" name="first_name" id="firstName"/>
                </div>
                <div>
                    <InputBox for="Last Name" Label="Last Name" type="text" name="last_name" id="lastName"/>
                </div>
              </div>
              <div>
                <InputBox for="Email Address" Label="Email" type="email" name="email_address" id="email"/>
              </div>
              <div className="flex flex-col gap-5 lg:flex-row">
                <div>
                    <InputBox for="Password" Label="Password" type="password" name="password" id="password"/>
                </div>
                <div>
                    <InputBox for="Confirm Password" Label="Confirm Password" type="password" name="confirm_password" id="confrimPassword"/>
                </div>
              </div>
              <div>
                <Button type="submit" Text="Submit"/>
              </div>
            </form>
            <p className="mt-10 text-lg text-center text-gray-500">
               Already have an account?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign In.
              </a>
            </p>
          </div>
        </div>
    )
}

export default UserSignUpForm;
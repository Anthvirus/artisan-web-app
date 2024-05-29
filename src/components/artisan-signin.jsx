import { useState} from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import InputBox from "./Input";

function ArtisanSignInForm(){
    const [isValid, setValidity] = useState(true)
    const [input, updateInput] = useState({
        email: "",
        password:""
    })
    
    const password ="Me5#5nhg";
    const email = "maduneme002@gmail.com"
    
    function handleInput(event){
      const {name, value} = event.target;

      updateInput((prevValue)=> {return {
          ...prevValue,
          [name]: value
      }});
  }

  function submit(event){
    event.preventDefault()
    if(input.email !== email || input.password !== password){
        setValidity(false)
    }else if(input.email === email && input.password === password){
        setValidity(true)
    }
}
  
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
            <p className="hidden text-red-500 text-md" style={{display : isValid ? "none" : "flex"}}>Wrong Username or Password</p>
              <div>
                <InputBox for="Email Address" Label="Email" type="email" name="email_address" id="email" onChange={handleInput} value={input.value}/>
              </div>  
              <div>
                <InputBox for="Password" Label="Password" type="password" name="password" id="password" onChange={handleInput} value={input.value}/>
              </div>
              <div className="text-md">
                    <a href="#" className="font-semibold text-green-800 hover:text-green-600">
                      Forgot password?
                    </a>
              </div>
  
              <div className="flex justify-center">
                <Button type="submit" Text="Sign In" onClick={submit} style={{width: "10rem", height: "3rem" }}/>
              </div>
            </form>
  
            <p className="mt-10 text-lg text-center text-gray-500">
                Don't have an account?{' '}
              <Link to="/artisansignup" className="font-semibold leading-6 text-green-800 hover:text-green-600">
                Create an account.
              </Link>
            </p>
          </div>
        </div>
      </>  
    )
}

export default ArtisanSignInForm;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slices/userSlice';
import Button from './Button';
import InputBox from './Input';

function ArtisanSignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error, user } = useSelector((state) => state.user);

  function validate() {
    let valid = true;
    let errors = { email: '', password: '' };
    const regxEmail = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9]+)([.])([a-z]+)(.[a-z]+)?$/;

    if (!regxEmail.test(email)) {
      errors.email = 'Wrong Email Format';
      valid = false;
    }

    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      valid = false;
    }

    setErrors(errors);
    return valid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      dispatch(loginUser({ email, password }))
        .unwrap()
        .then(() => {
          navigate('/artisanhome');
        })
        .catch((err) => {
          console.error('Failed to login:', err);
        });
    }
  }

  return (
    <div className="m-auto flex-1 min-h-full px-6 py-12 w-[40rem] lg:px-8 lg:-mt-[-10rem]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          Welcome Back
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <InputBox
              for="Email Address"
              Label="Email"
              type="email"
              name="email_address"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <InputBox
              for="Password"
              Label="Password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>
          <div className="text-md">
            <a href="#" className="font-semibold text-green-800 hover:text-green-600">
              Forgot password?
            </a>
          </div>
          <div className="flex justify-center">
            <Button type="submit" text="Sign In" style={{ width: '10rem', height: '3rem' }} />
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
  );
}

export default ArtisanSignInForm;

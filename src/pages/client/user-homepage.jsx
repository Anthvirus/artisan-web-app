import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Services from '../../components/services.jsx';
import Notification from '../../components/notificationbox.jsx';
import Button from '../../components/Button.jsx';
import Popup from '../../components/popup.jsx';
import { Fragment } from 'react';
import { baseUrl } from '../../../constants/server.js';





const navigation = [
  { name: 'Home', to: '/home', current: true },
  { name: 'Connections', to: '/connections', current: false },
];

const userNavigation = [
  { name: 'Appointments', to: '/appointments' },
  { name: 'Transaction History', to: '/transactions' },
  { name: 'Your Profile', to: '/userprofile' },
  { name: 'Sign out', to: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function UserHome() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupTwo, setShowPopupTwo] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [user, setUser]= useState();


  const userId = localStorage.getItem('userId') // Get the userId from the Redux state

  const fetchUserBalance = async () => {
    try {
      const response = await fetch(`${baseUrl}/accounts/${userId}`);
      const data = await response.json();
      setBalance(data.balance);
    } catch (error) {
      console.error('Error fetching user balance:', error);
    }
  };
  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${baseUrl}/users/${userId}`);
        const data = await response.json();
        setUser(data);
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    const fetchUserBalance = async () => {
      try {
        const response = await fetch(`${baseUrl}/accounts/${userId}`);
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error('Error fetching user balance:', error);
      }
    };

    fetchUserData();
    fetchUserBalance();
  }, [userId]);



  const toggleDepositPopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleWithdrawalPopup = () => {
    setShowPopupTwo(!showPopupTwo);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleDeposit = async (e) => {
    e.preventDefault();
    if (userId && amount) {
      try {
        const response = await fetch(`${baseUrl}/accounts/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: userId, amount: parseFloat(amount) }),
        });
        
        fetchUserBalance();
        setShowPopup(false);
      } catch (error) {
        console.error('Error depositing money:', error);
      }
    }
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    if (userId && amount) {
      try {
        const response = await fetch(`${baseUrl}/accounts/withdraw`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: userId, amount: parseFloat(amount) }),
        });
        
        fetchUserBalance();
        setShowPopupTwo(false);
      } catch (error) {
        console.error('Error withdrawing money:', error);
      }
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Disclosure as="nav" className="h-24 pt-3 bg-green-800">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <h1 className="text-3xl font-extrabold text-white">Oga-Artisan</h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10 space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center ml-4 md:ml-6">
                      <button
                        type="button"
                        className="p-1 text-gray-400 bg-gray-200 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={toggleNotifications}
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={user.picture} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.to}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="relative z-10 md:hidden">
                <div className="px-2 pt-2 pb-3 mt-5 space-y-1 bg-gray-600 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={item.to}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 bg-gray-200 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="w-10 h-10 rounded-full" src={user.picture} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-900">{`${user.fname} ${user.lname}`}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      onClick={toggleNotifications}
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="px-2 mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        to={item.to}
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <header className="pt-3 bg-gray-200 shadow h-28">
          <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Hi, <span className="font-extrabold">{user.lname}</span>
            </h1>
            <div className="flex gap-2">
              <h1 className="flex items-end font-semibold text-gray-900 text-md">
                Account balance: <b className="text-4xl">{'$' + balance }</b>
              </h1>
              <Button
                type="button"
                text="+ Top Up"
                style={{ backgroundColor: 'inherit', color: 'green', boxShadow: 0 }}
                onClick={toggleDepositPopup}
              />
              <Button
                type="button"
                text="Withdraw"
                style={{ backgroundColor: 'lightgreen', color: 'Black', boxShadow: 0 }}
                onClick={toggleWithdrawalPopup}
              />
              <Popup show={showPopup} onClose={toggleDepositPopup}>
                <form className="h-40">
                  <label htmlFor="deposit-amount" className="block text-xl font-medium leading-6 text-gray-900">
                    Amount $:
                  </label>
                  <div className="mt-2">
                  <input
                      type="number"
                      name="deposit-amount"
                      id="deposit-amount"
                      placeholder="0.00"
                      value={amount} // Bind input value to state
                      onChange={handleAmountChange} // Update state on input change
                      className="block w-full h-16 px-2 py-3 text-4xl font-extrabold text-right text-gray-900 rounded-md shadow-sm placeholder:text-gray-600 ring-0 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600"
                    />
                  </div>
                  <Button style={{ marginTop: '1rem' }} text="Proceed to Payment Gateway" onClick={handleDeposit} />
                </form>
              </Popup>
              <Popup show={showPopupTwo} onClose={toggleWithdrawalPopup}>
                <form className="flex flex-col h-96 gap-y-2">
                  <label htmlFor="withdrawal-amount" className="block text-xl font-medium leading-6 text-gray-900">
                    Amount $:
                  </label>
                  <div className="">
                  <input
                      type="number"
                      name="withdraw-amount"
                      id="withdraw-amount"
                      placeholder="0.00"
                      value={amount} // Bind input value to state
                      onChange={handleAmountChange} // Update state on input change
                      className="block w-full h-16 px-2 py-3 text-4xl font-extrabold text-right text-gray-900 rounded-md shadow-sm placeholder:text-gray-600 ring-0 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600"
                    />
                  </div>
                  <label htmlFor="bank-selection" className="block mt-3 text-xl font-medium leading-6 text-gray-900">
                    Select Bank:
                  </label>
                  <div className="">
                    <select className="w-full h-12" id="bank-selection">
                      <option>-</option>
                      <option>Opay</option>
                      <option>Kuda</option>
                      <option>Access Bank</option>
                    </select>
                    <label
                      htmlFor="account-number"
                      className="block mt-4 mb-2 text-xl font-medium leading-6 text-gray-900"
                    >
                      Account Number:
                    </label>
                    <div className="">
                      <input
                        type="text"
                        id="account-number"
                        name="account-number"
                        className="block w-full h-12 px-4 text-2xl text-gray-900 rounded-md shadow-sm placeholder:text-gray-600 ring-0 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600"
                      />
                    </div>
                  </div>
                  <Button style={{ marginTop: '2rem' }} text="Submit" onClick={handleWithdraw} />
                </form>
              </Popup>
              <Popup show={showNotifications} onClose={toggleNotifications}>
                <h1 className="text-3xl font-semibold">Notifications</h1>
                <Notification
                  type="error"
                  message="Your Premium Subscription expires in 7 days, access to premium content would be denied if you don't renew."
                />
                <Notification
                  type="info"
                  message="Your Premium Subscription expires in 7 days, access to premium content would be denied if you don't renew."
                />
              </Popup>
            </div>
          </div>
        </header>
        <main>
          <div>
            <Services />
          </div>
        </main>
      </div>
    </>
  );
}

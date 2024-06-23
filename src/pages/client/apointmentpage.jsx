import { Link, useLocation } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import user from "../../components/user.js";
import Popup from "../../components/popup";
import Notification from "../../components/notificationbox";
import Button from "../../components/Button.jsx";
import AppointmentCard from "../../components/appointmentcard.jsx";
import { baseUrl } from "../../../constants/server.js";
import axios from "axios";

const navigation = [
  { name: "Home", to: "/home", current: false },
  { name: "Connections", to: "/connections", current: true },
];
const userNavigation = [
  { name: "Appointments", to: "/appointments" },
  { name: "Transaction History", to: "/transactions" },
  { name: "Your Profile", to: "/userprofile" },
  { name: "Sign out", to: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppointmentPage() {
  const { state } = useLocation();
  const artisanId = state?.artisanId;
  const artisanName = state?.artisanName;
  const [showNotifications, setShowNotifications] = useState(false);
  const [appointments, setAppointments] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState(artisanName);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [endDate, setEnd] = useState('');
  const [startDate, setStart] = useState('');
  

  const fetchAppointments = async () => {
    const clientId = localStorage.getItem('userId');
    try {
      const response = await axios.get(`${baseUrl}/appointments/client/${clientId}`);
      if (response.status === 200) {
        setTasks(response.data);
        console.log('Appointments fetched:', response.data);
      } else {
        console.error('Error fetching appointments:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

const openAppointmentCard = localStorage.getItem('openAppointmentCard')
  useEffect(() => {
    if (openAppointmentCard) {
      setAppointments(true);
      localStorage.removeItem('openAppointmentCard')
    }
    fetchAppointments();
  }, [state]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const submitAppointment = async (e) => {
    e.preventDefault();
    if (name.trim() !== '' && description.trim() !== '' && amount.trim() !== '' && startDate !== '' && endDate !== '') {
      const clientId = localStorage.getItem('userId');
      const appointmentData = {
        client_id: clientId,
        artisan_id: artisanId,
        start_date: startDate,
        end_date: endDate,
        amount: parseFloat(amount),
        description: description,
      };

      try {
        const response = await axios.post(`${baseUrl}/appointments`, appointmentData);
        if (response.status === 201) {
          console.log('Appointment created:', response.data);
          fetchAppointments(); // Refresh appointments after creation
          setAppointments(false);
        } else {
          console.error('Error creating appointment:', response.data.message);
        }
      } catch (error) {
        console.error('Error creating appointment:', error);
      }
    } else {
      console.error('All fields are required.');
    }
  };

  const createAppointment = () => {
    setAppointments(false);
    console.log(tasks);
  };

  const deleteAppointment = async (appointmentId) => {
    console.log('Deleting appointment:', appointmentId);
    try {
      const response = await axios.delete(`${baseUrl}/appointments/${appointmentId}`);
      if (response.status === 200) {
        console.log('Appointment deleted:', response.data);
        window.location.reload(); // Refresh appointments after deletion
      } else {
        console.error('Error deleting appointment:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-200">
        <Disclosure as="nav" className="h-24 pt-3 bg-green-800">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto py-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex-shrink-0">
                        <h1 className="text-3xl font-extrabold text-white">
                          Oga-Artisan
                        </h1>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10 space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
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
                        className="relative p-1 text-gray-400 bg-gray-200 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={toggleNotifications}
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon
                          className="w-6 h-6 invert"
                          aria-hidden="true"
                        />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="w-8 h-8 rounded-full"
                              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                              alt=""
                            />
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
                          <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.to}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
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
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
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
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 bg-gray-200 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="w-10 h-10 rounded-full"
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={toggleNotifications}
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="px-2 mt-3 space-y-1 bg-gray-200">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        to={item.to}
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-700 hover:text-white"
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
        <header className="relative pt-3 bg-gray-200 shadow h-28">
          <div className="flex justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-4xl tracking-tight text-gray-900">
              Appointments
            </h1>
            {/* <Button text="+ New Appointment" onClick={createAppointment} /> */}
          </div>
          <Popup show={showNotifications} onClose={toggleNotifications}>
            <h1 className="text-3xl font-semibold">Notifications</h1>
            <Notification
              type="warning"
              message="Your Premium Subcription expires in 7 days, acces to premium content would be denied if you don't renew."
            />
            <Notification
              type="warning"
              message="Your Premium Subcription expires in 7 days, acces to premium content would be denied if you don't renew."
            />
          </Popup>
          <Popup show={appointments} onClose={createAppointment}>
            <h1 className="text-3xl font-semibold">Create Appointment</h1>
            <form className="flex flex-col gap-4 my-4">
              <div className="flex flex-col items-start gap-2">
                <label className="text-lg">Name of Artisan:</label>
                <input
                  name="name"
                  type="text"
                  className="items-center w-full h-12 p-2 text-xl rounded-md"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="text-lg">
                  Describe the task the artisan is to do:
                </label>
                <textarea
                  name="description"
                  type="text"
                  className="items-center w-full h-24 p-2 text-xl rounded-md"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="flex my-2 gap-x-4">
                <div className="flex items-center justify-center gap-x-2">
                  <label className="text-xl">Start Date:</label>
                  <input
                    name="start_date"
                    type="date"
                    className="items-center h-12 p-2 text-xl rounded-md w-72"
                    required
                    onChange={(e) => setStart(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center gap-x-2">
                  <label className="text-xl">End Date:</label>
                  <input
                    name="end_date"
                    type="date"
                    className="items-center h-12 p-2 text-xl rounded-md w-72"
                    required
                    onChange={(e) => setEnd(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 my-2">
                <label className="text-xl">Amount Agreed $:</label>
                <input
                  name="amount"
                  type="text"
                  className="items-center h-12 p-2 text-xl rounded-md w-96"
                  required
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
              </div>
              <Button text="Submit Appointment" onClick={submitAppointment} />
            </form>
          </Popup>
        </header>
        <main>
          <div className="relative flex flex-col items-center py-6 mx-auto mt-2 bg-white max-w-7xl sm:px-6 lg:px-8 rounded-xl max-h-[40rem] overflow-y-auto">
            {tasks == "" ? (
              <p className="text-xl text-gray-500">No Appointments Available</p>
            ) : (
              tasks.map((task, id) => (
                <AppointmentCard
                  key={id}
                  artisanName={task.artisan_name}
                  amountAgreed={task.amount}
                  startDate={task.start_date}
                  endDate={task.end_date}
                  taskDescription={task.description}
                  delete={()=>{deleteAppointment(task._id)}}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}

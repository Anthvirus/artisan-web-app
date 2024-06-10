import Button from "./Button";
import { Link } from "react-router-dom";

const task= {
    artisanName : "Devine Rensh",
    taskDescription : "Installation of 12 ceiling fans",
    startDate : "-",
    endDate : "-",
    amountAgreed: '50'    
}

export default function AppointmentCard(){
    return (
        <>
    <div className="max-w-3xl p-3 mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="p-4">
        <div className="mb-2">
          <Link to="/" className="text-3xl font-extrabold text-gray-800">{task.artisanName}</Link>
          <p className="text-xl font-semibold gray-600 text-">{task.taskDescription}</p>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-xl">
            <span className="text-gray-600">Start Date:</span>
            <span className="text-gray-800">{task.startDate}</span>
          </div>
          <div className="flex justify-between text-xl">
            <span className="text-gray-600">End Date:</span>
            <span className="text-gray-800">{task.endDate}</span>
          </div>
        </div>
        <div className="flex justify-between mb-2 text-2xl">
          <span className="text-gray-600">Amount Agreed:</span>
          <span className="font-extrabold text-gray-800">${task.amountAgreed}</span>
        </div>
      </div>
      <Button text="Cancel Appointment"/>
    </div>
        </>
    )
}
import { Link, useNavigate } from "react-router-dom";

function ContactCard(props){
    return (
        <Link className="px-4 bg-gray-200 rounded-lg hover:cursor-pointer" to={'/chat'} state={{connection_id: props.id, receiver_id: props.receiver_id}} onClick={props.onClick}>
          <li key={props.id} className="flex justify-between py-5 gap-x-6">
            <div className="flex min-w-0 gap-x-4">
              <img className="flex-none w-12 h-12 rounded-full bg-gray-50" src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt="" />
              <div className="flex-auto min-w-0">
                <p className="mt-2 font-semibold leading-6 text-gray-900 text-md">{props.name}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="font-bold leading-6 text-gray-900 text-md">{props.service}</p>
              {props.available ? (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none p-1 rounded-full bg-emerald-500/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Available</p>
                </div>
              ) :  (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Unavailable
                </p>
              )}
            </div>
          </li>
        </Link>
    )
}

export default ContactCard;
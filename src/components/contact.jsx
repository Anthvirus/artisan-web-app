function ContactCard(props){
    return (
        <div className="px-4 bg-gray-100 rounded-lg">
          <li key={props.id} className="flex justify-between py-5 gap-x-6">
            <div className="flex min-w-0 gap-x-4">
              <img className="flex-none w-12 h-12 rounded-full bg-gray-50" src={props.imageUrl} alt="" />
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
        </div>
    )
}

export default ContactCard;
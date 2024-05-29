export default function FindArtisanComponent(props){
    
    // const { name, rating, service, availability, image } = artisan;
    return(
        <>
        <div className="flex max-w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl">
        <img className="object-cover h-48 rounded-xl w-72" src={props.image} alt={`${props.name} profile`} />
        <div className="flex items-center justify-between w-full px-6 py-4">
        <div className="mb-2 text-xl font-bold">{props.name}</div>
        <p className="text-base text-gray-700">{props.rating}</p>
        <p className="text-base text-gray-700">{props.service}</p>
        <p className={`text-base ${props.availability ? 'text-green-500' : 'text-red-500'}`}>
          {props.availability ? 'Available' : 'Unavailable'}
        </p>
        </div>
        </div>
    </>
    )
    
}


<<<<<<< HEAD
function Button(props){
    return(
        <button
        type={props.type}
        onClick={props.onClick}
        className="flex justify-center w-full px-3 py-5 text-lg font-semibold leading-6 text-white bg-green-800 rounded-md shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        {props.Text}
      </button>
    )
}

=======
function Button(props){
    return(
        <button
        type={props.type}
        className="flex justify-center w-full px-3 py-5 text-lg font-semibold leading-6 text-white bg-green-800 rounded-md shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        {props.Text}
      </button>
    )
}

>>>>>>> cd0267bafe6ebe88e1ac320589be7b6f6bc88d42
export default Button;
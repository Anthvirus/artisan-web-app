
function Button(props){
    return(
        <button
        style={props.style}
        type={props.type}
        onClick={props.onClick}
        className="flex items-center justify-center h-10 text-lg font-semibold leading-6 text-white bg-green-800 rounded-md shadow-sm w-36 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        {props.text}
      </button>
    )
}
export default Button;
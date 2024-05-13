function Button(props){
    return(
        <button
        type={props.type}
        className="flex justify-center w-full px-3 py-5 text-lg font-semibold leading-6 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.Text}
      </button>
    )
}

export default Button;
import ContactCard from "./contact.jsx";
import contacts from "./contact.js";

  
  function Connections(){
    function handleClick (){
        console.log(contacts.openedName)
    }
    return (
      <div>
         <ul role="list" className="flex flex-col gap-2 p-5 bg-gray-100 border divide-y divide-gray-100 rounded-xl">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} name={contact.name} available={contact.available} imageUrl={contact.imageUrl} service={contact.service} onClick={handleClick}/>
          ))}
        </ul>
      </div>
    )
  }
  
export default Connections;
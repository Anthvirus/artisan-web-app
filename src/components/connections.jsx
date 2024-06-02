import ContactCard from "./contact";
import contacts from "./artisan";

  
  function Connections(){
    var openedName = ""
    function handleClick (){
        openedName = contacts.id
        console.log(openedName)
    }
    return (
      <div>
         <ul role="list" className="flex flex-col gap-2 p-2 bg-gray-200 border divide-y divide-gray-100 rounded-xl">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} name={contact.name} available={contact.available} imageUrl={contact.imageUrl} service={contact.service} onClick={handleClick}/>
          ))}
        </ul>
      </div>
    )
  }
  
export default Connections;
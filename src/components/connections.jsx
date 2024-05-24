import ContactCard from "./contact";

const contacts = [
    {
      id: 1,
      name: 'Willie Alexander',
      service: 'Painter',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      available : false,
    },
    {
      id: 2,
      name: 'Leslie Alexander',
      service: 'Carpenter',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      available : true,
    },
  ]
  
  function Connections(){
    return (
      <div>
         <ul role="list" className="flex flex-col gap-2 p-2 bg-gray-200 border divide-y divide-gray-100 rounded-xl">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} name={contact.name} available={contact.available} imageUrl={contact.imageUrl} service={contact.service}/>
          ))}
        </ul>
      </div>
    )
  }
  
export default Connections;
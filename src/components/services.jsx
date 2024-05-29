import services from "./services";

function ServiceCard(){
    return (
      <div className="bg-white rounded-2xl">
        <div className="max-w-2xl px-4 py-6 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">What are you looking for?</h2>
  
          <div className="grid grid-cols-1 p-6 mt-6 rounded-2xl gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {services.map((service) => (
              <div key={service.id} className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={service.href} className='text-xl font-bold'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {service.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
export default ServiceCard;
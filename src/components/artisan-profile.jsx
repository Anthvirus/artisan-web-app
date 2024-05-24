import user from './user';

export default function ArtisanProfile(){
    return (
      <>
        <main className="relative flex items-start justify-start min-h-screen bg-gray-100 sm:py-32 lg:px-8">
          <div className="flex items-center gap-4 p-6 bg-gray-200 rounded-xl">
            <img className='rounded-full' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></img>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl">{user.firstName} {user.lastName}</h1>
            <div className="flex items-center justify-center mt-10 gap-x-6">
            </div>
          </div>
        </main>
      </>
    )
  }
  
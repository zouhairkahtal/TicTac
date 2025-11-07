export function Repair(){
    


    return(

<>

 <div className="w-full h-screen flex flex-col items-center justify-center bg-red-700 text-balck">
      <h1 className="text-3xl font-bold mb-3">🚧 Service Unavailable</h1>
      <p className="text-lg text-white text-center max-w-md mb-6">
        This service is currently experiencing some issues.  
        Our team is working to fix it. Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-5 text-red-700 py-2 bg-black hover:text-black border-black border hover:bg-red-700 rounded-lg transition"
      >
        Refresh
      </button>
    </div>

</>

    )
}
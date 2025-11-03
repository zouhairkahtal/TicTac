import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";



export  function Layout() {
  return (
    <div className="h-screen flex flex-col "
     >

      <header className="h-20 z-50 fixed">
        <Nav />
      </header>

 
      <main className="flex-1  flex items-center justify-center flex-col"
      
     >
        <Outlet />
      </main>
    </div>
  );
}

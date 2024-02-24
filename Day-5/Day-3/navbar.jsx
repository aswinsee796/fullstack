// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import{Link,useNavigate} from 'react-router-dom';
// // const navigate = useNavigate();

// export default function Navbar() {
//   const nav = useNavigate();
//   // const navigateToProfile=()=>{
//   //   navigate("/user/profile");
//   // }
//   return (
//     <div>

// <nav class="bg-gray-800">
//   <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//     <div class="relative flex h-16 items-center justify-between">
//       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
//         <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//           <span class="absolute -inset-0.5"></span>
//           <span class="sr-only">Open main menu</span>
       
//           <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
          
//           <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//       <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//         <div class="hidden sm:ml-6 sm:block">
//           <div class="flex space-x-4">
     
//             <a onClick={()=>nav('/user/homepage')} class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">CheckMate</a>
//             <a onClick={() => nav('/user/profile')} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Profile</a>
//             <a onClick={()=> nav('/user/course')} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Courses</a>
//             <a onClick ={()=> nav('/user/about')}class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
//           </div>
//         </div>
//       </div>
     
  
//       <div>
        
//       </div>
      
//     </div>
//   </div>


//   <div class="sm:hidden" id="mobile-menu">
//     <div class="space-y-1 px-2 pb-3 pt-2">
   
//       <a onClick={()=>nav('/user/home')} class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">CheckMate</a>
//       <a onClick={()=>nav('/user/profile')} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Profile</a>
//       <a onClick={()=>nav('/user/course')} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Courses</a>
//       <a onClick={()=>nav('/user/about')} class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
//     </div>
//   </div> 
//   <div>
    
//   </div>
// </nav>

//     </div>
//   );
// }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/images/profile-icon.jpg'
export default function Navbar() {
  const nav = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleProfileOptionClick = (path) => {
    nav(path);
    setIsProfileMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* ... Left side menu button ... */}

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a onClick={() => nav('/user/homepage')} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">CheckMate</a>
                  <a onClick={() => nav('/user/profile')} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Profile</a>
                  <a onClick={() => nav('/user/course')} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Courses</a>
                  <a onClick={() => nav('/user/about')} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                  <a onClick={() => nav('/user/contact')} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Profile Icon and Dropdown */}
              <div className="relative">
                <button
                  // src={bg}
                  alt="images"
                  onClick={handleProfileClick}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {/* <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  > */}
                    {/* ... Profile icon SVG path ... */}
                    <img class="w-10 h-10 rounded-full" style={{zIndex: 10}} src={bg} alt="Rounded avatar"></img>
                  {/* </svg> */}
                </button>

                {isProfileMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button
                        onClick={() => handleProfileOptionClick('/user/profile')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => handleProfileOptionClick('/user/homepage')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Home
                      </button>
                      <button
                        onClick={() => handleProfileOptionClick('/')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ... Mobile menu ... */}
      </nav>
    </div>
  );
}

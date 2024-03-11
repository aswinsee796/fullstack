import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function profile() {
    const nav = useNavigate();
  return (
    <div>
     <div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>

<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>

        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Ashwin
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    aswinsee769@gmail.com
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    7010866027
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 Main St<br/>
                     Anytown, USA 12345
                </dd>
            </div>
            <div>
            <div class="inline-flex items-center rounded-md shadow-sm">
    <button
        onClick={() => nav('/user/form')} 
        class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </span>
        <span class="hidden md:inline-block">Edit</span>
    </button>
    {/* <button
        class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </span>
        <span class="hidden md:inline-block">View</span>
    </button> */}
    <button
        class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </span>
        <span class="hidden md:inline-block">Delete</span>
    </button>
</div>
            </div>
        </dl>
    </div>
</div>
    </div>
  )
}
// import React, { useState } from 'react';

// export default function Profile() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [fullName, setFullName] = useState('John Doe');
//   const [email, setEmail] = useState('johndoe@example.com');
//   const [phoneNumber, setPhoneNumber] = useState('(123) 456-7890');
//   const [address, setAddress] = useState('123 Main St\nAnytown, USA 12345');

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Perform save functionality (e.g., update data on the server)
//     setIsEditing(false);
//     // Add additional logic to handle saving data
//   };

//   const handleCancelClick = () => {
//     // Reset the state to the original data when canceling the edit
//     setIsEditing(false);
//     // You may want to fetch data from the server again to get the latest data
//   };

//   return (
//     <div>
//       <div className="bg-white overflow-hidden shadow rounded-lg border">
//         <div className="px-4 py-5 sm:px-6">
//           <h3 className="text-lg leading-6 font-medium text-gray-900">
//             User Profile
//           </h3>
//           <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
//             <svg
//               className="absolute w-12 h-12 text-gray-400 -left-1"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </div>
//           <p className="mt-1 max-w-2xl text-sm text-gray-500">
//             This is some information about the user.
//           </p>
//         </div>
//         <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
//           <dl className="sm:divide-y sm:divide-gray-200">
//             {/* Full Name */}
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Full name</dt>
//               <dd className={`mt-1 text-sm ${isEditing ? 'hidden' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     className="border rounded-md p-2 w-full"
//                   />
//                 ) : (
//                   fullName
//                 )}
//               </dd>
//             </div>

//             {/* Email */}
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Email address</dt>
//               <dd className={`mt-1 text-sm ${isEditing ? 'hidden' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="border rounded-md p-2 w-full"
//                   />
//                 ) : (
//                   email
//                 )}
//               </dd>
//             </div>

//             {/* Phone Number */}
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Phone number</dt>
//               <dd className={`mt-1 text-sm ${isEditing ? 'hidden' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     className="border rounded-md p-2 w-full"
//                   />
//                 ) : (
//                   phoneNumber
//                 )}
//               </dd>
//             </div>

//             {/* Address */}
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Address</dt>
//               <dd className={`mt-1 text-sm ${isEditing ? 'hidden' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
//                 {isEditing ? (
//                   <textarea
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     className="border rounded-md p-2 w-full"
//                   ></textarea>
//                 ) : (
//                   address
//                 )}
//               </dd>
//             </div>

//             {/* Edit/Save/Cancel Buttons */}
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500"></dt>
//               <dd className={`mt-1 text-sm ${isEditing ? 'hidden' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
//                 {isEditing ? (
//                   <>
//                     <button
//                       onClick={handleSaveClick}
//                       className="bg-blue-500 text-white rounded-md px-3 py-1 mr-2"
//                     >
//                       Save
//                     </button>
//                     <button
//                       onClick={handleCancelClick}
//                       className="bg-gray-500 text-white rounded-md px-3 py-1"
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     onClick={handleEditClick}
//                     className="bg-gray-500 text-white rounded-md px-3 py-1"
//                   >
//                     Edit
//                   </button>
//                 )}
//               </dd>
//             </div>
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }

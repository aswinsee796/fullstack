// import React from 'react';
// import Button from '@mui/material/Button';
// // import Blog from './blog';
// // import backgroundImage from '../'
// // import './YourCSSFile.css'; // Import your CSS file if needed

// export default function Home() {
//   const containerStyle = {
//     backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/5ae9ee683c3a533bc6464594/1642542122778-MK5GW8BOSDB6V25KF3R0/Chess+pieces+on+a+beach+with+the+sun+setting+behind+them"})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh', // Adjust the height as needed
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white', // Text color on top of the background image
//   };

//   return (
//     <div style={containerStyle}>
//       <div className="content-container">
//         <h1>Welcome to Checkmate Academy</h1>
//         <Button variant="contained">Get Started</Button>
//       </div>
//       <div>
//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         {/* Blog Entry 1 */}
//         <div className="mb-10">
//           <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//             <div className="sm:flex">
//               <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
//                 <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
//               </div>
//               <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
//                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
//                   Studio by Preline
//                 </h3>
//                 <p className="mt-3 text-gray-600 dark:text-gray-400">
//                   Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
//                 </p>
//                 <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
//                   Read more
//                   <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         {/* Blog Entry 2 */}
//         <div className="mb-10">
//           <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//             <div className="sm:flex">
//               <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
//                 <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="Image Description"/>
//               </div>
//               <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
//                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
//                   Onsite
//                 </h3>
//                 <p className="mt-3 text-gray-600 dark:text-gray-400">
//                   Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
//                 </p>
//                 <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
//                   Read more
//                   <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         {/* Blog Entry 3 */}
//         <div className="mb-10">
//           <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//             <div className="sm:flex">
//               <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
//                 <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description"/>
//               </div>
//               <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
//                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
//                   The complete guide to OKRs
//                 </h3>
//                 <p className="mt-3 text-gray-600 dark:text-gray-400">
//                   How to make objectives and key results work for your company
//                 </p>
//                 <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
//                   Read more
//                   <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         {/* Blog Entry 4 */}
//         <div>
//           <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//             <div className="sm:flex">
//               <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
//                 <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
//               </div>
//               <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
//                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
//                   People program models
//                 </h3>
//                 <p className="mt-3 text-gray-600 dark:text-gray-400">
//                   Six approaches to bringing your People strategy to life
//                 </p>
//                 <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
//                   Read more
//                   <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>

//     </div>
    
  
  
//   );
// }
// import React from 'react';
// import Button from '@mui/material/Button';

// export default function Home() {
//   const containerStyle = {
//     backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/5ae9ee683c3a533bc6464594/1642542122778-MK5GW8BOSDB6V25KF3R0/Chess+pieces+on+a+beach+with+the+sun+setting+behind+them"})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//   };

//   const blogEntries = [
//     {
//       title: 'Studio by Preline',
//       image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//       content: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio',
//     },
//     {
//       title: 'Onsite',
//       image: 'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
//       content: 'Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval',
//     },
//     {
//       title: 'The complete guide to OKRs',
//       image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
//       content: 'How to make objectives and key results work for your company',
//     },
//     {
//       title: 'People program models',
//       image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//       content: 'Six approaches to bringing your People strategy to life',
//     },
//   ];

//   return (
//     <div>
//       <div style={containerStyle}>
//         <div className="content-container">
//           <h1>Welcome to Checkmate Academy</h1>
//           <Button variant="contained">Get Started</Button>
//         </div>
//       </div>

//       {/* Blog Entries */}
//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         {blogEntries.map((entry, index) => (
//           <div key={index} className="mb-10">
//             <a className="group rounded-xl overflow-hidden" href="#">
//               <div className="sm:flex">
//                 <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
//                   <img
//                     className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
//                     src={entry.image}
//                     alt="Image Description"
//                   />
//                 </div>
//                 <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
//                   <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
//                     {entry.title}
//                   </h3>
//                   <p className="mt-3 text-gray-600">{entry.content}</p>
//                   <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
//                     Read more
//                     <svg
//                       className="flex-shrink-0 size-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="m9 18 6-6-6-6" />
//                     </svg>
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useRef } from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/5ae9ee683c3a533bc6464594/1642542122778-MK5GW8BOSDB6V25KF3R0/Chess+pieces+on+a+beach+with+the+sun+setting+behind+them"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  const blogRef = useRef(null);

  const handleGetStartedClick = () => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const blogEntries = [
    {
      title: 'Studio by Preline',
      image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      content: 'Produce professional, reliable streams easily leveraging Preline\'s innovative broadcast studio',
    },
    {
      title: 'Onsite',
      image: 'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      content: 'Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval',
    },
    {
      title: 'The complete guide to OKRs',
      image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      content: 'How to make objectives and key results work for your company',
    },
    {
      title: 'People program models',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      content: 'Six approaches to bringing your People strategy to life',
    },
  ];

  return (
    <div>
      <div style={containerStyle}>
        <div className="content-container">
          <h1>Welcome to Checkmate Academy</h1>
          <Button variant="contained" onClick={handleGetStartedClick}>
            Get Started
          </Button>
        </div>
      </div>

      {/* Blog Entries */}
      <div ref={blogRef} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {blogEntries.map((entry, index) => (
          <div key={index} className="mb-10">
            <a className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                    src={entry.image}
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                    {entry.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{entry.content}</p>
                  <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                    Read more
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

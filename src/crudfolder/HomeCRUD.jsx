// import React from 'react'
// import { Link} from 'react-router-dom'
// const Home = () => {
//   return (
//     <div className="w-full h-[80%] bg-black text-white">
//       <ul className="flex w-[90%] justify-evenly items-center h-[80px] m-auto ">
//         <li>
//           <Link to="/users" className="text-2xl text-red-500 font-bold">
//             Users
//           </Link>
//         </li>
//         <li>
//           <Link to="/create-users" className="text-2xl text-red-500 font-bold">
//             Createusers
//           </Link>
//         </li>
//       </ul>
//       <nav></nav>
//     </div>
//   );
// }

// export default Home

import React from "react";
import { Link } from "react-router-dom";

const HomeCRUD = () => {
  return (
    <div className="w-full h-[80px] bg-black text-white">
      <ul className="flex w-[90%] justify-evenly items-center h-[80px] m-auto">
        <li>
          <Link to="/users" className="text-2xl text-red-500 font-bold">
            New Post
          </Link>
        </li>
        <li>
          <Link to="/create-users" className="text-2xl text-red-500 font-bold">
            Published
          </Link>
        </li>
      </ul>
      <nav></nav>
    </div>
  );
};

export default HomeCRUD;

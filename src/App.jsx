// import React from 'react'
// import './index.css'
// import Home from './crudfolder/Home'
// import { BrowserRouter } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import Users from './crudfolder/User';
// import Createuser from './crudfolder/Createuser'
// import EditUsers from './crudfolder/Edituser'
// const App = () => {
  // return (
//     <div>
//       <BrowserRouter>
//         <Home />
//         <Routes>
//           <Route path="/users" element={<Users />} />
//           <Route path="/create-users" element={<Createuser />} />
//           <Route path="/edit-user/:id" element={<EditUsers />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App



import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUsers from "./crudfolder/CreateUsers";
import EditUsers from "./crudfolder/EditUsers";
import HomeCRUD from "./crudfolder/HomeCRUD";
import Users from "./crudfolder/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeCRUD />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/create-users" element={<CreateUsers />} />
          <Route path="edit-user/:id" element={<EditUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
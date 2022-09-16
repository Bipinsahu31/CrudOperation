import React, { Fragment, useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import Pagination from "../Pagination";
import Axios from "./Axios";

const Users = () => {
  let [state, setState] = useState([]);
  let [currentPage, setcurrentPage] = useState(1);
  let [nextPage, setNextPage] = useState(8);
  let [search,setSearch]=useState("")

  useEffect(() => {
    try {
      let userData = async () => {
        let post = await Axios.get("/users");
        let postDetails = post.data;
        setState(postDetails);
      };
      userData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  let deleteHandle = async id => {
    await Axios.delete(`/users/${id}`);
    window.location.assign("/users");
  };
  let indexofLast = currentPage * nextPage
  let indexofFirst = indexofLast - nextPage
  let perPage = state.slice(indexofFirst, indexofLast)

  let paginate = (num) => { setcurrentPage(num) }
  
  return (
    // <div className="bg-gray-700 h-[100vh] w-full flex flex-wrap">
     
    
    <div className="bg-gray-700 h-[100vh] w-full flex flex-wrap ">
      <input type="text" value={search}
        placeholder="search"
        onChange={e => setSearch(e.target.value)}
        className="h-[30px] m-2 rounded-1g px-2 outline-none text-2xl" />
      <Pagination 
      pageData={nextPage}
        stateLength={state.length}
        paginate={paginate}
      />
      {perPage.filter(data =>{
        if(search ===""){
        return data;
        }else if (
    data.name.toLowerCase().includes(search.toLocaleLowerCase())
      ){
        return data;
        }
      }  )
      .map(postData => {
        return (
          <Fragment key={postData.id}>
            <div className="border-2 h-[200px] p-5 rounded-lg m-1 shadow-md shadow-yellow-500">
              <h1 className="text-2xl p-1 text-red-300 font-bold">
                Title {" "}
                <span className="text-white">{postData.title}</span>
              </h1>
              <h1 className="text-2xl p-1 text-red-300 font-bold">
                Discription :
                <span className="text-white">{postData.discription}</span>
              </h1>
              <Link
                to={`/edit-user/${postData.id}`}
                className="bg-blue-700 text-orange-400 p-2 font-semibold rounded-md mx-5"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteHandle(postData.id)}
                className="bg-blue-700 text-orange-400 p-2 font-semibold rounded-md mx-5"
              >
                Delete
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Users;


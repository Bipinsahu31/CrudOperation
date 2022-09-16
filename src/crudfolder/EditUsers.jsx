import React, { useEffect, useState } from "react";
import Axios from "./Axios";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  let [title, settitle] = useState("");
  let [discription, setdiscription] = useState("");
  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    async function postData() {
      let { data } = await Axios.get(`/users/${id}`);
      console.log(data);
      settitle(data.title);
      setdiscription(data.discription);
    }
    postData();
  }, );

  let submitHandler = async e => {
    e.preventDefault();
    // console.log({ ename, esalary, ecompany });
    let payLoad = { title, discription};
    await Axios.put(`/users/${id}`, payLoad);
    navigate("/users");
  };
  return (
    <section className="w-full h-[100vh] bg-slate-300 flex items-center ">
      <form
        className="w-[50%] m-auto h-[50vh] bg-cyan-500 text-center px-2 py-5 rounded-md"
        onSubmit={submitHandler}
      >
        <h1 className="text-3xl text-yellow-300 p-3">
        Create New Post
        </h1>
        <div>
          <label htmlFor="" className="font-bold text-black text-2xl">
            Title :
          </label>
          <input
            className="border-[1px] px-2 py-1 m-1 rounded-lg text-[20px] text-black outline-none"
            type="text"
            placeholder="Enter your Title"
            value={title}
            onChange={e => settitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="" className="font-bold text-black text-2xl">
            Discription :
          </label>
          <input
            className="border-[1px] px-2 py-1 m-1 rounded-lg text-[20px] text-black outline-none"
            type="text"
            placeholder="Enter your Discription"
            value={discription}
            onChange={e => setdiscription(e.target.value)}
          />
        </div>
        
        <button className="bg-gray-400 px-7 py-1 rounded-md text-blue-600 font-bold my-4">
          publish
        </button>
      </form>
    </section>
  );
};

export default EditUser;

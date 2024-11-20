import React from "react";
import logo from "../assets/bannerPics/Logo.svg";

function Account() {
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("Functionality is not yet included. Thanks for understanding!");
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto,1fr] max-w-[1360px] gap-y-10 gap-x-5 min-h-[650px] m-auto px-5 py-10">
      {/* Logo */}
      <h1 className="col-span-full text-center">
        <a href="/">
          <img src={logo} alt="Shopping" className="scale-150 mx-auto" />
        </a>
      </h1>

      {/* Sign Up Section */}
      <section className="p-8 border border-gray-300 rounded-lg bg-[#f7f7f7] shadow-md max-[500px]:w-full w-10/12 m-auto md:w-full">
        <h1 className="text-2xl font-bold text-center mb-5">Sign Up</h1>
        <form
          action="/Signup"
          onSubmit={HandleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <label htmlFor="name" className="w-full text-left font-medium">
            Username:
          </label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <label htmlFor="email" className="w-full text-left font-medium">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <label htmlFor="password" className="w-full text-left font-medium">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-itemBtnHover text-white font-medium rounded-md hover:bg-[#205e49] transition-colors"
          >
            Sign Up
          </button>
        </form>
        {/* Social Buttons */}
        <div className="mt-6">
          <button className="w-full py-3 mb-3 border border-gray-300 flex items-center justify-between  p-3 rounded-md hover:bg-gray-100">
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span className="text-[14px]"> Continue with Google</span>
          </button>
          <button className="w-full py-3 border border-gray-300 flex items-center justify-between  p-3 rounded-md hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook Logo"
              className="w-5 h-5"
            />
            <span className="text-[14px]">Continue with Facebook </span>
          </button>
        </div>
      </section>

      {/* Log In Section */}
      <section className="p-8 border border-gray-300 rounded-lg bg-[#f7f7f7] shadow-md">
        <h1 className="text-2xl font-bold  text-center  mb-5">Log In</h1>
        <form
          action="/Login"
          onSubmit={HandleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <label htmlFor="email" className="w-full text-left font-medium">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <label htmlFor="password" className="w-full text-left font-medium">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-itemBtnHover text-white font-medium rounded-md hover:bg-[#205e49] transition-colors"
          >
            Log In
          </button>
        </form>
        {/* Social Buttons */}
        <div className="mt-6">
          <button className="w-full py-3 mb-3 border border-gray-300 flex items-center justify-between p-3 rounded-md hover:bg-gray-100">
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span className="text-[14px]">Continue with Google</span>
          </button>
          <button className="w-full py-3 border border-gray-300 flex items-center justify-between  p-3 rounded-md hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook Logo"
              className="w-5 h-5"
            />
            <span className="text-[14px]">Continue with Facebook</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Account;

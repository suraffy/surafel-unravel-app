import React from "react";

const Login = (props) => {
  const { onSubmit } = props;

  return (
    <form className="space-y-4 md:space-y-6" action={onSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email/phone
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-blue-400"
          placeholder="name@company.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-blue-400"
          required=""
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500">
              Remember me
            </label>
          </div>
        </div>
        <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
          Forgot password?
        </span>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-600  hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign in
      </button>
      <p className="text-sm font-light text-gray-500">
        Don’t have an account yet?{" "}
        <span className="font-medium text-blue-600 hover:underline cursor-pointer">
          Sign up
        </span>
      </p>
    </form>
  );
};

export default Login;

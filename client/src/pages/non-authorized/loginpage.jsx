import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <header className="fixed z-10 w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 md:py-4 border-b border-b-[#e6ebf4]">
        <Link
          to="/"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Test Navbar
        </Link>
      </header>
      <div className="text-black relative flex flex-col justify-center items-center h-screen bg-Gray-100">
        <div className="absolute right-0 top-9">
          <svg
            width="33"
            height="117"
            viewBox="0 0 33 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3045 70.9206C24.1349 86.0908 30.8336 105.717 33 117V0C26.7558 0.22123 13.1561 7.58784 5.78469 20.0057C-4.34628 37.0721 -0.326584 57.1684 11.3045 70.9206Z"
              fill="#2F5FAC"
            />
          </svg>
        </div>
        <div className="absolute top-[270px] right-4">
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00977 4.5C9.00977 6.0121 7.59533 7.5 5.50977 7.5C3.4242 7.5 2.00977 6.0121 2.00977 4.5C2.00977 2.9879 3.4242 1.5 5.50977 1.5C7.59533 1.5 9.00977 2.9879 9.00977 4.5Z"
              stroke="#F47E20"
              stroke-width="3"
            />
          </svg>
        </div>
        <div className="absolute left-0 top-16">
          <svg
            width="16"
            height="31"
            viewBox="0 0 16 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="0.272194"
              cy="15.681"
              r="14.9192"
              transform="rotate(-75 0.272194 15.681)"
              fill="#C6D6EF"
            />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0">
          <svg
            width="29"
            height="108"
            viewBox="0 0 29 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.5414 56.8344C28.5414 25.3123 9.1873 5.91866 -0.489746 0.162109V107.552C9.1873 103.78 28.5414 88.3565 28.5414 56.8344Z"
              fill="#FBAA1C"
            />
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-7 w-[22rem] md:pt-20 md:w-[30rem] md:gap-8 ">
            <h1 className="text-[#22269E] text-3xl font-medium pb-2  md:text-4xl">
              Welcome back!
            </h1>
            <div className="container md:font-medium">
              <label>
                Email
                <p>
                  <input
                    type="email"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] outline-none block w-full p-3"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    required
                  />
                </p>
              </label>
            </div>
            <div className="container pb-2 md:font-medium">
              <label>
                Password
                <p>
                  {" "}
                  <input
                    type="password"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] outline-none block w-full p-3"
                    placeholder="Enter Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                  />
                </p>
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-Blue-500 font-medium rounded-xl text-sm w-full sm:w-auto px-4 py-4 text-center hover:bg-Blue-400"
            >
              Log in
            </button>
            <p className="pt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                target="_blank"
                className="font-semibold text-Blue-500 pl-3 hover:text-orange-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

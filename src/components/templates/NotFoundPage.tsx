import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-xl text-gray-400 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Not Found"
        className="w-64 h-64 mt-6"
      />
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

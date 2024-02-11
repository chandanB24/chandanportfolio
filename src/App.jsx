import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import { Triangle } from 'react-loader-spinner'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col justify-center items-center w-screen h-screen text-white">
          <Triangle
            visible={true}
              height="80"
              width="80"
              color="orange"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <h2 className="text-center text-3xl mt-3 font-pj text-orange-300">Welcome to Chandan's Development Mastery</h2>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default App;

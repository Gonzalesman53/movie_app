"use client";
import { useEffect } from "react";

function error({ error, reset }) {

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h2 className="">Something went wrong. Please try again</h2>
      <button onClick={() => reset()} className="hover:text-amber-600">Try Again</button>
    </div>
  );
}
export default error;

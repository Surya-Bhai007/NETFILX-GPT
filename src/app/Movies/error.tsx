"use client"; // Error components must be Client Components

import { useEffect } from "react";

 const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center mt-10" >
      <h2>Something went wrong!</h2>
      <button
      className="ml-3 bg-red-500 p-2"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};
export default Error;
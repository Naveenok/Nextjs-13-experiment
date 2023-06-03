"use client"; // Error components must be Client Components

import { useEffect } from "react";

interface Error {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Error) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong in parallel page 2!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            console.log("reset");
            reset();
          }
        }
      >
        Try again
      </button>
    </div>
  );
}

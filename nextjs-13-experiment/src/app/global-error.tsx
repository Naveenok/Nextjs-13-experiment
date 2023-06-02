"use client";

interface Error {
  error: Error;
  reset: () => void;
}

{
  /** This error will be displayed if something wrong happens in the root layout and template. This is for the entire application */
}
export default function GlobalError({ error, reset }: Error) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

"use client"

import React from "react";
import { useRouter } from "next/navigation";

const Client = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/posts");
      }}
    >
      Go to Posts
    </button>
  );
};

export default Client;

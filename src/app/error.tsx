"use client";

import React from "react";
import { Button, Card } from "@/components/ui";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Card>
        <div className="text-red-500 font-bold text-lg mb-4">
          Oops! Something went wrong
        </div>
        <div className="text-gray-700 text-base mb-4">{error.message}</div>
        <div className={"justify-around flex"}>
          <Button onClick={reset}>Try again</Button>
          <Button href={"/"} intent={"secondary"}>
            Homepage
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Error;

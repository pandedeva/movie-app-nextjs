import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image src="spinner.svg" alt="loading..." width={300} height={300} />
    </div>
  );
};

export default loading;

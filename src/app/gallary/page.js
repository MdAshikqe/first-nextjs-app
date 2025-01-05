import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Nextjs-Gallary",
  ddescription: "Generate by gallary",
};

const galaryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimaization</h1>
      <img
        className="mx-auto"
        src="https://i.ibb.co.com/b7cjxzf/nextapp.png"
        alt="img"
        width={500}
        height={500}
      />

      <h3 className="text-4xl text-center items-center p-2">Image Tag</h3>

      <Image
        className="mx-auto"
        width={500}
        height={500}
        src="https://i.ibb.co.com/b7cjxzf/nextapp.png"
        alt="next img"
      />
    </div>
  );
};

export default galaryPage;

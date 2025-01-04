import React from "react";

const dynamicPage = ({ params, searchParams }) => {
  console.log("daynamic", params);
  return (
    <div>
      <h1> wellcome to dynamic page {params.productId}</h1>
    </div>
  );
};

export default dynamicPage;

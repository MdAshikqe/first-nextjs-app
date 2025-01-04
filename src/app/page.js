import Counter from "@/components/counter";

const page = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-green-700 text-4xl text-center">
        My first next.js home page
      </h1>
      <h1 className="text-green-700 text-4xl text-center">
        React Server component
      </h1>
      <div>
        <Counter></Counter>
      </div>
    </div>
  );
};

export default page;

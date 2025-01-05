import Counter from "@/components/counter";
import ShoesCard from "@/components/UI/ShoesCard";
import Link from "next/link";

const page = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();
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
      <h1 className="text-yellow-500 text-4xl text-center">Latest Shoes</h1>
      <div className="flex gap-4 justify-center p-4">
        {shoes.slice(0, 3).map((shoe) => (
          <ShoesCard key={shoe.id} shoe={shoe}></ShoesCard>
        ))}
      </div>
      <div className="text-center">
        <Link href="/allProduct">
          <button className="btn btn-primary">See more Shoes</button>
        </Link>
      </div>
    </div>
  );
};

export default page;

import Image from 'next/image';
import React from 'react';

const ShoesCard = ({shoe}) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" width={500} height={500} alt='shoe img'></Image>
        </figure>
        <div className="card-body">
          <h5 className="card-title">{shoe.title}
          <div className="badge badge-secondary">{shoe.price}</div>
          </h5>
          <p>{shoe.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default ShoesCard;
import Header from "./Header";

const Cart = () => {    

  return (
    <div>
      <Header />
      {cart.map((item) => (
        <div key={item.id}>
          <div className="mt-10 ml-[600px] flex w-[600px]">
            <div className="mt-5 flex justify-center">
              <img
                className="mb-5 flex flex-row justify-center border-4 border-gray-400 rounded-xl h-40 w-40"
                src={item.url}
                width={40}
                alt={item.name}
              />
            </div>
            <div className="ml-5 mb-5 flex gap-2 justify-center items-center">
              <span className="text-green-600">
                {" "}
                {item.name} | {item.category}{" "}
              </span>
              {/* <button
                className="text-red-600"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button> */}
              <span> {item.quantity} </span>
              {/* <button
                className="text-green-700"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button> */}
              <span className="text-red-600">
                Rs. {item.price * item.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

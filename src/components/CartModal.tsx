"use client"

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 top-12 left-0 text-sm border border-gray-200 rounded-lg shadow-lg flex flex-col gap-6 z-20">
      {!cartItems ? (
        <span>Cart is Empthy</span>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <Image src="/rug.png" alt="rug" width={72} height={96} className="object-cover rounded-md" />
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex justify-between items-center gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <span className="p-1 bg-gray-50 rounded-sm">$49</span>
                </div>
                <div className="text-sm text-gray-500">
                  available
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src="/black-rug.jpg" alt="rug" width={72} height={96} className="object-cover rounded-md" />
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex justify-between items-center gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <span className="p-1 bg-gray-50 rounded-sm">$49</span>
                </div>
                <div className="text-sm text-gray-500">
                  available
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center font-semibold">
            <span className="">Subtotal</span>
            <span className="">$108</span>
          </div>
          <p className="text-gray-500 text-sm mt-2 mb-4">
          Handmade Moroccan Rug
          </p>
          <div className="flex justify-between items-center text-sm">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Cart</button>
            <button className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Checkout</button>
          </div>
        </div>
      </>
      )}
    </div>
  )
}

export default CartModal
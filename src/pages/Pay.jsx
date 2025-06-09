import React, { useState } from "react";

const Pay = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Processing payment of ₹${amount}`);
    // Here you can integrate payment API like Razorpay/Stripe/etc.
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-28 pb-16">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          PAY NOW
        </h2>
        <p className="text-center text-gray-600 mb-6">Enter Amount and Pay</p>

        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Amount (₹)
            </label>
            <input
              type="number"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Pay;

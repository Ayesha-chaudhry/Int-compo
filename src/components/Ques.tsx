import React from "react";

const Ques = () => {
  return (
    <div className="lg:flex">
      {/* Left Side */}
      <div className="w-[200%] lg:w-[50%] p-12">
        <div className="lg:flex flex-col gap-6">
          <h1 className="text-3xl lg:text-5xl w-1/2">Frequently Asked Questions</h1>
          <p className="text-xl lg:w-1/2">
            We have put togather some commonly asked question
          </p>
        </div>
        <button className="bg-[#714dff] text-white px-8 py-4 rounded-full mt-8">
          Contace Us
        </button>
      </div>
      {/* Right Side */}
      <div className=" w-[200%] lg:w-[50%]">
        <div className="p-5 shadow-md mt-14 m-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">
              What pricing plans do you offer for your SaaS product?
            </h1>
            <button className="shadow bg-[#714dff] text-white text-xl px-5 py-3 rounded-[100%]">
              -
            </button>
          </div>
          <p className="mt-8 lg:w-[750px]">
            We offer flexible pricing plans tailored to meet the needs of
            different businesses. Our pricing includes monthly and annual
            subscription options. You can find detailed information about each
            plan on our Pricing page.
          </p>
        </div>
        <div className="m-5 p-5 border rounded-3xl py-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">
            Does your SaaS product integrate with other tools we use?
          </h1>
          <button className="shadow text-[#714dff] bg-white text-xl px-5 py-3 rounded-[100%] border border-gray-100">
            +
          </button>
        </div>
        </div>
        <div className="m-5 p-5 border rounded-3xl py-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">
           Can I upgrade or downgrade my plan at any time?
          </h1>
          <button className="shadow text-[#714dff] bg-white text-xl px-5 py-3 rounded-[100%] border border-gray-100">
            +
          </button>
        </div>
        </div>
        <div className="m-5 p-5 border rounded-3xl py-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">
            Is there a free trial avilable?
          </h1>
          <button className="shadow text-[#714dff] bg-white text-xl px-5 py-3 rounded-[100%] border border-gray-100">
            +
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Ques;

import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-xl text-teal-800 text-center py-4 lg:pt-10 lg:text-3xl font-bold">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-800 py-3 text-center w-7/12 mx-auto ">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="w-10/12 mx-auto py-5 lg:py-10">
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="py-2 lg:py-7 flex justify-center items-center">
          <button className="lg:px-5 lg:py-3 p-2 rounded-full hover:border-2 bg-[#caeb66]  hover:border-[#caeb66]  hover:text-[#caeb66] hover:bg-white font-bold lg:font-extrabold text-black lg:mr-6">
            See more Faq's
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;

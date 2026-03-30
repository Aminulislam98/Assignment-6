import step1 from "../assets/stepPhoto/step1.png";
import step2 from "../assets/stepPhoto/step2.png";
import step3 from "../assets/stepPhoto/step3.png";
const Step = () => {
  return (
    <section className=" py-7 md:py-10 lg:py-25 px-2 md:px-4 bg-gray-50">
      <div className="max-w-7xl w-full mx-auto flex justify-center items-center flex-col md:space-y-8  space-y-4">
        {/* top section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-center font-bold lg:font-extrabold  text-2xl md:text-3xl lg:text-5xl lg:mb-4 mb-2">
            Get Started In 3 Steps
          </h1>
          <p className="font-normal text-sm md:text-base text-center">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* bottom section */}
        <div className=" mt-2 lg:mt-4 flex wrap flex-col sm:flex-row justify-between gap-4  items-stretch w-full">
          <div
            className="relative bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-3 md:hover:-translate-y-0.5 
        md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
       md:hover:border-purple-300 cursor-pointer"
          >
            {/* image section */}
            <div className="bg-purple-200 rounded-full p-2.5 md:p-5">
              <img
                className="lg:w-15 w-8  lg:h-15 h-8"
                src={step1}
                alt="step-1"
              />
            </div>
            <h3 className="font-bold text-base md:text-xl lg:text-2xl">
              Create Account
            </h3>
            <p className="font-normal text-sm  text-center ">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
            <div className="w-7 h-7 absolute top-3 right-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center text-white font-semibold text-sm ">
              <p>01</p>
            </div>
          </div>
          <div
            className="relative bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-3 cursor-pointer md:hover:-translate-y-0.5 
        md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
       md:hover:border-purple-300"
          >
            {/* image section */}
            <div className="bg-purple-200 rounded-full p-2.5 md:p-5">
              <img
                className="lg:w-15 w-8  lg:h-15 h-8"
                src={step2}
                alt="step-1"
              />
            </div>
            <h3 className="font-bold text-base md:text-xl lg:text-2xl">
              Choose Products
            </h3>
            <p className="font-normal text-sm text-center">
              Browse our catalog and select the tools <br />
              that fit your needs.
            </p>
            <div className="w-7 h-7 absolute top-3 right-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center text-white font-semibold text-sm ">
              <p>02</p>
            </div>
          </div>
          <div
            className="relative bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-3 md:hover:-translate-y-0.5 cursor-pointer 
        md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
       md:hover:border-purple-300"
          >
            {/* image section */}
            <div className="bg-purple-200 rounded-full p-2.5 md:p-5">
              <img
                className="lg:w-15 w-8  lg:h-15 h-8"
                src={step3}
                alt="step-1"
              />
            </div>
            <h3 className="font-bold text-base md:text-xl  lg:text-2xl">
              Start Creating
            </h3>
            <p className="font-normal text-sm  text-center">
              Download and start using your premium <br /> tools immediately.
            </p>
            <div className="w-7 h-7 absolute top-3 right-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center text-white font-semibold text-sm ">
              <p>03</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;

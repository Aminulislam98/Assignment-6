import step1 from "../assets/stepPhoto/step1.png";
import step2 from "../assets/stepPhoto/step2.png";
import step3 from "../assets/stepPhoto/step3.png";
const Step = () => {
  return (
    <section className="bg-pu py-15 lg:py-30 px-2 bg-gray-50">
      <div className="max-w-7xl w-full mx-auto flex justify-center items-center flex-col  space-y-4">
        {/* top section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-semibold lg:font-extrabold  text-2xl lg:text-5xl lg:mb-4 mb-2">
            Get Started In 3 Steps
          </h1>
          <p className="font-normal text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* bottom section */}
        <div className=" mt-2 lg:mt-4 flex wrap flex-col sm:flex-row justify-between gap-4  items-stretch w-full">
          <div className="relative bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-5 ">
            {/* image section */}
            <div className="bg-purple-200 rounded-full p-2.5 md:p-5">
              <img
                className="md:w-15 w-8  lg:h-15 h-8"
                src={step1}
                alt="step-1"
              />
            </div>
            <h3 className="font-bold text-base lg:text-2xl">Create Account</h3>
            <p className="font-normal text-sm  text-center">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
            <div className="w-7 h-7 absolute top-2 right-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center text-white font-semibold text-sm ">
              <p>01</p>
            </div>
          </div>
          <div className="relative bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-5">
            {/* image section */}
            <div className="bg-purple-200 rounded-full p-2.5 md:p-5">
              <img
                className="md:w-15 w-8  lg:h-15 h-8"
                src={step2}
                alt="step-1"
              />
            </div>
            <h3 className="font-bold text-base lg:text-2xl">Choose Products</h3>
            <p className="font-normal text-sm text-center">
              Browse our catalog and select the tools <br />
              that fit your needs.
            </p>
            <div className="w-7 h-7 absolute top-2 right-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center text-white font-semibold text-sm ">
              <p>02</p>
            </div>
          </div>
          <div className="relative bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-5">
            {/* image section */}
            <div className="bg-purple-200 rounded-full p-2.5 md:p-5">
              <img
                className="md:w-15 w-8  lg:h-15 h-8"
                src={step3}
                alt="step-1"
              />
            </div>
            <h3 className="font-bold text-base lg:text-2xl">Start Creating</h3>
            <p className="font-normal text-sm  text-center">
              Download and start using your premium <br /> tools immediately.
            </p>
            <div className="w-7 h-7 absolute top-2 right-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center text-white font-semibold text-sm ">
              <p>03</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;

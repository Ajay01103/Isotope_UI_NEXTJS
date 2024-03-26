import React from "react"

const HomePage = () => {
  return (
    <>
      <div>
        <section className="bg-[#F4FDFF] md:pb-24">
          <div className="w-4/5 mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="lg:w-4/5 text-center lg:text-left">
                <span className="badgePastelGradient rounded-2xl text-[#6A65FF] uppercase text-sm font-medium px-4 py-2 Inter">
                  Our Goal Is Simple
                </span>
                <h1 className="font-bold text-[#0E004A] md:text-5xl text-4xl md:leading-[130%]   pt-1 mt-2 Inter">
                  The All-In-One Calendar App For SaaS Founders
                </h1>
                <p className="font-base text-base md:text-lg text-[#453878] pt-2 mt-2  Inter">
                  Streamline your workflow with the all-in-one calendar and organization app for
                  founders. Get started with a free trial today, no credit card needed.
                </p>
                <div className="mt-3 pt-5">
                  <button
                    type="button"
                    className="text-white bg-[#6A65FF] shadow-none  focus:ring-4 text-base focus:ring-blue-300 font-medium rounded-3xl  px-7 py-3 mr-4 mb-2  focus:outline-none"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="">
                <img
                  src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1695361692/HeroImageTemplate4.png"
                  className="h-full 3xl:h-[90%] w-full object-contain ml-0 lg:ml-12 rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <div>
          <section className="w-full mt-8 pt-3">
            <div className="mx-auto w-4/5 pb-4 pt-2">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                <a
                  href="#"
                  className="flex justify-left items-center"
                >
                  <img
                    src="https://img.logoipsum.com/227.svg"
                    className="rounded-xl px-8 py-8"
                  />
                </a>
                <a
                  href="#"
                  className="flex justify-left items-center"
                >
                  <img
                    src="https://img.logoipsum.com/214.svg"
                    className="rounded-xl px-8 py-8"
                  />
                </a>
                <a
                  href="#"
                  className="flex justify-left items-center"
                >
                  <img
                    src="https://img.logoipsum.com/297.svg"
                    className="rounded-xl px-8 py-8"
                  />
                </a>
                <a
                  href="#"
                  className="flex justify-left items-center"
                >
                  <img
                    src="https://img.logoipsum.com/288.svg"
                    className="rounded-xl px-8 py-8"
                  />
                </a>
                <a
                  href="#"
                  className="flex justify-left items-center"
                >
                  <img
                    src="https://img.logoipsum.com/211.svg"
                    className="rounded-xl px-8 py-8"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="mb-24  bg-[#F4FDFF] ">
          <div className="w-4/5 md:w-2/3 mx-auto">
            <div className=" text-center pt-16 md:mt-14 w-4/5 mx-auto ">
              <span className="badgePastelGradient rounded-2xl text-[#6A65FF] uppercase text-sm font-medium px-4 py-2 Inter">
                FAQs
              </span>
              <h1 className="font-bold text-5xl text-[#0E004A] pt-4 mt-2 Inter">
                Frequently Asked Questions
              </h1>
              <p className="font-base text-lg text-[#453878] pt-5 mt-2 dark:text-slate-400 md:w-4/5 mx-auto md:pt-3  Inter">
                Streamline your workflow with the all-in-one calendar and organization app for
                founders. Get started with a free trial today, no credit card needed.
              </p>
            </div>
            <div className="mt-16 text-lg ">
              <div className="pb-12  grid grid-cols-1 gap-8 md:grid-cols-2">
                <details className="mx-1 h-fit bg-white shadow rounded-lg ">
                  <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-lg dark:text-gray-200 cursor-pointer">
                    <span className="undefined Inter">How do I get started?</span>
                  </summary>
                  <div>
                    <p className="text-[#453878] px-4 pb-6 text-base Inter">
                      {" "}
                      Simply check out our getting started guide for more info.
                    </p>
                  </div>
                </details>
                <details className="mx-1 h-fit bg-white shadow rounded-lg ">
                  <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-lg dark:text-gray-200 cursor-pointer">
                    <span className="undefined Inter">Do you offer discounts?</span>
                  </summary>
                  <div>
                    <p className="text-[#453878] px-4 pb-6 text-base Inter">
                      {" "}
                      Simply check out our getting started guide for more info.
                    </p>
                  </div>
                </details>
                <details className="mx-1 h-fit bg-white shadow rounded-lg ">
                  <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-lg dark:text-gray-200 cursor-pointer">
                    <span className="undefined Inter">What are the pricing plans?</span>
                  </summary>
                  <div>
                    <p className="text-[#453878] px-4 pb-6 text-base Inter">
                      {" "}
                      Simply check out our getting started guide for more info.
                    </p>
                  </div>
                </details>
                <details className="mx-1 h-fit bg-white shadow rounded-lg ">
                  <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-lg dark:text-gray-200 cursor-pointer">
                    <span className="undefined Inter">How do I get started?</span>
                  </summary>
                  <div>
                    <p className="text-[#453878] px-4 pb-6 text-base Inter">
                      {" "}
                      Simply check out our getting started guide for more info.
                    </p>
                  </div>
                </details>
                <details className="mx-1 h-fit bg-white shadow rounded-lg ">
                  <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-lg dark:text-gray-200 cursor-pointer">
                    <span className="undefined Inter">Do you offer discounts?</span>
                  </summary>
                  <div>
                    <p className="text-[#453878] px-4 pb-6 text-base Inter">
                      {" "}
                      Simply check out our getting started guide for more info.
                    </p>
                  </div>
                </details>
                <details className="mx-1 h-fit bg-white shadow rounded-lg ">
                  <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-lg dark:text-gray-200 cursor-pointer">
                    <span className="undefined Inter">What are the pricing plans?</span>
                  </summary>
                  <div>
                    <p className="text-[#453878] px-4 pb-6 text-base Inter">
                      {" "}
                      Simply check out our getting started guide for more info.
                    </p>
                  </div>
                </details>
                <details className="mx-1 h-fit bg-white shadow rounded-lg ">
                  <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-lg dark:text-gray-200 cursor-pointer">
                    <span className="undefined Inter">How do I get started?</span>
                  </summary>
                  <div>
                    <p className="text-[#453878] px-4 pb-6 text-base Inter">
                      {" "}
                      Simply check out our getting started guide for more info.
                    </p>
                  </div>
                </details>
                <details className="mx-1 h-fit bg-white shadow rounded-lg ">
                  <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-lg dark:text-gray-200 cursor-pointer">
                    <span className="undefined Inter">Do you offer discounts?</span>
                  </summary>
                  <div>
                    <p className="text-[#453878] px-4 pb-6 text-base Inter">
                      {" "}
                      Simply check out our getting started guide for more info.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
        <section className="md:py-8 mb-10 md:mb-24 bg-white">
          <div className="px-4 w-4/5 mx-auto ">
            <div className="mb-16 text-center w-4/5 mx-auto">
              <span className="badgePastelGradient rounded-2xl text-[#6A65FF]  text-sm font-medium px-4 py-2 uppercase Inter">
                Choose Plan
              </span>
              <h2 className="md:w-1/2 lg:text-5xl lg:leading-[54px] mx-auto text-4xl font-bold  pt-3 mt-2 text-[#0E004A] Inter">
                Choose a plan that works for you
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-12 md:mx-6">
              <div className="w-full mb-8 bg-[#F4FDFF]  rounded-2xl border  lg:mb-0">
                <div className="flex flex-col p-6 space-y-8 text-center items-center text-[#3CD856] py-12">
                  <div className="space-y-4 font-bold pt-4 mt-2 text-center">
                    <h4 className="text-xl text-[#0E004A] opacity-80 font-medium mb-4  Inter">
                      Starter
                    </h4>
                    <div className="opacity-4 text-[#0E004A]">
                      <span className="text-4xl Inter">$</span>
                      <span className="text-6xl Inter">17.00</span>
                    </div>
                    <p className="leading-relaxed font-normal text-base pt-3 mt-2 text-[#0D2531] opacity-70 Inter">
                      Per Month
                    </p>
                  </div>
                  <hr className="h-px w-full my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <ul className="flex-1 mx-auto space-y-3 ">
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium text-[#0E004A] Inter">Free Platform Access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium text-[#0E004A] Inter">Free Platform Access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium text-[#0E004A] Inter">
                        24/7 Customer Support
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="text-[#0E004A] shadow-none bg-white hover:drop-shadow-lg focus:ring-4 text-base border-2 border-solid border-[#0E004A]
                    focus:ring-blue-300 font-semibold rounded-xl px-12 py-3 mr-2 mb-2 dark:bg-purple-600 
                    dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-full mb-8 bg-[#6A65FF] rounded-2xl   lg:mb-0">
                <div className="flex flex-col p-6 space-y-8 text-center justify-center items-center  text-white py-12">
                  <div className="space-y-4 font-bold pt-4 mt-2">
                    <h4 className="text-xl text-white opacity-80 font-medium mb-4 Inter">Basic</h4>
                    <div className="opacity-4 text-white">
                      <span className="text-4xl Inter">$</span>
                      <span className="text-6xl Inter">45.00</span>
                    </div>
                    <p className="leading-relaxed font-normal text-base pt-3 mt-2 text-white opacity-70 Inter">
                      Per Month
                    </p>
                  </div>
                  <hr className="h-px w-full my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <ul className="flex-1 mx-auto space-y-3 ">
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium  Inter">Free Platform Access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium  Inter">Collaboration Tools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium  Inter">24/7 Customer Support</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="text-[#0E004A] shadow-none bg-white hover:drop-shadow-lg focus:ring-4 text-base border-2 border-solid border-[#0E004A]
                    focus:ring-blue-300 font-semibold rounded-xl px-12 py-3 mr-2 mb-2 dark:bg-purple-600 
                    dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-full mb-8 bg-[#F4FDFF]  rounded-2xl border  lg:mb-0">
                <div className="flex flex-col p-6 space-y-8 text-center items-center text-[#3CD856] py-12">
                  <div className="space-y-4 font-bold pt-4 mt-2 text-center">
                    <h4 className="text-xl text-[#0E004A] opacity-80 font-medium mb-4  Inter">
                      Premium
                    </h4>
                    <div className="opacity-4 text-[#0E004A]">
                      <span className="text-4xl Inter">$</span>
                      <span className="text-6xl Inter">230.00</span>
                    </div>
                    <p className="leading-relaxed font-normal text-base pt-3 mt-2 text-[#0D2531] opacity-70 Inter">
                      Per Month
                    </p>
                  </div>
                  <hr className="h-px w-full my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <ul className="flex-1 mx-auto space-y-3 ">
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium text-[#0E004A] Inter">Free Platform Access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium text-[#0E004A] Inter">Collaboration Tools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-medium text-[#0E004A] Inter">
                        24/7 Customer Support
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="text-[#0E004A] shadow-none bg-white hover:drop-shadow-lg focus:ring-4 text-base border-2
 border-solid border-[#0E004A]
 focus:ring-blue-300 font-semibold rounded-xl px-12 py-3 mr-2 mb-2 dark:bg-purple-600 
 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12 md:mt-24 mx-auto mb-24">
          <div className="w-4/5 mx-auto bg-[#6A65FF] bg-opacity-80 md:bg-opacity-100 rounded-[50px]">
            <div className="md:w-[70%] xl:w-1/2 mx-auto text-center py-20 mt-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-white Inter">
                Join our newsletter
              </h1>
              <p className="mb-8 mt-4 pt-3 text-white text-base md:text-lg font-normal w-4/5 mx-auto Inter">
                Subscribe to receive weekly tips and tricks in your inbox about time management and
                productivity.
              </p>
              <div className="flex justify-center items-center mb-4 w-full">
                <div className="relative md:w-full lg:w-4/5 mx-auto">
                  <div className="absolute top-4 left-3">
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                  </div>
                  <input
                    type="text"
                    className="h-16 w-full pl-4 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                    placeholder="Enter your email..."
                  />
                  <div className="md:absolute top-2 right-2">
                    <button className="h-12 w-full text-white rounded-lg bg-violet-700 mt-4 md:mt-0 md:bg-[#6A65FF] px-2 py-2">
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-white pt-4 text-sm md:text-base undefined">
                Unsubscribe any time
              </span>
            </div>
          </div>
        </section>
        <footer className="text-gray-800 mx-auto bg-[#0E004A] font-normal">
          <div className="w-5/6 mx-auto">
            <div className="py-12 mx-auto grid grid-cols-1 md:grid-cols-10">
              <div className=" text-center md:text-left md:col-span-4">
                <a className="flex  font-medium items-center md:justify-start justify-center">
                  <img
                    src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1695361043/CompanyLogoInverted.png"
                    className="object-contain object-center rounded-3xl w-36 h-10"
                  />
                </a>
                <nav className="list-none my-10 text-lg  md:text-sm 3xl:text-base flex flex-col space-y-4 md:space-y-6">
                  <li>
                    <a className="text-white hover:text-gray-100 cursor-pointer Inter">About</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-100 cursor-pointer Inter">Features</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-100 cursor-pointer Inter">Projects</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-100 cursor-pointer Inter">Contact</a>
                  </li>
                </nav>
              </div>
              <div className="md:col-span-6 md:grid md:grid-cols-3 grid-cols-1">
                <div className="px-4 text-center md:text-left my-6 md:my-2 lg:my-0">
                  <h2 className="font-semibold text-white text-xl md:text-base 3xl:text-lg mb-3 Inter">
                    About
                  </h2>
                  <nav className="list-none text-lg md:text-sm 3xl:text-base flex flex-col space-y-4 md:space-y-6 my-4 md:my-6 lg:my-10 ">
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">Company</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">FAQs</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">News</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">
                        Recent Updates
                      </a>
                    </li>
                  </nav>
                </div>
                <div className="px-4 text-center md:text-left my-6 md:my-2 lg:my-0">
                  <h2 className="font-semibold text-white text-xl md:text-base 3xl:text-lg mb-3 Inter">
                    Resources
                  </h2>
                  <nav className="list-none text-lg md:text-sm 3xl:text-base flex flex-col space-y-4 md:space-y-6 my-4 md:my-6 lg:my-10">
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">Courses</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">
                        Development Tutorials
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">Blog</a>
                    </li>
                  </nav>
                </div>
                <div className="px-4 text-center md:text-left my-6 md:my-2 lg:my-0">
                  <h2 className="font-semibold text-white text-xl md:text-base 3xl:text-lg mb-3 Inter">
                    Support
                  </h2>
                  <nav className="list-none text-lg md:text-sm 3xl:text-base flex flex-col space-y-4 md:space-y-6 my-4 md:my-6 lg:my-10">
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">
                        Project Updates
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-100 cursor-pointer Inter">
                        Privacy Policy
                      </a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div className="pt-2 pb-12 text-white md:text-sm 3xl:text-base">
              <div className="grid grid-cols-1 xl:grid-cols-2  ">
                <div className="flex flex-col items-center xl:items-start xl:flex-row space-x-0 xl:space-x-8">
                  <div className="flex flex-row flex-wrap space-x-10 lg:space-x-8 ">
                    <a
                      href="#"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="18"
                        height="18"
                        fill="#FFF"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="18"
                        height="18"
                        fill="#FFF"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="18"
                        height="18"
                        fill="#FFF"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="18"
                        height="18"
                        fill="#FFF"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </a>
                  </div>
                  <div
                    className="flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-4 text-center xl:text-left 
 mt-12 xl:mt-0"
                  >
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      className="xl:pl-0"
                    >
                      <span className="hover:underline focus-visible:underline Inter">
                        Privacy Policy
                      </span>
                    </a>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <span className="hover:underline focus-visible:underline Inter">
                        Terms &amp; Conditions
                      </span>
                    </a>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <span className="hover:underline focus-visible:underline Inter">Support</span>
                    </a>
                  </div>
                </div>
                <div className="text-center mt-12 md:mt-4 xl:mt-0 md:text-left xl:ml-auto flex justify-center md:items-end">
                  <span className="font-normal undefined">
                    © Copyright 2024. All Rights Reserved{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div></div>
      </div>
    </>
  )
}

export default HomePage

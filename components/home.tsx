import React from "react"

const HomePage = () => {
  return (
    <>
      <div>
        <section className="bg-[#F4FDFF] md:pb-24">
          <div className="w-4/5 mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="pt-8 md:pt-16 mt-4 md:mt-12 3xl:mt-36 lg:w-4/5 text-center lg:text-left">
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
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="sm:w-1/2 xl:w-2/3 mx-auto text-center mb-6">
                <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
                  Trusted by Open Source, enterprise, and more than 99,000 of you
                </h2>
              </div>

              <div className="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
                <a
                  className="flex-shrink-0 transition hover:-translate-y-1"
                  href="#"
                >
                  <svg
                    className="size-6 md:size-10 mx-auto sm:mx-0"
                    width="48"
                    height="55"
                    viewBox="0 0 48 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48 27.3522C48 24.1724 44.0179 21.159 37.9128 19.2902C39.3216 13.0677 38.6955 8.11699 35.9364 6.53199C35.3004 6.1602 34.5569 5.98409 33.7448 5.98409V8.16591C34.1949 8.16591 34.5569 8.25396 34.8602 8.42029C36.1908 9.18344 36.768 12.0893 36.318 15.8267C36.2104 16.7464 36.0342 17.715 35.819 18.7032C33.9013 18.2336 31.8076 17.8716 29.6062 17.6368C28.2854 15.8267 26.9156 14.183 25.5361 12.7448C28.7256 9.78026 31.7195 8.15612 33.7546 8.15612V5.9743C31.064 5.9743 27.5418 7.89196 23.9804 11.2185C20.4191 7.91152 16.8969 6.01344 14.2063 6.01344V8.19526C16.2316 8.19526 19.2352 9.80961 22.4248 12.7546C21.055 14.1928 19.6853 15.8267 18.384 17.6368C16.1729 17.8716 14.0791 18.2336 12.1614 18.713C11.9364 17.7346 11.7701 16.7856 11.6527 15.8756C11.1928 12.1382 11.7603 9.23236 13.0811 8.45942C13.3746 8.28331 13.7562 8.20504 14.2063 8.20504V6.02322C13.3844 6.02322 12.6408 6.19933 11.9951 6.57112C9.24582 8.15612 8.62943 13.097 10.0481 19.3C3.96249 21.1785 0 24.1822 0 27.3522C0 30.532 3.98206 33.5454 10.0872 35.4142C8.67835 41.6368 9.30453 46.5874 12.0636 48.1724C12.6996 48.5442 13.4431 48.7203 14.265 48.7203C16.9556 48.7203 20.4778 46.8027 24.0391 43.4761C27.6005 46.7831 31.1227 48.6812 33.8133 48.6812C34.6351 48.6812 35.3787 48.5051 36.0245 48.1333C38.7737 46.5483 39.3901 41.6074 37.9715 35.4044C44.0375 33.5357 48 30.5222 48 27.3522V27.3522ZM35.2613 20.8263C34.8993 22.0884 34.4492 23.3897 33.9405 24.691C33.5393 23.9083 33.1186 23.1255 32.6588 22.3428C32.2087 21.5601 31.7293 20.797 31.2499 20.0534C32.6392 20.2589 33.9796 20.5132 35.2613 20.8263ZM30.7803 31.2462C30.0171 32.567 29.2344 33.8194 28.4223 34.9837C26.9645 35.1109 25.4872 35.1794 24 35.1794C22.5226 35.1794 21.0453 35.1109 19.5972 34.9935C18.7852 33.8292 17.9927 32.5866 17.2295 31.2756C16.4859 29.9939 15.8108 28.6926 15.1945 27.3816C15.8011 26.0705 16.4859 24.7595 17.2197 23.4778C17.9829 22.1569 18.7656 20.9046 19.5777 19.7403C21.0355 19.6131 22.5128 19.5446 24 19.5446C25.4774 19.5446 26.9547 19.6131 28.4028 19.7305C29.2148 20.8948 30.0073 22.1374 30.7705 23.4484C31.5141 24.7301 32.1892 26.0314 32.8055 27.3424C32.1892 28.6535 31.5141 29.9645 30.7803 31.2462ZM33.9405 29.9743C34.4688 31.2854 34.9189 32.5964 35.2907 33.8683C34.009 34.1814 32.6588 34.4456 31.2597 34.651C31.7391 33.8977 32.2185 33.1247 32.6686 32.3322C33.1186 31.5495 33.5393 30.757 33.9405 29.9743ZM24.0196 40.4138C23.1097 39.4745 22.1998 38.4276 21.2996 37.2829C22.1802 37.322 23.0803 37.3514 23.9902 37.3514C24.9099 37.3514 25.8198 37.3318 26.7102 37.2829C25.8296 38.4276 24.9197 39.4745 24.0196 40.4138ZM16.7403 34.651C15.351 34.4456 14.0106 34.1912 12.7289 33.8781C13.0909 32.616 13.541 31.3147 14.0497 30.0134C14.4509 30.7962 14.8716 31.5789 15.3314 32.3616C15.7913 33.1443 16.2609 33.9074 16.7403 34.651ZM23.9707 14.2907C24.8806 15.2299 25.7905 16.2768 26.6906 17.4215C25.81 17.3824 24.9099 17.353 24 17.353C23.0803 17.353 22.1704 17.3726 21.2801 17.4215C22.1606 16.2768 23.0705 15.2299 23.9707 14.2907ZM16.7305 20.0534C16.2511 20.8068 15.7717 21.5797 15.3216 22.3722C14.8716 23.1549 14.4509 23.9376 14.0497 24.7203C13.5214 23.4093 13.0713 22.0982 12.6996 20.8263C13.9812 20.523 15.3314 20.2589 16.7305 20.0534V20.0534ZM7.87607 32.3029C4.41256 30.8255 2.17203 28.8883 2.17203 27.3522C2.17203 25.8161 4.41256 23.8691 7.87607 22.4015C8.71749 22.0395 9.63718 21.7167 10.5862 21.4134C11.1439 23.331 11.8777 25.3269 12.7876 27.3718C11.8875 29.4068 11.1635 31.393 10.6156 33.3008C9.64696 32.9975 8.72727 32.6649 7.87607 32.3029ZM13.1398 46.2841C11.8092 45.521 11.232 42.6152 11.682 38.8777C11.7896 37.958 11.9658 36.9894 12.181 36.0012C14.0987 36.4708 16.1924 36.8328 18.3938 37.0677C19.7146 38.8777 21.0844 40.5214 22.4639 41.9596C19.2744 44.9242 16.2805 46.5483 14.2454 46.5483C13.8051 46.5385 13.4333 46.4505 13.1398 46.2841V46.2841ZM36.3473 38.8288C36.8072 42.5662 36.2397 45.4721 34.9189 46.245C34.6254 46.4211 34.2438 46.4994 33.7937 46.4994C31.7684 46.4994 28.7648 44.885 25.5752 41.9401C26.945 40.5018 28.3147 38.8679 29.616 37.0579C31.8272 36.8231 33.9209 36.4611 35.8386 35.9816C36.0636 36.9698 36.2397 37.9189 36.3473 38.8288V38.8288ZM40.1141 32.3029C39.2727 32.6649 38.353 32.9878 37.404 33.2911C36.8463 31.3734 36.1125 29.3775 35.2026 27.3326C36.1027 25.2976 36.8267 23.3114 37.3746 21.4036C38.3433 21.7069 39.2629 22.0395 40.1239 22.4015C43.5874 23.8789 45.828 25.8161 45.828 27.3522C45.8182 28.8883 43.5777 30.8353 40.1141 32.3029V32.3029Z"
                      fill="#61DAFB"
                    />
                    <path
                      d="M23.9898 31.8234C26.4592 31.8234 28.4611 29.8216 28.4611 27.3522C28.4611 24.8828 26.4592 22.8809 23.9898 22.8809C21.5204 22.8809 19.5186 24.8828 19.5186 27.3522C19.5186 29.8216 21.5204 31.8234 23.9898 31.8234Z"
                      fill="#61DAFB"
                    />
                  </svg>
                </a>

                <a
                  className="flex-shrink-0 transition hover:-translate-y-1"
                  href="#"
                >
                  <svg
                    className="size-6 md:size-10 mx-auto sm:mx-0"
                    width="48"
                    height="42"
                    viewBox="0 0 48 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1306_13)">
                      <path
                        d="M38.3964 0H47.9955L23.9977 41.3961L0 0H18.3583L23.9977 9.5991L29.5172 0H38.3964Z"
                        fill="#41B883"
                      />
                      <path
                        d="M0 0L23.9977 41.3961L47.9955 0H38.3964L23.9977 24.8377L9.47911 0H0Z"
                        fill="#41B883"
                      />
                      <path
                        d="M9.479 0L23.9976 24.9576L38.3963 0H29.5171L23.9976 9.5991L18.3582 0H9.479Z"
                        fill="#35495E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1306_13">
                        <rect
                          width="48"
                          height="41.4336"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a
                  className="flex-shrink-0 transition hover:-translate-y-1"
                  href="#"
                >
                  <svg
                    className="size-6 md:size-10 mx-auto sm:mx-0"
                    width="48"
                    height="51"
                    viewBox="0 0 48 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1314_2)">
                      <path
                        d="M0.0193481 8.53515L23.6078 0.130676L47.8314 8.38572L43.9092 39.5943L23.6078 50.8377L3.62395 39.7437L0.0193481 8.53515Z"
                        fill="#E23237"
                      />
                      <path
                        d="M47.8314 8.38572L23.6078 0.130676V50.8377L43.9092 39.6131L47.8314 8.38572V8.38572Z"
                        fill="#B52E31"
                      />
                      <path
                        d="M23.6451 6.05121L8.94678 38.754L14.4376 38.6606L17.3886 31.2832H30.5742L33.8053 38.754L39.0533 38.8473L23.6451 6.05121ZM23.6826 16.5288L28.6505 26.9129H19.3121L23.6826 16.5288Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1314_2">
                        <rect
                          width="48"
                          height="50.9987"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a
                  className="flex-shrink-0 transition hover:-translate-y-1"
                  href="#"
                >
                  <svg
                    className="size-6 md:size-10 mx-auto sm:mx-0"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7298 40.1472C14.695 40.0857 14.6639 40.0221 14.6368 39.9568C14.4497 39.5235 14.3922 39.0453 14.4713 38.58H3.39139L19.8574 9.60244L25.2634 19.1057L26.8305 16.3324L22.1181 8.0309C21.8923 7.60574 21.5635 7.24396 21.1618 6.97863C20.7601 6.71331 20.2983 6.5529 19.8186 6.51208C19.3399 6.53384 18.877 6.68951 18.4824 6.96138C18.0878 7.23325 17.7774 7.6104 17.5865 8.04994L0.905195 37.3791C0.655848 37.7931 0.512082 38.2622 0.486543 38.7448C0.461003 39.2275 0.554474 39.7091 0.758732 40.1472C1.01527 40.5518 1.3799 40.8765 1.81137 41.0846C2.24285 41.2927 2.72396 41.3759 3.20026 41.3248H17.1721C16.6957 41.3766 16.2143 41.2938 15.7827 41.0856C15.351 40.8774 14.9865 40.5523 14.7305 40.1472H14.7298Z"
                      fill="#00C492"
                    />
                    <path
                      d="M46.852 37.3783L33.1438 13.2318C32.919 12.8021 32.5895 12.436 32.1858 12.1672C31.7821 11.8984 31.3173 11.7357 30.8341 11.6939C30.356 11.7146 29.8934 11.8693 29.499 12.1403C29.1046 12.4114 28.7943 12.7878 28.6035 13.2266L26.8306 16.3316L28.408 19.1056L30.8488 14.7843L44.4105 38.5793H39.2535C39.3194 38.9726 39.2823 39.3763 39.1459 39.751C39.1171 39.8338 39.0811 39.914 39.0382 39.9905L38.9943 40.0783C38.7141 40.474 38.3408 40.7946 37.9073 41.0118C37.4738 41.2289 36.9935 41.3359 36.5088 41.3233H44.576C45.0607 41.3363 45.5412 41.2295 45.9747 41.0123C46.4083 40.7951 46.7816 40.4743 47.0614 40.0783C47.2824 39.6537 47.3798 39.1756 47.3428 38.6984C47.3058 38.2211 47.1358 37.7638 46.852 37.3783V37.3783Z"
                      fill="#008776"
                    />
                    <path
                      d="M38.9949 40.0791L39.0389 39.9912C39.0815 39.9147 39.1173 39.8346 39.1458 39.7517C39.2823 39.377 39.3193 38.9734 39.2534 38.5801C39.1773 38.1559 39.025 37.749 38.8038 37.3791L28.4181 19.1057L26.8312 16.3324L25.2538 19.1057L14.8718 37.3791C14.6703 37.7534 14.5348 38.1597 14.4713 38.5801C14.3877 39.0442 14.4403 39.5226 14.6228 39.9575C14.6499 40.0228 14.681 40.0864 14.7159 40.1479C14.9725 40.5524 15.3372 40.8769 15.7686 41.0849C16.2001 41.2928 16.6811 41.3759 17.1574 41.3248H36.4941C36.9811 41.3392 37.4641 41.2331 37.9003 41.0159C38.3364 40.7987 38.7122 40.4772 38.9942 40.0798L38.9949 40.0791ZM26.8305 21.8797L36.3235 38.5793H17.3419L26.8305 21.8797Z"
                      fill="#2D4A5D"
                    />
                  </svg>
                </a>

                <a
                  className="flex-shrink-0 transition hover:-translate-y-1"
                  href="#"
                >
                  <svg
                    className="size-6 md:size-10 mx-auto sm:mx-0"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4295 0.0375632C22.3263 0.0469373 21.9982 0.0797466 21.703 0.103182C14.8927 0.717184 8.51362 4.39183 4.47339 10.0397C2.22361 13.18 0.784692 16.7422 0.240995 20.5153C0.0488258 21.8323 0.0253906 22.2213 0.0253906 24.0071C0.0253906 25.7929 0.0488258 26.1819 0.240995 27.4989C1.54399 36.5028 7.95118 44.0676 16.641 46.8705C18.1971 47.372 19.8375 47.7142 21.703 47.9204C22.4295 48.0001 25.5698 48.0001 26.2963 47.9204C29.5163 47.5642 32.2441 46.7674 34.9345 45.3941C35.3469 45.1832 35.4266 45.1269 35.3704 45.08C35.3329 45.0519 33.5752 42.6943 31.4661 39.8446L27.6321 34.6654L22.8279 27.5552C20.1844 23.6462 18.0096 20.4496 17.9908 20.4496C17.9721 20.4449 17.9533 23.604 17.944 27.4615C17.9299 34.2155 17.9252 34.4873 17.8408 34.6467C17.719 34.8764 17.6252 34.9701 17.4284 35.0732C17.2784 35.1482 17.1472 35.1623 16.4394 35.1623H15.6286L15.413 35.0263C15.2723 34.9373 15.1692 34.8201 15.0989 34.6842L15.0005 34.4733L15.0099 25.0757L15.0239 15.6735L15.1692 15.4907C15.2442 15.3923 15.4036 15.2658 15.5161 15.2048C15.7082 15.1111 15.7832 15.1017 16.5941 15.1017C17.5502 15.1017 17.7096 15.1392 17.958 15.4111C18.0283 15.4861 20.6296 19.4044 23.7418 24.1243C26.854 28.8441 31.1099 35.2888 33.2003 38.4526L36.9968 44.2036L37.189 44.077C38.8903 42.9709 40.6902 41.396 42.115 39.7556C45.1475 36.2731 47.102 32.0266 47.7582 27.4989C47.9504 26.1819 47.9738 25.7929 47.9738 24.0071C47.9738 22.2213 47.9504 21.8323 47.7582 20.5153C46.4552 11.5114 40.048 3.94656 31.3583 1.14371C29.8256 0.646879 28.1945 0.304725 26.3666 0.0984947C25.9166 0.0516243 22.8185 6.68575e-05 22.4295 0.0375632V0.0375632ZM32.2441 14.5393C32.4691 14.6518 32.6519 14.8674 32.7175 15.0923C32.755 15.2142 32.7644 17.8202 32.755 23.6931L32.7409 32.1204L31.2552 29.8425L29.7647 27.5646V21.4386C29.7647 17.478 29.7834 15.2517 29.8115 15.1439C29.8865 14.8814 30.0506 14.6752 30.2756 14.5533C30.4677 14.4549 30.538 14.4455 31.2739 14.4455C31.9676 14.4455 32.0894 14.4549 32.2441 14.5393V14.5393Z"
                      fill="currentColor"
                      className="fill-black dark:fill-white"
                    />
                    <path
                      d="M36.7627 44.3067C36.5986 44.4098 36.5471 44.4801 36.6924 44.4004C36.7955 44.3395 36.9642 44.2129 36.9361 44.2083C36.922 44.2083 36.8423 44.2551 36.7627 44.3067ZM36.4393 44.5176C36.3549 44.5832 36.3549 44.5879 36.458 44.5363C36.5142 44.5082 36.5611 44.4754 36.5611 44.466C36.5611 44.4285 36.5377 44.4379 36.4393 44.5176ZM36.2049 44.6582C36.1205 44.7238 36.1205 44.7285 36.2237 44.677C36.2799 44.6488 36.3268 44.616 36.3268 44.6067C36.3268 44.5692 36.3033 44.5785 36.2049 44.6582ZM35.9706 44.7988C35.8862 44.8644 35.8862 44.8691 35.9893 44.8176C36.0455 44.7894 36.0924 44.7566 36.0924 44.7473C36.0924 44.7098 36.069 44.7191 35.9706 44.7988ZM35.6143 44.9863C35.4362 45.08 35.4456 45.1175 35.6237 45.0285C35.7034 44.9863 35.7643 44.9441 35.7643 44.9347C35.7643 44.9019 35.7596 44.9066 35.6143 44.9863Z"
                      fill="currentColor"
                      className="fill-black dark:fill-white"
                    />
                  </svg>
                </a>

                <a
                  className="flex-shrink-0 transition hover:-translate-y-1"
                  href="#"
                >
                  <svg
                    className="size-6 md:size-10 mx-auto sm:mx-0"
                    width="48"
                    height="50"
                    viewBox="0 0 48 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1314_6)">
                      <path
                        d="M47.8876 11.3229C47.9054 11.3887 47.9145 11.4565 47.9146 11.5246V22.1123C47.9146 22.2481 47.8788 22.3816 47.8107 22.4992C47.7425 22.6168 47.6446 22.7143 47.5267 22.7819L38.6403 27.8982V38.0391C38.6403 38.3151 38.4936 38.5698 38.2543 38.7088L19.7047 49.3871C19.6622 49.4113 19.6159 49.4267 19.5696 49.4431C19.5522 49.4489 19.5358 49.4595 19.5175 49.4643C19.3878 49.4985 19.2515 49.4985 19.1219 49.4643C19.1006 49.4585 19.0813 49.447 19.0611 49.4392C19.0186 49.4238 18.9742 49.4103 18.9337 49.3871L0.387918 38.7088C0.270102 38.6411 0.172209 38.5436 0.104105 38.426C0.0360015 38.3084 9.33506e-05 38.175 0 38.0391L0 6.27612C0 6.20664 0.00964971 6.1391 0.0270192 6.07348C0.032809 6.05128 0.0463186 6.03102 0.0540383 6.00883C0.0685129 5.9683 0.0820225 5.9268 0.103252 5.88917C0.117726 5.86408 0.138956 5.84382 0.156325 5.82066C0.17852 5.78978 0.198784 5.75793 0.224838 5.73091C0.247032 5.70872 0.275982 5.69232 0.301071 5.67302C0.329055 5.64986 0.354144 5.62477 0.385988 5.60643H0.386953L9.66032 0.267251C9.77774 0.199684 9.91084 0.164124 10.0463 0.164124C10.1818 0.164124 10.3149 0.199684 10.4323 0.267251L19.7057 5.60643H19.7076C19.7385 5.62573 19.7645 5.64986 19.7925 5.67205C19.8176 5.69135 19.8456 5.70872 19.8678 5.72995C19.8948 5.75793 19.9141 5.78978 19.9373 5.82066C19.9537 5.84382 19.9759 5.86408 19.9894 5.88917C20.0116 5.92777 20.0241 5.9683 20.0395 6.00883C20.0473 6.03102 20.0608 6.05128 20.0666 6.07444C20.0843 6.1402 20.0934 6.20801 20.0936 6.27612V26.1149L27.8211 21.6655V11.5236C27.8211 11.4561 27.8307 11.3876 27.8481 11.3229C27.8548 11.2998 27.8674 11.2795 27.8751 11.2573C27.8905 11.2168 27.904 11.1753 27.9253 11.1376C27.9398 11.1126 27.961 11.0923 27.9774 11.0691C28.0005 11.0383 28.0198 11.0064 28.0469 10.9794C28.0691 10.9572 28.097 10.9408 28.1221 10.9215C28.1511 10.8983 28.1762 10.8732 28.207 10.8549H28.208L37.4823 5.51573C37.5997 5.44806 37.7328 5.41245 37.8683 5.41245C38.0038 5.41245 38.1369 5.44806 38.2543 5.51573L47.5277 10.8549C47.5605 10.8742 47.5856 10.8983 47.6145 10.9205C47.6387 10.9398 47.6666 10.9572 47.6888 10.9784C47.7159 11.0064 47.7352 11.0383 47.7583 11.0691C47.7757 11.0923 47.7969 11.1126 47.8104 11.1376C47.8326 11.1753 47.8452 11.2168 47.8606 11.2573C47.8693 11.2795 47.8818 11.2998 47.8876 11.3229V11.3229ZM46.3688 21.6655V12.8611L43.1236 14.7293L38.6403 17.3106V26.1149L46.3697 21.6655H46.3688ZM37.0954 37.5923V28.7821L32.6855 31.3007L20.0926 38.4878V47.381L37.0954 37.5923ZM1.54588 7.61261V37.5923L18.5467 47.38V38.4888L9.66514 33.4622L9.66225 33.4603L9.65839 33.4584C9.62847 33.441 9.60339 33.4159 9.5754 33.3947C9.55128 33.3754 9.52329 33.3599 9.50206 33.3387L9.50013 33.3358C9.47504 33.3117 9.45767 33.2818 9.43645 33.2548C9.41715 33.2287 9.39399 33.2065 9.37855 33.1795L9.37758 33.1766C9.36021 33.1477 9.3496 33.1129 9.33705 33.0801C9.32451 33.0512 9.3081 33.0241 9.30038 32.9933V32.9923C9.29073 32.9556 9.2888 32.917 9.28494 32.8794C9.28108 32.8504 9.27336 32.8215 9.27336 32.7925V12.0621L4.79108 9.47982L1.54588 7.61357V7.61261ZM10.0473 1.82857L2.32075 6.27612L10.0453 10.7237L17.7709 6.27516L10.0453 1.82857H10.0473ZM14.0654 29.585L18.5477 27.0047V7.61261L15.3025 9.48079L10.8192 12.0621V31.4541L14.0654 29.585ZM37.8683 7.07705L30.1428 11.5246L37.8683 15.9721L45.5929 11.5236L37.8683 7.07705ZM37.0954 17.3106L32.6121 14.7293L29.3669 12.8611V21.6655L33.8492 24.2458L37.0954 26.1149V17.3106ZM19.3187 37.1513L30.6504 30.6822L36.3147 27.4495L28.595 23.0048L19.7066 28.1221L11.6057 32.7858L19.3187 37.1513Z"
                        fill="#FF2D20"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1314_6">
                        <rect
                          width="48"
                          height="49.6278"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a
                  className="flex-shrink-0 transition hover:-translate-y-1"
                  href="#"
                >
                  <svg
                    className="size-6 md:size-10 mx-auto sm:mx-0"
                    width="48"
                    height="50"
                    viewBox="0 0 1280 1280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.901C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z"
                      fill="url(#paint0_linear_709_11012gh4)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z"
                      fill="#FF5D01"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z"
                      fill="url(#paint1_linear_709_1103afaw)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_709_11012gh4"
                        x1="882.997"
                        y1="27.1132"
                        x2="638.955"
                        y2="866.902"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#000014" />
                        <stop
                          offset="1"
                          stop-color="#150426"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_709_1103afaw"
                        x1="1001.68"
                        y1="652.45"
                        x2="790.326"
                        y2="1094.91"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF1639" />
                        <stop
                          offset="1"
                          stop-color="#FF1639"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>

                <a
                  className="flex-shrink-0 transition hover:-translate-y-1"
                  href="#"
                >
                  <svg
                    className="size-6 md:size-10 mx-auto sm:mx-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 70 70"
                  >
                    <mask
                      id="a"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="70"
                      height="70"
                    >
                      <path
                        d="M62 0H8a8 8 0 0 0-8 8v54a8 8 0 0 0 8 8h54a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8Z"
                        fill="#fff"
                      />
                    </mask>
                    <g mask="url(#a)">
                      <path
                        d="M69.8 70H.1V8a8 8 0 0 1 8-8h54a8 8 0 0 1 8 8v61.8l-.3.2Zm-12-24.2-.4-.4c-1.3-1.3-3-1.6-4.7-1.4-1.5 0-2.8.8-4 1.8l-.2-.1c0-.6-.2-1-.7-1.2-.4-.2-.9-.2-1.3 0-.5.4-.6.8-.6 1.3v12.8c0 .7.3 1.2.8 1.4 1 .2 1.8-.4 1.8-1.3v-8.3c0-.8.2-1.5.7-2.1 1.2-1.4 2.7-2 4.5-1.8.8.1 1.6.5 2 1.3.5.7.7 1.5.7 2.3v8.7c0 1 1 1.5 1.9 1 .5-.2.7-.7.7-1.3V49a6.3 6.3 0 0 0-1.2-3.1Zm-16.3-1.3c-.3-.1-.6-.2-1-.1-.6.2-1 .7-1 1.4V55a3 3 0 0 1-2 2.4 5 5 0 0 1-3.2.1 3 3 0 0 1-1.8-1.5c-.3-.5-.5-1-.5-1.7v-8.5c0-.8-.5-1.4-1.2-1.4-.9 0-1.5.5-1.5 1.4v8c0 1 .1 2 .5 2.9.7 1.7 2 2.7 3.7 3.3a8.4 8.4 0 0 0 5.9-.6c1.8-1 2.7-2.7 2.8-4.7v-9c0-.6-.3-1-.7-1.2Z"
                        fill="#EFDA4F"
                      />
                      <path
                        d="M57.8 45.8c.7 1 1 2 1.1 3.1l.1 1.9v7.7c0 .6-.2 1-.7 1.4-.9.4-1.9-.2-2-1.1V50c0-.8-.1-1.6-.6-2.3a2.7 2.7 0 0 0-2-1.3c-1.8-.2-3.3.4-4.5 1.8-.5.6-.7 1.3-.7 2v8.4c0 1-.8 1.5-1.8 1.3-.5-.2-.8-.7-.8-1.4V46c0-.6.1-1 .6-1.3.4-.3.9-.3 1.3-.1a1.3 1.3 0 0 1 .7 1.2c0 .1.2.2.2 0 1.2-1 2.5-1.6 4-1.7 1.8-.2 3.4 0 4.7 1.4l.4.4ZM40.5 44.4l1 .1c.5.2.7.7.7 1.2v9c-.1 2-1 3.6-2.8 4.7a8.4 8.4 0 0 1-5.8.6c-1.8-.6-3.1-1.6-3.8-3.3-.4-1-.5-1.9-.5-2.8v-8.1c0-1 .6-1.5 1.5-1.4.7 0 1.2.6 1.2 1.4v8.5c0 .6.2 1.2.5 1.7a3 3 0 0 0 1.8 1.5 5 5 0 0 0 3.3-.1 3 3 0 0 0 1.9-2.4V45.8c0-.7.4-1.2 1-1.4Z"
                        fill="#000"
                      />
                    </g>
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
                <div className="col-span-6 text-center">
                  <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                    250+
                  </h4>
                  <h4 className="text-sm text-gray-600 dark:text-gray-400">Associates</h4>
                </div>

                <div className="col-span-6 text-center">
                  <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                    160+
                  </h4>
                  <h4 className="text-sm text-gray-600 dark:text-gray-400">Offices Worldwide</h4>
                </div>

                <div className="col-start-4 col-span-6 text-center">
                  <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                    10+
                  </h4>
                  <h4 className="text-sm text-gray-600 dark:text-gray-400">
                    International Aluminis
                  </h4>
                </div>
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

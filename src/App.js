import './App.css';
// import 'flowbite';
function App() {
  function drawerHandler() {
    console.log("ejwfbewkjf")
    const sidebar = document.getElementById("default-sidebar");
    sidebar.classList.toggle("transform-none");
    sidebar.classList.toggle("-translate-x-full");
    sidebar.classList.toggle("drawer_width");
  }
  let isMobile = window.matchMedia("(max-width:500px)");
  return (
    <div className="container h-screen max-h-screen flex bg-black">
      {isMobile && <div className="h-fit absolute w-full bg-gray-900" style={{ zIndex: 50 }}>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={drawerHandler}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>}

      <aside
        id="default-sidebar"
        className="fixed mt-12 top-0 left-0 z-40 h-screen dark:bg-gray-800 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        style={{width: '25%'}}
      >
        <div className="h-full px-3 py-4 overflow-y-auto text-white bg-gray-800 dark:bg-gray-800">
          <h1 className="text-4xl text-white inline-block text-transparent bg-clip-text ml-4">PostKaTadka</h1>
          <form className="max-w-sm mx-auto flex flex-col space-y-3 p-5">
            <label htmlFor="use-case" className="block text-white mb-2 text-base font-medium text-white text-gray-900 dark:text-white">
              Select Use case
            </label>
            <select
              id="use-case"
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Choose case
              </option>
              <option value="US">LinkedIn Post</option>
              <option value="CA">Instagram Caption</option>
              <option value="FR">Twitter Post</option>
              <option value="DE">Facebook Post</option>
            </select>
            <label htmlFor="post-tone" className="text-white block mb-2 text-base font-medium text-gray-900 dark:text-white">
              Select post tone
            </label>
            <select
              id="post-tone"
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-800 text-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Choose Tone
              </option>
              <option value="Appreciative">Appreciative</option>
              <option value="Assertive">Assertive</option>
              <option value="Convincing">Convincing</option>
              <option value="Critical">Critical</option>
              <option value="Enthusiastic">Enthusiastic</option>
              <option value="Formal">Formal</option>
              <option value="Funny">Funny</option>
              <option value="Informative">Informative</option>
              <option value="Inspirational">Inspirational</option>
              <option value="Thoughtful">Thoughtful</option>
              <option value="Worried">Worried</option>
            </select>
            <label htmlFor="post-length" className="block text-white mb-2 text-base font-medium text-gray-900 dark:text-white">
              Length of the post
            </label>
            <select
              id="post-length"
              className="block text-white w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Choose Length
              </option>
              <option value="Very Short">Very Short</option>
              <option value="Short">Short</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>
            <label htmlFor="topic" className="block mb-2 text-white text-base font-medium text-gray-900 dark:text-white">
              What topic you want to write on?
            </label>
            <div className="mb-6">
              <input
                type="text"
                id="topic"
                placeholder='Topic'
                className="text-white bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Detailed information will result in great suggestions
              </p>
            </div>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Generate Response
            </button>
          </form>
        </div>
      </aside>
     {!isMobile &&  <div className="h-full bg-black" style={{ width: '33%' }}></div>}
      <div className="bg-black" style={{ width: '100%' }}>
        {/* 
        <div className="flex items-center flex-col h-full justify-center px-4">
          <h1 className="text-7xl bg-gradient-to-br from-green-400 to-blue-600 inline-block text-transparent bg-clip-text">
            Har Post Mein Thoda Tadka
          </h1>
          <h2 className="text-6xl text-gray-600">How can I help you today?</h2>
        </div> */}
        <div>
          <div className="container max-h-screen overflow-y-scroll w-screen flex flex-col mt-10 items-center bg-black mx-auto">
            <div style={{ width: '80%' }}>
              <div className="flex pt-4">
                <span className="flex justify-center items-center w-10">
                  <span className="w-fit text-white flex justify-center items-center px-2">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <circle cx="12" cy="6" r="4" fill="#45CF8D" />
                        <path
                          d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                          fill="#45CF8D"
                        />
                      </g>
                    </svg>
                  </span>
                </span>
                <p className="chat-msg w-fit text-white flex justify-center items-center rounded mx-2 py-1 px-2">
                  How may i help you?
                </p>
              </div>
              <div className="flex pt-4">
                <span className="flex justify-center items-start mt-3 w-10">
                  <span className="w-fit text-white flex justify-center items-start rounded-full px-2">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.5194 13.4429C24.4453 13.9533 24.1087 14.6468 23.7226 15.2497C23.2354 16.0105 22.4622 16.5433 21.5774 16.7283L17.6797 17.5434C17.0533 17.6744 16.4852 18.0022 16.0587 18.479L13.503 21.3357C13.0227 21.8725 12.687 21.7445 12.687 21.0244C12.6812 21.0511 11.4186 24.3072 14.7646 26.2371C16.0502 26.9787 17.9009 26.7122 19.1865 25.9707L25.9983 22.0416C28.5458 20.5722 30.3445 18.0863 30.9424 15.2089C30.966 15.095 30.9843 14.9808 31.004 14.8667L24.5194 13.4429Z" fill="url(#paint0_linear_2484_3243)" />
                      <path d="M22.7528 9.51774C24.0384 10.2593 24.5637 11.3633 24.5637 12.8464C24.5637 13.0477 24.5479 13.2466 24.5194 13.4425L27.2641 14.6215L31.004 14.8663C31.4829 12.0948 30.5444 9.24202 28.862 6.97445C27.5959 5.268 25.9667 3.78714 24.0081 2.65738C22.417 1.73966 20.7636 1.13501 19.1025 0.803223L17.2361 3.22023L16.6465 5.99559L22.7528 9.51774Z" fill="url(#paint1_linear_2484_3243)" />
                      <path d="M0.783597 11.5518C0.782899 11.554 0.784832 11.5546 0.78556 11.5524C0.929583 11.1205 1.11018 10.6385 1.33564 10.1237C2.51334 7.4343 4.78286 5.64062 7.57492 4.72608C10.367 3.81156 13.4155 4.13212 15.9601 5.59988L16.6465 5.99578L19.1025 0.803412C11.291 -0.756765 3.30728 3.83253 0.793528 11.5217C0.792327 11.5254 0.787957 11.5382 0.783597 11.5518Z" fill="url(#paint2_linear_2484_3243)" />
                      <path d="M18.9199 25.9704C17.6343 26.712 16.0503 26.712 14.7647 25.9704C14.5902 25.8697 14.4257 25.7566 14.2701 25.634L12.0091 27.1885L10.0603 30.3376C12.2233 32.1377 15.0321 32.7164 17.839 32.3945C19.9513 32.1523 22.0495 31.4832 24.0082 30.3534C25.5992 29.4357 26.9501 28.3075 28.0682 27.0361L26.9063 24.2128L25.0262 22.4482L18.9199 25.9704Z" fill="url(#paint3_linear_2484_3243)" />
                      <path d="M14.2701 25.6341C13.2796 24.8539 12.6872 23.6572 12.6872 22.3754V22.2476V11.5724C12.6872 10.9687 12.865 10.8661 13.3884 11.168C12.5823 10.703 10.7203 9.10701 8.42118 10.4331C7.13557 11.1747 6.0769 12.8116 6.0769 14.2946V22.1529C6.0769 25.0917 7.59906 28.1573 9.79448 30.1133C9.88132 30.1906 9.97122 30.2636 10.0603 30.3377L14.2701 25.6341Z" fill="url(#paint4_linear_2484_3243)" />
                      <path d="M27.9105 5.8123C27.909 5.8106 27.9075 5.81197 27.909 5.81368C28.2114 6.15428 28.5389 6.5515 28.8725 7.00399C30.6149 9.36765 31.2659 12.3613 30.6627 15.2343C30.0594 18.1072 28.2573 20.5846 25.7126 22.0523L25.0262 22.4482L28.0683 27.0361C33.3265 21.0576 33.3401 11.8554 27.9316 5.83594C27.9291 5.83306 27.9201 5.82287 27.9105 5.8123Z" fill="url(#paint5_linear_2484_3243)" />
                      <path d="M6.34355 14.2944C6.34354 12.8113 7.13552 11.4408 8.42113 10.6993C8.59565 10.5986 8.77601 10.5129 8.96002 10.4395L8.74304 7.70603L7.21862 4.57861C4.57671 5.55005 2.4397 7.55766 1.31528 10.1471C0.469097 12.0957 9.792e-06 14.2458 0 16.5052C0 18.3407 0.302549 20.0735 0.845533 21.6767L3.87391 22.083L6.34355 21.3387V14.2944V14.2944Z" fill="url(#paint6_linear_2484_3243)" />
                      <path d="M8.96003 10.4395C10.1316 9.97264 11.4652 10.0584 12.5763 10.6993L12.6871 10.7632L21.5825 15.8941C22.2065 16.254 22.1498 16.6082 21.4445 16.7557L21.9577 16.6484C22.6329 16.5072 23.2498 16.1621 23.7216 15.6592C24.5327 14.7946 24.8305 13.7515 24.8305 12.8463C24.8304 11.3632 24.0385 9.99274 22.7529 9.2512L15.941 5.32209C13.3935 3.85267 10.3394 3.53934 7.5461 4.46083C7.4356 4.49727 7.32744 4.5386 7.21863 4.57861L8.96003 10.4395Z" fill="url(#paint7_linear_2484_3243)" />
                      <path d="M19.3222 32.1523C19.3245 32.1518 19.3241 32.1498 19.3218 32.1503C18.8753 32.2417 18.3673 32.3264 17.8083 32.3888C14.8881 32.7145 11.9676 31.781 9.77876 29.8225C7.58999 27.8641 6.3436 25.0662 6.3436 22.1307L6.34359 21.3389L0.845581 21.6769C3.39893 29.2156 11.369 33.8285 19.2912 32.1588C19.295 32.158 19.3083 32.1553 19.3222 32.1523Z" fill="url(#paint8_linear_2484_3243)" />
                      <defs>
                        <linearGradient id="paint0_linear_2484_3243" x1="20.0599" y1="24.2701" x2="23.2075" y2="13.307" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#1724C9" />
                          <stop offset="1" stop-color="#1C64F2" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2484_3243" x1="27.3093" y1="10.9001" x2="19.0297" y2="2.64962" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#1C64F2" />
                          <stop offset="1" stop-color="#0092FF" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_2484_3243" x1="16.1645" y1="5.52115" x2="3.67432" y2="6.3104" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#0092FF" />
                          <stop offset="1" stop-color="#45B2FF" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_2484_3243" x1="15.3198" y1="29.1626" x2="26.5366" y2="26.1359" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#1C64F2" />
                          <stop offset="1" stop-color="#0092FF" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_2484_3243" x1="7.26881" y1="16.1827" x2="15.2325" y2="24.4347" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#1724C9" />
                          <stop offset="1" stop-color="#1C64F2" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_2484_3243" x1="25.4505" y1="22.1356" x2="31.007" y2="10.9345" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#0092FF" />
                          <stop offset="1" stop-color="#45B2FF" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_2484_3243" x1="5.36387" y1="9.63067" x2="2.39054" y2="20.8063" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#1C64F2" />
                          <stop offset="1" stop-color="#0092FF" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_2484_3243" x1="20.5431" y1="9.09912" x2="9.67768" y2="11.8044" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#1724C9" />
                          <stop offset="1" stop-color="#1C64F2" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_2484_3243" x1="6.40679" y1="21.8566" x2="13.3326" y2="32.2745" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#0092FF" />
                          <stop offset="1" stop-color="#45B2FF" />
                        </linearGradient>
                      </defs>
                    </svg>

                  </span>
                </span>
                <p className="chat-msg w-fit flex justify-center items-center py-1 px-2 mx-2 text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolor molestias veritatis! Eos, ab
                  aperiam? Praesentium ipsa eum id labore est repellat atque non excepturi quis qui fugiat quod
                  asperiores facere autem laborum reiciendis rerum sed voluptatum, ad maxime dolorum ex, eveniet
                  blanditiis nemo. Dicta officia porro aliquam incidunt! In!Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eveniet ipsa omnis, pariatur laboriosam asperiores esse, obcaecati minima fugiat,
                  minus ullam eaque. Voluptatem pariatur, sit dicta cum in sint impedit omnis officiis ea facere hic
                  culpa voluptates repellendus minima corrupti voluptate dolores vel! Modi unde dolorem facilis veniam
                  explicabo molestias culpa quasi excepturi doloribus suscipit, quia illo. Beatae quam iure voluptatibus
                  aliquam libero non placeat et eos mollitia ratione est itaque, modi temporibus sit, assumenda corrupti
                  quas. Magnam non cumque necessitatibus doloribus, reprehenderit quasi aspernatur accusantium aliquam
                  saepe possimus corporis optio deleniti nisi nihil tempora vero, neque ea? Maiores quidem dolor,
                  explicabo, veniam sit, illo tenetur eligendi corrupti perspiciatis nobis reiciendis! Numquam, fugit
                  dolore nisi cupiditate eius repellat ut, aliquam sit non dolorem id deserunt laudantium reiciendis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

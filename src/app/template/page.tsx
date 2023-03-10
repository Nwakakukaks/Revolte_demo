'use client';

import { useState } from "react"
// import listenbourgPic from "../../../public/lurenberg1.jpg"
// import newsroomPic from "../../../public/redaction.jpg"
// import computerPic from "../../../public/journaliste3.png"
// import screenPic from "../../../public/computer-screen.jpg"
// import cincinnatus from "../../../public/cincinnatus.jpg"

const Template = () => {
  const [stage, setStage] = useState(0)
  const [write, setWrite] = useState(false)

  return (
    <div className="flex flex-row">
      {/* <div className="basis-2/3 h-screen flex justify-center">
         <Image
          className="bgCase"
          src={listenbourgPic}
          alt="Listenbourg"
          width={800}
          height={600}
        />
        <div className="recitative">
          Listenbourg, Lurenberg,<br />  Monday, October 30, 2023, 9:43 am
        </div> 
        <div className="flex w-full h-screen">
          <div className="container relative w-[500px] h-[500px]  m-auto">
            <Image src={newsroomPic} alt="" className="card border-4 absolute top-0 border-white shadow shadow-white inline-block w-[500px] h-[500px] rounded-3xl transform -rotate-12" />
            <Image src={listenbourgPic} alt="" className="card border-4 absolute top-0 border-white shadow shadow-white inline-block w-[500px] h-[500px] rounded-3xl transform -rotate-6" />
            <Image src={computerPic} alt="" className="card border-4 absolute top-0 border-white shadow shadow-white inline-block w-[500px] h-[500px]  rounded-3xl  transform rotate-6" />
            <Image src={newsroomPic} alt="" className="card border-4 absolute top-0 border-white transition shadow-md shadow-white w-[500px] h-[500px] rounded-3xl z-10" />
          </div>
        </div>
      </div >
      <div className="basis-1/3 p-6 h-screen flex-grow-0">
        <div className="flex w-full h-full overflow-hidden antialiased rounded-md">
          <div className="relative flex flex-col flex-1 bg-zinc-300">
            <div className="z-20 flex flex-grow-0 flex-shrink-0 w-full pr-3 bg-white border-b">
              <div className="w-12 h-12 mx-4 my-2 bg-blue-500 bg-center bg-no-repeat bg-cover rounded-full cursor-pointer">
                <Image
                  className="rounded-full"
                  src={cincinnatus}
                  alt="Cincinnatus"
                />
              </div>
              <div className="flex flex-col justify-center flex-1 overflow-hidden cursor-pointer">
                <div className="overflow-hidden text-base font-medium leading-tight text-gray-600 whitespace-no-wrap">Cincinnatus</div>
                <div className="overflow-hidden text-sm font-medium leading-tight text-teal-500 whitespace-no-wrap">online</div>
              </div>
              <div className="relative hidden w-48 pl-2 my-3 border-l-2 border-blue-500 cursor-pointer ml-3">
                <div className="text-base font-medium text-blue-500">Pinned message</div>
                <div className="text-sm font-normal text-gray-800">Today star contest</div>
              </div>
              <button className="flex self-center p-2 ml-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-300">
                <svg className="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fillRule="nonzero" d="M11,20 L13,20 C13.5522847,20 14,20.4477153 14,21 C14,21.5128358 13.6139598,21.9355072 13.1166211,21.9932723 L13,22 L11,22 C10.4477153,22 10,21.5522847 10,21 C10,20.4871642 10.3860402,20.0644928 10.8833789,20.0067277 L11,20 L13,20 L11,20 Z M3.30352462,2.28241931 C3.6693482,1.92735525 4.23692991,1.908094 4.62462533,2.21893936 L4.71758069,2.30352462 L21.2175807,19.3035246 C21.6022334,19.6998335 21.5927842,20.332928 21.1964754,20.7175807 C20.8306518,21.0726447 20.2630701,21.091906 19.8753747,20.7810606 L19.7824193,20.6964754 L18.127874,18.9919007 L18,18.9999993 L4,18.9999993 C3.23933773,18.9999993 2.77101468,18.1926118 3.11084891,17.5416503 L3.16794971,17.4452998 L5,14.6972244 L5,8.9999993 C5,7.98873702 5.21529462,7.00715088 5.62359521,6.10821117 L3.28241931,3.69647538 C2.89776658,3.3001665 2.90721575,2.66707204 3.30352462,2.28241931 Z M7.00817933,8.71121787 L7,9 L7,14.6972244 C7,15.0356672 6.91413188,15.3676193 6.75167088,15.6624466 L6.66410059,15.8066248 L5.86851709,17 L16.1953186,17 L7.16961011,7.7028948 C7.08210009,8.02986218 7.02771758,8.36725335 7.00817933,8.71121787 Z M12,2 C15.7854517,2 18.8690987,5.00478338 18.995941,8.75935025 L19,9 L19,12 C19,12.5522847 18.5522847,13 18,13 C17.4871642,13 17.0644928,12.6139598 17.0067277,12.1166211 L17,12 L17,9 C17,6.23857625 14.7614237,4 12,4 C11.3902636,4 10.7970241,4.10872043 10.239851,4.31831953 C9.72293204,4.51277572 9.14624852,4.25136798 8.95179232,3.734449 C8.75733613,3.21753002 9.01874387,2.6408465 9.53566285,2.4463903 C10.3171048,2.15242503 11.1488212,2 12,2 Z" />
                </svg>
              </button>
              <button className="flex self-center p-2 ml-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-300">
                <svg className="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fillRule="nonzero" d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z" />
                </svg>
              </button>
              <button type="button" className="flex self-center hidden p-2 ml-2 text-gray-500 rounded-full md:block focus:outline-none hover:text-gray-600 hover:bg-gray-300">
                <svg className="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fillRule="nonzero" d="M12,16 C13.1045695,16 14,16.8954305 14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 C10,16.8954305 10.8954305,16 12,16 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z" />
                </svg>
              </button>
              <button className="p-2 text-gray-700 flex self-center rounded-full md:hidden focus:outline-none hover:text-gray-600 hover:bg-gray-200">
                <svg className="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fillRule="nonzero" d="M4,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5128358 20.6139598,17.9355072 20.1166211,17.9932723 L20,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4871642 3.38604019,16.0644928 3.88337887,16.0067277 L4,16 L20,16 L4,16 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5128358 20.6139598,12.9355072 20.1166211,12.9932723 L20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4871642 3.38604019,11.0644928 3.88337887,11.0067277 L4,11 Z M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.51283584 20.6139598,7.93550716 20.1166211,7.99327227 L20,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.48716416 3.38604019,6.06449284 3.88337887,6.00672773 L4,6 Z" />
                </svg>
              </button>
            </div>
            <div className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
              <div className="self-center flex-1 w-full max-w-xl overflow-auto">


                <div className="relative flex flex-col px-3 py-2 m-auto">
                  <div className="self-center px-2 py-1 mx-0 my-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">Channel was created</div>
                  <div className="self-center px-2 py-1 mx-0 my-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">September 29</div>
                  <div className="self-start w-3/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      Hello Mr Azad, a trusted person gave me your contact.
                    </div>
                  </div>
                  <div className="self-start w-3/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      You don&apos;t know me yet but I&apos;m about to expose an unprecedented political and financial scandal.
                    </div>
                  </div>
                  <div className="self-start w-3/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      Can we meet?
                    </div>
                  </div>
                  <div className="self-start w-3/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      Can we meet?
                    </div>
                  </div>
                  <div className="self-start w-3/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      Can we meet?
                    </div>
                  </div>
                  <div className="self-start w-3/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      Can we meet?
                    </div>
                  </div>
                  <div className="self-start w-3/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      Can we meet?
                    </div>
                  </div>
                  <div className="self-start w-3/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      Can we meet?
                    </div>
                  </div>
                  <div className="self-end w-3/4 my-1">
                    <div className="p-2 text-sm bg-lime-200 rounded-t-lg rounded-l-lg shadow text-black">
                      Hi, can you tell me more about it first?
                    </div>
                  </div>
                  <div className="self-start w-1/4 my-1">
                    <div className="p-2 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black">
                      <div className="animate-bounce text-teal-500 w-6 h-6 ...">
                        writing...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {!write &&
                <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
                  onClick={() => setWrite(true)}>
                  <div className="w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fillRule="nonzero" d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z" />
                      </svg>
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                      <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fillRule="nonzero" d="M6.43800037,12.0002892 L6.13580063,11.9537056 C5.24777712,11.8168182 4.5354688,11.1477159 4.34335422,10.2699825 L2.98281085,4.05392998 C2.89811796,3.66698496 2.94471512,3.2628533 3.11524595,2.90533607 C3.53909521,2.01673772 4.60304421,1.63998415 5.49164255,2.06383341 L22.9496381,10.3910586 C23.3182476,10.5668802 23.6153089,10.8639388 23.7911339,11.2325467 C24.2149912,12.1211412 23.8382472,13.1850936 22.9496527,13.6089509 L5.49168111,21.9363579 C5.13415437,22.1068972 4.73000953,22.1534955 4.34305349,22.0687957 C3.38131558,21.8582835 2.77232686,20.907987 2.9828391,19.946249 L4.34336621,13.7305987 C4.53547362,12.8529444 5.24768451,12.1838819 6.1356181,12.0469283 L6.43800037,12.0002892 Z M5.03153725,4.06023585 L6.29710294,9.84235424 C6.31247211,9.91257291 6.36945677,9.96610109 6.44049865,9.97705209 L11.8982869,10.8183616 C12.5509191,10.9189638 12.9984278,11.5295809 12.8978255,12.182213 C12.818361,12.6977198 12.4138909,13.1022256 11.8983911,13.1817356 L6.44049037,14.0235549 C6.36945568,14.0345112 6.31247881,14.0880362 6.29711022,14.1582485 L5.03153725,19.9399547 L21.6772443,12.0000105 L5.03153725,4.06023585 Z" />
                      </svg>
                    </span>
                    <div
                      className="w-full py-2 pl-10 text-sm bg-white border border-transparent appearance-none rounded-tg cursor-default">
                      Message...
                    </div>
                  </div>
                </div>
              }

              {write &&
                <div className="relative flex items-center self-center w-full max-w-xl px-4 py-2 overflow-hidden text-gray-600 focus-within:text-gray-400"
                  onClick={() => setWrite(false)}>
                  <div className="w-full">
                    <div
                      className="w-full p-1 text-sm bg-white border border-transparent appearance-none rounded cursor-default grid grid-cols-1 divide-gray-600 divide-y gap-1">
                      <p className=" cursor-pointer">Choix 1</p>
                      <p className=" cursor-pointer">Choix 2</p>
                    </div>
                  </div>
                </div>
              }








              {/* {write &&
                <div
                  className="w-full py-2 pt-4 pl-2 text-sm text-black bg-white border border-transparent rounded-tg grid grid-cols-1  divide-black divide-y items-center"
                  onClick={() => setWrite(false)}
                >
                  <p className="pb-1 cursor-pointer">Choix 1</p>
                  <p className="py-1 cursor-pointer">Choix 2</p>
                  <p className="pt-1 cursor-pointer">Choix 2</p>

                </div>
            </div>
          </div>
        </div>
      </div > */}
    </div >
  )
}

export default Template;
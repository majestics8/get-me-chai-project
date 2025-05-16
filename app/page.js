import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center h-[40vh]">
        <div className=" font-bold text-3xl md:text-5xl flex items-center gap-2">Get Me A Chai <img className="pb-2" src="/tea.gif" width={77} alt="" /></div>
        <p className="flex text-center">The basic definition of funding is any money that is provided, usually by a business, an organization, or a government .</p>
        <div>
          {/* buttons */}
          <span className="flex gap-3 p-4 flex-col md:flex-row">
            <Link href={'/login'}>
            <button className="cursor-pointer relative inline-flex items-center group px-6 py-2 border border-purple-700 rounded-lg overflow-hidden text-purple-300 hover:text-white transition-colors duration-300">

              <span className="absolute inset-0 bg-gradient-to-r from-violet-950 via-violet-800 to-violet-600 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0">
              </span>
              <span className="relative z-10 flex items-center font-bold">
                Start here
              </span>
            </button>
            </Link>

            <Link href={'about'}>
            <button className="cursor-pointer relative inline-flex items-center group px-6 py-2 border border-purple-700 rounded-lg overflow-hidden text-purple-300 hover:text-white transition-colors duration-300">
              {/* Gradient background, animation fills from right to left */}
              <span className="absolute inset-0 bg-gradient-to-l from-violet-950 via-violet-800 to-violet-600 scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></span>

              {/* Text */}
              <span className="relative z-10 flex items-center font-bold">
                read more
              </span>
            </button>
            </Link>
            
          </span>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white mx-auto container pb-10">
        <h1 className="text-white text-3xl font-bold text-center my-10">Yours fan can buy you a chai</h1>
        <div className="flex justify-around gap-5 flex-col md:flex-row">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-800 rounded-full p-2" src="/man.gif" width={66} alt="" />
            <p className="text-center font-bold">Fund Your Self</p>
            <p className="text-center">your each Fund matters</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-800 rounded-full p-2" src="/coin.gif" width={66} alt="" />
            <p className=" font-bold">Money value</p>
            <p className="text-center">Give as much as possible</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-800 rounded-full p-2" src="/group.gif" width={66} alt="" />
            <p className=" font-bold">Fans Want To Help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white mx-auto container pb-10 flex flex-col items-center rounded-sm">
        <h1 className="text-white text-3xl font-bold text-center my-10">Learn More About Us</h1>
        <iframe className="w-[90%] h-[25vh] lg:w-[70%] lg:h-[35vh]" src="https://www.youtube.com/embed/QtaorVNAwbI?si=F-VG2bwG4z3HVCaD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}

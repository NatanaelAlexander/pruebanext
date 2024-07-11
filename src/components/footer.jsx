import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className='bg-white w-full py-7 flex flex-col gap-3 justify-center mx-auto px-5'>
      <icon className="text-2xl font-bold text-center">Tu Logo</icon>

      {/* <div className='flex justify-center mx-auto'>
        <button className="w-72 relative flex items-center justify-center text-xl  bg-blue-500 text-blue-500 hover:text-blue-800 hover:bg-blue-800 transition-all rounded-full py-2">
          <span className="text-white">Solicitar Presupuesto</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute right-2 size-7 p-1 rounded-full  bg-white"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div> */}

      <div className="h-0.5 container mx-auto w-full bg-blue-500 rounded-full"></div>
      <figure className='w-full text-blue-500 flex  flex-row justify-center gap-5'>

        <div className="cursor-pointer">
          <RiInstagramFill className="size-7" />
        </div>

        <div className="cursor-pointer">
          <FaFacebook className="size-7" />
        </div>

        <div className="cursor-pointer">
          <FaTwitter className="size-7" />
        </div>

        <div className="cursor-pointer">
          <FaYoutube className="size-7" />
        </div>
      </figure>


    </footer>
  );
}


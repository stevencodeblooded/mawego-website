import backgrounImage from "../../../public/college students.jpg";
import CallToAction from "./CallToAction";
import Unity from './Unity'
import Graduation from './Graduation'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" relative h-screen w-full flex items-center justify-center">
        <Image src={backgrounImage} fill={true} alt={"Background Image"} />

        <div className=" absolute z-10">
          <h1 className="text-4xl text-gray-100 font-bold mb-3 drop-shadow-2xl lg:text-5xl">
            WELCOME TO MAWEGO INSTITUTE
          </h1>
          <p className="text-sm font-semibold p-2 bg-sky-300 text-center lg:text-xl">
            CPA FRANCIS OTIENO - MUNICIPAL MANAGER KENDU-BAY MUNICIPALITY <br />{" "}
            DURING WORLD CLEAN-UP DAY ON 16/09/2023
          </p>
        </div>
      </div>

      <CallToAction />
      <Unity />
      <Graduation />
    </div>
  );
}

import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
      <div className="flex flex-wrap justify-between py-8 px-2 gap-2.5">
        
        <div className="flex gap-2">
          <div className="text-3xl bg-sky-300 rounded-lg p-1">
            <FaLocationDot />
          </div>
          <section className="flex flex-col gap-1">
            <h1 className="text-sky-600">MAWEGO KADONGO RD</h1>
            <p>Homabay County</p>
            <p>Nyanza Province</p>
          </section>
        </div>

        <div className="flex gap-2">
          <div className="text-3xl bg-sky-300 rounded-lg p-1">
            <BsFillTelephonePlusFill />
          </div>
          <section className="flex flex-col gap-1">
            <h1 className="text-sky-600">PHONE NUMBER</h1>
            <p>
              <a href="tel:+2547238428" className=" hover:underline">+2547238428</a>
            </p>
            <p>
              <a href="tel:+2549382484" className=" hover:underline">+2549382484</a>
            </p>
          </section>
        </div>

        <div className="flex gap-2 ">
          <div className="text-3xl bg-sky-300 rounded-lg p-1 ">
            <MdMarkEmailRead />
          </div>
          <section className="flex flex-col gap-1">
            <h1 className="text-sky-600">EMAILS</h1>
            <p>
              <a href="mailto:mawegotechnical@gmail.com" className=" hover:underline">
                mawegotechnical@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:mawegoinstitute@gmail.com" className=" hover:underline">
                mawegoinstitute@gmail.com
              </a>
            </p>
          </section>
        </div>

      </div>
  );
};

export default Footer;

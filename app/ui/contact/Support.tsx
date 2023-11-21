import Image from "next/image";
import { MdAttachEmail } from "react-icons/md";

const Support = () => {
  return (
    <div className="px-2 my-12 flex flex-col lg:flex-row lg:items-center lg:gap-10">
        <div className=" lg:w-1/2 flex flex-col justify-center">
            <div className="flex flex-col gap-3 mb-6">
                <h1 className="text-3xl text-center font-medium text-sky-600">Get early access for application</h1>
                <p className="text-center text-lg font-normal "><span className="text-sky-600 font-medium">Sign Up</span> to get access to the APP Developer <br />update, and more</p>
            </div>
            <form action="" className="flex flex-col items-center justify-center gap-3">
                <div className="flex gap-3">
                    <input type="email" name="email" placeholder="Your email" className="border-2 p-2 rounded-sm"/>
                    <div className="bg-sky-600 px-4 py-2 rounded-sm">
                        <button className='text-xl text-white' type="submit"><MdAttachEmail /></button>
                    </div>
                </div>
                <p className="mb-6"><span className="font-medium text-sky-600">Support</span> : <a className=" hover:underline" href="mailto:contact123@mail.com">contact123@mail.com</a></p>
            </form>
        </div>
        <div className="w-full flex justify-center lg:w-1/2">
            <Image src='/cheerful-man-speaking-phone-cafe.jpg' alt="Contact Image" width={500} height={500} className="rounded-sm" />
        </div>
    </div>
  )
}

export default Support
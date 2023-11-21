import Image from "next/image";
import { IoIosSend } from "react-icons/io";

const Form = () => {
  return (
   <div className="px-2">
        <div className="text-center">
            <h1 className="text-xl text-sky-600 mb-4">Contacts Us</h1>
            <h2 className="text-4xl mb-4">Get <span className="text-sky-600">in touch</span></h2>
            <p>You need support fill this contact form and contact our team</p>
        </div>

        <div className="flex flex-col gap-10 w-full my-10 lg:flex-row lg:items-center">
            <div>
                <Image src={'/closeup-businessman-using-mobile-phone.jpg'} alt="closeup-businessman-using-mobile-phone" width={500} height={500} />
            </div>
            <div>
                <h2 className="text-2xl text-sky-500 mb-2 ">Need Support :</h2>
                <form action="" className="flex gap-3 flex-col">
                    <div className="flex w-full gap-2">
                        <input 
                            type="text" 
                            className="border-2 rounded-sm p-2 focus:border-sky-400 outline-none w-1/2" 
                            name="name"
                            placeholder="Name"  
                            required
                        />

                        <input 
                            type="text" 
                            className="border-2 rounded-sm p-2 focus:border-sky-400 outline-none w-1/2" 
                            name="email" 
                            placeholder="Email"
                            required 
                        />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <input 
                            type="text" 
                            className="border-2 rounded-sm p-2 focus:border-sky-400 outline-none" 
                            name="subject"
                            placeholder="Subject"
                            required 
                        />
                        <textarea 
                            name="message"
                            placeholder="Message" 
                            className="border-2 rounded-sm p-2 focus:border-sky-400 outline-none" 
                            cols={10} 
                            rows={5}
                            required
                        >
                        </textarea>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="bg-sky-600 p-2 rounded-sm text-white flex items-center gap-2 hover:scale-105 transition"><p>Send Message</p> <IoIosSend 
                        /></button>
                    </div>
                </form>
            </div>
        </div>
   </div>
  )
}

export default Form
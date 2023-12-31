import Link from "next/link"
import Image from "next/image"
import CtaImage from '../../../public/college students 2.jpg'

const CallToAction = () => {
  return (
    <div className="flex flex-col py-16 px-2 lg:flex-row lg:items-center lg:px-0">
        <section className="mx-auto lg:mx-0 lg:w-full">
          <Image src={CtaImage} alt="college students studying" height={300} width={550} className="order-last lg:order-first"/>
        </section>
        <section className="order-first mb-5 text-center lg:text-left lg:order-last">
            <h1 className="text-3xl mb-4">GET THE <span className="text-sky-400">BEST KNOWLEDGE</span> FROM US</h1>
            <hr className="hidden lg:block lg:w-20 lg:mb-10"/>
            <h2 className=" mb-3 text-xl">HAVE THE COURAGE TO HAVE CONVICTIONS</h2>
            <p className="mb-7">We are an institution ready to train and make you fit for the desired skill area.</p>
            <Link href='/contact' className=" bg-sky-300 py-2 px-3 rounded-sm">Join Us</Link>
        </section>
    </div>
  )
}

export default CallToAction
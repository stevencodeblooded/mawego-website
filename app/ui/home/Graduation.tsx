import Image from "next/image"
import Link from "next/link"
import graduation from '../../../public/graduating students.jpg'

const Graduation = () => {
  return (
    <div className="grid py-16 px-2 lg:flex lg:items-center lg:gap-10">
        <section className="mx-auto lg:mx-0 px-2 lg:w-full">
          <Image src={graduation} alt="college students studying" height={300} width={550} className="order-last lg:order-first" />
        </section>
        <section className="order-first mb-5 text-center lg:text-left lg:order-last">
            <h1 className="text-3xl mb-4">TECH COLLEGE <span className="text-sky-400">SUCCESS STORIES</span></h1>
            <hr className="hidden lg:block lg:w-20 lg:mb-10"/>
            <h2 className=" mb-3 text-xl">PREPARING TODAY FOR TOMMORROW SUCCESS</h2>
            <p className="mb-7">Explore how our tech college candidates thrive academically and continue to shine in their careers long after graduation.</p>
            <Link href='/contact' className=" bg-sky-300 py-2 px-3 rounded-sm">Contact Us</Link>
        </section>
    </div>
  )
}

export default Graduation
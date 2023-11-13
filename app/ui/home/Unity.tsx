import Image from "next/image"
import unityMovement from '../../../public/college students tgether.jpg'
import Link from "next/link"

const Unity = () => {
  return (
    <div>
        <div className="flex items-center gap-10 PX-2 py-16">
            <section>
                <h1 className="text-3xl mb-4">JOIN THE <span className="text-sky-400">UNITY MOVEMENT</span></h1>
                <hr className=" w-20 mb-10" />
                <h2 className=" mb-3 text-xl">TOGETHER, WE CAN MAKE A DIFFERENCE</h2>
                <p className="mb-7">Discover the power of unity and be a part of positive change. Join us today to create a better, more connected world.</p>
                <Link className=" py-2 px-3 rounded-sm bg-sky-300" href='/contact'>Reach Out</Link>
            </section>
            <Image src={unityMovement} alt="Unity Movement" height={300} width={550} />
        </div>
    </div>
  )
}

export default Unity
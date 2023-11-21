import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="px-2 flex flex-col gap-2 my-10">
      <div>
        <Image src={'/not-found-page.jpg'} alt="Not Found Page" width={500} height={500} />
      </div>
      <div className="text-center">
        <h1 className="text-3xl mb-3 text-sky-600 font-medium">We looked everywhere</h1>
        <p className="mb-4">Looks like this page is missing. If you still need help conact our <Link href={'/contact'} className="underline text-sky-600">support</Link></p>
        <Link href='/' className="bg-sky-600 p-2 border-0 rounded-sm text-white hover:scale-105 transition">Go to homepage</Link>
      </div>
    </div>
  )
}

export default NotFound
import Image from "next/image"
import Link from "next/link"
import TopNavigation from "./TopNavigation"
import RouteLinks from "./RouteLinks"

const Navbar = () => {
  return (
    <div className=" mx-auto py-4 px-2">
      <div className="flex items-center gap-80 lg:gap-10">
        <Link href='/'>
          <Image src='/favicon.ico' alt="Mawego TTI Logo" width={80} height={80} />
        </Link>
        <div className="flex flex-col">
            <TopNavigation />
          <div className="my-4 hidden lg:block">
            <hr />
          </div>
          <RouteLinks />
        </div>
      </div>
    </div>
  )
}

export default Navbar
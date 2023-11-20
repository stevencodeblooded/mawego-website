"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";

const RouteLinks = () => {
  const pathname = usePathname();
  const [showLinksMobile, setShowLinksMobile] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isCourses, setIsCourses] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [isTender, setIsTender] = useState(false);

  const handleShowingLinksMobile = () => setShowLinksMobile(!showLinksMobile);

  //AboutUS
  const handleAboutUs = () => setIsAbout(true);
  const handleOutAboutUs = () => setIsAbout(false)

  //Courses
  const handleCourses = () => setIsCourses(true);
  const handleOutCourses = () => setIsCourses(false)

  //Staff
  const handleStaff = () => setIsStaff(true);
  const handleOutStaff = () => setIsStaff(false)

  //Tender
  const handleTender = () => setIsTender(true);
  const handleOutTender = () => setIsTender(false)

  return (
    <div>
      <ul className="items-center gap-14 hidden lg:flex">
        <li>
          <Link
            href="/"
            className={`text-sky-600 hover:underline ${
              pathname === "/"
                ? "bg-sky-300 py-2 px-3 text-black rounded-sm"
                : null
            }`}
          >
            Home
          </Link>
        </li>

        <li className="relative">
          <Link
            onMouseEnter={handleAboutUs}
            onMouseLeave={handleOutAboutUs}
            href="/about"
            className={`text-sky-600 hover:underline ${
              pathname === "/about"
                ? "bg-sky-300 py-2 px-3 text-black rounded-sm"
                : null
            }`}
          >
            About Us
          </Link>
          {
            isAbout && (
              <div className="absolute bg-sky-300 w-96 z-20 p-8 rounded-sm" onMouseEnter={handleAboutUs} onMouseLeave={handleOutAboutUs}>
                <ul className="flex flex-col gap-2">
                  <li><Link className="hover:underline hover:text-sky-600" href='/about'>About Us</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href='/quality-policy'>Quality Policy Statement</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/Vision'}>Vision Mawego</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/service-delivery'}>Service Delivery Charter</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/careers'}>Careers</Link></li>
                </ul>
              </div>
            )
          }
        </li>

        <li className="relative">
          <Link
            onMouseEnter={handleCourses}
            onMouseLeave={handleOutCourses}
            href="/courses"
            className={`text-sky-600 hover:underline ${
              pathname === "/courses"
                ? "bg-sky-300 py-2 px-3 text-black rounded-sm"
                : null
            }`}
          >
            Courses
          </Link>
          {
            isCourses && (
              <div className="absolute bg-sky-300  w-96 z-20 p-8 rounded-sm " onMouseLeave={handleOutCourses} onMouseEnter={handleCourses}>
                <ul className="flex flex-col gap-2">
                  <li><Link className="hover:underline hover:text-sky-600" href={'/ict-maths'}>ICT & Maths</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/business'}>Business Studies</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/agriculture'}>Agriculture</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/building'}>Building & Construction</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/electricals'}>Electrical Eng.</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/applied-science'}>Applied Science</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/institutional-management'}>Institutional Management</Link></li>
                </ul>
              </div>
            )
          }
        </li>

        <li className="relative">
          <Link
            href="/gallery"
            className={`text-sky-600 hover:underline ${
              pathname === "/gallery"
                ? "bg-sky-300 py-2 px-3 text-black rounded-sm"
                : null
            }`}
          >
            Gallery
          </Link>
        </li>

        <li className="relative">
          <Link
            onMouseEnter={handleStaff}
            onMouseLeave={handleOutStaff}
            href="/staff"
            className={`text-sky-600 hover:underline ${
              pathname === "/staff"
                ? "bg-sky-300 py-2 px-3 text-black rounded-sm"
                : null
            }`}
          >
            Staff
          </Link>
          {
            isStaff && (
              <div className="absolute bg-sky-300 w-96 z-20 p-8 rounded-sm" onMouseEnter={handleStaff} onMouseLeave={handleOutStaff}>
                <ul className="flex flex-col gap-2">
                  <li><Link className="hover:underline hover:text-sky-600" href={'/board-members'}>Board Members</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/our-staff'}>Our Staff</Link></li>
                </ul>
              </div>
            )
          }
        </li>

        <li className="relative">
          <Link
            onMouseEnter={handleTender}
            onMouseLeave={handleOutTender}
            href="/tender"
            className={`text-sky-600 hover:underline ${
              pathname === "/tender"
                ? "bg-sky-300 py-2 px-3 text-black rounded-sm"
                : null
            }`}
          >
            Tender
          </Link>
          {
            isTender && (
              <div className="absolute bg-sky-300 w-96 z-20 p-8 rounded-sm " onMouseLeave={handleOutTender} onMouseEnter={handleTender}>
                <ul className="flex flex-col gap-2">
                  <li><Link className="hover:underline hover:text-sky-600" href={'/tenders'}>FY-2022/2024</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/tenders'}>FY-2021/2022</Link></li>
                  <li><Link className="hover:underline hover:text-sky-600" href={'/tenders'}>FY-2020/2021</Link></li>
                </ul>
              </div>
            )
          }
        </li>

        <li>
          <Link
            href="/downloads"
            className={`text-sky-600 hover:underline ${
              pathname === "/downloads"
                ? "bg-sky-300 py-2 px-3 text-black rounded-sm"
                : null
            }`}
          >
            Downloads
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`text-sky-600 hover:underline ${
              pathname === "/contact"
                ? "bg-sky-300 py-2 px-3 text-black rounded-sm"
                : null
            }`}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <section className="block lg:hidden relative">
        <p onClick={handleShowingLinksMobile} className="text-4xl cursor-pointer text-sky-600">{showLinksMobile ? <FaRegWindowClose /> : <IoMenu /> }</p>
        { showLinksMobile && (
          <ul className="absolute flex flex-col z-10 bg-sky-300 py-6">
            <li><Link onClick={() => setShowLinksMobile(false)} href={'/'}>Home</Link></li>
            <li><Link onClick={() => setShowLinksMobile(false)} href={'/about'}>About</Link></li>
            <li><Link onClick={() => setShowLinksMobile(false)} href={'/courses'}>Courses</Link></li>
            <li><Link onClick={() => setShowLinksMobile(false)} href={'/gallery'}>Gallery</Link></li>
            <li><Link onClick={() => setShowLinksMobile(false)} href={'/staff'}>Staff</Link></li>
            <li><Link onClick={() => setShowLinksMobile(false)} href={'/tender'}>Tender</Link></li>
            <li><Link onClick={() => setShowLinksMobile(false)} href={'/downloads'}>Downloads</Link></li>
            <li><Link onClick={() => setShowLinksMobile(false)} href={'/contact'}>Contact</Link></li>
          </ul>
        )}
      </section>
    </div>
  );
};

export default RouteLinks;

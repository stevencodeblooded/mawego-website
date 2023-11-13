"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const RouteLinks = () => {
  const pathname = usePathname();
  const [isAbout, setIsAbout] = useState(false);
  const [isCourses, setIsCourses] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [isTender, setIsTender] = useState(false);

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
      <ul className="flex items-center gap-14 relative">
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
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        <li>
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
        </li>
        <li>
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

      {
        isAbout && (
          <div className="absolute bg-sky-300 w-2/5 z-20 p-8" onMouseEnter={handleAboutUs} onMouseLeave={handleOutAboutUs}>
            <ul className="flex flex-col gap-2">
              <li><Link href='/about'>About Us</Link></li>
              <li><Link href='/quality-policy'>Quality Policy Statement</Link></li>
              <li><Link href={'/Vision'}>Vision Mawego</Link></li>
              <li><Link href={'/service-delivery'}>Service Delivery Charter</Link></li>
              <li><Link href={'/careers'}>Careers</Link></li>
            </ul>
          </div>
        )
      }

      {
        isStaff && (
          <div className="absolute bg-sky-300 w-2/5 z-20 p-8" onMouseEnter={handleStaff} onMouseLeave={handleOutStaff}>
            <ul className="flex flex-col gap-2">
              <li><Link href={'/board-members'}>Board Members</Link></li>
              <li><Link href={'/our-staff'}>Our Staff</Link></li>
            </ul>
          </div>
        )
      }

      {
        isCourses && (
          <div className="absolute bg-sky-300 w-2/5 z-20 p-8 " onMouseLeave={handleOutCourses} onMouseEnter={handleCourses}>
            <ul className="flex flex-col gap-2">
              <li><Link href={'/ict-maths'}>ICT & Maths</Link></li>
              <li><Link href={'/business'}>Business Studies</Link></li>
              <li><Link href={'/agriculture'}>Agriculture</Link></li>
              <li><Link href={'/building'}>Building & Construction</Link></li>
              <li><Link href={'/electricals'}>Electrical Eng.</Link></li>
              <li><Link href={'/applied-science'}>Applied Science</Link></li>
              <li><Link href={'/institutional-management'}>Institutional Management</Link></li>
            </ul>
          </div>
        )
      }

      {
        isTender && (
          <div className="absolute  bg-sky-300 w-2/5 z-20 p-8 " onMouseLeave={handleOutTender} onMouseEnter={handleTender}>
            <ul className="flex flex-col gap-2">
              <li><Link href={'/tenders'}>FY-2022/2024</Link></li>
              <li><Link href={'/tenders'}>FY-2021/2022</Link></li>
              <li><Link href={'/tenders'}>FY-2020/2021</Link></li>
            </ul>
          </div>
        )
      }

    </div>
  );
};

export default RouteLinks;

import Image from "next/image";
import React from "react";
import Link from "next/link";
import aboutImage from "../../../public/img-5.jpg";
import aboutImage2 from "../../../public/img-4.jpg";
import girlWearingGown from "../../../public/img-6.jpg";
import { SiWelcometothejungle } from 'react-icons/si'

const AboutDetail = () => {
  return (
    <div className="flex flex-col my-10">
      <div className="flex items-center my-10 gap-6">
        <Image src={aboutImage} alt="about image" height={300} width={550} />
        <div>
          <h1 className="text-5xl text-sky-400 font-bold mb-3"><span className="flex"><SiWelcometothejungle />elcome</span></h1>
          <p className="text-sm mb-4">
            Since its inception in 1952 by the Utretch Brothers of the
            Netherlands as a Trade School, Mawego Technical Training Institute
            has recorded tremendous growth in the development of Middle Level
            Training as an Institution. It has continually fulfilled its mandate
            in training young people to acquire skills and technical knowledge
            that are in line with the industrial growth of our country and the
            vision 2030. In 1967, the institution was taken over by the
            Government and became a National Technical Secondary School. In
            1986, it was upgraded to a Technical Training Institute in the
            greater South Nyanza comprising Migori, Homa Bay and Kisii Counties,
            offering technical and business related courses at the levels of
            Certificate and Diploma. The Institute has a unique symbolic
            relationship with the surrounding community, which has been very
            supportive.
          </p>
          <div className="flex gap-3">
            <Link href={"/contact"} className="bg-sky-300 py-2 px-3 rounded-sm">
              Join Us
            </Link>
            <Link href={"/careers"} className="bg-sky-300 py-2 px-3 rounded-sm">
              Careers
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center my-10">
        <div>
          <h2 className="text-5xl text-sky-400 font-bold mb-3">Our Legacy of Excellence...</h2>
          <p className="text-sm mb-4">At Mawego, we don't just educate; we ignite creativity and empower our students to push boundaries. Our alumni not only excel academically but also continually contribute groundbreaking ideas and solutions to society. Join us in our mission to foster the next generation of innovators, and be a part of our enduring legacy of excellence.</p>
          <div className="flex gap-3">
            <Link href={'/contact'} className="bg-sky-300 py-2 px-3 rounded-sm">
              Join Us
            </Link>
            <Link href={'/careers'} className="bg-sky-300 py-2 px-3 rounded-sm">
              Careers
            </Link>
          </div>
        </div>
        <Image src={aboutImage2} alt="Second About Us Image" height={300} width={550} />
      </div>

      <div className="my-10">
        <h1 className="text-center text-5xl text-sky-400 font-bold mb-4">Ready to embark on your journey to success with us?</h1>
        <div className="flex justify-between items-center gap-3">
          <div>
            <p className="text-lg mb-4">Join us in shaping a brighter future. Explore, learn, and be inspired.</p>
          </div>
          <Image src={girlWearingGown} alt="a girl Wearing  graduation Gown" height={700} width={400} />
          <div>
            <p className="text-lg mb-4">Curious to know more about our exceptional graduates?</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutDetail;

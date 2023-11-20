import Link from "next/link";
import { BiSolidTimeFive, BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail, AiOutlineExport } from "react-icons/ai";
import { SiSimilarweb } from "react-icons/si";
import { GrUserAdmin } from "react-icons/gr";

const TopNavigation = () => {
  return (
    <ul className="items-center gap-7 hidden lg:flex">
      <li>
        <p className="flex items-center gap-1">
          <BiPhoneCall />
          <a className="hover:text-sky-600 text-sm" href="tel:+254734156640">
            Call Us
          </a>
        </p>
      </li>
      <li>
        <p className="flex items-center gap-1">
          <span>
            <AiOutlineMail />
          </span>
          <a
            className="hover:text-sky-600 text-sm"
            href="mailto:info@mawegoinstitute.ac.ke"
          >
            Email
          </a>
        </p>
      </li>
      <li>
        <p className="flex items-center gap-1">
          <span>
            <AiOutlineExport />
          </span>
          <Link className="hover:text-sky-600 text-sm" href="portal">
            Portal
          </Link>
        </p>
      </li>
      <li>
        <p className="flex items-center gap-1">
          <SiSimilarweb />
          <a
            className="hover:text-sky-600 text-sm"
            href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000006-0000-0ff1-ce00-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DvEit8DuTrVGnTiFczLeM_AlRu4cunNnPTIDIez_oMDc8oJJ6mhEvE3qidgHCCZDvL4N9387ptDOn5V7P9pYbMpzTJr_aZJ1tvfLReyh-gZfbIt5zf_utq9RV0zMiD9hpbRk4UXpCfF7DFuRhyeiOuA&response_mode=form_post&nonce=637824869472426328.ZDAwODY3YjktODdjNi00Y2NmLTg5NzQtNmZkMmEwMGZmNzBmMzEyNzNhYmMtYmUxZi00ODQ1LWE0NDQtM2ZiZjdhMTMyYTc3&redirect_uri=https%3A%2F%2Fadmin.microsoft.com%2Flanding&ui_locales=en-GB&mkt=en-GB&client-request-id=c4bc6650-c2d5-4564-8ebf-e111a2189715&x-client-SKU=ID_NET45&x-client-ver=6.12.1.0&sso_reload=true"
          >
            Webmail
          </a>
        </p>
      </li>
      <li>
        <p className="flex items-center gap-1">
          <GrUserAdmin />
          <Link className=" hover:text-sky-600 text-sm" href="/admission">
            Application For Admission
          </Link>
        </p>
      </li>
      <li>
        <section className="flex items-center gap-2">
          <span>
            <BiSolidTimeFive />
          </span>
          <p className="text-sky-600">Mon - Sat : 09:00 am - 05:30 pm</p>
        </section>
      </li>
    </ul>
  );
};

export default TopNavigation;

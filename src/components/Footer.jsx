import { Mail, FileDown } from "lucide-react";
import CIcon from "@coreui/icons-react";
import { cibLeetcode, cibLinkedin, cibTwitter, cibGithub } from "@coreui/icons";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-background/80 pb-2">
      <div className="m-auto hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 w-fit min-w-[320px] max-w-[450px] flex justify-center text-2xl items-center shadow-xl z-10 bg-black gap-2 p-2 rounded-full">
        <a
          href="https://github.com/KunjGarala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative transition-transform before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Github'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 dark:bg-[#292929] rounded-full p-2 px-3">
            <CIcon
              icon={cibGithub}
              className="w-7 h-7 text-white fill-current"
            />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/kunj-garala-15b542283/"
          target="_blank"
        >
          <button className="relative transition-transform before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Linkedin'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#292929]  rounded-full p-2 px-3">
            <CIcon
              icon={cibLinkedin}
              className="w-7 h-7 text-white fill-current"
            />
          </button>
        </a>
        <a
          href="https://x.com/kunj_garala05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative transition-transform before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Twitter'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#292929] rounded-full p-2 px-3">
            <CIcon
              icon={cibTwitter}
              className="w-7 h-7 text-white fill-current"
            />
          </button>
        </a>
        <a
          href="mailto:kunjgarala55@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative transition-transform before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Mail'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#292929]  rounded-full p-2 px-3">
            <Mail className="text-white" size={30} />
          </button>
        </a>
        <a
          href="https://leetcode.com/u/kunj_garala05/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative before:hidden transition-transform hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Leetcode'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#292929]  rounded-full p-2 px-3">
            <CIcon
              icon={cibLeetcode}
              className="w-7 h-7 text-white fill-current"
            />
          </button>
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=18bBo2jK8Gd98k__GE33LXhNMYQBjq3vt"
          download="KunjGarala_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative transition-transform before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Resume'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#292929] rounded-full p-2 px-3">
            <FileDown className="text-white" size={30} />
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

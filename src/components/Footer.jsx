import { Mail, FileDown } from "lucide-react";
import CIcon from "@coreui/icons-react";
import { cibLeetcode, cibLinkedin, cibTwitter, cibGithub } from "@coreui/icons";
import pdf from "../assets/Kunj Garala.pdf"
const SocialLink = ({ href, icon: Icon, label, isCoreSvg = true, isDownload = false }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    download={isDownload ? "KunjGarala_Resume.pdf" : undefined}
  >
    <button 
      className="relative transition-transform before:hidden md:hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-[attr(data-tooltip)] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg md:hover:-translate-y-5 cursor-pointer md:hover:scale-125 bg-gray-800 dark:bg-[#292929] rounded-full p-2 px-3 active:scale-95 md:active:scale-100"
      data-tooltip={label}
    >
      {isCoreSvg ? (
        <CIcon 
          icon={Icon} 
          className="w-7 h-7 text-white fill-white stroke-white" 
        />
      ) : (
        <Icon 
          size={28} 
          className="text-white stroke-white" 
        />
      )}
    </button>
  </a>
);

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/KunjGarala",
      icon: cibGithub,
      label: "Github"
    },
    {
      href: "https://www.linkedin.com/in/kunj-garala-15b542283/",
      icon: cibLinkedin,
      label: "LinkedIn"
    },
    {
      href: "https://x.com/kunj_garala05",
      icon: cibTwitter,
      label: "Twitter"
    },
    {
      href: "mailto:kunjgarala55@gmail.com",
      icon: Mail,
      label: "Mail",
      isCoreSvg: false
    },
    {
      href: "https://leetcode.com/u/kunj_garala05/",
      icon: cibLeetcode,
      label: "LeetCode"
    },
    {
      href: pdf,
      icon: FileDown,
      label: "Resume",
      isCoreSvg: false,
      isDownload: true
    },
  ];

  return (
    <footer className="sticky bottom-0 bg-background pb-2">
      <div className="m-auto w-fit min-w-[320px] max-w-[450px] flex justify-center items-center gap-2 p-2 bg-black rounded-full shadow-lg md:hover:scale-105 transition-transform">
        {socialLinks.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;

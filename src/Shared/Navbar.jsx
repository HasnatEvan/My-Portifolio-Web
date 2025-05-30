import { useState, useRef, useEffect } from 'react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../src/assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (hash) => {
    setIsOpen(false);
    if (hash === "#home") {
      scrollToTop();
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-black text-white px-6 py-4 sticky top-0 z-50 max-w-screen-xl mx-auto" ref={menuRef}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer" onClick={scrollToTop}>
          <img src={logo} alt="Hasnat Evan Logo" className="h-10 w-10 object-contain" />
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li className="hover:text-green-500 cursor-pointer" onClick={() => handleLinkClick("#home")}>Home</li>
          <li className="hover:text-green-500 cursor-pointer" onClick={() => handleLinkClick("#about")}>About</li>
          <li className="hover:text-green-500 cursor-pointer" onClick={() => handleLinkClick("#what-i-do")}>What I Do</li>
          <li className="hover:text-green-500 cursor-pointer" onClick={() => handleLinkClick("#skills")}>Skills</li>
          <li className="hover:text-green-500 cursor-pointer" onClick={() => handleLinkClick("#projects")}>Projects</li>
          <li className="hover:text-green-500 cursor-pointer" onClick={() => handleLinkClick("#education")}>Education</li>
          <li className="hover:text-green-500 cursor-pointer" onClick={() => handleLinkClick("#contact")}>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 text-xl">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaFacebookF />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pt-4" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="space-y-2 text-lg font-medium px-2 ">
          <li className="hover:text-green-500 cursor-pointer border-b border-gray-200 py-2" onClick={() => handleLinkClick("#home")}>
            Home
          </li>
          <li className="hover:text-green-500 cursor-pointer border-b border-gray-200 py-2" onClick={() => handleLinkClick("#about")}>
            About
          </li>
          <li className="hover:text-green-500 cursor-pointer border-b border-gray-200 py-2" onClick={() => handleLinkClick("#what-i-do")}>
            What I Do
          </li>
          <li className="hover:text-green-500 cursor-pointer border-b border-gray-200 py-2" onClick={() => handleLinkClick("#skills")}>
            Skills
          </li>
          <li className="hover:text-green-500 cursor-pointer border-b border-gray-200 py-2" onClick={() => handleLinkClick("#projects")}>
            Projects
          </li>
          <li className="hover:text-green-500 cursor-pointer border-b border-gray-200 py-2" onClick={() => handleLinkClick("#education")}>
            Education
          </li>
          <li className="hover:text-green-500 cursor-pointer border-b border-gray-200 py-2" onClick={() => handleLinkClick("#contact")}>
            Contact
          </li>
        </ul>


        <div className="flex space-x-4 text-xl pt-4 px-2  mt-2 ">
          <a
            href="https://www.facebook.com/hasnat.evan.733"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/HasnatEvan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hasnat-evan-web68"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

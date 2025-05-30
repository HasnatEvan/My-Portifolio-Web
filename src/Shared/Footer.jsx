import { useState } from "react";

const Footer = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  return (
    <>
      <footer className="w-full border-t border-gray-200 bg-white text-gray-700 py-8 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
        <div className="mb-4 md:mb-0">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-green-500 font-semibold">Hasnat Evan.</span> All
          Rights Reserved.
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm">
          <button
            onClick={() => setShowTermsModal(true)}
            className="hover:text-green-500 transition"
          >
            Terms & Policy
          </button>
          <span className="hidden sm:inline text-gray-500">|</span>
          <button
            onClick={() => setShowDisclaimerModal(true)}
            className="hover:text-green-500 transition"
          >
            Disclaimer
          </button>
        </div>
      </footer>

      {(showTermsModal || showDisclaimerModal) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setShowTermsModal(false);
            setShowDisclaimerModal(false);
          }}
        >
          <div
            className="relative z-10 bg-white text-black w-full max-w-xl p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} // মডালের ভিতরে ক্লিক করলে মডাল বন্ধ হবে না
          >
            <h2 className="text-xl font-bold mb-4">
              {showTermsModal ? "Terms & Policy" : "Disclaimer"}
            </h2>

            <p className="text-sm space-y-2">
              {showTermsModal && (
                <>
                  <strong>Personal Portfolio Disclaimer:</strong> This website
                  has been created solely for the purpose of showcasing the
                  projects, skills, and experiences of{" "}
                  <span className="text-green-600 font-medium">Hasnat Evan</span>
                  , a passionate and dedicated web developer.
                  <br />
                  <br />
                  <strong>Data Collection:</strong> This site does not collect or
                  store any personal data from visitors. Any form inputs (like
                  contact forms) are used only to communicate with the developer
                  and are not shared with third parties.
                  <br />
                  <br />
                  <strong>Project Ownership:</strong> All showcased projects are
                  either personal works or collaborative assignments. In
                  collaborative projects, due credit has been given where
                  applicable.
                  <br />
                  <br />
                  <strong>Use of Content:</strong> The content, images, and
                  source code on this website are protected. Please do not copy
                  or reuse them without permission.
                  <br />
                  <br />
                  <strong>External Links:</strong> This website may contain links
                  to external websites like GitHub, LinkedIn, or project demos.
                  The developer is not responsible for the privacy practices or
                  content of these external sites.
                  <br />
                  <br />
                  By visiting this site, you agree to respect the intellectual
                  property and efforts presented herein. Thank you for visiting!
                </>
              )}

              {showDisclaimerModal && (
                <>
                  The information provided on this website is for general
                  informational purposes only. While every effort has been made
                  to ensure the accuracy of the content,{" "}
                  <span className="text-green-600 font-medium">Hasnat Evan</span>{" "}
                  makes no guarantees regarding completeness, reliability, or
                  accuracy.
                  <br />
                  <br />
                  All projects, descriptions, and visuals are either original
                  creations or educational assignments meant to demonstrate web
                  development capabilities.
                  <br />
                  <br />
                  Any actions taken based on information from this site are
                  strictly at your own risk.{" "}
                  <span className="text-green-600 font-medium">Hasnat Evan</span>{" "}
                  will not be liable for any losses or damages in connection
                  with the use of this website.
                  <br />
                  <br />
                  This site may contain external links to other websites. These
                  links are provided for convenience only.{" "}
                  <span className="text-green-600 font-medium">Hasnat Evan</span>{" "}
                  has no control over the nature or content of those sites and
                  assumes no responsibility for them.
                  <br />
                  <br />
                  By continuing to use this site, you acknowledge and accept this
                  disclaimer.
                </>
              )}
            </p>
          </div>
        </div>
      )}

      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 0.3s ease-out forwards;
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;

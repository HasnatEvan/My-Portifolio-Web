import { useEffect, useState } from "react";

const Banner = () => {
  const fullText = "I am a MERN Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // টাইপ শেষ হলে ১ সেকেন্ড অপেক্ষা করে রিসেট করবে
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  // Screen width responsive setup (optional)
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFontSize = (base, sm, md, lg) => {
    if (screenWidth < 480) return base;
    if (screenWidth < 768) return sm;
    if (screenWidth < 1024) return md;
    return lg;
  };

  const getHeight = () => {
    if (screenWidth < 480) return "60vh";
    if (screenWidth < 768) return "70vh";
    return "100vh";
  };

  return (
    <div
      className="max-w-screen-xl mx-auto"
      style={{
        width: "100%", // 100vw থেকে 100% করা overflow এড়াতে
        height: getHeight(),
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} // display:block যোগ করা
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          textAlign: "center",
          padding: "0 20px",
          boxSizing: "border-box", // padding overflow এড়াতে
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h1
            style={{
              fontSize: getFontSize("2rem", "2.5rem", "3rem", "3.5rem"),
              fontWeight: "bold",
              marginBottom: "1rem",
              minHeight: "4rem",
              letterSpacing: "1px",
            }}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <p
            style={{
              fontSize: getFontSize("1rem", "1.2rem", "1.4rem", "1.5rem"),
              maxWidth: "600px",
              marginBottom: "2rem",
              marginInline: "auto",
            }}
          >
            Building modern full-stack web applications with MongoDB, Express,
            React, and Node.js
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              border: "2px solid #28A745",
              borderRadius: "9999px",
              color: "#28A745",
              backgroundColor: "transparent",
              fontSize: getFontSize("0.9rem", "1rem", "1.1rem", "1.2rem"),
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#28A745";
              e.target.style.color = "#000";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#28A745";
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

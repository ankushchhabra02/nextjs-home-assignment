import { useState, useEffect } from "react";

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState("");

  // Handle scrolling and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "how-it-works",
        "find-expert",
        "featured",
        "claim-offers",
        "faqs",
      ];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-0 top-1/4 z-50  p-4 rounded-lg hidden md:block">
      <ul className="space-y-3">
        {[
          { id: "how-it-works", label: "How It Works" },
          { id: "find-expert", label: "Find an Expert" },
          { id: "featured", label: "Featured" },
          { id: "claim-offers", label: "Claim Offers" },
          { id: "faqs", label: "FAQs" },
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 w-full rounded-full text-lg font-semibold ${
                activeSection === item.id
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StickyNav;

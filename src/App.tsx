import { useState, useEffect } from "react";
import ReloadIndicator from "./components/ui/ReloadIndicator";
import { LandingPage } from "./pages/Landing/LandingPage";
import { OurStoryPage } from "./pages/Landing/OurStoryPage";
import { PrivacyPage } from "./pages/Landing/PrivacyPage";
import { TrackerApp } from "./TrackerApp";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [loading, setLoading] = useState(true);

  // Show loading on first render or page change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // adjust duration
    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={setCurrentPage} />;
      case "our-story":
        return <OurStoryPage onNavigate={setCurrentPage} />;
      case "privacy":
        return <PrivacyPage onNavigate={setCurrentPage} />;
      case "tracker":
        return <TrackerApp />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {loading && <ReloadIndicator />}
      {!loading && renderPage()}
    </div>
  );
}

export default App;

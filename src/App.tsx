import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import CustomCursor from "./components/ui/CustomCursor";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProjectDetail from "./pages/ProjectDetail";

// 배경 컴포넌트 분리
const Background = () => (
  <div className="fixed inset-0 -z-10">
    {/* 격자 */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
    {/* 비네팅 */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.85) 100%)",
      }}
    />
  </div>
);

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Routes>
        {/* 메인 페이지 */}
        <Route
          path="/"
          element={
            <>
              <Background />
              <main className="relative min-h-screen w-full flex flex-col items-center">
                <Header />
                <Hero />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </main>
            </>
          }
        />

        {/* 프로젝트 디테일 */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;

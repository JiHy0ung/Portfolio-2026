import Hero from "./components/sections/Hero";
import CustomCursor from "./components/ui/CustomCursor";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <CustomCursor />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        {/* GRID */}
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

        {/* VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <main className="relative min-h-screen w-full flex flex-col items-center">
        <Header />
        <Hero />
      </main>
    </>
  );
}

export default App;

import Hero from "./components/sections/Hero";
import CustomCursor from "./components/ui/CustomCursor";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen w-full flex flex-col items-center">
        <Header />
        <Hero />
      </main>
    </>
  );
}

export default App;

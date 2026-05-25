import AboutUs from "~/components/AboutUs";
import FullScreenHeroVideo from "~/components/FullScreenHeroVideo";

export default function Home() {
  return (
    <main className="flex flex-col animate-fade-in items-center">
      <FullScreenHeroVideo />
      <div className="flex flex-col grow px-6 md:px-16 w-full max-w-6xl">
        <AboutUs />
      </div>
    </main>
  );
}

export default function FullScreenHeroVideo() {
  return (
    <div
      id="full-screen-hero-video"
      className="flex h-screen min-h-screen relative overflow-hidden w-full"
    >
      <video
        className="h-full w-full grow object-cover"
        src="/homeHero.mov"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute flex flex-col w-full h-full justify-center items-center bg-black/55">
        <div className="flex flex-col grow justify-center mt-20 md:mt-24 px-6">
          <h1 className={[
            "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
            "text-center uppercase text-bone",
            "font-chevara font-bold tracking-tight",
            "[text-shadow:2px_2px_8px_rgba(0,0,0,0.5)]",
          ].join(" ")}>
            Production Painting &amp; Decorating,&nbsp;Inc.
          </h1>
        </div>
      </div>
    </div>
  );
}

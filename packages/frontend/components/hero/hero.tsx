export type HeroProps = {
  title: string;
  subTitle: string;
  image: {
    src: string;
    alt: string;
  };
};

export function Hero({ title, subTitle, image }: HeroProps) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">{subTitle}</p>
              <div className="mt-10 flex items-center gap-x-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <picture>
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={image.src}
            alt={image.alt}
          />
        </picture>
      </div>
    </div>
  );
}

export default Hero;

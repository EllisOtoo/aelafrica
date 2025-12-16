import Image from "next/image";

const FounderSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-16">
        {/* Text Content */}
        <div className="flex flex-col gap-6 lg:max-w-xl">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center rounded-full border border-[#F0F0F0] bg-[#FAFAFA] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4511]">
              Leadership
            </span>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1F140C] sm:text-4xl lg:text-[42px]">
              Meet Our Founder
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-base leading-relaxed text-[#666666] sm:text-lg">
            <p>
              With over 40 years of hands-on experience in the construction
              industry,{" "}
              <strong className="font-semibold text-[#222222]">
                Founder Name
              </strong>{" "}
              has been a pioneering force in plumbing and civil engineering across
              Ghana.
            </p>
            <p>
              His vision was to create a firm that didn&apos;t just build structures, but
              built trust—through uncompromising quality, safety, and a deep
              commitment to national development. Today, that vision drives every
              project Alpha Engineering undertakes.
            </p>
          </div>
          <div className="mt-2 flex flex-col gap-1 border-l-2 border-[#EAA315] pl-5">
            <span className="text-lg font-bold text-[#1F140C] sm:text-xl">
              Founder Name
            </span>
            {/* <span className="text-sm font-medium uppercase tracking-wider text-[#7F4511]">
              Managing Director
            </span> */}
          </div>
        </div>

        {/* Image / Visual */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:flex-1">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#F8F6F2] shadow-2xl">
            {/* Placeholder for Founder Image */}
            <div className="flex h-full w-full items-center justify-center bg-[#E5E5E5] text-[#999999]">
              <div className="flex flex-col items-center gap-4 p-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-50"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className="text-sm font-medium uppercase tracking-widest">
                  Founder Image
                  <br />
                  <span className="text-xs normal-case opacity-75">
                    (To be replaced)
                  </span>
                </div>
              </div>
            </div>
            {/* 
            Uncomment when image is available:
            <Image
              src="/images/founder.jpg" 
              alt="Portrait of Ing. [Founder Name]"
              fill
              className="object-cover"
            /> 
            */}
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full border border-[#EAA315]/20 bg-[#EAA315]/10 lg:-bottom-10 lg:-right-10 lg:h-48 lg:w-48" />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

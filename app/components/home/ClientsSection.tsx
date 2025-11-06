"use client";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";

const CLIENT_LOGOS = [
  { name: "World Trade Centre Accra" },
  { name: "Société Générale" },
  { name: "Ministry of Youth & Sports" },
  { name: "Bank of Ghana" },
  { name: "Ashesi University" },
  { name: "Ghana Airports Company" },
  { name: "Ghana Ports & Harbours Authority" },
  { name: "Vodafone Ghana" },
  { name: "Databank Group" },
  { name: "Stanbic Bank" },
];

const baseSliderOptions: SplideProps["options"] = {
  type: "loop",
  autoplay: true,
  interval: 2600,
  speed: 800,
  perPage: 5,
  perMove: 1,
  gap: "1.5rem",
  arrows: false,
  pagination: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  drag: "free",
  rewind: false,
  breakpoints: {
    1280: { perPage: 4, gap: "1.25rem" },
    1024: { perPage: 3, gap: "1.25rem" },
    768: { perPage: 3, gap: "1rem" },
    640: { perPage: 2, gap: "1rem" },
  },
};

const ClientsSection = () => {
  const midIndex = Math.ceil(CLIENT_LOGOS.length / 2);
  const topRow = CLIENT_LOGOS.slice(0, midIndex);
  const bottomRow = CLIENT_LOGOS.slice(midIndex);

  return (
    <section className="text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 py-20 sm:px-8 md:px-10 lg:px-16 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#EAA315] px-6 py-12 text-[#2C1404] sm:px-10 lg:px-16 lg:py-16">
          <svg
            className="pointer-events-none absolute -right-8 -top-10 hidden lg:block"
            width="161"
            height="134"
            viewBox="0 0 161 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M160.636 0.771362L0.63623 132.771"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="2"
            />
            <path
              d="M160.636 66.7714L60.6362 132.771"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="2"
            />
            <path
              d="M0.63623 132.771H160.636"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="2"
            />
          </svg>
          <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#C78612] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em]">
            Clients
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-[#492505] sm:text-base">
            We have built long-term, satisfactory relationships with clients and
            stakeholders across the public and private sectors. Our portfolio is
            a testament to our dependability and commitment.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <Splide
            options={{ ...baseSliderOptions, direction: "ltr" }}
            className="clients-splide"
            aria-label="Clients marquee row"
          >
            {topRow.map((client) => (
              <SplideSlide key={`client-top-${client.name}`}>
                <div className="flex h-24 w-full items-center justify-center rounded-2xl border border-black/5  px-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#2C1404] sm:h-24 sm:text-sm lg:h-28">
                  <span className="mx-auto max-w-[160px] text-balance">
                    {client.name}
                  </span>
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <Splide
            options={{ ...baseSliderOptions, direction: "rtl" }}
            className="clients-splide"
            aria-label="Clients marquee row alternate"
          >
            {bottomRow.map((client) => (
              <SplideSlide key={`client-bottom-${client.name}`}>
                <div className="flex h-24 w-full items-center justify-center rounded-2xl border border-black/5 px-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#2C1404] sm:h-24 sm:text-sm lg:h-28">
                  <span className="mx-auto max-w-[160px] text-balance">
                    {client.name}
                  </span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

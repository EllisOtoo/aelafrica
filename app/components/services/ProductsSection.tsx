import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    title: "GRP ONE-PIECE WATER TANKS",
    label: "Certified Quality",
    description:
      "GRP one-piece tanks are manufactured to BS13280:2001 standard using high quality glass reinforced polyester (GRP) resins. The tanks comply with UK water supply regulations 1999 and have been tested and approved by WRAS.",
    image: "/images/products/GRP ONE-PIECE TANKS.jpg",
  },
  {
    title: "EPOXY COATED STEEL TANKS",
    label: "efusion® Technology",
    description:
      "efusion® is the brand name for Balmoral Tanks’ in-house steel panel epoxy coating. This fusion bonded epoxy treatment provides a highly resistant coating to the tank panels. Benefits include higher durability to impact, lower cost manufacturing, and a lower carbon footprint. Tested to ISO 28765:2016, AWWA D103-19, and NSF®-61 standards.",
    image: "/images/products/EPOXY COATED STEEL TANKS.jpg",
  },
  {
    title: "GLASS FUSED TO STEEL TANKS",
    label: "Vitreous Enamel",
    description:
      "Balmoral’s enamel system combines the strength of steel with the corrosion and scratch resistance of glass. Fired at 830-850°C, it forms an interfacial adhesion layer for optimum purity. Tough, resilient, and chemically inactive, it remains unaffected by UV light.",
    image: "/images/products/GLASS FUSED TO STEEL TANKS.jpg",
  },
  {
    title: "GRP SECTIONAL WATER TANKS",
    label: "Versatile Storage",
    description:
      "Sectional tanks ranging from 1m³-10,000m³ capacity, erected to a height of 4m. Designed to BSEN 13280 standards with WRAS approval for potable water. Panels are fully tested to resist pressures in excess of six times their working pressure.",
    image: "/images/products/GRP SECTIONAL TANKS.jpg",
  },
  {
    title: "ROOF STRUCTURES",
    label: "Custom Engineering",
    description:
      "Wide range of roof options from simple debris-type to gas-tight digester options. Solutions include fusion bonded epoxy, stainless steel, aluminium geodesic domes, and GRP decks. All structures are designed in-house to control delivery and service demands.",
    image: "/images/products/ROOF STRUCTURES.jpg",
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-[#F5EFE8] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#A5621C]">
            Our Products
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#221710] sm:text-4xl">
            Water Storage & Infrastructure Solutions
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="flex flex-col overflow-hidden bg-white shadow-sm lg:flex-row min-h-[400px]"
            >
              {/* Left Side: Title & Action */}
              <div className="flex flex-col justify-between p-8 lg:w-5/12 lg:border-r lg:border-[#EEEEEE] lg:p-12">
                <div>
                  <h3 className="text-3xl font-bold leading-tight text-[#1F140C] lg:text-4xl">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-wider text-[#AD7A50]">
                    {product.label}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-12 inline-flex w-fit items-center justify-center border-2 border-[#1F140C] px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#1F140C] transition hover:bg-[#EAA315] hover:border-[#EAA315] hover:text-[#512807] sm:w-full lg:w-fit"
                >
                  Request Quote
                </Link>
              </div>

              {/* Right Side: Description & Image */}
              <div className="relative flex flex-col justify-center bg-[#FDFCFB] lg:w-7/12">
                <div className="flex h-full flex-col">
                  {/* Image Header? Or Image embedded. Let's do half image half text for a "Premium" look within the split focus */}
                  <div className="relative h-64 w-full lg:h-72">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="mb-6 h-px w-16 bg-[#EAA315]" />
                    <p className="max-w-xl text-lg leading-relaxed text-[#4A3526]">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;


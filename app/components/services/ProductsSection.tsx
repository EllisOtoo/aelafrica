import Link from "next/link";
import { ArrowRight, Package, Zap, Droplets, Fan } from "lucide-react";

const PRODUCTS = [
  {
    category: "Lorem Ipsum Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: Droplets,
    items: ["Lorem Booster", "Ipsum Submersible", "Dolor Pump Set"],
  },
  {
    category: "Dolor Sit Collection",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    icon: Fan,
    items: ["Lorem Unit", "Ipsum Handling", "Dolor Exhaust"],
  },
  {
    category: "Amet Consectetur Gear",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    icon: Zap,
    items: ["Lorem Panel", "Ipsum Inverter", "Dolor Switch"],
  },
  {
    category: "Sed Do Essentials",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    icon: Package,
    items: ["Lorem Ware", "Ipsum Piping", "Dolor Tank"],
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-[#F8F6F2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 sm:px-8 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#7F4511]">
              Equipment & Supply
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F140C] sm:text-4xl">
              High-Performance Products
            </h2>
            {/*  <p className="mt-4 text-base leading-relaxed text-[#666666]">
              Beyond installation, we supply top-tier equipment ensuring your
              systems run efficiently with durable, certified components.
            </p> */}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#7F4511] transition hover:text-[#5C2E0A]"
          >
            Inquire About Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.category}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5EFE8] text-[#7F4511] group-hover:bg-[#7F4511] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#1F140C]">
                  {product.category}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                  {product.description}
                </p>
                <div className="mt-auto pt-6">
                  <ul className="space-y-2 border-t border-[#F0F0F0] pt-4 text-xs font-medium uppercase tracking-wide text-[#888888]">
                    {product.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#EAA315]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

import Link from "next/link";

const TopContactBar = () => {
  return (
    <div className="w-full  bg-[#7F4511]  text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row text-xs font-medium tracking-wide uppercase">
        <div className="flex items-center gap-6">
          <Link
            href="tel:0303973857"
            className="flex items-center gap-2 hover:text-[#F3C15B] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            030 397 3857
          </Link>
          <Link
            href="mailto:info@ael.africa"
            className="flex items-center gap-2 hover:text-[#F3C15B] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            info@ael.africa
          </Link>
        </div>
        <div className="hidden sm:block text-white/60">
          <span>Engineering Excellence Since 1981</span>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;

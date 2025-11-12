const NewsletterSignup = () => {
  return (
    <section className=" text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 rounded-3xl bg-[#5B2C09] px-6 py-10 shadow-lg shadow-black/10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="space-y-3 text-center lg:max-w-xl lg:text-left">
            <p className="text-xs uppercase tracking-[0.32em] text-[#F3C15B]">
              Stay informed
            </p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Join our newsletter for project updates
            </h2>
            <p className="text-sm text-white/80">
              Monthly highlights on our engineering projects, innovations, and
              company news—no spam, ever.
            </p>
          </div>
          <form
            className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:max-w-xl"
            noValidate
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email here"
              className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#F3C15B] focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#F3C15B] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#2C1404] transition hover:bg-[#FFD36B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join
            </button>
          </form>
        </div>
        <p className="mt-4 text-xs text-white/70">
          By subscribing, you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;

 "use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

const contactDetails = [
  {
    title: "Call Us",
    detail: "030 397 3857",
    description: "Speak directly with our coordination team.",
  },
  {
    title: "Email Us",
    detail: "info@ael.africa",
    description: "alphaengacc@gmail.com",
  },
  {
    title: "Our Office",
    detail: "Clinton Lane, Shiashie",
    description: "Accra, Ghana",
  },
];

const contactInquiryOptions = [
  "Project Inquiry",
  "Service Consultation",
  "Vendor Partnership",
  "General Question",
];

const servicesOffered = [
  "Plumbing & Fire Fighting",
  "Civil & Structural Engineering",
  "Project Management",
];

const quoteServices = [
  "Sewer Maintenance",
  "Drain Plumbing",
  "Water-Line Repair",
  "Bathroom Plumbing",
  "Kitchen Plumbing",
  "Other",
];

const timelineOptions = ["1-2 weeks", "1 month", "2-3 months", "Flexible"];
const budgetOptions = [
  "Under GHS 1,000",
  "GHS 1,000 - 5,000",
  "GHS 5,000 - 10,000",
  "GHS 10,000 - 25,000",
  "Over GHS 25,000",
  "To be discussed",
];
const urgencyOptions = [
  "Critical (24 hours)",
  "High (1-3 days)",
  "Medium (1-2 weeks)",
  "Low (Flexible)",
];
const propertyTypes = ["Residential", "Commercial", "Industrial", "Government", "Other"];

type ContactFormValues = {
  inquiryPurpose: string;
  serviceInterest: string;
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
};

type QuoteFormValues = {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectDescription: string;
  timeline?: string;
  budget?: string;
  urgency?: string;
  propertyType?: string;
};

const tabs = [
  { id: "contact", label: "Contact Us" },
  { id: "quote", label: "Request a Quote" },
];

const ContactPageClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentTab = useMemo(() => {
    const param = searchParams?.get("tab");
    return tabs.some((tab) => tab.id === param) ? (param as "contact" | "quote") : "contact";
  }, [searchParams]);

  const updateTab = (tab: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("tab", tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      inquiryPurpose: "",
      serviceInterest: "",
      fullName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const {
    register: registerQuote,
    handleSubmit: handleSubmitQuote,
    formState: { errors: quoteErrors },
  } = useForm<QuoteFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceRequired: "",
      projectDescription: "",
      timeline: "",
      budget: "",
      urgency: "",
      propertyType: "",
    },
  });

  const onSubmitContact = (values: ContactFormValues) => {
    console.log("Contact submission", values);
  };

  const onSubmitQuote = (values: QuoteFormValues) => {
    console.log("Quote submission", values);
  };

  return (
    <div className="bg-[#F5EFE8] text-[#2C1404]">
      <section className="mx-auto w-full max-w-5xl px-5 py-16 text-center sm:px-8 md:px-10 lg:px-0">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-base text-[#5c3410] sm:text-lg">
          Tell us about your upcoming project, and our team will respond within one business day.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {contactDetails.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white px-6 py-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A5621C]">
                {item.title}
              </p>
              <p className="mt-3 text-lg font-semibold">{item.detail}</p>
              <p className="text-sm text-[#6c5034]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 pb-20 sm:px-8 md:px-10 lg:px-0">
        <div className="rounded-[36px] border border-[#E5D5C2] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(44,20,4,0.08)] sm:px-10 lg:px-14">
          <div className="flex flex-wrap gap-4 border-b border-[#F1E6D8] pb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => updateTab(tab.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.24em] transition ${
                  currentTab === tab.id
                    ? "bg-[#7F4511] text-white"
                    : "bg-transparent text-[#7F4511] hover:bg-[#F8E9D7]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {currentTab === "contact" ? (
            <form
              className="mt-8 grid gap-8 md:grid-cols-2"
              onSubmit={handleSubmitContact(onSubmitContact)}
              noValidate
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="inquiryPurpose" className="text-sm font-semibold text-[#6B4A31]">
                  Inquiry Purpose*
                </label>
                <select
                  id="inquiryPurpose"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...registerContact("inquiryPurpose", { required: "Please select a purpose." })}
                >
                  <option value="">Choose one option...</option>
                  {contactInquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {contactErrors.inquiryPurpose && (
                  <p className="text-xs text-[#B0412C]">{contactErrors.inquiryPurpose.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="serviceInterest" className="text-sm font-semibold text-[#6B4A31]">
                  Service of Interest*
                </label>
                <select
                  id="serviceInterest"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...registerContact("serviceInterest", { required: "Select a service." })}
                >
                  <option value="">e.g., Civil Engineering...</option>
                  {servicesOffered.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {contactErrors.serviceInterest && (
                  <p className="text-xs text-[#B0412C]">{contactErrors.serviceInterest.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-sm font-semibold text-[#6B4A31]">
                  Full Name*
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerContact("fullName", { required: "Full name is required." })}
                />
                {contactErrors.fullName && (
                  <p className="text-xs text-[#B0412C]">{contactErrors.fullName.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-[#6B4A31]">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerContact("email", { required: "Email is required." })}
                />
                {contactErrors.email && (
                  <p className="text-xs text-[#B0412C]">{contactErrors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-semibold text-[#6B4A31]">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Enter your organization name..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerContact("company")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-[#6B4A31]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerContact("phone")}
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-[#6B4A31]">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Enter your message or project details here..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerContact("message", { required: "Message is required." })}
                />
                {contactErrors.message && (
                  <p className="text-xs text-[#B0412C]">{contactErrors.message.message}</p>
                )}
              </div>

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#7F4511] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9B5B1F]"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          ) : (
            <form
              className="mt-8 grid gap-8 md:grid-cols-2"
              onSubmit={handleSubmitQuote(onSubmitQuote)}
              noValidate
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="quote-fullName" className="text-sm font-semibold text-[#6B4A31]">
                  Full Name*
                </label>
                <input
                  id="quote-fullName"
                  type="text"
                  placeholder="Enter your full name..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("fullName", { required: "Full name is required." })}
                />
                {quoteErrors.fullName && (
                  <p className="text-xs text-[#B0412C]">{quoteErrors.fullName.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="quote-email" className="text-sm font-semibold text-[#6B4A31]">
                  Email Address*
                </label>
                <input
                  id="quote-email"
                  type="email"
                  placeholder="Enter your email address..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("email", { required: "Email is required." })}
                />
                {quoteErrors.email && (
                  <p className="text-xs text-[#B0412C]">{quoteErrors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="quote-phone" className="text-sm font-semibold text-[#6B4A31]">
                  Phone Number*
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  placeholder="Enter your phone number..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("phone", { required: "Phone number is required." })}
                />
                {quoteErrors.phone && (
                  <p className="text-xs text-[#B0412C]">{quoteErrors.phone.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="serviceRequired" className="text-sm font-semibold text-[#6B4A31]">
                  Service Required*
                </label>
                <select
                  id="serviceRequired"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("serviceRequired", { required: "Select a service." })}
                >
                  <option value="">Select a service</option>
                  {quoteServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {quoteErrors.serviceRequired && (
                  <p className="text-xs text-[#B0412C]">{quoteErrors.serviceRequired.message}</p>
                )}
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label htmlFor="projectDescription" className="text-sm font-semibold text-[#6B4A31]">
                  Project Description*
                </label>
                <textarea
                  id="projectDescription"
                  rows={4}
                  placeholder="Please describe your project in detail..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("projectDescription", { required: "Description is required." })}
                />
                {quoteErrors.projectDescription && (
                  <p className="text-xs text-[#B0412C]">
                    {quoteErrors.projectDescription.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="timeline" className="text-sm font-semibold text-[#6B4A31]">
                  Timeline
                </label>
                <select
                  id="timeline"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("timeline")}
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-sm font-semibold text-[#6B4A31]">
                  Budget Range
                </label>
                <select
                  id="budget"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("budget")}
                >
                  <option value="">Select budget</option>
                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="urgency" className="text-sm font-semibold text-[#6B4A31]">
                  Urgency Level
                </label>
                <select
                  id="urgency"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("urgency")}
                >
                  <option value="">Select urgency</option>
                  {urgencyOptions.map((urgency) => (
                    <option key={urgency} value={urgency}>
                      {urgency}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label htmlFor="propertyType" className="text-sm font-semibold text-[#6B4A31]">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...registerQuote("propertyType")}
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#7F4511] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9B5B1F]"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPageClient;

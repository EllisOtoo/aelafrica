 "use client";

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
    description: "info@ael.africa",
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

type UnifiedFormValues = {
  inquiryPurpose: string;
  serviceInterest: string;
  fullName: string;
  email: string;
  company?: string;
  phone: string;
  serviceRequired: string;
  projectDescription: string;
  timeline?: string;
  budget?: string;
  urgency?: string;
  propertyType?: string;
  message: string;
};

const ContactPageClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UnifiedFormValues>({
    defaultValues: {
      inquiryPurpose: "",
      serviceInterest: "",
      fullName: "",
      email: "",
      company: "",
      phone: "",
      serviceRequired: "",
      projectDescription: "",
      timeline: "",
      budget: "",
      urgency: "",
      propertyType: "",
      message: "",
    },
  });

  const onSubmitForm = (values: UnifiedFormValues) => {
    console.log("Unified contact submission", values);
  };

  return (
    <div className="bg-[#F5EFE8] text-[#2C1404]">
      <section className="mx-auto w-full max-w-5xl px-5 py-16 text-center sm:px-8 md:px-10 lg:px-0">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-base text-[#5c3410] sm:text-lg">
          Tell us about your upcoming project, and our team will respond shortly.
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
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F1E6D8] pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#A5621C]">
                How can we help?
              </p>
              <h2 className="text-2xl font-semibold text-[#2C1404]">Tell us about your needs</h2>
              <p className="text-sm text-[#6c5034]">
                One form for general inquiries and quotes—share the details and we will route it to
                the right team.
              </p>
            </div>
          </div>

          <form className="mt-8 grid gap-8" onSubmit={handleSubmit(onSubmitForm)} noValidate>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-sm font-semibold text-[#6B4A31]">
                  Full Name*
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...register("fullName", { required: "Full name is required." })}
                />
                {errors.fullName && <p className="text-xs text-[#B0412C]">{errors.fullName.message}</p>}
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
                  {...register("email", { required: "Email is required." })}
                />
                {errors.email && <p className="text-xs text-[#B0412C]">{errors.email.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-[#6B4A31]">
                  Phone Number*
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...register("phone", {
                    required: "Phone number helps us call you back quickly.",
                  })}
                />
                {errors.phone && <p className="text-xs text-[#B0412C]">{errors.phone.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-semibold text-[#6B4A31]">
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Enter your organization name..."
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                  {...register("company")}
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="inquiryPurpose" className="text-sm font-semibold text-[#6B4A31]">
                  Inquiry Purpose*
                </label>
                <select
                  id="inquiryPurpose"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...register("inquiryPurpose", { required: "Please select a purpose." })}
                >
                  <option value="">Choose one option...</option>
                  {contactInquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.inquiryPurpose && (
                  <p className="text-xs text-[#B0412C]">{errors.inquiryPurpose.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="serviceInterest" className="text-sm font-semibold text-[#6B4A31]">
                  Service of Interest*
                </label>
                <select
                  id="serviceInterest"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...register("serviceInterest", { required: "Select a service." })}
                >
                  <option value="">e.g., Civil Engineering...</option>
                  {servicesOffered.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceInterest && (
                  <p className="text-xs text-[#B0412C]">{errors.serviceInterest.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="serviceRequired" className="text-sm font-semibold text-[#6B4A31]">
                  Specific Service Needed*
                </label>
                <select
                  id="serviceRequired"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...register("serviceRequired", {
                    required: "Select a service so we scope your quote.",
                  })}
                >
                  <option value="">Select a service</option>
                  {quoteServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceRequired && (
                  <p className="text-xs text-[#B0412C]">{errors.serviceRequired.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="propertyType" className="text-sm font-semibold text-[#6B4A31]">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...register("propertyType")}
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="timeline" className="text-sm font-semibold text-[#6B4A31]">
                  Timeline
                </label>
                <select
                  id="timeline"
                  className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] focus:border-[#7F4511] focus:outline-none"
                  {...register("timeline")}
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
                  {...register("budget")}
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
                  {...register("urgency")}
                >
                  <option value="">Select urgency</option>
                  {urgencyOptions.map((urgency) => (
                    <option key={urgency} value={urgency}>
                      {urgency}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="projectDescription" className="text-sm font-semibold text-[#6B4A31]">
                Project Details*
              </label>
              <textarea
                id="projectDescription"
                rows={4}
                placeholder="Please describe your project or request in detail..."
                className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                {...register("projectDescription", {
                  required: "Tell us about the project so we can quote accurately.",
                })}
              />
              {errors.projectDescription && (
                <p className="text-xs text-[#B0412C]">{errors.projectDescription.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-[#6B4A31]">
                Additional Notes
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Share any other context, files, or timelines..."
                className="rounded-2xl border border-[#E5D5C2] bg-[#FBF7F3] px-4 py-3 text-sm text-[#2C1404] placeholder:text-[#9B8A7C] focus:border-[#7F4511] focus:outline-none"
                {...register("message")}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#7F4511] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9B5B1F]"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPageClient;

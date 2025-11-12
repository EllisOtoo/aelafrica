import { Suspense } from "react";
import ContactPageClient from "./ContactPageClient";

const ContactPageFallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center bg-[#F5EFE8] text-[#7F4511]">
    <p className="text-xs font-semibold uppercase tracking-[0.3em]">Loading contact page...</p>
  </div>
);

const ContactPage = () => {
  return (
    <Suspense fallback={<ContactPageFallback />}>
      <ContactPageClient />
    </Suspense>
  );
};

export default ContactPage;

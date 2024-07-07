import Seo from "@/components/Seo";
import BaseLayout from "@/layouts/BaseLayout";
import React from "react";
import seo from "content/seo/contact-us-seo.json";
import Contact from "@/modules/Contact";

const ContactUsPage = () => {
  return (
    <BaseLayout>
      <Seo {...seo} />
      <Contact />
    </BaseLayout>
  );
};

export default ContactUsPage;

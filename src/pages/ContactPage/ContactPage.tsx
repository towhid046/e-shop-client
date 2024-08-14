import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

const ContactPage: React.FC = () => {
  useScrollToTop();
  return (
    <h2 className="font-semibold min-h-[85vh] text-3xl flex justify-center items-center">
      Contact Page
    </h2>
  );
};

export default ContactPage;

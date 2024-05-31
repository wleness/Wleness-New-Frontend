"use client";
import Header from "@components/Corporate/Header";
import WellbeingHub from "@components/Corporate/WellbeingHub";
import WhyCorporate from "@components/Corporate/WhyCorporate";
import CorporateForm from "@components/Forms/CorporateForm";
import { useState } from "react";

export default function page() {
  const [corporateForm, setCorporateForm] = useState(false);

  // Toggle form
  const toggleForm = () => {
    setCorporateForm(!corporateForm);
  };
  return (
    <>
      <Header toggleForm={toggleForm} />
      <WhyCorporate toggleForm={toggleForm} />
      <WellbeingHub toggleForm={toggleForm} />
      <CorporateForm isOpen={corporateForm} onClose={toggleForm} />
    </>
  );
}

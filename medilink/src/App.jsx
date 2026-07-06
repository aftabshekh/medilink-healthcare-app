import { useState, useEffect } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Specialties from "./components/Specialties";
import Doctors from "./components/Doctors";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const [modal, setModal] = useState(null);
  const [doctorName, setDoctor] = useState("");
  const [toast, setToast] = useState("");
  const [filter, setFilter] = useState("all");

  const openModal = (type) => {
    setModal(type);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = "";
  };

  const handleBook = (name) => {
    setDoctor(name);
    openModal("booking");
  };

  const handleConfirm = (msg) => {
    closeModal();
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Stats />
      <Specialties onFilter={setFilter} />
      <Doctors filter={filter} onBook={handleBook} />
      <HowItWorks />
      <Testimonials />
      <CTABanner onOpenModal={openModal} />
      <Footer />

      {modal && (
        <Modal
          type={modal}
          doctorName={doctorName}
          onClose={closeModal}
          onConfirm={handleConfirm}
        />
      )}

      {toast && <div className="toast show">{toast}</div>}
    </>
  );
}

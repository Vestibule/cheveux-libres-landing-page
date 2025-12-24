import React, { useState } from "react";
import { Navbar7 } from "./components/Navbar7";
import { Header19 } from "./components/Header19";
import { Testimonials } from "./components/Testimonials";
import { Layout140 } from "./components/Layout140";
import { Cta57 } from "./components/Cta57";
import { Footer4 } from "./components/Footer4";
import { CallbackModal } from "./components/CallbackModal";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header19 onOpenModal={() => setIsModalOpen(true)} />
      <Testimonials />
      <Layout140 />
      <Cta57 onOpenModal={() => setIsModalOpen(true)} />
      <Footer4 />
      <CallbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

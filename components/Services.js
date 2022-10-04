import React from "react";
import servicesStyles from "../styles/components/Services.module.scss";
import ServiceCard from "./ServiceCard";
import vanAbierta from "../assets/van-abierta.jpg";

const Services = () => {
  return (
    <section className={servicesStyles.serviceSection}>
      <h1 className={servicesStyles.title}>Nuestros Servicios</h1>

      <ServiceCard
        img={vanAbierta.src}
        title="Mudanzas"
        paragraph="Realizamos mudanzas generales, mudanzas para particulares y mudanzas para oficinas."
      />
    </section>
  );
};

export default Services;

import React from "react";
import Meta from "../components/Meta";
import nosotrosStyles from "../styles/pages/Nosotros.module.scss";

const nosotros = () => {
  return (
    <>
      <Meta title="Sobre Nosotros" />
      <div
        className={nosotrosStyles.container}
        description="Realizamos mudanzas tanto de particulares como de compañías con
            transiciones seguras, fluidas y rápidas. Donde quiera y cuando
            quiera mudarse, estaremos allí para asegurarnos de que no tenga que
            preocuparse por nada."
      >
        <div>
          <h2>Juank Transportes Ligeros tu socio de confianza</h2>
          <p>
            Ideal para trasladar todas sus pertenencias a un nuevo hogar o
            destino. Como proveedor de servicios de reubicación y mudanzas para
            mudanzas corta y de larga distancia, operamos a través de nuestra
            oficina en Zaragoza.
          </p>
          <p>
            Realizamos mudanzas tanto de particulares como de compañías con
            transiciones seguras, fluidas y rápidas. Donde quiera y cuando
            quiera mudarse, estaremos allí para asegurarnos de que no tenga que
            preocuparse por nada.
          </p>
          <p>Servicios de mudanza adaptados a sus necesidades específicas.</p>
          <p>
            Nuestra misión es proporcionar servicios de mudanzas integradas y de
            alta calidad que mejoren la continuidad comercial, y el costo de
            nuestros clientes.
          </p>
          <p>
            Los valores de nuestra empresa para la interacción y cooperación con
            nuestros clientes, socios y proveedores son la confianza y la
            responsabilidad, el espíritu de equipo, la flexibilidad, la calidad
            y la conciencia de costes. Estos son esenciales para crear y
            mantener relaciones duraderas con beneficios mutuos.
          </p>
        </div>

        <div>
          <h3>Contáctanos</h3>
          <p>¿Quieres hablar?</p>
          <div>
            <a
              href="https://wa.me/34664067981"
              target="_blank"
              rel="noreferrer"
            >
              Chatea con nosotros <span>&gt;</span>
            </a>
            {""}
            <p className={nosotrosStyles.letterO}>ó</p>
            {""}
            <a href="emailto:indidseo@gmail.com">
              Envíanos un correo <span>&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default nosotros;

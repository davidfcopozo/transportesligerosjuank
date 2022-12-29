import React from "react";
import Meta from "../components/Meta";
import terminosStyles from "../styles/pages/Terminos.module.scss";

const terminos = () => {
  return (
    <>
      <Meta
        title="Terminos y Condiciones"
        description="Terminos y Condiciones"
      />
      <div className={terminosStyles.container}>
        <h2>INFORMACIÓN AL USUARIO</h2>
        <p>¿Quién es el responsable del tratamiento de tus datos personales?</p>
        <p>
          Juan José Lardies es el RESPONSABLE del tratamiento de los datos
          personales del USUARIO y le informa de que estos datos serán tratados
          de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27
          de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre
          (LOPDGDD).
        </p>
        <p>¿Para qué tratamos tus datos personales y por qué lo hacemos?</p>
        <p>
          Según el formulario donde hayamos obtenido sus datos personales, los
          trataremos de manera confidencial para alcanzar los siguientes fines:
        </p>
        <ul>
          <li>
            En el formulario Contacto Dar respuesta a las consultas o cualquier
            tipo de petición que sea realizada por el usuario a través de
            cualquiera de las formas de contacto que se ponen a su disposición
            en la página web del responsable. (por el interés legítimo del
            responsable, art. 6.1.f GDPR)
          </li>
          <li>
            Realizar análisis estadísticos y estudios de mercado. (por el
            interés legítimo del responsable, art. 6.1.f GDPR)
          </li>
        </ul>
        <p>En el formulario Solicita presupuesto</p>
        <ul>
          <li>
            Enviar presupuestos comerciales sobre productos y servicios. (para
            la ejecución de un contrato o precontrato, 6.1.b GDPR)
          </li>
        </ul>
        <p>¿Durante cuánto tiempo guardaremos tus datos personales?</p>
        <p>
          Se conservarán durante no más tiempo del necesario para mantener el
          fin del tratamiento o existan prescripciones legales que dictaminen su
          custodia y cuando ya no sea necesario para ello, se suprimirán con
          medidas de seguridad adecuadas para garantizar la anonimización de los
          datos o la destrucción total de los mismos.
        </p>
        <p>¿A quién facilitamos sus datos personales?</p>
        <p>
          No está prevista ninguna comunicación de datos personales a terceros
          salvo, si fuese necesario para el desarrollo y ejecución de las
          finalidades del tratamiento, a nuestros proveedores de servicios
          relacionados con comunicaciones, con los cuales el RESPONSABLE tiene
          suscritos los contratos de confidencialidad y de encargado de
          tratamiento exigidos por la normativa vigente de privacidad.
        </p>
        <p>¿Cuáles son tus derechos?</p>
        <ul>
          Los derechos que asisten al USUARIO son:
          <li> Derecho a retirar el consentimiento en cualquier momento.</li>
          <li>
            Derecho de acceso, rectificación, portabilidad y supresión de sus
            datos, y de limitación u oposición a su tratamiento.
          </li>
          <li>
            Derecho a presentar una reclamación ante la autoridad de control
            (www.aepd.es) si considera que el tratamiento no se ajusta a la
            normativa vigente.
          </li>
        </ul>
        <p>Datos de contacto para ejercer sus derechos:</p>
        <p>JUAN JOSE LARDIES</p>
        {/* <p> ZARAGOZA (Zaragoza)</p> */}
        <p>E-mail: juanjolar30@gmail.com</p>
        <h3>
          CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL
          USUARIO
        </h3>
        <p>
          Los USUARIOS, mediante la marcación de las casillas correspondientes y
          la entrada de datos en los campos, marcados con un asterisco (*) en el
          formulario de contacto o presentados en formularios de descarga,
          aceptan expresamente y de forma libre e inequívoca, que sus datos son
          necesarios para atender su petición, por parte del prestador, siendo
          voluntaria la inclusión de datos en los campos restantes. El USUARIO
          garantiza que los datos personales facilitados al RESPONSABLE son
          veraces y se hace responsable de comunicar cualquier modificación de
          los mismos.
        </p>
        <p>
          El RESPONSABLE informa de que todos los datos solicitados a través del
          sitio web son obligatorios, ya que son necesarios para la prestación
          de un servicio óptimo al USUARIO. En caso de que no se faciliten todos
          los datos, no se garantiza que la información y servicios facilitados
          sean completamente ajustados a sus necesidades.
        </p>
        <h3>MEDIDAS DE SEGURIDAD</h3>
        <p>
          Que de conformidad con lo dispuesto en las normativas vigentes en
          protección de datos personales, el RESPONSABLE está cumpliendo con
          todas las disposiciones de las normativas GDPR y LOPDGDD para el
          tratamiento de los datos personales de su responsabilidad, y
          manifiestamente con los principios descritos en el artículo 5 del
          GDPR, por los cuales son tratados de manera lícita, leal y
          transparente en relación con el interesado y adecuados, pertinentes y
          limitados a lo necesario en relación con los fines para los que son
          tratados.
        </p>
        <p>
          El RESPONSABLE garantiza que ha implementado políticas técnicas y
          organizativas apropiadas para aplicar las medidas de seguridad que
          establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y
          libertades de los USUARIOS y les ha comunicado la información adecuada
          para que puedan ejercerlos.
        </p>
        <p>
          Para más información sobre las garantías de privacidad, puedes
          dirigirte al RESPONSABLE a través de:
        </p>
        <p>Datos de contacto para ejercer sus derechos:</p>
        <p>JUAN JOSE LARDIES</p>
        {/* <p> ZARAGOZA (Zaragoza)</p> */}
        <p>E-mail: juanjolar30@gmail.com</p>
      </div>
    </>
  );
};

export default terminos;

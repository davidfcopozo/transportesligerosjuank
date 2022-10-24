import ContactForm from "../components/ContactForm";
import FormText from "../components/FormText";
import contactStyles from "../styles/pages/Contact.module.scss";
import useFormSubmit from "../hooks/useFormSubmit";

const contacto = () => {
  const [formSubmitData] = useFormSubmit();
  return (
    <>
      <div className={contactStyles.contact}>
        <FormText />
        <ContactForm formSubmitData={formSubmitData} />
      </div>
    </>
  );
};

export default contacto;

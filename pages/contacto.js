import FormParent from "../components/FormParent";

const contacto = () => {
  return (
    <>
      <div className={contactStyles.contact}>
        <FormText />
        <ContactForm />
      </div>
    </>
  );
};

export default contacto;

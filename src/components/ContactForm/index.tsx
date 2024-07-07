import React from "react";
import { useFormik } from "formik";
import { ContactFormTypes } from "@/modules/Contact/contact-form.types";
import { contactSchema } from "@/modules/Contact/contact.schema";
import InputField from "../InputField";
import InputTextArea from "../InputTextArea";
import Button from "../Button";
import { StyledDiv } from "./style";

const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik<ContactFormTypes>({
    initialValues: {
      email: "",
      message: "",
      name: "",
    },
    enableReinitialize: true,
    validationSchema: contactSchema,
    validateOnMount: true,
    onSubmit: () => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1e3);
    },
  });
  return (
    <StyledDiv className="form-wrapper">
      <form
        className="form-inner-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isLoading) {
            formik.handleSubmit(e);
          }
        }}
      >
        <div className="col-6">
          <InputField
            name="name"
            placeholder="sherpa..."
            label="Name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            touched={formik.touched.name}
            error={!!formik.errors.name}
            errorMsg={formik.errors.name}
            onChange={formik.handleChange}
          />
        </div>

        <div className="col-6">
          <InputField
            name="email"
            placeholder="sherpa@exmaple.com"
            label="Email"
            touched={formik.touched.email}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={!!formik.errors.email}
            errorMsg={formik.errors.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className="col-12">
          <InputTextArea
            id="message"
            name="message"
            placeholder="Food is...."
            label="Message"
            rows={20}
            cols={2}
            onBlur={formik.handleBlur}
            touched={formik.touched.message}
            error={!!formik.errors.message}
            errorMsg={formik.errors.message}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>

        <Button skin="contained" disabled={isLoading} loader={isLoading}>
          SUBMIT
        </Button>
      </form>
    </StyledDiv>
  );
};

export default ContactForm;

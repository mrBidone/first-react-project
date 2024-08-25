import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./SearchPostsForm.module.css";

const SearchPostsValidationSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .required("Required!")
    .min(2, "Too short!")
    .max(100, "Too long!"),
});

const INITIAL_VALUES = {
  searchTerm: "",
};

const SearchPostsForm = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    // const contactObject = {
    //   name: values.contactName,
    //   number: values.contactNumber,
    // };

    onSearch(values.searchTerm);
    console.log(values);
  };

  const nameFieldId = useId();

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={SearchPostsValidationSchema}
      >
        {({ values, errors }) => {
          return (
            <Form className={css.form}>
              <label className={css.label} htmlFor={nameFieldId}>
                Знайти пости за заголовком
              </label>
              <Field
                className={css.field}
                type="text"
                name="searchTerm"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="searchTerm"
                component="span"
              />
              <button className={css.submitBtn} type="submit">
                Search
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SearchPostsForm;

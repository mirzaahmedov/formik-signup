import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Form from "../components/form/Form";
import Flex from "../components/container/Flex";
import Textfield from "../components/input/Textfield";
import Button from "../components/button/Primary";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required().max(40),
  lastName: yup.string().required().max(40),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(20),
});

const Signup = () => {
  const onSubmit = (data: typeof initialValues) => {
    console.log(data);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <Flex gap={20}>
            <Field
              required
              type="text"
              name="firstName"
              label="First name"
              error={errors.firstName}
              touched={touched.firstName}
              as={Textfield}
            />
            <Field
              required
              type="text"
              name="lastName"
              label="Last name"
              error={errors.lastName}
              touched={touched.lastName}
              as={Textfield}
            />
          </Flex>
          <Field
            required
            type="email"
            name="email"
            label="Email"
            error={errors.email}
            touched={touched.email}
            as={Textfield}
          />
          <Field
            required
            type="password"
            name="password"
            label="Password"
            error={errors.password}
            touched={touched.password}
            as={Textfield}
          />
          <p>
            Already have an account? <Link to="/signin">Sing in</Link>
          </p>
          <Button>SING UP</Button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;

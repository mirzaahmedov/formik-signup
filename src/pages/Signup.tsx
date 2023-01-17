import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
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

const Signup = () => {
  const onSubmit = (data: typeof initialValues) => {
    console.log(data);
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <Flex gap={20}>
            <Field
              required
              type="text"
              name="firstName"
              label="First name"
              as={Textfield}
            />
            <Field
              required
              type="text"
              name="lastName"
              label="Last name"
              as={Textfield}
            />
          </Flex>
          <Field
            required
            type="email"
            name="email"
            label="Email"
            as={Textfield}
          />
          <Field
            required
            type="password"
            name="password"
            label="Password"
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

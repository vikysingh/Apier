import { Button, Form, Container } from "semantic-ui-react";
import Link from "next/link";

const { Input } = Form;

const index = () => {
  return (
    <Container className="account_form__container">
      <Form className="account_form">
        <Input
          //error={{ content: "Email è richiesto", pointing: "below" }}
          fluid
          label="Email"
          placeholder="Email"
          id="form-input-email"
          type="email"
          required
        />

        <Input
          //error={{ content: "Una password è richiesta", pointing: "below" }}
          fluid
          label="Password"
          placeholder="Password"
          id="form-input-password"
          type="password"
          required
        />

        <label>
          <Link href="#">Password Dimenticata</Link>
        </label>
        <br />
        <label>
          Non hai un account? Registrati <Link href="/registrazione">qui!</Link>
        </label>

        <Button
          className="account_form__submit_btn"
          type="submit"
          primary
          fluid
        >
          Accedi
        </Button>
      </Form>
    </Container>
  );
};

export default index;

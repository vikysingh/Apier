import { Button, Form, Container } from "semantic-ui-react";
import Link from "next/link"

const { Input, Checkbox } = Form;

const index = () => {
  return (
    <Container className="account_form__container">
      <Form className="account_form">
        <Input
          //error={{ content: "Un nome utente è richiesto", pointing: "below" }}
          fluid
          label="Nome utente"
          placeholder="Nome utente"
          id="form-input-username"
          type="text"
          required
        />

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

        <Checkbox
          label="Accetto i Termini e Condizioni di'uso "
          //error
        />

        <label>
            Hai già un account? Accedi <Link href="/accesso">qui!</Link>
        </label>

        <Button
          className="account_form__submit_btn"
          type="submit"
          primary
          fluid
        >
          Registra
        </Button>
      </Form>
    </Container>
  );
};

export default index;

import { Header, Button, Container, Label } from "semantic-ui-react";
import HeaderImg from "../../public/static/assets/header_bg.svg";
import styles from "./style.module.css";
import Link from "next/link";

const style = {
  backgroundImage: `url(${HeaderImg})`,
};

const index = () => {
  return (
    <>
      <Link href="/apps">
        <Label>Solo per prove, clicca qui per visitare /apps</Label>
      </Link>
      <main className={styles.home} style={style}>
        <Header as="h1" className={styles.home__header}>
          Un fantastico App Store per fantastiche app e giochi web!
        </Header>

        <Container className={styles.home__btn_container}>
          <Link href="/registrazione">
            <Button primary size="large">
              Registera
            </Button>
          </Link>
          <Link href="/accesso">
            <Button size="large">Accedi</Button>
          </Link>
        </Container>
      </main>
    </>
  );
};

export default index;

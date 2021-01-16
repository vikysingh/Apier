import { Grid, Header, Input, Icon, Card } from "semantic-ui-react";
import styles from "./style.module.css";
import Link from "next/link";

const { Row, Column } = Grid;

const AppCard = () => (
  <Link href="#">
    <Card
      className={styles.apps__app_card}
      image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
      header="App name"
    />
  </Link>
);

/* Solo per le prove della UI */
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const index = () => {
  return (
    <Grid className={styles.apps__container}>
      <Row columns={3} className={styles.apps__header}>
        <Column width={3}>
          <Header as="h3" className={styles.apps__brand}>
            Apier
          </Header>
        </Column>

        <Column width={11}>
          <Input
            className={styles.apps__search_bar}
            icon="search"
            placeholder="Search for apps.."
            fluid
          />
        </Column>

        <Column width={2}>
          <Icon name="setting" className={styles.apps__settings_icon} />
        </Column>
      </Row>
      <Row>
        <Column width={16}>
          <main className={styles.apps__app_container}>
            {list.map((_) => (
                <AppCard key={_} />
            ))}
          </main>
        </Column>
      </Row>
    </Grid>
  );
};

export default index;

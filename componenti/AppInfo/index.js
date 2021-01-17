import { Grid, Image, Header, Button } from "semantic-ui-react"
import { testo } from "./dummayData"
import styles from "./style.module.css"

const { Column, Row } = Grid

const AppInfo = () => {
    return <Grid divided="vertically" className={styles.app_info} stackable>
        <Row columns={2} >
            <Column width={4}>
                <Image src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" />
            </Column>
            <Column >
                <Header as="h1" className={styles.app_info__header}>Nome App</Header>
                <a href="#" target="_blank" referrerPolicy="no-referrer">
                    <Button primary size="tiny"> Visita app </Button>
                </a>
            </Column>
        </Row>

        <Row columns={1}>   
            <Column>
                <p className={styles.app_info__descrizione}>
                    {testo}
                </p>
            </Column>
        </Row>
    </Grid>
}

export default AppInfo
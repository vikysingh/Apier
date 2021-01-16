import dynamic from "next/dynamic"

const Form = dynamic(() => import("../componenti/Accesso"))

const accesso = () => <Form />

export default accesso;
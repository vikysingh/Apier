import dynamic from "next/dynamic"

const Form = dynamic(() => import("../componenti/Registrazione"))

const registrazione = () => <Form />

export default registrazione;
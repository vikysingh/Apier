import dynamic from "next/dynamic"

const Apps = dynamic(() => "../componenti/Apps")

const apps = () => <Apps />

export default apps;
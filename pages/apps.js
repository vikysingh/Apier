import dynamic from "next/dynamic"

const Apps = dynamic(() => import("../componenti/Apps"))

const apps = () => <Apps />

export default apps;
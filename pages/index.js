import dynamic from "next/dynamic"

const Home = dynamic(() => import("../componenti/Home"))

const Index = () => <Home/>

export default Index

import { cookies } from "next/headers";

export default function About() {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log("+++++++++theme", theme);
    console.log('++++++++about page');
    return <h1>About page {new Date().toLocaleTimeString()}</h1>
}

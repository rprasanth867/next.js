import ImageSlider from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoute() {
    console.log("+++Server side rendering")
    const result = serverSideFunction();

    return (
        <div>
            <h1>Server Route page</h1>
            <p>{result}</p>
            <ImageSlider />
        </div>
    )
}

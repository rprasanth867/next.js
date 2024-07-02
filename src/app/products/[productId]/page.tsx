import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

// Function name should be generateMetadata
// It can be async function as well
export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    // Synchronous scenario
    // return {
    //     title: `Product ${params.productId}`
    // }

    // Asynchronous scenario
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`IPhone ${params.productId}`);
        }, 2000);
    });

    return {
        title: `Product ${title}`
    }
}

export default function ProductDetails({params}: Props) {
    return <h1>Details about the product {params.productId}</h1>
}

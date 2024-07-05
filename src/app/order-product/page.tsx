"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct({href}: any) {
    const router = useRouter();

    const handleClick = () => {
        alert("Placing the order...");
        router.push("/invalid");
    }

    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )

}

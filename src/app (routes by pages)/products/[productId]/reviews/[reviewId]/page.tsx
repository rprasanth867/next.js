"use client"
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetails({params}: {params: {
    productId: string;
    reviewId: string;
}}) {

    const random = getRandomInt(3);

    if (random === 1) {
        throw new Error("Error loading review of a product")
    }

    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }

    return <h1>Details of {params.reviewId} review of {params.productId} product</h1>
}

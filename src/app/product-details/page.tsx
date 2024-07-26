import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductDetails() {
    return (
        <div>
            <h1>Product Details Page</h1>
            <Suspense fallback={<p>Loading product...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading reviews...</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}

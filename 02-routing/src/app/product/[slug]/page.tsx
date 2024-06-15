'use client'; // this for client side rendering
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
    // Get the title from the URL , useParam is a hook from next/navigation to get parameters from the URL
    const params = useParams<{ slug: string}>()
    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>Product Title: <b>{params.slug}</b></p>
        </div>
    );
}
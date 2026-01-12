import type { Product } from "../../data/products";
import ProductCard from "./ProductCard";

type Props = {
    title: string;
    items: Product[];
};

export default function ProductCarousel({ title, items }: Props) {
    return (
        <section className="carousel">
            <h2 className="carousel__category">{title}</h2>

            <div className="carousel__row" role="list">
                {items.map((p) => (
                    <div key={p.id} className="carousel__item" role="listitem">
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </section>
    );
}
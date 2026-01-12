import "./products.css";
import { productGroups } from "../../data/products";
import ProductCarousel from "./ProductCarousel";
import {useReveal} from "../../hooks/useReveal.ts";

export default function Products() {
    const titleRef = useReveal<HTMLElement>();
    return (
        <section ref={titleRef} id="products" className="products reveal-left">
            <div className="products__container">
                <header className="products__header">
                    <h2 className="products__bigTitle">Nos Cafes et Produits</h2>
                    <p className="products__desc">
                        Parce que le café n’est pas qu’une boisson, mais
                        un moment à vivre pleinement.
                    </p>
                </header>

                <div className="products__list">
                    {productGroups.map((g) => (
                        <ProductCarousel key={g.id} title={g.title} items={g.items} />
                    ))}
                </div>
            </div>
        </section>
    );
}
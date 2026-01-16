import "./products.css";
import { productGroups } from "../../data/products";
import ProductCarousel from "./ProductCarousel";
import {useReveal} from "../../hooks/useReveal.ts";

type Props = {
    title?: string;
    titleAr?: string;
    subtitle?: string;
    img: string;
}

export default function Products({
    title = "Nos Cafes et Produits",
    titleAr = "متعة القهوة الحقيقية",
    subtitle = "Parce que le café n’est pas qu’une boisson, mais\n" +
        "                        un moment à vivre pleinement.",
    img,

                                 }: Props) {
    const titleRef = useReveal<HTMLElement>();
    return (
        <section ref={titleRef} id="products" className="products reveal-left">
            <div className="products__container">
                <header className="products__header">
                    <h2 className="products__bigTitle">{title}</h2>
                    <h2 className="products__bigTitle">{titleAr}</h2>
                    <p className="products__desc">{subtitle}</p>
                </header>
                <div className="story__imgWrap">
                    <img className="story__img" src={img} alt={img} loading="lazy" />
                </div>

                <div className="products__list">
                    {productGroups.map((g) => (
                        <ProductCarousel key={g.id} title={g.title} items={g.items} />
                    ))}
                </div>
            </div>
        </section>
    );
}
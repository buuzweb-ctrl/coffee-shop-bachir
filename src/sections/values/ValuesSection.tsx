import "./values.css";
import {useReveal} from "../../hooks/useReveal.ts";

export default function ValuesSection() {
    const titleRef = useReveal<HTMLElement>();
    return (
        <section ref={titleRef} className="values reveal-left">
            <div className="values__grid">

                {/* QUALITÉ & PRIX */}
                <div className="value value--gold">
                    <img
                        className="value__iconImg"
                        src="/images/icons/discount.png"
                        alt="Qualité & Prix"
                        loading="lazy"
                    />
                    <h3 className="value__title">QUALITÉ & PRIX</h3>
                    <p className="value__text">
                        Nous sélectionnons nos cafés avec soin pour offrir un excellent
                        rapport qualité-prix, accessible à tous les amateurs de bon café.
                    </p>
                </div>

                {/* ASSORTIMENT */}
                <div className="value value--dark">
                    <img
                        className="value__iconImg"
                        src="/images/icons/cup-of-drink.png"
                        alt="Assortiment"
                        loading="lazy"
                    />
                    <h3 className="value__title">ASSORTIMENT</h3>
                    <p className="value__text">
                        Vente en ligne et point de vente physique à Torino. Depuis plus de 5 ans,
                        nous répondons aux attentes de nos clients avec passion.
                    </p>
                </div>

                {/* LIVRAISON RAPIDE */}
                <div className="value value--dark value--shipping">
                    <img
                        className="value__iconImg"
                        src="/images/icons/fast-delivery.png"
                        alt="Livraison rapide"
                        loading="lazy"
                    />
                    <h3 className="value__title">LIVRAISON RAPIDE</h3>
                    <p className="value__text">
                        Expédition sous 48h ouvrées après commande. Recevez votre café rapidement
                        et savourez toute l’authenticité du café italien.
                    </p>
                </div>

            </div>
        </section>
    );
}

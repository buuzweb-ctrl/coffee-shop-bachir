import "./topTicker.css";

type Item = {
    text: string;
    icon?: string; // مسار PNG (اختياري)
};

const items: Item[] = [
    { text: "Coffee Shop Bachir vous souhaite la bienvenue", icon: "/images/logo.png" },
    { text: "Livraison gratuite au Maroc", icon: "/images/icons/cup-of-drink.png" },
    { text: "Produits originaux & sélection premium", icon: "/images/icons/fast-delivery.png" },
    { text: "0625232145", icon: "../src/assets/whatsapp.png" },
];

function Track({ items }: { items: Item[] }) {
    return (
        <div className="ticker__track">
            {items.map((it, i) => (
                <span className="ticker__item" key={i}>
          {it.icon && <img className="ticker__icon" src={it.icon} alt="" />}
                    <span className="ticker__text">{it.text}</span>
          <span className="ticker__sep">•</span>
        </span>
            ))}
        </div>
    );
}

export default function TopTicker() {
    return (
        <div className="ticker" role="region" aria-label="Infos">
            <div className="ticker__move">
                {/* كنكرر نفس التراك جوج مرات باش يكون looping بلا تقطيع */}
                <Track items={items} />
                <Track items={items} />
            </div>
        </div>
    );
}

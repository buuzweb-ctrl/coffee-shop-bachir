// src/data/products.ts

export type ProductFormat = {
    label: string;
    price: string;
    color: "green" | "red";
};

export type Product = {
    id: string;
    title: string;
    description: string;
    images: string[];

    // ✅ optional (باش sirops يخدم)
    formats?: ProductFormat[];

    // ✅ sirops
    badge?: string;
    badge2?: string;
    badge3?: string;
    singlePrice?: string;
};

export type ProductGroup = {
    id: string;
    title: string;
    items: Product[];
};

export const productGroups: ProductGroup[] = [
    // ✅ KIMBO
    {
        id: "kimbo",
        title: "KIMBO MOULU - KIMBO GRAIN",
        items: [
            {
                id: "kimbo-napoleon",
                title: "Aroma Gold 100% Arabica (Grain)",
                description:
                    "Café en grains 100% Arabica, soigneusement sélectionné pour sa qualité.\n" +
                    "Un équilibre parfait entre douceur et acidité, avec de subtiles notes d’amande.\n" +
                    "Idéal pour le café américain et le café au lait.",
                images: ["/images/products/kimbo/aroma_gold_100%_arabica_500.png"],
                formats: [
                    { label: "250g", price: "45 Dh", color: "green" },
                    { label: "1kg", price: "155 Dh", color: "red" },
                ],
            },
            {
                id: "kimbo-aroma-gold",
                title: "Aroma Intenso (Grain)",
                description:
                    "Le Caffè Aroma Intenso de Kimbo est un café italien torréfié à l’ancienne, offrant un arôme riche et une intensité marquée.\n" +
                    "Corps plein, notes douces et long arrière-goût.\n" +
                    "Convient à tous les types de café.\n" +
                    "Arabica 50 %.",
                images: ["/images/products/kimbo/AROMA_INTENSO_500g.jpg"],
                formats: [
                    { label: "250g", price: "39 Dh", color: "green" },
                    { label: "1kg", price: "132 Dh", color: "red" },
                ],
            },
            {
                id: "kimbo-espresso-napoli",
                title: "Espresso Napoli (Grain)",
                description:
                    "Le Kimbo Caffè Espresso Napoletano est un café torréfié moyennement foncé au goût plein et riche.",
                images: ["/images/products/kimbo/espresso_napoli_250.jpg"],
                formats: [
                    { label: "250g", price: "42 Dh", color: "green" },
                    { label: "1kg", price: "145 Dh", color: "red" },
                ],
            },
            {
                id: "kimbo-aroma-gold-moulu",
                title: "Aroma Gold 100% Arabica (Moulu)",
                description:
                    "Café moulu 100 % Arabica, équilibré et élégant, aux notes fruitées et de pain grillé.\n" +
                    "Idéal en fin de repas – 250 g – Kimbo.",
                images: ["/images/products/kimbo/KIMBO-AROMA-GOLD-250g-boite.jpg"],
                formats: [
                    { label: "250g", price: "37 Dh", color: "green" },
                    { label: "1kg", price: "122 Dh", color: "red" },
                ],
            },
            {
                id: "kimbo-espresso-napoli-moulu",
                title: "Espresso Napoli (Moulu)",
                description:
                    "Espresso napolitain corsé et intense, aux notes florales et de biscuits.\n" +
                    "80 % Arabica – 20 % Robusta | Intensité 10/13 | Torréfié en Italie",
                images: ["/images/products/kimbo/KIMBO-ESPRESSO-NAPOLI-250g-boite.jpg"],
                formats: [
                    { label: "250g", price: "37 Dh", color: "green" },
                    { label: "1kg", price: "122 Dh", color: "red" },
                ],
            },
            {
                id: "kimbo-aroma-gold-moulu-4",
                title: "Aroma Gold 100% Arabica (Moulu)",
                description:
                    "Espresso Napoli Kimbo 250 g – mélange intense de cafés sélectionnés, torréfié à la tradition napolitaine pour un espresso corsé, riche en arômes.",
                images: ["/images/products/kimbo/esprsso_napoli_moulu.webp"],
                formats: [{ label: "Disponible sur commande", price: "1kg", color: "green" }],
            },
            {
                id: "kimbo-espresso-napoli-moulu-4",
                title: "Espresso Napoli (Moulu)",
                description:
                    "Espresso Napoli Kimbo 250 g – mélange intense de cafés sélectionnés, torréfié à la tradition napolitaine pour un espresso corsé, riche en arômes.",
                images: ["/images/products/kimbo/esprsso_napoli_moulu.webp"],
                formats: [{ label: "Disponible sur commande", price: "1kg", color: "green" }],
            },
        ],
    },

    // ✅ GRAINS
    {
        id: "grains",
        title: "CAFE EN GRAINS",
        items: [
            {
                id: "grains-napoleon",
                title: "Napoleon",
                description:
                    "Espresso italien intense, mélange équilibré d’Arabica et de Robusta.\n" +
                    "Idéal pour espresso, cappuccino et latte macchiato.",
                images: ["/images/products/grains/grain_napolean.png"],
                formats: [
                    { label: "250g", price: "45 Dh", color: "green" },
                    { label: "1kg", price: "155 Dh", color: "red" },
                ],
            },
            {
                id: "grains-reda",
                title: "Reda",
                description:
                    "Café en grains de haute qualité, aux saveurs équilibrées et à la mousse dense et persistante.\n" +
                    "Idéal pour espresso, cappuccino et latte macchiato – spécial cafés et restaurants.",
                images: ["/images/products/grains/mecafe_reda.png"],
                formats: [
                    { label: "250g", price: "39 Dh", color: "green" },
                    { label: "1kg", price: "132 Dh", color: "red" },
                ],
            },
            {
                id: "Romeo-juliette-noir",
                title: "Romeo & Juliette Noir",
                description:
                    "Mélange équilibré d’Arabica et de Robusta aux notes aromatiques riches et harmonieuses.\n" +
                    "Idéal pour espresso, cappuccino et latte macchiato – spécial cafés et restaurants.",
                images: ["/images/products/grains/rj_noir.png"],
                formats: [
                    { label: "250g", price: "42 Dh", color: "green" },
                    { label: "1kg", price: "145 Dh", color: "red" },
                ],
            },
            {
                id: "Grain-noir-extra",
                title: "Grain Noir Extra",
                description:
                    "Espresso haut de gamme à base de grains Robusta, au corps intense et à la mousse crémeuse.\n" +
                    "Idéal pour espresso, cappuccino et latte macchiato – spécial cafés et restaurants.",
                images: ["/images/products/grains/grain_noir_extra.png"],
                formats: [
                    { label: "250g", price: "37 Dh", color: "green" },
                    { label: "1kg", price: "122 Dh", color: "red" },
                ],
            },
            {
                id: "Grain-noir-intenso",
                title: "Grain Noir Intenso",
                description:
                    "Café en grains Robusta de qualité supérieure, au goût intense et raffiné de l’espresso.\n" +
                    "Idéal pour espresso, cappuccino et latte macchiato – spécial cafés et restaurants",
                images: ["/images/products/grains/GRAIN-NOIR-INTENSO.png"],
                formats: [
                    { label: "250g", price: "37 Dh", color: "green" },
                    { label: "1kg", price: "122 Dh", color: "red" },
                ],
            },
            {
                id: "Milha-cream-supreme",
                title: "Milhan (Cream Supreme)",
                description:
                    "Espresso italien de qualité supérieure, mélange équilibré d’Arabica et de Robusta aux arômes intenses.\n" +
                    "Idéal pour toutes les préparations – cafés, hôtels et restaurants",
                images: ["/images/products/grains/MILHAN.png"],
                formats: [{ label: "Disponible sur commande", price: "1kg", color: "green" }],
            },
        ],
    },

    // ✅ SIROPS
    {
        id: "sirops",
        title: "SIROPS",
        items: [
            {
                id: "sirop-strawberry",
                title: "Strawberry",
                description:
                    "Sirop gourmand, parfait pour aromatiser cafés, lattés, desserts et boissons fraîches.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/strawberry.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-tropical-blu",
                title: "Tropical Blu",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/tropical-blu.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-caramel",
                title: "Caramel",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/caramel.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-ginger",
                title: "Ginger",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/ginger.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-hazelnut",
                title: "Hazelnut",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/hazelnut.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-mojito",
                title: "Mojito",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/mojito.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-raspberry",
                title: "Raspberry",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/raspberry.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-pina-colada",
                title: "Pina Colada",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/pina-colada.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-macaron",
                title: "Macaron",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/macaron.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-passion",
                title: "Passion Fruit",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/passion-fruit-1.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-mango",
                title: "Mango",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/mango.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-peche-blanc",
                title: "Peche Blanc",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/white-peach.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-margarita",
                title: "Margarita",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/margarita-1.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-salted-caramel",
                title: "Salted Caramel",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/salted-caramel.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-blueberry",
                title: "Blueberry",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/blueberry.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-tea-matcha",
                title: "Tea Matcha",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/tea-matcha.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-lemon",
                title: "Lemon",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/lemon-2.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },

            {
                id: "sirop-caramel-sans-suger",
                title: "Caramel Sans Sugre",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/caramel-sans-sucre.jpg"],
                badge: "750 ml",
                badge2: "Sans sucre",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-vanilla-sans-suger",
                title: "Vanilla Sans Sugre",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/vanilla-barista-sans-sucre.jpg"],
                badge: "750 ml",
                badge2: "Sans sucre",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-hazelnut-sans-suger",
                title: "Hazelnut Sans Sugre",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/hazelnut-sugrafree-sans-sucre.jpg"],
                badge: "750 ml",
                badge2: "Sans sucre",
                singlePrice: "75 Dh",
            },

            {
                id: "sirop-iced-tea-lemon",
                title: "Iced Tea Lemon",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/iced-tea-lemon.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-iced-tea-peche",
                title: "Iced Tea Peche",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/iced-tea-peach.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
            {
                id: "sirop-iced-tea-rooibos",
                title: "Iced Tea Rooibos",
                description: "xxxxxxxxxxxxxxxxxxxxxxxxxù.\n" +
                    "Bouteille 750 ml.",
                images: ["/images/products/sirops/ice-tea-rooibos.jpg"],
                badge: "750 ml",
                singlePrice: "75 Dh",
            },
        ],
    },

    // ✅ MACHINES_CAPSULES
    {
        id: "machine_capsules",
        title: "MACHINES CAFFITALY SYSTEM & CAPSULES",
        items: [
            {
                id: "machine-mia-s33",
                title: "Mia S33",
                description:
                    "Tension: 220-240 V / 50-60Hz / 1450W\n" +
                    "Pois: 3 kg\n" +
                    "Réservoir: amovible : 0,7L\n" +
                    "Pompe: 15 bar expresso\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/cafiitalyss33rouge.png"],

                singlePrice: "1300 Dh",
            },
            {
                id: "machine-iris-s25",
                title: "Iris S27",
                description:
                    "Pois: environ 4 kg\n" +
                    "Tension: 220-240 V, 50-60Hz, 1250W\n" +
                    "Pression de la pompe: 15 bar max\n" +
                    "Capacité du réservoir d'eau: 1,3 litres\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/caffitalyIRISS27.png"],

                singlePrice: "950 Dh",
            },
            {
                id: "machine-miadima-s16",
                title: "Miadima S16",
                description:
                    "Pois: environ 4 kg\n" +
                    "Tension: 220-240 V, 50-60Hz, 900W\n" +
                    "Pression de la pompe: 15 bar max\n" +
                    "Capacité du réservoir d'eau: 1,2 litres\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/machine-s16-blk-silver-copie-1.png"],

                singlePrice: "1100 Dh",
            },
            {
                id: "capsule-corposo",
                title: "Corposo",
                description:
                    "Mélange intense de Robusta asiatique et d’Arabica, au caractère fort et énergisant.\n" +
                    "Notes de cacao, intensité 9/10 – profil aromatique puissant et décisif.\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/CORPOSO.png"],
                badge: "9/10",
                badge2: "45% arabica",
                badge3: "55% robusta",
                singlePrice: "45 Dh",
            },
            {
                id: "capsule-intenso",
                title: "Intenso",
                description:
                    "Mélange vif d’Arabica d’Amérique du Sud et de Robusta indien, au goût équilibré et doux.\n" +
                    "Notes fruitées, intensité 8/10 – profil rond et velouté, idéal le matin ou après les repas.\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/INTENSO.png"],
                badge: "8/10",
                badge2: "70% arabica",
                badge3: "30% robusta",
                singlePrice: "45 Dh",
            },
            {
                id: "capsule-prezioso",
                title: "Prezioso",
                description:
                    "Espresso 100% Arabica aux arômes floraux, à la saveur équilibrée et agréable.\n" +
                    "Intensité 7/10 – idéal à tout moment de la journée grâce à sa faible teneur en caféine.\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/prezioso.png"],
                badge: "7/10",
                badge2: "100% arabica",
                singlePrice: "45 Dh",
            },
            {
                id: "capsule-delicato",
                title: "Delicato",
                description:
                    "Espresso décaféiné au goût velouté et à l’arôme délicat.\n" +
                    "Notes florales, intensité 7/10 – faible teneur en caféine (≤ 0,1 %).\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/Decaffeinato.png"],
                badge: "7/10",
                badge2: "100% arabica",
                singlePrice: "45 Dh",
            },
            {
                id: "capsule-delicato",
                title: "Delicato",
                description:
                    "Alliance subtile du thé noir et du citron pour une boisson délicate et rafraîchissante.\n" +
                    "Notes fruitées, intensité 5/10 – 10 capsules de 11 g.\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/THE-AU-CITRON.jpg"],
                badge: "5/10",
                badge2: "Sur commande",
                singlePrice: "45 Dh",
            },
            {
                id: "capsule-ciocolato",
                title: "Ciocolato",
                description:
                    "Délicieuse boisson au cacao, à l’arôme intense et à la saveur forte.\n" +
                    "Notes cacao, intensité 5/10 – 10 capsules de 11,5 g.\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/caffitaly-ciocolato.jpg"],
                badge: "5/10",
                badge2: "Sur commande",
                singlePrice: "45 Dh",
            },
            {
                id: "capsule-cappuccino",
                title: "Cappuccino",
                description:
                    "Délicieuse boisson au cacao, à l’arôme intense et à la saveur forte.\n" +
                    "Notes cacao, intensité 5/10 – 10 capsules de 11,5 g.\n" +
                    "----------------",
                images: ["/images/products/machines_capsules/capiccinoù.png"],
                badge: "5/10",
                badge2: "Sur commande",
                singlePrice: "45 Dh",
            },


        ],
    },

];


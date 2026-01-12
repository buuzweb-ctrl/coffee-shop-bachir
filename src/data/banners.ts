export type Banner = {
    id: string;
    image: string;      // path from public/images/...
    title: string;
    subtitle: string;
};

export const banners: Banner[] = [
    {
        id: "b1",
        image: "/images/banners/banner1.jpg",
        title: "Dès la première gorgée… savourez le vrai goût du café",
        subtitle: "Chaque tasse raconte une histoire",
    },
    {
        id: "b2",
        image: "/images/banners/banner2.jpg",
        title: "Le café ici n’est pas qu’une boisson…",
        subtitle: "c’est une vraie expérience gustative",
    },
    {
        id: "b3",
        image: "/images/banners/banner3.jpg",
        title: "Savoure nos cafés et nos créations uniques",
        subtitle: "Bachir Coffee Shop",
    },
];
import { useEffect, useMemo, useState } from "react";
import { banners } from "../../data/banners";
import "./hero.css";

const INTERVAL_MS = 4500;

export default function Hero() {
    const [index, setIndex] = useState(0);
    const total = banners.length;

    const current = useMemo(() => banners[index], [index]);

    useEffect(() => {
        const id = window.setInterval(() => {
            setIndex((prev) => (prev + 1) % total);
        }, INTERVAL_MS);

        return () => window.clearInterval(id);
    }, [total]);

    return (
        <section className="hero">
            <div
                className="hero__bg"
                style={{ backgroundImage: `url(${current.image})` }}
            />
            <div className="hero__overlay" />

            <div className="hero__content">
                <h1 className="hero__title">{current.title}</h1>
                <p className="hero__subtitle">{current.subtitle}</p>

                <div className="hero__dots" aria-label="banner dots">
                    {banners.map((b, i) => (
                        <button
                            key={b.id}
                            className={`hero__dot ${i === index ? "is-active" : ""}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to banner ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
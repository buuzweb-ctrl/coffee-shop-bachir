import { useMemo, useState } from "react";
import type { Product } from "../../data/products";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const images = useMemo(
        () => (product.images?.length ? product.images : []),
        [product.images]
    );

    const [imgIndex, setImgIndex] = useState(0);

    const hasSlider = images.length > 1;
    const current = images[imgIndex] ?? "";

    function prev(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        setImgIndex((i) => (i - 1 + images.length) % images.length);
    }

    function next(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        setImgIndex((i) => (i + 1) % images.length);
    }

    return (
        <article className="pcard">
            {/* IMAGE / SLIDER */}
            {(product.badge || product.badge2 || product.badge3) && (
                <div className="pcard__badges">
                    {product.badge && (
                        <span className="pcard__badge pcard__badge--one">{product.badge}</span>
                    )}

                    {product.badge2 && (
                        <span className="pcard__badge pcard__badge--two">{product.badge2}</span>
                    )}

                    {product.badge3 && (
                        <span className="pcard__badge pcard__badge--three">{product.badge3}</span>
                    )}
                </div>
            )}

            <div className="pcard__imgWrap">
                {/* ✅ Badge (مثلا 750 ml) */}


                {current && (
                    <img
                        className="pcard__img"
                        src={current}
                        alt={`${product.title} image ${imgIndex + 1}`}
                        loading="lazy"
                        draggable={false}
                    />
                )}

                {/* Arrows (يبانو غير إلا كاين أكثر من صورة) */}
                {hasSlider && (
                    <>
                        <button
                            className="pcard__arrow pcard__arrow--left"
                            aria-label="Previous image"
                            onClick={prev}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M15 18l-6-6 6-6"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            className="pcard__arrow pcard__arrow--right"
                            aria-label="Next image"
                            onClick={next}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M9 6l6 6-6 6"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="pcard__dots" aria-label="image dots">
                            {images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`pcard__dot ${i === imgIndex ? "is-active" : ""}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* CONTENT */}
            <div className="pcard__content">
                <h3 className="pcard__title">{product.title}</h3>

                {/* ✅ description multi-line */}
                {product.description.split("\n").map((line, idx) => (
                    <p key={idx} className="pcard__desc">
                        {line}
                    </p>
                ))}

                {/* ✅ SIROPS: singlePrice */}
                {product.singlePrice ? (
                    <div className="pcard__pricePill">
                        <span>{product.singlePrice}</span>
                    </div>
                ) : (
                    <>
                        <h4 className="pcard__subtitle">Format et prix</h4>

                        <div className="pcard__formats">
                            {product.formats?.map((f, i) => (
                                <div
                                    key={i}
                                    className={`pcard__format pcard__format--${f.color}`}
                                >
                                    <span>{f.label}</span>
                                    <strong>{f.price}</strong>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </article>
    );
}
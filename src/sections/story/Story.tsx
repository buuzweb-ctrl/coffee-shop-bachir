// src/sections/Story/Story.tsx
import "./story.css";
import {useReveal} from "../../hooks/useReveal.ts";

type Props = {
    title1?: string;
    subtitle1?: string;
    img1: string;

    title2?: string;
    subtitle2?: string;
    img2: string;

    ctaTitle?: string;
    ctaBtn?: string;
    onCtaClick?: () => void;
};

export default function Story({
                                  title1 = "Chaque tasse raconte une histoire",
                                  subtitle1 = "Dès la première gorgée... savourez le vrai goût du café",
                                  img1,

                                  title2 = "L’arome du cafe",
                                  subtitle2 = "Le café ici n’est pas qu’une boisson... c’est une vraie expérience gustative",
                                  img2,

                                  ctaTitle = "SAVOURE NOS CAFÉS ET NOS CRÉATIONS UNIQUES",
                                  ctaBtn = "Découvre le memu",
                              }: Props) {
    const titleRef = useReveal<HTMLElement>();
    return (
        <section ref={titleRef} className="story reveal-left">
            <div className="story__container" id="story">
                {/* Block 1 */}
                <header className="story__head">
                    <h2 className="story__h2">{title1}</h2>
                    <p className="story__p">{subtitle1}</p>
                </header>

                <div className="story__imgWrap">
                    <img className="story__img" src={img1} alt={title1} loading="lazy" />
                </div>

                {/* Block 2 */}
                <header className="story__head story__head--mt">
                    <h2 className="story__h2 story__h2--serif">{title2}</h2>
                    <p className="story__p story__p--serif">{subtitle2}</p>
                </header>

                <div className="story__imgWrap story__imgWrap--mt">
                    <img className="story__img" src={img2} alt={title2} loading="lazy" />
                </div>

                {/* CTA */}
                <div className="story__cta" id="menu">
                    <h3 className="story__ctaTitle">{ctaTitle}</h3>

                    <button
                        className="story__ctaBtn"
                        type="button"
                        onClick={() => {
                            window.open("/images/menu.pdf", "_blank");
                        }}
                        id="menu"

                    >
                        {ctaBtn}
                    </button>
                </div>
            </div>
        </section>
    );
}

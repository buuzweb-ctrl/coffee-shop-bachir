// src/sections/Story/Story.tsx
import "./story.css";
import {useReveal} from "../../hooks/useReveal.ts";

type Props = {
    title1?: string;
    titleAr1?: string;
    subtitle1?: string;
    img1: string;

    title2?: string;
    titleAr2?: string;
    subtitle2?: string;
    img2: string;

    title3?: string;
    titleAr3?: string;
    subtitle3?: string;
    img3: string;

    ctaTitle?: string;
    ctaBtn?: string;
    onCtaClick?: () => void;
};

export default function Story({
                                  title1 = "Chaque tasse raconte une histoire",
                                  titleAr1 = "متعة القهوة الحقيقية",
                                  subtitle1 = "Dès la première gorgée... savourez le vrai goût du café",
                                  img1,

                                  title2 = "L’arome du cafe",
                                  titleAr2 = "متعة القهوة الحقيقية",
                                  subtitle2 = "Le café ici n’est pas qu’une boisson...c’est une vraie expérience gustative",
                                  img2,

                                  title3 = "L’arome du cafe",
                                  titleAr3 = "متعة القهوة الحقيقية",
                                  subtitle3 = "Le café ici n’est pas qu’une boisson... c’est une vraie expérience gustative",
                                  img3,

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
                    <h2 className="story__h2">{titleAr1}</h2>
                    <p className="story__p">{subtitle1}</p>
                </header>

                <div className="story__imgWrap">
                    <img className="story__img" src={img1} alt={title1} loading="lazy" />
                </div>

                {/* Block 2 */}
                <header className="story__head story__head--mt">
                    <h2 className="story__h2 story__h2--serif">{title2}</h2>
                    <h2 className="story__h2 story__h2--serif">{titleAr2}</h2>
                    <p className="story__p story__p--serif">{subtitle2}</p>
                </header>

                <div className="story__imgWrap story__imgWrap--mt">
                    <img className="story__img" src={img2} alt={title2} loading="lazy" />
                </div>

                {/* Block 3 */}
                <header className="story__head story__head--mt">
                    <h2 className="story__h2 story__h2--serif">{title3}</h2>
                    <h2 className="story__h2 story__h2--serif">{titleAr3}</h2>
                    <p className="story__p story__p--serif">{subtitle3}</p>
                </header>

                <div className="story__imgWrap story__imgWrap--mt">
                    <img className="story__img" src={img3} alt={title3} loading="lazy" />
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

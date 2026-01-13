import "./about.css";
import { useReveal } from "../../hooks/useReveal";

export default function AboutSection() {

    const titleRef = useReveal<HTMLElement>();
    return (
        <section ref={titleRef} className="about  reveal-left" id="about">
            <div className="about__overlay"></div>
            <div className="about__container">
                <h2  className="about__title ">Coffee Shop Bachir</h2>

                <p className="about__text">
                    Depuis toujours, <strong>Coffee Shop Bachir</strong> sélectionne avec
                    soin des cafés de qualité pour offrir une expérience authentique aux
                    amateurs de café.
                </p>

                <p className="about__text">
                    Capsules, dosettes, café en grains ou moulu, nous proposons une large
                    gamme de produits adaptés à tous les goûts et à toutes les machines.
                </p>

                <p className="about__text">
                    Basés à <strong>Mohammedia</strong>, nous privilégions la proximité, la
                    qualité et des prix accessibles, afin que chaque tasse raconte une
                    histoire de passion et de savoir-faire.
                </p>
            </div>
        </section>
    );
}

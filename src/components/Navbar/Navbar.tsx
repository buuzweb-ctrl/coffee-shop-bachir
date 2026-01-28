import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../../public/images/logo.png";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <header className={`nav ${isScrolled ? "is-scrolled" : ""}`}>
            <div className="nav__inner">
                <a href="#top" className="nav__brand" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="Coffee Shop Bachir" className="nav__logo" />
                </a>

                {/* DESKTOP LINKS */}
                <nav className="nav__links">
                    <a href="#products">Produits</a>
                    <a href="#story">Story</a>
                    <a href="#menu">Menu</a>
                    <a href="#about">About</a>
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    className={`nav__burger ${isOpen ? "is-open" : ""}`}
                    aria-label="Menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((v) => !v)}
                >
                    <span className="burger-line" />
                    <span className="burger-line" />
                    <span className="burger-line" />
                </button>
            </div>

            {/* MOBILE DROPDOWN */}
            <nav className={`nav__mobile ${isOpen ? "is-open" : ""}`}>
                <a href="#products" onClick={() => setIsOpen(false)}>Produits</a>
                <a href="#story" onClick={() => setIsOpen(false)}>Story</a>
                <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            </nav>
        </header>
    );
}
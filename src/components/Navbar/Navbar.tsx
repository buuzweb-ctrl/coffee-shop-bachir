import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

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
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const close = () => setIsOpen(false);

    return (
        <header className={`nav ${isScrolled ? "is-scrolled" : ""}`}>
            <div className="nav__inner">
                {/* LOGO */}
                <a href="#top" className="nav__brand" onClick={close}>
                    <img src={logo} alt="Coffee Shop Bachir" className="nav__logo" />
                </a>

                {/* DESKTOP LINKS */}
                <nav className="nav__links">
                    <a href="#products">Produits</a>
                    <a href="#story">Story</a>
                    <a href="#menu">Menu</a>
                    <a href="#about">About</a>
                </nav>

                {/* BURGER */}
                <button
                    className={`nav__burger ${isOpen ? "is-open" : ""}`}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((v) => !v)}
                >
                    <span className="burger-line" />
                    <span className="burger-line" />
                    <span className="burger-line" />
                </button>
            </div>

            {/* MOBILE DRAWER */}
            <div className={`nav__drawer ${isOpen ? "is-open" : ""}`}>
                <div className="nav__drawerContent">
                    <a onClick={close} href="#products">
                        Produits
                    </a>
                    <a onClick={close} href="#story">
                        Story
                    </a>
                    <a onClick={close} href="#menu">
                        Menu
                    </a>
                    <a onClick={close} href="#about">
                        About
                    </a>
                </div>
            </div>

            {/* BACKDROP */}
            {isOpen && (
                <button
                    className="nav__backdrop"
                    aria-label="Close menu"
                    onClick={close}
                />
            )}
        </header>
    );
}

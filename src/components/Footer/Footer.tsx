import "./footer.css";
import {useReveal} from "../../hooks/useReveal.ts";

export default function Footer() {
    const r = useReveal<HTMLElement>();
    return (
        <footer ref={r} className="footer reveal">
            {/* العنوان */}
            <h3 className="footer__title">il nostro negozio è qui</h3>
            <p className="footer__address">Via Venaria, 50 a Torino</p>

            {/* MAP */}
            <div className="footer__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.709945223742!2d-7.3691029236490175!3d33.690573973295386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b7ce5ef4efa7%3A0x22cb6d0611093cbb!2sBachir%20Coffee%20Shop!5e0!3m2!1sen!2sit!4v1768248048401!5m2!1sen!2sit"
                    loading="lazy"
                />
            </div>

            {/* LOGO فـ الوسط */}
            <div className="footer__logo">
                <img src="src/assets/logo.png" alt="Coffee Shop Bachir" />
            </div>

            {/* معلومات */}
            <div className="footer__infos">
                <p>Boulevard Sebta, Mohammedia</p>
                <p>Tel: 0662165773</p>
                <p>coffeeshopbachir@gmail.com</p>
            </div>

            {/* Social */}
            <div className="footer__social">
                <img src="/images/icons/instagram.png" />
                <img src="/images/icons/facebook.png" />
                <img src="/images/icons/whatsapp.png" />
            </div>

            {/* خط فاصل */}
            <div className="footer__divider" />

            {/* Copyright */}
            <p className="footer__copy">
                © 2026 Bachir Coffee Shop. Tous droits réservés. <br />
                Powered by <span>@ElbrouxiWeb</span>
            </p>
        </footer>

    );
}

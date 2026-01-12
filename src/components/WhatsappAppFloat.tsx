import waIcon from "../assets/whatsapp.png";
import "./whatsapp.css";

export default function WhatsAppFloat() {
    const phone = "+212662165773";
    const message = "Bonjour Coffee Shop Bachir 🙂";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-float"
            aria-label="WhatsApp"
        >
            <img src={waIcon} alt="WhatsApp" />
        </a>
    );
}

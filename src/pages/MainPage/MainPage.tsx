import Hero from "../../sections/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar.tsx";
import Products from "../../sections/Products/Products.tsx";
import Story from "../../sections/story/Story";
import ValuesSection from "../../sections/values/ValuesSection.tsx";
import AboutSection from "../../sections/about/AboutSection.tsx";
import Footer from "../../components/Footer/Footer.tsx";


export default function MainPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <Story
                img1="/images/story/story1.jpg"
                img2="/images/story/story2.jpg"
                onCtaClick={() => {
                    // مثلا scroll للmenu section
                    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
                }}
            />
            <ValuesSection />
            <AboutSection />
            <Footer />


            {/* من بعد غادي نزيدو Navbar, Products, Info, Footer... */}
        </>
    );
}

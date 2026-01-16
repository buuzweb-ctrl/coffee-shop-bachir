import Hero from "../../sections/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar.tsx";
import Products from "../../sections/Products/Products.tsx";
import Story from "../../sections/story/Story";
import ValuesSection from "../../sections/values/ValuesSection.tsx";
import AboutSection from "../../sections/about/AboutSection.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import TopTicker from "../../components/TopTicker/TopTicker.tsx";


export default function MainPage() {
    return (
        <>
            <Navbar />
            <TopTicker />
            <Hero />
            <Products
                img="/images/story/story1.png"
            />
            <Story
                img1="/images/story/story1.png"
                img2="/images/story/story2.jpeg"
                img3="/images/story/story3.jpg"
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

import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <PopularProducts />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  )
}
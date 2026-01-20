
import Banner from "@/components/website/PageSections/HomePage/Banner";
import ContactUs from "@/components/website/PageSections/HomePage/ContactUs";
import ServicesWeProvide from "@/components/website/PageSections/HomePage/ServicesWeProvide";
import WhyChooseUs from "@/components/website/PageSections/HomePage/WhyChooseUs";

export default function page() {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <ServicesWeProvide />
      <ContactUs />

    </div>
  );
}

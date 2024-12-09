import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./assets/logo2.png";
import Footer from "./components/Footer";
import ScrollLogo from "./components/ScrollLogo";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Media from "./pages/Media";
import WhoWeAre from "./pages/WhoWeAre";
import ContactPressMedia from "./components/ContactPress&Media";
import ContactForm from "./components/ContactForm"
import Purpose from "./subpages/Purpose";
import Company from "./subpages/Company"
import Leadership from "./subpages/Leadership";
import InovAp from "./subpages/InovAp";


const App = () => {
  const navigation = [
    { name: "Home", link: "/" },

    { name: "Contact", link: "/contact-us" },
    { name: "ContactPressMedia", link: "/contact-us/press-and-media" },
    { name: "ContactForm", link: "/contact-us/contact-qfp" },

    {name: "Careers", link:"/about/careers" },

    /* About Dropdown */
    { name: "WhoWeAre", link: "/about/who-we-are" },
    { name: "Purpose", link: "/about/who-we-are/purpose" },
    { name: "Company", link: "/about/who-we-are/company" },
    { name: "Facts&Figures", link: "/about/who-we-are/facts-figures" },
    { name: "Leadership", link: "/about/who-we-are/leadership" },

    { name: "Media", link: "/about/media"},
    { name: "NewsRoom", link: "/about/media/newsroom" },
    { name: "Events", link: "/about/media/events"},
    { name: "Webinars", link: "/about/media/webinars"},
    { name: "Stories", link: "/about/media/stories"},

    { name: "Innovation", link: "/about/innovation"},
    { name: "Approach", link: "/about/innovation/approach" },
    { name: "FocusArea", link: "/about/innovation/focus-areas"},
    { name: "Ecosystem", link: "/about/innovation/ecosystem"},
    { name: "Heritage", link: "/about/innovation/heritage"},

    { name: "Careers", link: "/about/careers"},
    { name: "People & Culture", link: "/about/careers/culture" },
    { name: "Our Roles", link: "/about/careers/roles"},
    { name: "Recruitment Journey", link: "/about/careers/journey"},

      /* Solutions Dropdown */
      /* Insights Dropdown */
      /* Sustainability Dropdown */
  ];

  const scrollItem = [
    { path: "/contact-us", label: "Contact" },
    { path: "/", label: "ChatBot" },
  ];

  return (
      <Router basename="/QFP">
        <ParallaxProvider>
          <NavBar navigation={navigation} />
          <ScrollLogo
              logo={logo}
              rotateStart={0}
              rotateEnd={480}
              list={scrollItem}
          />
          <div className="flex-grow w-full mb-8">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/contact-us/press-and-media" element={<ContactPressMedia />} />
              <Route path="/contact-us/contact-qfp" element={<ContactForm />} />

              <Route path="/about/careers" element={<Careers />} />

              <Route path="/about/media" element={<Media />} />


              <Route path="/about/who-we-are" element={<WhoWeAre />} />
              <Route path="/about/who-we-are/purpose" element={<Purpose />} />
              <Route path="/about/who-we-are/company" element={<Company />} />
              <Route path="/about/who-we-are/leadership" element={<Leadership />} />

              <Route path="/about/innovation/approach" element={<InovAp />} />
            </Routes>
          </div>

          <Footer contactLink={"/"} />
        </ParallaxProvider>
      </Router>
  );
};

export default App;

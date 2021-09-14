import Hero from '../Hero.js'
import Section1 from '../Section1.js'
import Section2 from '../Section2.js'
import Section3 from '../Section3.js'
import Footer from '../Footer.js'

function Home() {
  return (
    <div className="App">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
    </div>
  );
}

export default Home;

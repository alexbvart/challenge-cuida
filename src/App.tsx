import { NavBarMain } from './feature/landing/components/Navbar/Navbar';
import { Hero } from './feature/landing/components/Hero/Hero';
import { StatisticsCard } from './feature/landing/components/Statistics/Statistics';
import { Features } from './feature/landing/components/Features/Features';
import { featuresList } from './constants/featuresC';
import { Plan } from './feature/landing/components/Plan/Plan';
import { Comments } from './feature/landing/components/Comments/Comments';
import { CTA } from './feature/landing/components/CTA/CTA';
import { FooterLanding } from './feature/landing/components/Footer/FooterLanding';

function App() {
  return (
    <>
        <div>
      <NavBarMain/>
      <Hero />
      <StatisticsCard />
      <Features {...featuresList} />
      <Plan/>
      <Comments />
      <CTA/>
      <FooterLanding />
    </div>
    </>
  )
}

export default App

import HeroScene from './components/HeroScene'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import WhoItsFor from './components/WhoItsFor'
import SignupForm from './components/SignupForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* 3D background — fixed behind everything */}
      <HeroScene />

      {/* Page content — scrolls over the 3D scene */}
      <div className="relative">
        <Nav />
        <Hero />

        {/* Gradient fade from transparent to solid for readability */}
        <div className="relative bg-gradient-to-b from-transparent via-background/80 to-background">
          <ValueProps />
          <HowItWorks />
          <WhoItsFor />
          <SignupForm />
          <Footer />
        </div>
      </div>
    </>
  )
}

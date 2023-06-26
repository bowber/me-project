import { HeroSection } from 'components/hero-section'
import { About } from 'components/about'
import { Projects } from 'components/projects'
import { Contact } from 'components/contact'
const App = () => {
  return (
    <div className="w-full font-serif antialiased relative">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

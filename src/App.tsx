import { HeroSection } from 'components/hero-section'
function App() {
  return (
    <div className="w-full font-serif antialiased relative">
      <HeroSection />
      <div className="w-full h-[110vh] bg-slate-400 sticky top-0" >SLIDE 2</div>
      <div className="w-full h-[110vh] bg-slate-600 sticky top-0" >SLIDE 3</div>
      <div className="w-full h-[110vh] bg-slate-800 sticky top-0" >SLIDE 4</div>
    </div>
  )
}

export default App

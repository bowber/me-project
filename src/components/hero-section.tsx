import { TypeAnimation } from 'react-type-animation';
import { Header } from './header';

export const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col items-center justify-between sticky top-0 snap-start">
      <Header />
      <div className="container flex items-center justify-center flex-col text-slate-900">
        <TypeAnimation
          className='text-6xl font-bold'
          sequence={[
            'I am a software developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'I make websites',
            1000,
            'I make games',
            1000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
        />
        <h1 className="h1 text-6xl font-bold mt-4 pb-20">
          Who I am?
        </h1>
      </div>
      <h1 className="h1 text-xl my-4">Scroll down for more</h1>
    </div>
  )
}

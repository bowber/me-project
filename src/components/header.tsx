export const Header = () => {
  return (
    <div className="w-full h-16 bg-slate-200 flex items-center justify-center">
      <div className="w-full container flex items-center justify-center md:justify-between text-slate-600">
        <div className="md:flex items-center hidden">
          <div className="ml-4 font-semibold text-lg">Lam Nguyen</div>
        </div>
        <div className="flex items-center">
          <a href="/#about" className="font-semibold text-lg mx-8">About</a>
          <a href="/#projects" className="font-semibold text-lg mr-8">Projects</a>
          <a href="/#contact" className="font-semibold text-lg mr-8">Contact</a>
        </div>
      </div>
    </div>
  )
}
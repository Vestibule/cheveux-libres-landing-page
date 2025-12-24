export function Navbar7() {
  return (
    <header className="bg-[#2e2723] w-full">
      <div className="flex items-center justify-between h-[72px] px-[var(--padding-global)] max-w-full">
        <div className="flex items-center gap-6">
          <a href="#" className="h-9 w-[84px]">
            <img
              src="/assets/logo.svg"
              alt="Cheveux Libres"
              className="h-full w-full object-contain"
            />
          </a>
          <div className="flex items-center">
            <p className="text-white text-[var(--text-regular)] font-normal">
              Accueil
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

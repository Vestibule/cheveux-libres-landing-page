export function Footer4() {
  return (
    <footer className="bg-white flex flex-col items-center px-[var(--padding-global)] py-[var(--padding-section-medium)] w-full">
      <div className="flex flex-col gap-20 items-start max-w-[1280px] w-full">
        <div className="flex gap-8 items-center w-full">
          <div className="flex-1 flex flex-col items-start">
            <a href="#" className="h-9 w-[84px]">
              <img
                src="/assets/logo.svg"
                alt="Cheveux Libres"
                className="h-full w-full object-contain"
              />
            </a>
          </div>
          <div className="flex gap-8 items-start justify-center text-[var(--text-small)] font-semibold leading-[1.5] text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-sans)' }}>
            <a href="#">Notre histoire</a>
            <a href="#">L'équipe</a>
            <a href="#">Ressources</a>
          </div>
          <div className="flex-1 flex gap-3 items-center justify-end">
            <a href="#">
              <img src="/assets/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/assets/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/assets/youtube.svg" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="h-px w-full bg-[var(--color-border)]" />
          <div className="flex gap-6 items-start text-[var(--text-small)] font-normal leading-[1.5] text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-sans)' }}>
            <p>© 2025 Cheveux Libres. Tous droits réservés.</p>
            <a href="#" className="underline">Politique de confidentialité</a>
            <a href="#" className="underline">Paramètres cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

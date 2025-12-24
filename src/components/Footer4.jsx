export function Footer4() {
  return (
    <footer className="bg-white flex flex-col items-center px-[var(--padding-global)] py-12 w-full">
      <div className="flex flex-col gap-12 md:gap-20 items-center max-w-[1280px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center overflow-clip text-center">
            <a href="#" className="h-48 w-auto">
              <img
                src="/assets/logo.svg"
                alt="Cheveux Libres"
                className="h-full w-full object-contain"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 items-center pb-4 md:pb-0 w-full">
          <div className="h-0 w-full border-t border-[var(--color-border)]" />
          <div
            className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-[var(--text-small)] font-normal leading-[1.5] text-center text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center underline order-2 md:order-1">
              <a href="#">Politique de confidentialité</a>
              <a href="#">Terms of Service</a>
              <a href="#">Paramètres cookies</a>
            </div>
            <p className="order-1 md:order-2">
              © 2025 Cheveux Libres. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

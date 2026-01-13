export function Cta57({ onOpenModal }) {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-8 w-full">
      <div className="flex flex-col items-center max-w-[1280px] w-full">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[768px] w-full">
          <div className="flex flex-col gap-5 md:gap-6 items-center text-center text-[var(--color-text-primary)] w-full">
            <div className="flex flex-col items-center heading-1 w-full">
              <h3 className="w-full text-3xl">Prêt à franchir le pas ?</h3>
            </div>
            <p
              className="text-[var(--text-regular)] font-normal leading-[1.5] w-full"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Lancement janvier 2026. Rejoignez-nous dès maintenant.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <a
              href="https://calendly.com/cheveux-libres/premier-rendez-vous"
              target="_blank"
              className="btn-secondary cursor-pointer"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

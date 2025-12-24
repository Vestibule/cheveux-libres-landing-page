export function Header19({ onOpenModal }) {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-8 w-full">
      <div className="flex flex-col items-start max-w-[1280px] w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center w-full">
          <div className="w-full md:flex-1 flex flex-col gap-6 items-start order-1 md:order-2">
            <div className="flex flex-col gap-5 items-start text-[var(--color-text-primary)] w-full">
              <img
                src="/assets/logo.svg"
                alt="Cheveux Libres"
                className="h-full w-full object-contain -mb-18"
              />
              <div
                className="text-[var(--text-regular)] font-normal leading-[1.5] w-full"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <p className="mb-0">
                  Avec Cheveux Libres, vous ne faites pas que franchir le cap de
                  l'indépendance : vous le faites avec un outil pensé pour vous.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">
                  Grâce à notre plateforme, vous bénéficiez d'un accompagnement
                  qui transforme vos craintes en confiance.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>
                  Cheveux Libres, c'est votre nouveau partenaire vers une
                  indépendance sereine et maîtrisée.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <button
                className="btn-primary cursor-pointer"
                onClick={onOpenModal}
              >
                Être rappelé
              </button>
              <a
                href="https://calendly.com/cheveux-libres/30min"
                target="_blank"
                className="btn-secondary cursor-pointer"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
          <div className="w-full md:flex-1 rounded-[var(--radius-large)] overflow-hidden order-2 md:order-1">
            <img
              src="/assets/placeholder-image.png"
              className="w-full h-auto object-cover"
              alt="Cheveux Libres"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

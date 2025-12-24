export function Header19() {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-[var(--padding-section-large)] w-full">
      <div className="flex flex-col items-start max-w-[1280px] w-full">
        <div className="flex gap-20 items-center w-full">
          <div className="flex-1 rounded-[var(--radius-large)] overflow-hidden">
            <img
              src="/assets/placeholder-image.png"
              className="w-full h-auto object-cover"
              alt="Cheveux Libres"
            />
          </div>
          <div className="flex-1 flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-6 items-start text-[var(--color-text-primary)] w-full">
              <h1 className="heading-1 w-full">Cheveux Libres</h1>
              <div className="text-[var(--text-medium)] font-normal leading-[1.5] w-full">
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
              <button className="btn-primary cursor-pointer">
                Rejoignez-nous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

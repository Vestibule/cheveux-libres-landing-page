export function Layout140() {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-[var(--padding-section-large)] w-full">
      <div className="flex flex-col items-center max-w-[1280px] w-full">
        <div className="flex flex-col gap-8 items-center max-w-[768px] w-full">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center">
              <p className="text-tagline text-center text-[var(--color-text-primary)]">
                Simulateur
              </p>
            </div>
            <h2 className="heading-5 text-center text-[var(--color-text-primary)] w-[768px]">
              Combien pourriez-vous gagner en plus?
            </h2>
          </div>
          <div className="flex gap-6 items-center">
            <button className="btn-secondary">
              Calculer
            </button>
            <button className="flex gap-2 items-center justify-center rounded-[var(--radius-button)]">
              <p className="text-[var(--text-regular)] font-medium leading-[1.5] text-[var(--color-neutral-darkest)]">
                Voir
              </p>
              <img src="/assets/chevron-right.svg" alt="Chevron" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

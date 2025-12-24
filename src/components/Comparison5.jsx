export function Comparison5() {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-[var(--padding-section-large)] w-full">
      <div className="flex flex-col gap-20 items-center max-w-[1280px] w-full">
        <div className="flex flex-col gap-4 items-center max-w-[768px] w-full">
          <div className="flex items-center">
            <p className="text-tagline text-center text-[var(--color-text-primary)]">
              Comparaison
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center text-center text-[var(--color-text-primary)] w-full">
            <h2 className="heading-2 w-full">
              Salarié ou indépendant?
            </h2>
            <p className="text-[var(--text-medium)] font-normal leading-[1.5] w-full">
              Voyez la différence concrète entre les deux chemins.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[1024px] w-full">
          {/* Header Row */}
          <div className="flex items-center w-full border-b border-[var(--color-border)]">
            <div className="flex items-end justify-end w-[440px] pr-6 py-6">
              <h3 className="text-[var(--text-large)] font-bold leading-[1.5] text-[var(--color-text-primary)] w-full">
                Situation actuelle
              </h3>
            </div>
            <div className="flex-1 bg-white border-b border-[var(--color-border)] flex flex-col gap-2 items-center justify-center p-6">
              <img
                src="/assets/placeholder-comparison.png"
                alt="Avec Cheveux Libres"
                className="aspect-square w-full rounded-[var(--radius-medium)] object-cover"
              />
              <div className="flex flex-col gap-2 items-start text-center text-[var(--color-text-primary)] w-full">
                <h3 className="text-[var(--text-large)] font-bold leading-[1.5] w-full">
                  Avec Cheveux Libres
                </h3>
                <p className="text-[var(--text-regular)] font-normal leading-[1.5] w-full">
                  Salaire plafonné
                </p>
              </div>
            </div>
            <div className="flex-1 border-b border-[var(--color-border)] flex flex-col gap-2 items-center justify-center p-6">
              <img
                src="/assets/placeholder-comparison.png"
                alt="Revenus illimités"
                className="aspect-square w-full rounded-[var(--radius-medium)] object-cover"
              />
              <div className="flex flex-col gap-2 items-start text-center text-[var(--color-text-primary)] w-full">
                <h3 className="text-[var(--text-large)] font-bold leading-[1.5] w-full">
                  Revenus illimités
                </h3>
                <p className="text-[var(--text-regular)] font-normal leading-[1.5] w-full">
                  Horaires imposés
                </p>
              </div>
            </div>
          </div>

          {/* Row 1 */}
          <div className="flex items-center w-full border-b border-[var(--color-border)]">
            <div className="flex items-start w-[440px] pr-6 py-4">
              <p className="flex-1 text-[var(--text-regular)] font-normal leading-[1.5] text-[var(--color-text-primary)]">
                Liberté totale
              </p>
            </div>
            <div className="flex-1 bg-white border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <p className="flex-1 text-[var(--text-regular)] font-semibold leading-[1.5] text-center text-[var(--color-text-primary)]">
                Oui
              </p>
            </div>
            <div className="flex-1 border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <p className="flex-1 text-[var(--text-regular)] font-semibold leading-[1.5] text-center text-[var(--color-text-primary)]">
                Non
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center w-full border-b border-[var(--color-border)]">
            <div className="flex items-start w-[440px] pr-6 py-4">
              <p className="flex-1 text-[var(--text-regular)] font-normal leading-[1.5] text-[var(--color-text-primary)]">
                Dépendance patronale
              </p>
            </div>
            <div className="flex-1 bg-white border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <img src="/assets/check-icon.svg" alt="Check" className="w-6 h-6" />
            </div>
            <div className="flex-1 border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <img src="/assets/check-icon.svg" alt="Check" className="w-6 h-6" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center w-full border-b border-[var(--color-border)]">
            <div className="flex items-start w-[440px] pr-6 py-4">
              <p className="flex-1 text-[var(--text-regular)] font-normal leading-[1.5] text-[var(--color-text-primary)]">
                Autonomie complète
              </p>
            </div>
            <div className="flex-1 bg-white border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <img src="/assets/check-icon.svg" alt="Check" className="w-6 h-6" />
            </div>
            <div className="flex-1 border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <img src="/assets/check-icon.svg" alt="Check" className="w-6 h-6" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex items-center w-full border-b border-[var(--color-border)]">
            <div className="flex items-start w-[440px] pr-6 py-4">
              <p className="flex-1 text-[var(--text-regular)] font-normal leading-[1.5] text-[var(--color-text-primary)]">
                Gestion administrative
              </p>
            </div>
            <div className="flex-1 bg-white border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <img src="/assets/check-icon.svg" alt="Check" className="w-6 h-6" />
            </div>
            <div className="flex-1 border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <img src="/assets/close-icon.svg" alt="Close" className="w-6 h-6" />
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex items-center w-full border-b border-[var(--color-border)]">
            <div className="flex items-start w-[440px] pr-6 py-4">
              <p className="flex-1 text-[var(--text-regular)] font-normal leading-[1.5] text-[var(--color-text-primary)]">
                Nous gérons tout
              </p>
            </div>
            <div className="flex-1 bg-white border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <img src="/assets/check-icon.svg" alt="Check" className="w-6 h-6" />
            </div>
            <div className="flex-1 border-b border-[var(--color-border)] flex items-center justify-center px-6 py-4">
              <img src="/assets/close-icon.svg" alt="Close" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <button className="btn-secondary">
            Changer
          </button>
          <button className="flex gap-2 items-center justify-center rounded-[var(--radius-button)]">
            <p className="text-[var(--text-regular)] font-medium leading-[1.5] text-[var(--color-neutral-darkest)]">
              Découvrir
            </p>
            <img src="/assets/chevron-right.svg" alt="Chevron" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export function Layout140() {
  const [chiffreAffaires, setChiffreAffaires] = useState("5000");
  const [salaireActuel, setSalaireActuel] = useState("1400");

  const handleCAIncrement = (increment) => {
    const currentValue = parseFloat(chiffreAffaires) || 0;
    const newValue = Math.max(0, currentValue + increment);
    setChiffreAffaires(newValue.toString());
  };

  const handleSalaireIncrement = (increment) => {
    const currentValue = parseFloat(salaireActuel) || 0;
    const newValue = Math.max(0, currentValue + increment);
    setSalaireActuel(newValue.toString());
  };

  // Calculs détaillés à partir du CA
  const ca = chiffreAffaires ? parseFloat(chiffreAffaires) : 0;
  const produitTechnique = ca * 0.05; // 5%
  const chargesSociales = ca * 0.229; // 22,90%
  const assurance = 16; // 16€
  const partSalonCL = ca * 0.25; // 25%

  // Calcul du résultat net
  const resultatNet =
    ca > 0
      ? ca - produitTechnique - chargesSociales - assurance - partSalonCL
      : 0;

  // Calcul de la différence avec le salaire actuel
  const difference = salaireActuel
    ? resultatNet - parseFloat(salaireActuel)
    : 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-8 w-full">
      <div className="flex flex-col items-center max-w-[1280px] w-full">
        <div className="flex flex-col gap-8 md:gap-10 items-center max-w-[768px] w-full">
          {/* Header */}
          <div className="flex flex-col gap-3 md:gap-4 items-center w-full">
            <div className="flex items-center">
              <p className="text-tagline text-center text-[var(--color-text-primary)]">
                Simulateur
              </p>
            </div>
            <h2 className="heading-5 text-center text-[var(--color-text-primary)] w-full">
              Combien pourriez-vous gagner en plus?
            </h2>
          </div>

          {/* Formulaire */}
          <div className="flex flex-col gap-6 w-full">
            {/* Input Chiffre d'affaires */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="ca"
                className="text-[var(--text-regular)] font-semibold text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Chiffre d'affaires mensuel
              </label>
              <div className="relative">
                <input
                  id="ca"
                  type="number"
                  value={chiffreAffaires}
                  onChange={(e) => setChiffreAffaires(e.target.value)}
                  placeholder="3000"
                  className="w-full px-4 py-3 pr-32 border border-[var(--color-border)] rounded-[var(--radius-button)] text-[var(--text-regular)] focus:outline-none focus:ring-2 focus:ring-[var(--color-stonewall)] focus:border-transparent"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <span
                    className="text-[var(--color-text-secondary)] text-[var(--text-regular)] mr-1"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    €
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCAIncrement(-250)}
                    className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] rounded-lg hover:bg-gray-100 transition-colors text-[var(--color-text-primary)] font-bold"
                  >
                    −
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCAIncrement(250)}
                    className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] rounded-lg hover:bg-gray-100 transition-colors text-[var(--color-text-primary)] font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Input Salaire actuel */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="salaire"
                className="text-[var(--text-regular)] font-semibold text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Salaire actuel net
              </label>
              <div className="relative">
                <input
                  id="salaire"
                  type="number"
                  value={salaireActuel}
                  onChange={(e) => setSalaireActuel(e.target.value)}
                  placeholder="1500"
                  className="w-full px-4 py-3 pr-32 border border-[var(--color-border)] rounded-[var(--radius-button)] text-[var(--text-regular)] focus:outline-none focus:ring-2 focus:ring-[var(--color-stonewall)] focus:border-transparent"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <span
                    className="text-[var(--color-text-secondary)] text-[var(--text-regular)] mr-1"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    €
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSalaireIncrement(-50)}
                    className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] rounded-lg hover:bg-gray-100 transition-colors text-[var(--color-text-primary)] font-bold"
                  >
                    −
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSalaireIncrement(50)}
                    className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] rounded-lg hover:bg-gray-100 transition-colors text-[var(--color-text-primary)] font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Résultats */}
          {chiffreAffaires && (
            <div className="flex flex-col gap-6 w-full p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-large)]">
              {/* Détail des calculs */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[var(--text-regular)] font-semibold text-[var(--color-text-primary)] mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Détail du calcul
                </h3>

                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-[var(--text-small)] text-[var(--color-text-primary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Chiffre d'affaires
                  </span>
                  <span
                    className="text-[var(--text-regular)] font-medium text-[var(--color-text-primary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {formatCurrency(ca)}
                  </span>
                </div>

                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-[var(--text-small)] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Produit technique (5%)
                  </span>
                  <span
                    className="text-[var(--text-regular)] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    - {formatCurrency(produitTechnique)}
                  </span>
                </div>

                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-[var(--text-small)] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Charges sociales (22,90%)
                  </span>
                  <span
                    className="text-[var(--text-regular)] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    - {formatCurrency(chargesSociales)}
                  </span>
                </div>

                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-[var(--text-small)] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Assurance
                  </span>
                  <span
                    className="text-[var(--text-regular)] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    - {formatCurrency(assurance)}
                  </span>
                </div>

                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-[var(--text-small)] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Part salon + Cheveux Libres (25%)
                  </span>
                  <span
                    className="text-[var(--text-regular)] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    - {formatCurrency(partSalonCL)}
                  </span>
                </div>
              </div>

              {/* Résultat net */}
              <div className="flex flex-col gap-3 pt-4 border-t-2 border-[var(--color-stonewall)]">
                <div className="flex justify-between items-center w-full">
                  <span
                    className="text-[var(--text-regular)] font-semibold text-[var(--color-text-primary)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Résultat net estimé
                  </span>
                  <span
                    className="text-[var(--text-large)] font-bold text-[var(--color-stonewall)]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {formatCurrency(resultatNet)}
                  </span>
                </div>

                {salaireActuel && (
                  <div className="flex justify-between items-center w-full pt-3 border-t border-[var(--color-border)]">
                    <span
                      className="text-[var(--text-regular)] font-semibold text-[var(--color-text-primary)]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {difference >= 0 ? "Gain potentiel" : "Différence"}
                    </span>
                    <span
                      className={`text-[var(--text-large)] font-bold ${difference >= 0 ? "text-green-600" : "text-red-600"}`}
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {difference >= 0 ? "+" : ""}
                      {formatCurrency(difference)}
                    </span>
                  </div>
                )}
              </div>

              <p
                className="text-[var(--text-small)] text-[var(--color-text-secondary)] italic"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                * Simulation basée sur le statut de micro-entrepreneur
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Cta57() {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-8 w-full">
      <div className="flex flex-col items-center max-w-[1280px] w-full">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[768px] w-full">
          <div className="flex flex-col gap-5 md:gap-6 items-center text-center text-[var(--color-text-primary)] w-full">
            <div className="flex flex-col items-center heading-1 w-full">
              <p className="w-full">Prêt à</p>
              <p className="w-full">franchir le pas ?</p>
            </div>
            <p
              className="text-[var(--text-regular)] font-normal leading-[1.5] w-full"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Lancement janvier 2026. Rejoignez-nous dès maintenant.
            </p>
          </div>
          <div className="flex items-start">
            <button className="btn-primary">Rejoindre</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Header19({ onOpenModal }) {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] pt-8 w-full">
      <div className="flex flex-col items-start max-w-[1280px] w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center w-full">
          <div className="w-full md:flex-1 flex flex-col gap-6 items-start order-1 md:order-2">
            <div className="flex flex-col gap-5 items-start text-[var(--color-text-primary)] w-full">
              <img
                src="/assets/logo.svg"
                alt="Cheveux Libres"
                className="h-full w-full px-4 object-contain -mb-8"
              />
              <h2 className="w-full text-2xl text-center">
                Devenez indépendant avec Cheveux Libres
              </h2>
              <div
                className="text-[var(--text-regular)] font-normal leading-[1.5] w-full"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <p className="mb-2">
                  Ne choisissez plus entre la liberté et la sécurité. Avec
                  Cheveux Libres, vous lancez votre activité en gardant l'esprit
                  tranquille.
                </p>
                <p className="mb-2">
                  Afin que vous puissiez vous concentrer sur l'essentiel, nous
                  vous fournissons tous les outils dont vous avez besoin. Vous
                  pouvez vous concentrer sur vos clients et votre talent.
                </p>
                <p className="">
                  Ainsi, l'indépendance ne devrait pas être un saut dans le
                  vide, mais une suite logique.
                </p>
              </div>
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

export function Testimonials() {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-18 w-full">
      <div className="flex flex-col items-center max-w-[1280px] w-full">
        <div className="flex flex-col mb-8 items-center max-w-[768px] text-center text-[var(--color-text-primary)] w-full">
          <h2 className="text-3xl w-full">Elles ont franchi le pas</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 px-0 md:px-8 items-start w-full">
          {/* Video 1 */}
          <div className="w-full md:flex-1 flex justify-center items-center">
            <video
              className="w-full md:w-auto md:h-[48em] rounded-[var(--radius-large)]"
              controls
              poster="/assets/sabrina-miniature.png"
            >
              <source src="/assets/sabrina-temoignage.mov" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>

          {/* Video 2 */}
          <div className="w-full md:flex-1 flex justify-center items-center">
            <video
              className="w-full md:w-auto md:h-[48em] rounded-[var(--radius-large)]"
              controls
              poster="/assets/juliette-miniature.png"
            >
              <source src="/assets/juliette-temoignage.mov" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

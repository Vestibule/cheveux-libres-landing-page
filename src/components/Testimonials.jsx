export function Testimonials() {
  return (
    <section className="bg-white flex flex-col items-center px-[var(--padding-global)] py-12 w-full">
      <div className="flex flex-col gap-20 items-center max-w-[1280px] w-full">
        <div className="flex flex-col gap-6 items-center max-w-[768px] text-center text-[var(--color-text-primary)] w-full">
          <h2 className="heading-2 w-full">Elles ont franchi le pas</h2>
        </div>

        <div className="flex gap-8 px-8 items-center w-full">
          {/* Video 1 */}
          <div className="flex-1 flex justify-center items-center">
            <video
              className="w-auto h-[48em] rounded-[var(--radius-large)]"
              controls
              poster="/assets/video-placeholder.png"
            >
              <source src="/assets/sabrina-temoignage.mov" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>

          {/* Video 2 */}
          <div className="flex-1 flex justify-center items-center">
            <video
              className="w-auto h-[48em] rounded-[var(--radius-large)]"
              controls
              poster="/assets/video-placeholder.png"
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

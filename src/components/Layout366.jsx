"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout366() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Pourquoi</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Pourquoi devenir indépendant?
            </h2>
            <p className="md:text-md">
              Découvrez les trois piliers qui changeront votre carrière.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            <div className="order-first flex flex-col items-stretch border border-border-primary lg:order-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                  className="w-full object-cover"
                />
              </div>
              <div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Liberté</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Indépendance
                  </h3>
                  <p>
                    Fixez vos horaires, vos tarifs, vos modalités d'accueil.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button variant="secondary">Découvrir</Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Découvrir
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-last flex flex-col border border-border-primary md:grid md:grid-cols-2 lg:order-none">
              <div className="flex w-full items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
              <div className="block flex-col justify-center p-6 md:flex">
                <div>
                  <p className="mb-2 font-semibold">Réussite</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Prospérité
                  </h3>
                  <p>
                    Gardez la majorité de votre chiffre d'affaire, sans plafond
                    de salaire.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      title="Découvrir"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Découvrir
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-last flex flex-col border border-border-primary md:grid md:grid-cols-2 lg:order-none">
              <div className="flex w-full items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
              <div className="block flex-col justify-center p-6 md:flex">
                <div>
                  <p className="mb-2 font-semibold">Maîtrise</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Autonomie
                  </h3>
                  <p>
                    Soyez votre propre patron et décidez de votre avenir
                    professionnel.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      title="Explorer"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Explorer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

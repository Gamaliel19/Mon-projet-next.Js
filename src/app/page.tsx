'use client';

import { TopCategories } from "@/caracteristiques/home/TopCategories";
import Banner from "@/caracteristiques/home/Banner";
import { CaracteristiquesProduits } from "@/caracteristiques/home/CaracteristiquesProduits";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopCategories />
      <CaracteristiquesProduits title="Vos meilleur choix" />
      <CaracteristiquesProduits title="Plus d'articles" />
      <CaracteristiquesProduits title="Articles en vente" />
    </div>
  )
}

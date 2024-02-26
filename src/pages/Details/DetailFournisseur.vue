<template>
  <div class="q-pa-md">
    <h5>Chateau Machin{nom.fournisseur}</h5>

    <h6>Détails</h6>
    <div>Téléphone: {tel.fournisseur}</div>
    <div>Mail: {mail.fournisseur}</div>
    <div>Adresse: {adresse.fournisseur}</div>

    <h6>Dernières Commandes</h6>
    <q-table flat bordered :rows="rows" :columns="columns" row-key="id" />
    <br />
    <q-input
      v-model.number="model"
      type="number"
      filled
      style="max-width: 200px"
    />
    <br />

    <div>Prix: 10$ HT / 12$ TTC</div>
    <div>Marge 40%</div>

    <h6>Détails</h6>

    <div>Fournisseur : {nom.fournisseur}</div>
    <div>Famille : {nom.famille}</div>
    <div>Conditionnement : Carton de {conditionnement}</div>

    <h6>Réapprovisionnement</h6>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns = [
  {
    name: 'date',
    required: true,
    label: 'Date',
    align: 'left',
    field: 'date',
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'fkFournisseur',
    align: 'center',
    label: 'Fournisseur',
    field: 'fkFournisseur',
    sortable: true,
  },
  {
    name: 'auto',
    label: 'Auto?',
    field: 'auto',
    sortable: true,
  },
  {
    name: 'prix',
    label: 'Prix',
    field: 'prix',
    sortable: true,
  },
];

const rows = [
  {
    id: 1,
    date: 'Château Margaux 2010',
    annee: 199.99,
    auto: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    prix: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 2,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 3,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 4,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 5,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 6,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 7,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 8,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 9,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 10,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 11,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 12,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 13,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
  {
    id: 14,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    prix: 199.99,
    description: 'Vin rouge de Bordeaux, millésime 2010.',
    marge: 0.2,
    conditionnement: 6,
    reapprovisionnement: true,
    quantiteReappro: 20,
    seuilMini: 5,
    fkFournisseur: 1,
    fkStockage: 1,
    fkFamille: 1,
  },
];
</script>

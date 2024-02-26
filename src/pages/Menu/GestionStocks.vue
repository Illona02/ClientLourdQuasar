<template>
  <div class="q-pa-md">
    <h5>Gestion des Stocks</h5>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="positive"
        icon="add"
        label="Ajouter produit"
        to="/CreerArticle"
      />
      <q-btn color="negative" icon="remove" label="Supprimer produit" />
    </div>
    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="single"
      v-model:selected="selected"
      @row-click="RowClick"
    />

    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const RowClick = () => {
  router.push({ path: '/DetailArticle' });
};

const columns = [
  {
    name: 'reference',
    required: true,
    label: 'Référence',
    align: 'left',
    field: 'reference',
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'nom',
    align: 'center',
    label: 'Nom Cuvée',
    field: 'nom',
    sortable: true,
  },
  {
    name: 'fkFournisseur',
    label: 'Fournisseur',
    field: 'fkFournisseur',
    sortable: true,
  },
  {
    name: 'annee',
    label: 'Année',
    field: 'annee',
    sortable: true,
  },
  {
    name: 'fkFamille',
    label: 'Famille',
    field: 'fkFamille',
    sortable: true,
  },
  { name: 'ht', label: 'HT', field: 'ht' },
  { name: 'prix', label: 'TTC', field: 'prix' },
  { name: 'seuilMini', label: 'Min', field: 'seuilMini' },
  { name: 'quantiteReappro', label: 'Quantité', field: 'quantiteReappro' },
];

const rows = [
  {
    id: 1,
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

const selected = ref([]);
</script>

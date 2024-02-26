<template>
  <div class="q-pa-md">
    <h5>Nouvelle commande fournisseur</h5>
    <q-select
      filled
      v-model="searchFournisseur"
      :options="optionsFournisseur"
      label="Fournisseur"
    />
    <br />
    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="single"
      v-model:selected="selected"
    />
    <div>
      <div class="q-pa-md q-gutter-sm">
        <h6>Total Commande : {faire un calcul} $</h6>
        <q-btn color="positive" icon="add" label="Valider" @click="trouver" />
        <q-btn color="negative" icon="remove" label="Annuler" />
      </div>
      <div class="q-mt-md">Id récuperé: {{ selectedId }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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
  { name: 'seuilMini', label: 'Min', field: 'seuilMini' },
  { name: 'fkStockage', label: 'Stock', field: 'fkStockage' },
];

const rows = [
  {
    id: 1,
    reference: 'CM2010',
    nom: 'Château Margaux 2010',
    annee: 199.99,
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

const optionsFournisseur = ['ajout retour fournissseurs api'];
const selected = ref([]);
const selectedId = ref();
const trouver = () => {
  // Vérifie s'il y a des éléments sélectionnés
  if (selected.value.length > 0) {
    selectedId.value = selected.value[0].id; // Récupère l'ID du premier élément sélectionné
    console.log('ID sélectionné :', selectedId);
  } else {
    console.log('Aucun élément sélectionné');
  }
};
</script>

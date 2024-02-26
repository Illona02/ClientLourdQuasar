<template>
  <div class="q-pa-md">
    <h5>Liste des commandes Fournisseurs</h5>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="positive" icon="add" label="Nouvelle commande" />
    </div>
    <q-table flat bordered :rows="rows" :columns="columns" row-key="id" />
  </div>
</template>

<script setup>
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
    label: 'Fournisseur',
    field: 'fkFournisseur',
    sortable: true,
  },
  {
    name: 'dateLivraison',
    label: 'Date livraison',
    field: 'dateLivraison',
    sortable: true,
  },
  {
    name: 'montant',
    label: 'Montant',
    field: 'montant',
    sortable: true,
  },
  { name: 'tel', label: 'Téléphone', field: 'tel' },
  { name: 'mail', label: 'Mail', field: 'mail' },
];

const rows = [
  {
    id: 1,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 2,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 3,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 4,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 5,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 6,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 7,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 8,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 9,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 10,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 11,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 12,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
  {
    id: 13,
    date: 'CM2010',
    fkFournisseur: 'Château Margaux 2010',
    dateLivraison: 199.99,
    montant: 'Vin rouge de Bordeaux, millésime 2010.',
    tel: 0.2,
    mail: 6,
  },
];
</script>

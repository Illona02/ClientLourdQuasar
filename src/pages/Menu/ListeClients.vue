<template>
  <div class="q-pa-md">
    <h5>Liste des clients</h5>

    <div class="q-pa-md q-gutter-sm">
      <q-btn
        clickable
        color="positive"
        icon="add"
        label="Nouvelle fiche client"
      />
    </div>

    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
      @row-click="RowClick"
    >
    </q-table>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const RowClick = () => {
  router.push({ path: '/DetailClient' });
};

const columns = [
  {
    name: 'nom',
    required: true,
    label: 'Nom',
    align: 'left',
    field: 'nom',
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'prenom',
    align: 'center',
    label: 'Prénom',
    field: 'prenom',
    sortable: true,
  },
  {
    name: 'derniereCommande',
    label: 'Dernière Commande',
    field: 'derniereCommande',
    sortable: true,
  },
  {
    name: 'cp',
    label: 'CP',
    field: 'cp',
    sortable: true,
  },
  {
    name: 'tel',
    label: 'Téléphone',
    field: 'tel',
    sortable: true,
  },
  { name: 'mail', label: 'Mail', field: 'mail' },
];

const rows = [
  {
    nom: 1,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 2,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 3,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 4,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 5,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 6,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 7,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 8,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 9,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 10,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    nom: 11,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
];
</script>

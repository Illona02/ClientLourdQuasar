<template>
  <div class="q-pa-md">
    <h5>Liste des fournisseurs</h5>

    <div class="q-pa-md q-gutter-sm">
      <q-btn
        to="/CreerFournisseur"
        clickable
        color="positive"
        icon="add"
        label="Nouveau Fournisseur"
      />
    </div>
    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
      @row-click="RowClick"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const RowClick = () => {
  router.push({ path: '/DetailFournisseur' });
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
    name: 'derniereCommande',
    align: 'center',
    label: 'Dernière Commande',
    field: 'derniereCommande',
    sortable: true,
  },
  {
    name: 'tel',
    label: 'Téléphone',
    field: 'tel',
    sortable: true,
  },
  {
    name: 'mail',
    label: 'Mail',
    field: 'mail',
    sortable: true,
  },
  {
    name: 'cp',
    label: 'CP',
    field: 'cp',
    sortable: true,
  },
];

const rows = [
  {
    id: 1,
    nom: 1,
    derniereCommande: 'Château Margaux 2010',
    tel: 199.99,
    mail: 'Vin rouge de Bordeaux, millésime 2010.',
    cp: 0.2,
  },
  {
    id: 2,
    nom: 2,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 3,
    nom: 3,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 4,
    nom: 4,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 5,
    nom: 5,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 6,
    nom: 6,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 7,
    nom: 7,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 8,
    nom: 8,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 9,
    nom: 9,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 10,
    nom: 10,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
  {
    id: 11,
    nom: 11,
    prenom: 'CM2010',
    derniereCommande: 'Château Margaux 2010',
    cp: 199.99,
    tel: 'Vin rouge de Bordeaux, millésime 2010.',
    mail: 0.2,
  },
];
</script>

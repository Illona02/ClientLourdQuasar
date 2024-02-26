<template>
  <div class="q-pa-md">
    <h5>Liste des commandes</h5>

    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="positive"
        icon="add"
        label="Nouvelle commande fournisseur"
        to="/NouvelleCommandeFournisseur"
      />
    </div>
    <q-table
      flat
      bordered
      title="Commandes Fournisseurs"
      :rows="rowsFournisseurs"
      :columns="columnsFournisseurs"
      row-key="id"
    />
    <br />
    <q-btn
      flat
      color="primary"
      label="Voir toutes les commandes fournisseurs"
      to="/CommandesFournisseurs"
    />
    <br />
    <br />

    <q-table
      flat
      bordered
      title="Commandes Clients"
      :rows="rowsClients"
      :columns="columnsClients"
      row-key="id"
    />
    <br />
    <q-btn
      flat
      color="primary"
      label="Voir toutes les commandes clients"
      to="/CommandesClients"
    />
    <br />
    <br />
  </div>
</template>

<script setup>
//Fournisseurs
const columnsFournisseurs = [
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
    name: 'fournisseur',
    align: 'center',
    label: 'Fournisseur',
    field: 'fournisseur',
    sortable: true,
  },
  {
    name: 'auto',
    label: 'Auto',
    field: 'auto',
    sortable: true,
  },
  { name: 'montant', label: 'Montant TTC', field: 'montant' },
];

const rowsFournisseurs = [
  {
    id: 1,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 2,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 3,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 4,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 5,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 6,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 7,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 8,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 9,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 10,
    date: 1,
    fournisseur: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
];
//Clients
const columnsClients = [
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
    name: 'client',
    align: 'center',
    label: 'Client',
    field: 'client',
    sortable: true,
  },
  { name: 'montant', label: 'Montant TTC', field: 'montant' },
];

const rowsClients = [
  {
    id: 1,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 2,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 3,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 4,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 5,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 6,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 7,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 8,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 9,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
  {
    id: 10,
    date: 1,
    client: 'CM2010',
    auto: 'Château Margaux 2010',
    montant: 199.99,
  },
];
</script>

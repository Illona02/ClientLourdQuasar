<template>
  <div class="q-pa-md">
    <h5>Ref.89898 - Pinot Gris Cuvée Prestige 2023(id.article)</h5>
    <h6>Stock</h6>
    <div>Quantité Disponible(seuil minimal : 5):</div>
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

const model = ref(5);
</script>

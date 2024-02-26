<template>
  <div class="q-pa-md">
    <h5>Créer un nouvel article</h5>
    <h6>Désignation</h6>

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-uploader
        url="http://localhost:4444/upload"
        color="primary"
        flat
        bordered
        style="max-width: 300px"
      />

      <q-input
        style="max-width: 350px"
        filled
        v-model="nom"
        label="Nom Cuvée"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Champ invalide']"
      />

      <q-select filled v-model="annee" :options="options_annee" label="Année" />

      <q-select
        filled
        v-model="fournisseur"
        :options="options_fournisseur"
        label="Fournisseur"
      />

      <q-select
        filled
        v-model="famille"
        :options="options_famille"
        label="Famille"
      />

      <q-select
        filled
        v-model="conditionnement"
        :options="options_conditionnement"
        label="Conditionnement"
      />

      <div style="max-width: 999px">
        <q-input
          filled
          v-model="description"
          label="Description"
          hint="Max 750 char."
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Champ invalide']"
        />
      </div>

      <h6>Tarification</h6>
      <div>
        <q-input filled v-model="prixAchat" :dense="dense" label="Prix d'achat">
          <template v-slot:prepend>
            <q-icon name="attach_money" />
          </template>
        </q-input>
        <p>Prix HT : 10 $</p>
      </div>
      <div>
        <q-input filled v-model="marge" :dense="dense" label="Marge">
          <template v-slot:prepend>
            <q-icon name="percent" />
          </template>
        </q-input>
        <p>Prix TTC : 12 $</p>
      </div>
      <br />

      <h6>Stock</h6>
      <q-input
        style="max-width: 350px"
        filled
        v-model="quantiteDispo"
        label="quantité Disponible"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Champ invalide']"
      />

      <q-input
        style="max-width: 350px"
        filled
        v-model="seuilMinimal"
        label="Seuil Minimal"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Champ invalide']"
      />

      <h6>Réapprovisionnement</h6>

      <q-checkbox v-model="check" label="Réapprovisionnement automatique" />

      <q-input
        filled
        type="number"
        v-model="quantiteReappro"
        label="Quantité de réapprovionnement"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Champ invalide',
          (val) => (val > 0 && val < 100) || 'Champ invalide',
        ]"
      />

      <div>
        <q-btn label="Valider" type="submit" color="primary" />
        <q-btn
          label="Annuler"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const nom = ref(null);
const tel = ref(null);
const mail = ref(null);
const adresse = ref(null);
const description = ref(null);
const annee = ref(null);
const fournisseur = ref(null);
const prixAchat = ref(null);
const marge = ref(null);
const quantiteDispo = ref(null);
const seuilMinimal = ref(null);
const check = ref(false);
const quantiteReappro = ref(null);

const accept = ref(false);

const options_annee = ref(['2010', '2011', '2012', '2013', '2014']);
const options_conditionnement = ref(['1', '2']);
const options_famille = ['ajout retour famille api'];
const options_fournisseur = ['ajout retour fournisseur api'];
const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first',
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    });
  }
};

const onReset = () => {
  nom.value = null;
  tel.value = null;
  mail.value = null;
  adresse.value = null;
  description.value = null;
  annee.value = null;
  prixAchat.value = null;
  quantiteDispo.value = null;
  seuilMinimal.value = null;
  marge.value = null;
  check.value = null;
  options_annee.value = null;
  options_conditionnement.value = null;
  options_famille.value = null;
  options_fournisseur.value = null;
  accept.value = false;
};
</script>

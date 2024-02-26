<template>
  <div class="q-pa-md">
    <h5>Créer un fournisseur</h5>

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
        label="Nom"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Champ invalide']"
      />

      <q-input
        style="max-width: 350px"
        filled
        v-model="tel"
        label="Téléphone"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Champ invalide']"
      />

      <q-input
        style="max-width: 450px"
        filled
        v-model="mail"
        label="Mail"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Champ invalide']"
      />

      <q-input
        style="max-width: 500px"
        filled
        v-model="adresse"
        label="Adresse"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Champ invalide']"
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

      <br />

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
const accept = ref(false);

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
  accept.value = false;
};
</script>

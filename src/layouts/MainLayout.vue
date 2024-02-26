<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="secondary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> NEGOSUD </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item to="/GestionStocks" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="inventory" />
          </q-item-section>

          <q-item-section>Stock</q-item-section>
        </q-item>
        <q-item to="ListeCommandes" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="markunread_mailbox" />
          </q-item-section>

          <q-item-section>Commandes</q-item-section>
        </q-item>

        <q-item to="ListeFournisseurs" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="local_shipping" />
          </q-item-section>

          <q-item-section>Fournisseurs</q-item-section>
        </q-item>

        <q-item to="ListeClients" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="contact_mail" />
          </q-item-section>

          <q-item-section>Clients</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '../router/routes';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

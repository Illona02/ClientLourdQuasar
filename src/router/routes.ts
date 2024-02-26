import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    name: 'GestionStocks',
    path: '/GestionStocks',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/GestionStocks.vue') },
    ],
  },
  {
    name: 'ListeCommandes',
    path: '/ListeCommandes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/ListeCommandes.vue') },
    ],
  },
  {
    name: 'ListeFournisseurs',
    path: '/ListeFournisseurs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/ListeFournisseurs.vue') },
    ],
  },
  {
    path: '/ListeClients',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/ListeClients.vue') },
    ],
  },
  {
    name: 'CreerFournisseur',
    path: '/CreerFournisseur',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Creation/CreerFournisseur.vue'),
      },
    ],
  },
  {
    name: 'CreerArticle',
    path: '/CreerArticle',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Creation/CreerArticle.vue') },
    ],
  },
  {
    name: 'CommandesFournisseurs',
    path: '/CommandesFournisseurs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Commandes/CommandesFournisseurs.vue'),
      },
    ],
  },
  {
    name: 'NouvelleCommandeFournisseur',
    path: '/NouvelleCommandeFournisseur',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () =>
          import('pages/Commandes/NouvelleCommandeFournisseur.vue'),
      },
    ],
  },
  {
    name: 'CommandesClients',
    path: '/CommandesClients',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Commandes/CommandesClients.vue'),
      },
    ],
  },
  {
    name: 'DetailClient',
    path: '/DetailClient',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Details/DetailClient.vue'),
      },
    ],
  },
  {
    name: 'DetailArticle',
    path: '/DetailArticle',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Details/DetailArticle.vue'),
      },
    ],
  },
  {
    name: 'DetailFournisseur',
    path: '/DetailFournisseur',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Details/DetailFournisseur.vue'),
      },
    ],
  },
  /*
  {
    name: 'CreerClient',
    path: '/CreerClient',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Creation/CreerClient.vue') },
    ],
  },
  

  */

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

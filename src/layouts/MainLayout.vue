<script setup>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from "quasar";


const systemOnline = ref(false);

const $q = useQuasar();
const menuDrawer = ref(false);

const openPage = () => {
  $q.dialog({
    title: "Funciona el boton",
    message: "Este boton si funciona",
  });

};

onMounted(() => {
  menuDrawer.value = false;
  if (navigator.onLine) {
    console.log("Conectado a internet");
    systemOnline.value = true;
  }
  if (!navigator.onLine) {
    console.log("Sin conexión a internet");
    systemOnline.value = false;
  }
});
</script>

<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated  class="bg-black">
      <q-toolbar>
        <!-- <div class="q-mt-md row">
          <q-fab
            v-model="menuDrawer"
            label="Actions"
            label-position="bottom"
            vertical-actions-align="left"
            color="white"
            icon="keyboard_arrow_down"
            direction="down"
            flat
          >
            <q-fab-action color="primary" to="newComponente" icon="mail" label="Nueva Rutina" />
            <q-fab-action color="secondary" to="/" icon="alarm" label="Editar Variable" />
            <q-fab-action color="orange" @click="openPage" icon="airplay" label="Buscar Rutina" />
            <q-fab-action color="accent" @click="openPage" icon="room" label="Nueva Medición" />
          </q-fab>
        </div> -->
        <q-btn flat @click="menuDrawer = !menuDrawer" round dense icon="menu" />
        
        <q-toolbar-title>Mediciones </q-toolbar-title>

        <div>
          <q-icon :name="systemOnline ? 'wifi' : 'mdi-wifi-off'" :color="systemOnline ? 'secondary' : 'negative'" size="4rem"/>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
        v-model="menuDrawer"
        show-if-above
        :width="200"
        :breakpoint="400"


      >

        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/rutine1" @click="menuDrawer = !menuDrawer">
              <q-item-section avatar >
                <q-icon name="inbox"  />
              </q-item-section>

              <q-item-section>
                Rutina 1
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple to="/rutine2" @click="menuDrawer = !menuDrawer">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Rutina 2
              </q-item-section>
            </q-item>

            <!-- <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item> -->

            <!-- <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item> -->
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">

          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Usuario</div>
            <div>rol: operador</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

  <script setup >
  import { defineComponent } from 'vue'
  import { useQuasar } from 'quasar'
  
  
  const $q = useQuasar()
  
  const alert = () => {
  
    $q.dialog({
      title: 'Funciona el boton',
      message: 'Este boton si funciona',
    })
  
  }
  
  
  </script>

<template>
  <q-page class="flex flex-center column">
    <img
      alt="Quasar logo"
      src="~assets/logoNasa.png"
      style="width: 200px; height: 200px"
    >

    Prueba de PWA para nuevo sistema
    <q-btn label="Alert" color="primary" @click="alert" />
  </q-page>
</template>


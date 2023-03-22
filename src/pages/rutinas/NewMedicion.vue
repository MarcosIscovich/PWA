<script setup>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const sistId = ref(null);
const varName = ref("");

const sistemas = ref([
  {
    id: 1,
    nombreSist: "Sector Recinto 1 de Sala 1",
    observacion: "qwerty",
    variables: [
      {
        variable: "variable 1",
        parametro: "1",
        desde_hasta: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "qwerty",
      },
      {
        variable: "variable 2",
        parametro: "2",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 3",
        parametro: "3",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 4",
        parametro: "4",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 5",
        parametro: "5",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 6",
        parametro: "6",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 7",
        parametro: "7",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 8",
        parametro: "8",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 9",
        parametro: "9",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
  {
    id: 2,
    nombreSist: "Sector recinto 1 de Piso3",
    observacion: "qwerty",
    variables: [
      {
        variable: "variable 1",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 2",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 3",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 4",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 5",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 6",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
  {
    id: 3,
    nombreSist: "5211 Sala Electrica PAR",
    observacion: "qwerty",
    variables: [
      {
        variable: "72213 V218 Abierta",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "72214 TK210 67221-TI236",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "72213-V617 Abierta",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "65225-PT 205 AIRE DE ARRANQUE",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
  {
    id: 4,
    nombreSist: "5211 Sala Electrica IMPAR",
    observacion: "qwerty",
    variables: [
      {
        variable: "72213 v118 ABIERTA",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "52253-V311 ABIERTA",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
  {
    id: 5,
    nombreSist: "52900-EPS",
    observacion: "qwerty",
    variables: [
      {
        variable: "52900-PL71 WN20 PRESENTE",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 2",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 3",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 4",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 5",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 6",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 7",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 8",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 9",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 10",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 11",
        parametro: "",
        par_desde: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
]);

const backPage = () => {
  $router.push({ path: "/variables/" + sistId.value });
};

onMounted(() => {
  console.log("VARIABLES en medicion", $router.currentRoute.value.query);
  sistId.value = $router.currentRoute.value.query.sistema;
  varName.value = $router.currentRoute.value.query.variable;
});
</script>

<template>
  <div class="q-pa-md">
    <q-responsive>
      <div class="q-gutter-md" style="max-width: 300px">
        <div class="titleClass flex justify-center">
          {{ varName }}
        </div>
        <div class="q-mt-lg row flex justify-center">
          <div class="col-2 ">
            <q-input v-model="medicion" label="Unidad de Medida" filled type="number" :rules="[(val) => val > 0 || 'Debe ser mayor a 0']" />
          </div>

        </div>
        <div class="q-mt-lg row flex justify-center">
          <div class="col-2 ">
            <q-input v-model="medicion" label="valor Desde/Hasta" filled type="number" :rules="[(val) => val > 0 || 'Debe ser mayor a 0']" />
          </div>

        </div>
        <div class="q-mt-lg row flex justify-center">
          <div class="col-2 ">
            <q-input v-model="medicion" label="Valor Normal" filled type="number" :rules="[(val) => val > 0 || 'Debe ser mayor a 0']" />
          </div>

        </div>
        <div class="q-mt-lg row flex justify-center">
          <div class="col-2 ">
            <q-input v-model="medicion" label="Valor Anterior" filled type="number" :rules="[(val) => val > 0 || 'Debe ser mayor a 0']" />
          </div>

        </div>
        <div class="q-mt-lg row flex justify-center">
          <div class="col-2 ">
            <q-input v-model="medicion" label="Medicion" filled type="number" :rules="[(val) => val > 0 || 'Debe ser mayor a 0']" />
          </div>

        </div>
        <div class="q-mt-lg row flex justify-center">
          <div class="col-2 ">
            <q-input v-model="medicion" label="Observacion" filled type="area" :rules="[(val) => val > 0 || 'Debe ser mayor a 0']" />
          </div>

        </div>

        <div class="q-mt-lg">
          <q-btn @click="backPage()">
            <q-icon name="mdi-arrow-left" />
            volver
          </q-btn>
        </div>
      </div>
    </q-responsive>
  </div>
</template>

<style lang="scss">
.titleClass {
  font-size: 40px;
  font-weight: bold;
  color: $nasaNar;
}
</style>

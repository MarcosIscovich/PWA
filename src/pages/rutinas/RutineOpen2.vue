<script setup>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import sistVariables from "../rutinas/SistVariables.vue";

const $q = useQuasar();
const $router = useRouter();

//VARIABLES
const sistemas = ref([
  {
    id: 1,
    nombreSist: "Sector Recinto 1 de Sala 1",
    observacion: "esta es una Obsercacion",
    variables: [
      {
        variable: "variable 1",
        parametro: "1",
        desde_hasta: "",

        valor_anterior: "0",
        medicion: "",
        observacion: "esta es una Obsercacion",
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
    observacion: "esta es una Obsercacion",
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
    observacion: "esta es una Obsercacion",
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
    observacion: "esta es una Obsercacion",
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
    observacion: "esta es una Obsercacion",
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
const openComponent = ref(false);
const sistVar = ref([]);
const openDialog = ref(false);
const pagination = ref({
  rowsPerPage: 0,
});
const columns = ref([
  {
    name: "variable",
    label: "Variable",
    field: "",
    align: "center",
    sortable: true,
    headerStyle: "width: auto",
  },
  {
    name: "parametro",
    label: "Parametro",
    field: "parametro",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "par_desde",
    label: "par desde",
    field: "par_desde",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "par_hasta",
    label: "par hasta",
    field: "par_hasta",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "valor_anterior",
    label: "valor anterior",
    field: "valor_anterior",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "medicion",
    label: "Medicion ",
    field: "medicion",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "observacion",
    label: "Observacion",
    field: "observacion",
    align: "left",
    sortable: true,
  },
  {
    name: "acciones",
    label: "Acciones",
    field: "acciones",
    align: "left",
    sortable: true,
  },
]);

//FUNCIONES
const dataSist = (value) => {
  console.log(value);
};

const openVariable = (data) => {
  console.log("OPEN SISt", data);
  // openDialog.value = true;
  sistVar.value = data;

  $router.push({ path: "/variables/" + data });
};
</script>
<template>
  <q-responsive :ratio="1">
    <div class="q-pa-md">
      <div class="flex justify-center q-mt-sm q-mb-md">
        <span class="titleClass">Rutina Exteriores</span>
      </div>
      <q-separator size="3px"  color="#74727257"/>
      <div class="row q-pa-md">
      <div class="q-mt-sm q-mb-md q-ma-sm" v-for="(sist, idx) in sistemas" :key="idx">
          <q-card class="my-card" @click="openVariable(sist.id)" bordered>
            <q-card-section class=" q-pr-none">
              <div class="row">
                <div class="col-8">
                  <div class="text-h6">{{ sist.nombreSist }}</div>
                  <q-separator></q-separator>
              <div class="text-subtitle2 q-mt-sm">{{ sist.observacion }}</div>
            </div>
            <div class="col-4 flex justify-center items-center ">

                <q-icon size="lg" name="mdi-menu-right"></q-icon>

            </div>

              </div>

            </q-card-section>

            <!-- <q-card-actions align="right">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions> -->
          </q-card>
        </div>
      </div>
    </div>
  </q-responsive>
</template>

<style lang="scss">
.titleClass {
  font-size: 20px;
  font-weight: bold;
  color: $nasaNar;
}

.headerClass {
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: $nasaAzul !important;
}

.chipClass {
  background: $nasaNar !important;
}

.expansionClass {
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.my-card {


  border-radius: 10px;
  border: 1px solid $nasaNar !important;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

}
</style>

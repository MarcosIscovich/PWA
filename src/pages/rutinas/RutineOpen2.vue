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
    nombreSist: "Sistema Primario - Panel CWM",
    observacion: "esta es una observación",
    variables: [
      {
        variable: "KTC66CL001",
        descripcion: "Nivel del tanque KTC66BB001 ",
        unidad_medida: "m",
        desde_hasta: "0.5/1.8",
        valor_normal: "",
        valor_anterior: "",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTC66CP001",
        descripcion: "Presión del tanque KTC66BB001 ",
        unidad_medida: "bar",
        desde_hasta: "-0.6 / 1",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTC66AA010 (abierta)",
        descripcion: "Aislación descarga de KTC66BB001 ",
        unidad_medida: "si / no",
        desde_hasta: "si / no",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTC66EE001 (auto)",
        descripcion: "Autom. bombas KTC66Ap002/003",
        unidad_medida: "si / no",
        desde_hasta: "si / no",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTC66EE002",
        descripcion: "Autom.preselección KTC66Ap002/003",
        unidad_medida: "#",
        desde_hasta: "2 / 3",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTB01CP001",
        descripcion: "Vacio de estator JFB10AP001",
        unidad_medida: "bar",
        desde_hasta: "-1 / -0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTB02CP001",
        descripcion: "Vacio de estator JFB20AP001",
        unidad_medida: "bar",
        desde_hasta: "-1 / -0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTB03CP001",
        descripcion: "Vacio de estator JFB30AP001",
        unidad_medida: "bar",
        desde_hasta: "-1 / -0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTB04CP001",
        descripcion: "Vacio de estator JFB40AP001",
        unidad_medida: "bar",
        desde_hasta: "-1 / -0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTF20Cl001XG01",
        descripcion: "Alarma de 'KTF20BB001 L > MIN'",
        unidad_medida: "si / no",
        desde_hasta: "si / no",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTF20Cl002XG01",
        descripcion: "Alarma liquido en KTF20BR001",
        unidad_medida: "si / no",
        desde_hasta: "si / no",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTF00EG001ZV01",
        descripcion : "Alarma colectiva sumuderos de UJA (L>MAX)",
        unidad_medida: "si / no",
        desde_hasta: "si / no",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW10CF001A",
        descripcion : "Caudal agua de sello JFB10AP001",
        unidad_medida: "kg/s",
        desde_hasta: "0 / 0.2",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW11CF001A",
        descripcion : "C .de perdida del sello de presión",
        unidad_medida: "kg/s",
        desde_hasta: "0.31 / 0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTA01CF001",
        descripcion : "C. de perdida del sello de presión",
        unidad_medida: "kg/h",
        desde_hasta: "0 / 5",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEC12CP810A",
        descripcion : "Presión diferencial JFB10AP001",
        unidad_medida: "bar",
        desde_hasta: "0 / 15",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW20CF001A",
        descripcion : "Caudak agua de sello JFB20AP001",
        unidad_medida: "kg/s",
        desde_hasta: "0 / 0.2",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW21CF001A",
        descripcion : "c. de perdida del sello de alta presión",
        unidad_medida: "kg/s",
        desde_hasta: "0.31 / 0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTA02Cf001",
        descripcion : "C. de perdida del sello de baja presión",
        unidad_medida: "kg/h",
        desde_hasta: "0 / 5",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEC22CP831A",
        descripcion : "Presion diferencial JFB20AP001",
        unidad_medida: "bar",
        desde_hasta: "0 / 15",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW11AA501",
        descripcion : "Posición valvula reg. agua de sello",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KAB71AA501",
        descripcion : "Posicion valvula reg. de temperatura de JEB10AP003/004",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KAB71AA502",
        descripcion : "Posicion valvula reg. de temperatura de JEB10BC020",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
  {
    id: 2,
    nombreSist: "Sistema Secundario",
    observacion: "esta es una observación",
    variables: [
      {
        variable: "RL51D001",
        descripcion : "Carga de bomba RL51D001",
        unidad_medida: "%",
        desde_hasta: " 0 / 120",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL52D001",
        descripcion : "Carga de bomba RL52D001",
        unidad_medida: "%",
        desde_hasta: " 0 / 120",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL53D001",
        descripcion : "Carga de bomba RL53D001",
        unidad_medida: "%",
        desde_hasta: " 0 / 120",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RR51P001",
        descripcion : "Presión en el recipiente para el mantenimiento de la presión",
        unidad_medida: "ata ",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RR52P001",
        descripcion : "Presión en el recipiente para el mantenimiento de la presión",
        unidad_medida: "ata ",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RR51L005",
        descripcion : "Nivel del recipiente para el mantenimiento de la presión",
        unidad_medida: "cm",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RR52L005",
        descripcion : "Nivel del recipiente para el mantenimiento de la presión",
        unidad_medida: "cm",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV Rl11P001",
        descripcion : "Refrigerador moderador 1-presion agua de alimentación",
        unidad_medida: "ate",
        desde_hasta: "5 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV Rl12P001",
        descripcion : "Refrigerador moderador 2-presion agua de alimentación",
        unidad_medida: "ate",
        desde_hasta: "5 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL11S005",
        descripcion : "Indicación de apertura",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL12S005",
        descripcion : "Indicación de apertura",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV QW01L001",
        descripcion : "Nivel de los generadores de vapor",
        unidad_medida: "m",
        desde_hasta: "0.7 / 8.56",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV QW02L001",
        descripcion : "Nivel de los generadores de vapor",
        unidad_medida: "m",
        desde_hasta: "0.7 / 8.56",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "UU04P001",
        descripcion : "Presión colector",
        unidad_medida: "ate",
        desde_hasta: "0 / 10",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SC17S026",
        descripcion : "Válvula reguladora",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SC22P001",
        descripcion : "presión aceite auxiliar secundario",
        unidad_medida: "ate",
        desde_hasta: "0 / 6",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SOBR.BY",
        descripcion : "presión de sobrecarga del by-pass",
        unidad_medida: "kg/cm2",
        desde_hasta: "-20 / 20",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "ERROR REG PRES",
        descripcion : "Error de regulacion de presión",
        unidad_medida: "kg/cm2",
        desde_hasta: "-10 / 10",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RA03P004-AP",
        descripcion : "Delta P entre ramales de vapor vivo",
        unidad_medida: "kg/cm2",
        desde_hasta: "-10 / 10",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV RL11L001",
        descripcion : "Nivel del tanque de agua de alimentación",
        unidad_medida: "m",
        desde_hasta: "1 / 2.2",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL11T006",
        descripcion : "Temperatura tanque de agua de alimentación",
        unidad_medida: "°C",
        desde_hasta: "0 / 300",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SG10P011",
        descripcion : "Presión de vapor de sellos",
        unidad_medida: "mmca",
        desde_hasta: "70 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SD11L012",
        descripcion : "Nivel del condensador",
        unidad_medida: "m",
        desde_hasta: "1 / 2",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
  {
    id: 3,
    nombreSist: "5211 Sala Electrica PAR",
    observacion: "esta es una observación",
    variables: [
      {
        variable: "72213 V218 Abierta",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "72214 TK210 67221-TI236",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "72213-V617 Abierta",
        unidad_medida: "cm",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "65225-PT 205 AIRE DE ARRANQUE",
        unidad_medida: "cm",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
  {
    id: 4,
    nombreSist: "5211 Sala Electrica IMPAR",
    observacion: "esta es una observación",
    variables: [
      {
        variable: "72213 v118 ABIERTA",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "52253-V311 ABIERTA",
        unidad_medida: "cm",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
    ],
  },
  {
    id: 5,
    nombreSist: "52900-EPS",
    observacion: "esta es una observación",
    variables: [
      {
        variable: "52900-PL71 WN20 PRESENTE",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 2",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 3",
        unidad_medida: "cm",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 4",
        unidad_medida: "g",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 5",
        unidad_medida: "g",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 6",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 7",
        unidad_medida: "l",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 8",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 9",
        unidad_medida: "m",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 10",
        unidad_medida: "cm",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 11",
        unidad_medida: "m",
        desde_hasta: "",
        valor_normal: "0",
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

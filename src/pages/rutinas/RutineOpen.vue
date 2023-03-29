<script setup>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, watch } from "vue";

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

const $q = useQuasar();

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
    name: "unidad_medicion",
    label: "Unidad de Medición",
    field: "",
    align: "center",
    sortable: true,
    headerStyle: "width: auto",
  },
  {
    name: "desde_hasta",
    label: "Valor desde - hasta",
    field: "desde_hasta",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "valor_normal",
    label: "Valor Normal",
    field: "valor_normal",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "valor_anterior",
    label: "Valor Anterior",
    field: "valor_anterior",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "medicion",
    label: "Medición ",
    field: "medicion",
    align: "center",
    sortable: true,
    headerStyle: "width: 100px",
  },
  {
    name: "observacion",
    label: "Observación",
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
const valorMedicion = ref({
  variable: "",
  parametro: "",
  par_desde: "",
  par_hasta: "",
  valor_anterior: "",
  medicion: "",
  observacion: "",
});

const dataSist = (value) => {
  console.log(value);
};

const addObservacion = (variable) => {
  console.log(variable);
  let allSistems = sistemas.value;
  $q.dialog({
    title: "Observación",
    prompt: {
      model: "",
      type: "textarea", // optional
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      console.log(">>>> OK, received", data);
      sistemas.value.map((sist) => {
        sist.variables.map((varSist) => {
          if (varSist.variable === variable) {
            varSist.observacion = data;
          }
        });
      });

      console.log(sistemas.value);
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
};

watch(sistemas, () => {
  console.log("WATCH", sistemas.value);
});
</script>
<template>
  <q-responsive :ratio="1">
    <div class="q-pa-sm">
      <div class="flex justify-center q-mt-sm q-mb-md">
        <span class="titleClass">Rutina Exteriores</span>
      </div>
      <q-expansion-item
        v-for="sist in sistemas"
        :key="sist.id"
        class="bg-indigo-1 text-black q-mb-sm q-pa-sm rounded-borders shadow-2"
        icon="mdi-facebook-workplace"
        :label="sist.nombreSist"
        header-class="expansionClass"
      >
        <!-- agregar para que solo se despliegue un expand a la vez
      group="somegroup" -->
        <q-card flat>
          <q-card-section>
            <q-table :rows="sistemas" :columns="columns" :pagination="pagination" :rows-key="sist.id" separator="horizontal">
              <template v-slot:header="props"
                ><q-tr :props="props"
                  ><q-th v-for="col in props.cols" :key="col.name" :props="props" class="headerClass"> {{ col.label }}</q-th></q-tr
                >
              </template>
              <template v-slot:body="props">
                <template v-if="sist.nombreSist == props.row.nombreSist">
                  <q-tr v-for="(col, idx) in props.row.variables" :key="idx">
                    <q-td v-for="(colTd, idx) in props.cols" :key="idx">
                      <div v-if="colTd.name == 'variable'">
                        <q-chip class="chipClass" text-color="white">
                          <q-icon name="mdi-atom-variant" color="black" size="sm"></q-icon>
                          <span class="q-ml-sm">{{ col.variable }}</span>

                          <q-tooltip
                            max-height="auto"
                            max-width="auto"
                            class="bg-indigo-4 text-body2"
                            transition-show="rotate"
                            transition-hide="rotate"
                          >
                            {{ col.descripcion }}
                          </q-tooltip>
                        </q-chip>
                      </div>
                      <div v-if="colTd.name == 'unidad_medicion'" class="flex justify-center">
                        <span style="font-size: 20px; font-weight: 500; color: black">{{ col.unidad_medida }} </span>
                      </div>

                      <div v-if="colTd.name == 'desde_hasta'" class="flex justify-center">
                        <span style="font-size: 20px; font-weight: 500; color: black">{{ col.desde_hasta }}</span>
                      </div>

                      <div v-if="colTd.name == 'valor_normal'" class="flex justify-center">
                        <span style="font-size: 20px; font-weight: 500; color: black">{{ col.valor_normal }}</span>
                      </div>

                      <div v-if="colTd.name == 'valor_anterior'" class="flex justify-center">
                        <span style="font-size: 20px; font-weight: 500; color: black">{{ col.valor_anterior }}</span>
                      </div>

                      <div v-if="colTd.name == 'medicion'" class="flex justify-center">
                        <q-input outlined rounded style="width: 80px" dense type="number" color="positive" v-model="col.medicion" />
                      </div>
                      <div v-if="colTd.name == 'observacion'">
                        {{ col?.variable?.observacion }}
                      </div>
                      <div v-if="colTd.name == 'acciones'">
                        <q-icon size="xl" name="mdi-dots-horizontal" color="black" label="Flip Menu">
                          <q-menu transition-show="flip-right" transition-hide="flip-left">
                            <q-list style="min-width: auto">
                              <q-item clickable>
                                <div class="flex content-center">
                                  <q-icon size="sm" name="mdi-pencil" class="q-mr-sm" color="orange" />
                                </div>

                                <q-separator vertical></q-separator>
                                <span class="q-ml-sm flex justify-center content-center accionClass">Editar</span>
                              </q-item>

                              <q-item clickable>
                                <div class="flex content-center">
                                  <q-icon size="sm" name="mdi-plus" class="q-mr-sm" color="green" />
                                </div>

                                <q-separator vertical></q-separator>
                                <span class="q-ml-sm flex justify-center content-center accionClass">Guardar</span>
                              </q-item>

                              <q-item clickable>
                                <div class="flex content-center">
                                  <q-icon size="sm" name="mdi-clock-alert-outline" class="q-mr-sm" color="brown" />
                                </div>

                                <q-separator vertical></q-separator>
                                <span class="q-ml-sm flex justify-center content-center accionClass">Pendiente</span>
                              </q-item>
                              <q-item clickable @click="addObservacion(col.variable)">
                                <div class="flex content-center">
                                  <q-icon size="sm" name="mdi-eye" class="q-mr-sm" color="primary" />
                                </div>

                                <q-separator vertical></q-separator>
                                <span class="q-ml-sm flex justify-center content-center accionClass">Agregar Observación</span>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-icon>
                        <!-- <q-icon name="mdi-plus-box-multiple" color="positive" size="32px" @click="dataSist(col)" /> -->
                      </div>
                    </q-td>
                  </q-tr>
                </template>
              </template>

              <!--  <template v-slot:body-cell-medicion="{ row }">
            <div class="row q-mt-sm">
              <div class="col flex justify-center">
                <q-input outlined style="width: 50px" type="number" color="positive" v-model="row.medicion" />
              </div>
            </div>
          </template>
          <template v-slot:body-cell-acciones="row">
            <div :props="row">
              <q-btn icon="font_download" color="primary" size="32px" />
              <q-icon name="font_download" color="primary" size="32px" />
            </div>
          </template> -->
            </q-table>
          </q-card-section>
        </q-card>
      </q-expansion-item>
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
.accionClass {
  font-size: 14px;
  font-weight: bold;
  color: black;
}
</style>

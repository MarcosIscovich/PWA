<script setup>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const $router = useRouter();
const $q = useQuasar();

const sistId = ref(null);
const dialog = ref(false);
const dataVar = ref("");

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
        unidad_medida: "bar",
        desde_hasta: "-1 / -0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTB02CP001",
        unidad_medida: "bar",
        desde_hasta: "-1 / -0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTB03CP001",
        unidad_medida: "bar",
        desde_hasta: "-1 / -0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTB04CP001",
        unidad_medida: "bar",
        desde_hasta: "-1 / -0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTF20Cl001XG01",
        unidad_medida: "si / no",
        desde_hasta: "si / no",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTF20Cl002XG01",
        unidad_medida: "si / no",
        desde_hasta: "si / no",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTF00EG001ZV01",
        unidad_medida: "si / no",
        desde_hasta: "si / no",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW10CF001A",
        unidad_medida: "kg/s",
        desde_hasta: "0 / 0.2",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW11CF001A",
        unidad_medida: "kg/s",
        desde_hasta: "0.31 / 0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTA01CF001",
        unidad_medida: "kg/h",
        desde_hasta: "0 / 5",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEC12CP810A",
        unidad_medida: "bar",
        desde_hasta: "0 / 15",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW20CF001A",
        unidad_medida: "kg/s",
        desde_hasta: "0 / 0.2",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW21CF001A",
        unidad_medida: "kg/s",
        desde_hasta: "0.31 / 0.8",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KTA02Cf001",
        unidad_medida: "kg/h",
        desde_hasta: "0 / 5",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEC22CP831A",
        unidad_medida: "bar",
        desde_hasta: "0 / 15",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "JEW11AA501",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KAB71AA501",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "KAB71AA502",
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
    observacion: "qwerty",
    variables: [
      {
        variable: "RL51D001",
        unidad_medida: "%",
        desde_hasta: " 0 / 120",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL52D001",
        unidad_medida: "%",
        desde_hasta: " 0 / 120",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL53D001",
        unidad_medida: "%",
        desde_hasta: " 0 / 120",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RR51P001",
        unidad_medida: "ata ",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RR52P001",
        unidad_medida: "ata ",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RR51L005",
        unidad_medida: "cm",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RR52L005",
        unidad_medida: "cm",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV Rl11P001",
        unidad_medida: "ate",
        desde_hasta: "5 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV Rl12P001",
        unidad_medida: "ate",
        desde_hasta: "5 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL11S005",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL12S005",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV QW01L001",
        unidad_medida: "m",
        desde_hasta: "0.7 / 8.56",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV QW02L001",
        unidad_medida: "m",
        desde_hasta: "0.7 / 8.56",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "UU04P001",
        unidad_medida: "ate",
        desde_hasta: "0 / 10",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SC17S026",
        unidad_medida: "%",
        desde_hasta: "0 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SC22P001",
        unidad_medida: "ate",
        desde_hasta: "0 / 6",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SOBR.BY",
        unidad_medida: "kg/cm2",
        desde_hasta: "-20 / 20",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "ERROR REG PRES",
        unidad_medida: "kg/cm2",
        desde_hasta: "-10 / 10",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RA03P004-AP",
        unidad_medida: "kg/cm2",
        desde_hasta: "-10 / 10",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RV RL11L001",
        unidad_medida: "m",
        desde_hasta: "1 / 2.2",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "RL11T006",
        unidad_medida: "°C",
        desde_hasta: "0 / 300",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SG10P011",
        unidad_medida: "mmca",
        desde_hasta: "70 / 100",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "SD11L012",
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
    observacion: "qwerty",
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
    observacion: "qwerty",
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
    observacion: "qwerty",
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

const backPage = () => {
  $router.push({ path: "/rutine2" });
};

const copyAnterior = (data) => {
  console.log("DATA", data);
  dataVar.value.medicion = data;
  // $router.push({ path: "/medicion/" , query: { sistema:sistId.value ,  variable: data } });
};

const submit = () => {
  dialog.value = false;
  $q.dialog({
    title: "Datos Guardados",
    message: "Los datos se han guardado correctamente",
    position: "bottom",
  });
};

const openMedicion = (data) => {
  console.log("DATA", data);
  console.log("SISTEMA", sistId.value);
  dialog.value = true;
  dataVar.value = data;
  // $router.push({ path: "/medicion/" , query: { sistema:sistId.value ,  variable: data } });
};

const onDialogCancel = () => {
  dialog.value = false;
};

onMounted(() => {
  console.log("VARIABLES en sistemas", $router.currentRoute.value.params.id);
  sistId.value = $router.currentRoute.value.params.id;
});
</script>

<template>
  <q-responsive :ratio="1">
    <div class="q-pa-md">
      <div class="flex justify-center" v-for="name in sistemas" :key="name">
        <div v-if="name.id == sistId">
          <span class="titleClass">{{ name.nombreSist }}</span>
        </div>
      </div>
      <q-separator size="3px" color="#74727257" />
      <div v-for="vari in sistemas" :key="vari.id" class="q-mt-md">
        <div class="row" v-if="vari.id == sistId">
          <div v-for="variable in vari.variables" :key="variable">
            <q-card class="varClass q-ma-sm q-gutter-md" @click="openMedicion(variable)">
              <q-card-section class="q-ma-none">
                <div class="text-h6">{{ variable.variable }} <q-icon class="q-ml-md" size="md" name="mdi-menu-right"></q-icon></div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="q-mt-lg">
        <q-btn @click="backPage()">
          <q-icon name="mdi-arrow-left" />
          volver
        </q-btn>
      </div>
    </div>

    <q-dialog v-model="dialog" persistent transition-show="jump-up">
      <q-card class="cardClass">
        <!--   <q-item>
           <q-item-section avatar>
            <q-icon name="mdi-atom-variant" size="md" class="iconClass"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label class="titleVarClass">{{ dataVar.variable }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <div class="flex justify-end content-start">
              <q-icon size="md" color="red" name="mdi-close-circle-outline" @click="dialog = !dialog"></q-icon>
            </div>
          </q-item-section> -->
        <div class="row">
          <div class="col-1 flex justify-center content-center">
            <q-icon name="mdi-atom-variant" size="md" class="iconClass"></q-icon>
          </div>
          <div class="col-10 flex justify-center">
            <q-item-label class="titleVarClass">{{ dataVar.variable }}</q-item-label>
          </div>
          <div class="col-1 flex content-start justify-end">
            <q-icon size="sm" color="red" name="mdi-close-circle-outline" @click="dialog = !dialog"></q-icon>
          </div>
        </div>
        <!--  </q-item> -->

        <q-separator size="2px" color="blue" />

        <q-card-section class="border-radius-inherit">
          <q-card flat>
            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-start"> Unidad de Medida</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-5 q-ml-md">
                <q-chip size="xl">
                  <q-avatar class="avatarColor" text-color="white" icon="mdi-chart-timeline-variant"></q-avatar>
                  <span class="variCLass"> {{ dataVar.unidad_medida }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-start">Valores Desde/Hasta</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-5 q-ml-md">
                <q-chip size="xl">
                  <q-avatar class="avatarColor" text-color="white" icon="mdi-arrow-expand-horizontal"></q-avatar>
                  <span class="variCLass"> {{ dataVar.desde_hasta }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-start">Valor Normal</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-5 q-ml-md">
                <q-chip size="xl">
                  <q-avatar class="avatarColor" text-color="white" icon="mdi-hand-okay"></q-avatar>
                  <span class="variCLass"> {{ dataVar.valor_normal }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm q-ml-none">
              <div class="col-5">
                <span class="variCLass flex justify-start">Valor Anterior</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-3 q-ml-md">
                <q-chip size="xl">
                  <q-avatar class="avatarColor" text-color="white" icon="mdi-table-column-plus-before"></q-avatar>
                  <span class="variCLass"> {{ dataVar.valor_anterior }}</span>
                </q-chip>
              </div>
              <div class="flex content-center" @click="copyAnterior(dataVar.valor_anterior)">
                <div class="col-4 q-ml-none">
                  <q-icon size="sm" color="primary" name="mdi-content-copy"></q-icon>
                  <span style="font-size: 12px; color: black; font-weight: bold">Copiar a Medición</span>
                </div>
                <!-- <div class="col-1 flex justify-center content-center">
                  <q-icon size="sm" color="primary" name="mdi-content-copy"></q-icon>
                </div>
                <div class="col-2 flex justify-center content-center">
                  <span style="font-size: 12px; color: black; font-weight: bold">Copiar Medición</span>
                </div> -->
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-start">Medición</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-4">
                <q-input outlined v-model="dataVar.medicion" type="number" class="q-ml-md" rounded>
                  <template v-slot:append>
                    <q-avatar>
                      <q-img src="../../assets/logoNasa.png" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
              <!--  <div class="col-1 flex justify-center content-center q-ml-md">
                <q-btn color="primary"    icon="mdi-table-column-plus-before" ></q-btn>
              </div> -->
            </div>

            <div class="row q-ma-sm">
              <div class="col-5 flex">
                <div class="flex">
                  <span class="variCLass">Observación</span>
                </div>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-6">
                <q-input class="q-ml-md" type="textarea" outlined rounded> </q-input>
              </div>
            </div>
            <q-separator size="2px" color="blue" />
            <q-card-actions class="flex justify-around">
              <q-btn class="q-ma-sm btnColotAzul" label="Pendiente" @click="onDialogCancel" />
              <q-btn class="q-ma-sm btnColotAzul" color="primary" label="Guardar" @click="submit" />
            </q-card-actions>
          </q-card>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-responsive>
</template>

<style lang="scss">
.varClass {
  border: 1px solid $nasaAzul !important;
}

.classMedicion {
  width: 400px;
  height: 400px;
}

.dataClass {
  font-size: 1.2rem;
  font-weight: bold;
  color: $nasaAzul;
}

.chipClass {
  background: $nasaAzul !important;
  border-radius: 10px;
  border: 1px solid $nasaAzul !important;
  margin: auto;
  padding: 15px 15px 15px 15px;
}

.cardClass {
  border-radius: 10px;
  border: 1px solid $nasaAzul !important;
  margin: auto;
  padding: 15px;
  width: 100%;
}

.variCLass {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin: auto;
  padding: 15px 0px 15px 0px;
}
.iconClass {
  color: $nasaAzul;
}

.titleClass {
  font-size: 20px;
  font-weight: bold;
  color: $nasaNar;
}

.titleVarClass {
  font-size: 20px;
  font-weight: bold;
  color: $nasaNar;
  margin: auto;
  padding: 10px;
}
.btnColotAzul {
  background: $nasaAzul !important;
  color: white !important;
  border-radius: 10px;
  border: 1px solid $nasaAzul !important;
}
.avatarColor {
  background: $violet !important;
  color: white !important;
}
</style>

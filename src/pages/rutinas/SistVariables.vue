<script setup>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const $router = useRouter();

const sistId = ref(null);
const dialog = ref(false);
const dataVar = ref("");

const sistemas = ref([
  {
    id: 1,
    nombreSist: "Sector Recinto 1 de Sala 1",
    observacion: "qwerty",
    variables: [
      {
        variable: "variable 1",
        unidad_medida: "mg",
        desde_hasta: "5 / 10",
        valor_normal: "7",
        valor_anterior: "8",
        medicion: "",
        observacion: "qwerty",
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
        unidad_medida: "m",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 4",
        unidad_medida: "N/R",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 5",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 6",
        unidad_medida: "m",
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
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
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
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 2",
        unidad_medida: "N/R",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 3",
        unidad_medida: "m",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 4",
        unidad_medida: "cm",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 5",
        unidad_medida: "mg",
        desde_hasta: "",
        valor_normal: "0",
        valor_anterior: "0",
        medicion: "",
        observacion: "",
      },
      {
        variable: "variable 6",
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
                <span class="variCLass flex justify-center"> Unidad de Medida</span>
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
                <span class="variCLass flex justify-center">Valores Desde/Hasta</span>
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
                <span class="variCLass flex justify-center">Valor Normal</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-5 q-ml-md">
                <q-chip size="xl">
                  <q-avatar class="avatarColor" text-color="white" icon="mdi-hand-okay"></q-avatar>
                  <span class="variCLass"> {{ dataVar.valor_normal }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-center">Valor Anterior</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-5 q-ml-md">
                <q-chip size="xl">
                  <q-avatar class="avatarColor" text-color="white" icon="mdi-table-column-plus-before"></q-avatar>
                  <span class="variCLass"> {{ dataVar.valor_anterior }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-center">Medición</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-3">
                <q-input outlined v-model="dataVar.medicion" type="number" class="q-ml-md" rounded>
                  <template v-slot:append>
                    <q-avatar>
                      <q-img src="src/assets/logoNasa.png" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
              <div class="col-1 flex justify-center content-center q-ml-md">
                <q-icon color="primary" size="sm" name="mdi-content-copy"></q-icon>
              </div>
              <div class="col-2 flex justify-center content-center">
                <span style="font-size: 12px; font-weight: 500; color: black">Copiar Valor Anterior</span>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5 flex justify-center content-center">
                <span class="variCLass">Observación</span>
              </div>
              <q-separator vertical size="2px" color="blue" />
              <div class="col-5">
                <q-input class="q-ml-md" type="textarea" outlined rounded> </q-input>
              </div>
            </div>
            <q-separator size="2px" color="blue" />
            <q-card-actions class="flex justify-around">
              <q-btn class="q-ma-sm btnColotAzul" label="Pendiente" @click="onDialogCancel" />
              <q-btn class="q-ma-sm btnColotAzul" color="primary" label="Guardar" @click="onDialogCancel" />
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

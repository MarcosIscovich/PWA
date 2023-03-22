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

    <q-dialog v-model="dialog">
      <q-card class="cardClass">
        <q-item>
          <q-item-section avatar>
            <q-icon name="mdi-atom-variant" size="md" class="iconClass"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label class="titleVarClass">{{ dataVar.variable }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <div class="flex justify-end content-start">
              <q-icon size="md" color="red" name="mdi-close-circle-outline"></q-icon>
            </div>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section class="border-radius-inherit">
          <q-card flat>
            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-center "> Unidad de Medida</span>
              </div>
              <q-separator vertical color="blue" />
              <div class="col-5">
                <q-chip size="xl">
                  <q-avatar color="red" text-color="white" icon="mdi-chart-timeline-variant"></q-avatar>
                  <span class="variCLass flex justify-center "> {{ dataVar.unidad_medida }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-center">Valor Desde/Hasta</span>
              </div>
              <q-separator vertical color="blue" />
              <div class="col-5">
                <q-chip size="xl">
                  <q-avatar color="red" text-color="white" icon="mdi-arrow-expand-horizontal"></q-avatar>
                  <span class="variCLass "> {{ dataVar.desde_hasta }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-center">Valor Normal</span>
              </div>
              <q-separator vertical color="blue" />
              <div class="col-5">
                <q-chip size="xl">
                  <q-avatar color="red" text-color="white" icon="mdi-hand-okay"></q-avatar>
                  <span class="variCLass "> {{ dataVar.valor_normal }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-center">Valor Anterior</span>
              </div>
              <q-separator vertical color="blue" />
              <div class="col-5">
                <q-chip size="xl">
                  <q-avatar color="red" text-color="white" icon="mdi-table-column-plus-before"></q-avatar>
                  <span class="variCLass "> {{ dataVar.valor_anterior }}</span>
                </q-chip>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5">
                <span class="variCLass flex justify-center">Medición</span>
              </div>
              <q-separator vertical color="blue" />
              <div class="col-5">
                <q-input outlined v-model="number" type="number" class="q-ml-sm" rounded>
                  <template v-slot:append>
                    <q-avatar>
                      <img src="src/assets/logoNasa.png" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
            </div>

            <div class="row q-ma-sm">
              <div class="col-5 flex justify-center content-center">
                <span class="variCLass ">Observacion</span>
              </div>
              <q-separator vertical color="blue" />
              <div class="col-5">
                <q-input class="q-ml-sm" type="textarea" outlined rounded> </q-input>
              </div>
            </div>
            <q-card-actions class="flex justify-evenly">
              <q-btn class="q-ma-sm btnColotAzul"  label="Pendiente" @click="onDialogCancel" />
              <q-btn class="q-ma-sm btnColotAzul" color="primary" label="Guardar" @click="onDialogCancel" />
            </q-card-actions>
          </q-card>

          <!-- <div class="row flex justify-evenly">
            <div class="flex items-center">

              <span  class="dataClass" > Unidad de Medida</span>

              <q-icon name="mdi-arrow-right" size="sm" color="#3120e0" class="q-ml-sm q-mr-sm"></q-icon>

              <span class="dataClass">{{ dataVar.unidad_medida }}</span>
            </div>
            <div class="flex items-center">
              <span square class="dataClass" text-color="white" icon="directions">Valor Desde/Hasta</span>
              <q-icon name="mdi-arrow-right" size="sm" color="#3120e0" class="q-ml-sm q-mr-sm"></q-icon>

              <span class="dataClass">{{ dataVar.desde_hasta }}</span>
            </div>
            <div class="flex items-center">
              <span square class="dataClass" text-color="white" icon="directions"> Valor Normal</span>
              <q-icon name="mdi-arrow-right" size="sm" color="#3120e0" class="q-ml-sm q-mr-sm"></q-icon>

              <span class="dataClass">{{ dataVar.valor_normal}}</span>
            </div>

          </div>
           <div class="row flex justify-evenly">
            <div class="flex items-center">
              <q-chip square class="chipClass" text-color="white" icon="directions">
                Unidad de Medida: &nbsp; </q-chip
              >
              <q-separator class="q-ml-sm q-mr-sm" color="orange" inset vertical />

              <span class="dataClass">{{ dataVar.unidad_medida }}</span>
            </div>
            <div class="flex items-center">
              <span square class="dataClass" text-color="white" icon="directions">Valor Desde/Hasta</span>
              <q-separator class="q-ml-sm q-mr-sm" color="orange" inset vertical />

              <span class="dataClass">{{ dataVar.desde_hasta }}</span>
            </div>
            <div class="flex items-center">
              <span square class="dataClass" text-color="white" icon="directions"> Valor Normal</span>
              <q-separator class="q-ml-sm q-mr-sm" color="orange" inset vertical />

              <span class="dataClass">{{ dataVar.valor_normal}}</span>
            </div>

          </div> -->
        </q-card-section>
        <!-- <q-card-section>
          <div class="row flex justify-evenly">
            <div class="flex items-center">

              <span  class="dataClass" > Valor Anterior</span>

              <q-icon name="mdi-arrow-right" size="sm" color="#3120e0" class="q-ml-sm q-mr-sm"></q-icon>

              <span class="dataClass">{{ dataVar.valor_anterior }}</span>
            </div>
            <div class="flex items-center">
              <span square class="dataClass" text-color="white" icon="directions">Medición</span>
              <q-icon name="mdi-arrow-right" size="sm" color="#3120e0" class="q-ml-sm q-mr-sm"></q-icon>

              <q-input ></q-input>
            </div>


          </div>

        </q-card-section>
        <q-card-section>
          <div class="row flex justify-evenly">
            <div class="flex items-center">

              <span  class="dataClass" > Observacion</span>

              <q-icon name="mdi-arrow-right" size="sm" color="#3120e0" class="q-ml-sm q-mr-sm"></q-icon>

              <q-input type="textarea" class="dataClass"></q-input>
            </div>



          </div>
        </q-card-section> -->
      </q-card>
    </q-dialog>
  </q-responsive>
</template>

<style lang="scss">
.varClass {
  /*  background: radial-gradient(circle, #3120e0 0%, #014a88 100%); */
  border-radius: 10px;
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
  padding: 15px;
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
  padding:  15px;
  padding-left: 0px;
}

.iconClass {
  color: $nasaAzul;
}

.titleVarClass {
  font-size: 20px;
  font-weight: bold;
  color: $nasaNar;
  margin: auto;
  padding: 10px;
}
.btnColotAzul{
  background: $nasaAzul !important;
  color: white !important;
  border-radius: 10px;
  border: 1px solid $nasaAzul !important;
}
</style>

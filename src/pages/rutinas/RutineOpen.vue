<script setup>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted } from "vue";

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
  /*  {
    name: "observacion",
    label: "Observación",
    field: "observacion",
    align: "left",
    sortable: true,
  }, */
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
        class="bg-indigo-1 text-black q-mb-sm q-pa-sm rounded-borders shadow-2 "

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
                      <!-- <div v-if="colTd.name == 'observacion'">
                        {{ col?.variable?.observacion ? col?.variable?.observacion : 'click para agregar observación' }}
                        <q-popup-edit buttons v-model="col.variable.observacion" v-slot="scope">
                          <q-input outlined style="width: auto" dense type="textarea" color="positive" v-model="scope.value" />
                        </q-popup-edit>
                      </div> -->
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

  <script setup >
  import { useQuasar } from 'quasar'
  
  
  const $q = useQuasar()
  
  const alert = () => {
  
    $q.dialog({
      title: 'Funciona el boton',
      message: 'Este boton si funciona',
    })
  
  }

  const variables = [
  {
    title: "variable 1",
    icon: "school",
    value: "1",
  },
  {
    title: "variable 2",
    icon: "school",
    value: "23",
  },
  {
    title: "variable 3",
    icon: "school",
    value: "65",
  },
  {
    title: "variable 4",
    icon: "school",
    value: "12",
  },
  {
    title: "variable 5",
    icon: "school",
    value: "123",
  },
  {
    title: "variable 6",
    icon: "school",
    value: "55",
  },
  {
    title: "variable 7",
    icon: "school",
    value: "78",
  },
  {
    title: "variable 8",
    icon: "school",
    value: "32",
  },
  {
    title: "variable 9",
    icon: "school",
    value: "687",
  },
  {
    title: "variable 10",
    icon: "school",
    value: "78",
  },
  {
    title: "variable 11",
    icon: "school",
    value: "565",
  },
  {
    title: "variable 12",
    icon: "school",
    value: "43",
  },
  {
    title: "variable 13",
    icon: "school",
    value: "8908",
  },
  {
    title: "variable 14",
    icon: "school",
    value: "98",
  },
  {
    title: "variable 15",
    icon: "school",
    value: "676",
  },
  {
    title: "variable 16",
    icon: "school",
    value: "456",
  },
  {
    title: "variable 17",
    icon: "school",
    value: "565",
  },
  {
    title: "variable 18",
    icon: "school",
    value: "23",
  },
  {
    title: "variable 19",
    icon: "school",
    value: "09",
  },
  {
    title: "variable 20",
    icon: "school",
    value: "23",
  },
  {
    title: "variable 21",
    icon: "school",
    value: "08",
  },
  {
    title: "variable 22",
    icon: "school",
    value: "23",
  },
  {
    title: "variable 23",
    icon: "school",
    value: "34",
  },
]

const onSubmit = (evt) => {
  console.log("Submit" , variables)
}

const onReset = (evt) => {
  console.log("Reset" , evt)
}
  
  
  </script>

<template>    
    <q-responsive :ratio="1" class="col">

      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
      v-for="variable in variables" :key="variable.title"
        filled
        v-model="variable.value"
        :label="variable.title"
        
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div class="flex justify-end">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>


      <!-- <q-card class="q-pa-md cardClass" flat  >
        <q-card-section>
          <div class="text-h6">Variables</div>
        </q-card-section>
        <q-card-section>
          <q-list bordered>
            <q-item v-for="variable in variables" :key="variable.title">
              <q-item-section avatar>
                <q-icon :name="variable.icon" />
              </q-item-section>
              <q-item-section>
                {{ variable.title }}
              </q-item-section>
              <q-item-section side>
                <q-input v-model="variable.value"  />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section>
          <q-btn @click="alert" color="primary" label="Guardar" />
        </q-card-section>
      </q-card> -->
    </q-responsive>
  
</template>

<style scoped>
.cardClass {
  width: 800px;
}
</style>



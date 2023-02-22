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
    icon: "mdi-account-convert",
    value: "1",
  },
  {
    title: "variable 2",
    icon: "mdi-account-cowboy-hat",
    value: "23",
  },
  {
    title: "variable 3",
    icon: "mdi-air-horn",
    value: "65",
  },
  {
    title: "variable 4",
    icon: "mdi-alarm-bell",
    value: "12",
  },
  {
    title: "variable 5",
    icon: "mdi-alert-octagon",
    value: "123",
  },
  {
    title: "variable 6",
    icon: "mdi-alien",
    value: "123",
  },
  {
    title: "variable 7",
    icon: "mdi-alien-outline",
    value: "123",
  },
  {
    title: "variable 8",
    icon: "mdi-alien-outline",
    value: "123",
  },
  {
    title: "variable 9",
    icon: "mdi-alien",
    value: "123",
  },
  {
    title: "variable 10",
    icon: "mdi-alien-outline",
    value: "123",
  },
  {
    title: "variable 11",
    icon: "mdi-alien",
    value: "123",
  },
  {
    title: "variable 12",
    icon: "mdi-alien-outline",
    value: "123",
  },
  {
    title: "variable 13",
    icon: "mdi-alien",
    value: "123",
  },
  {
    title: "variable 14",
    icon: "mdi-alien-outline",
    value: "123",
  },
  {
    title: "variable 15",
    icon: "mdi-alien",
    value: "123",
  },
  {
    title: "variable 16",
    icon: "mdi-alien-outline",
    value: "123",
  },
  {
    title: "variable 17",
    icon: "mdi-alien",
    value: "123",
  },
  {
    title: "variable 18",
    icon: "mdi-alien-outline",
    value: "123",
  },
  {
    title: "variable 19",
    icon: "mdi-alien",
    value: "123",
  },
  {
    title: "variable 20",
    icon: "mdi-alien-outline",
    value: "123",
  },
  {
    title: "variable 21",
    icon: "mdi-alien",
    value: "123",
  },
  {
    title: "variable 22",
    icon: "mdi-alien-outline",
    value: "123",
  },  
]

const onSubmit = (evt) => {
  e.preventDefault();
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
      >
      <q-icon
        :name="variable.icon"
      />

      </q-input>

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



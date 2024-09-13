<template>
  <div>
    <h2>Checkbox</h2>
    <form @submit.prevent="handleSubmit">
      <IfxCheckbox :disabled="disabled"  v-model="checkboxValue" :error="error"
        name="name">label</IfxCheckbox>
      <br />

      <ifx-button theme="default" type="submit">Submit</ifx-button>
    </form>
    <br />
    <div>
      <ifx-button variant="secondary" theme="default" @click="toggleDisabled">Toggle Disabled</ifx-button>

      <ifx-button variant="secondary" theme="default" @click="toggleError">Toggle Error</ifx-button>

      <ifx-button variant="secondary" theme="default" @click="toggleValue">Toggle Value</ifx-button>

    </div>
    <br />
    <span>Disabled: {{ disabled }} </span>
    <br />
    <span>Error: {{ error }} </span>
    <br />
    <span>Value: {{ checkboxValue }}</span>
    <br />
    <br />
  </div>
</template>

<script setup lang="ts">
import { IfxCheckbox } from '@infineon/infineon-design-system-vue';
import { ref } from 'vue';

const disabled = ref(false);
const checkboxValue = ref(false);
const error = ref(false);


const handleSubmit = () => {
  console.log('Form submitted. Checkbox value:', checkboxValue.value);
};

const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

const toggleValue = () => {
  checkboxValue.value = !checkboxValue.value;
};
</script>


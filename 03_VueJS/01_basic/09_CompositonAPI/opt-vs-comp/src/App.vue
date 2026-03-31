<template>
  <div>
    <Calc />
    <hr />
    <Composition />
    <hr />
    <Options />
  </div>
</template>

<script>
import Options from './Components/Options.vue';
import Composition from './Components/Composition.vue';
import Calc from './Components/Calc.vue';
export default {
  name: 'App',
  components: { Options, Composition, Calc },
};
</script>

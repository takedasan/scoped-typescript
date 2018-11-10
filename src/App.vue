<template>
  <div id="app">
    <div>
     <other-ts />
    </div>
    <div>
     <hello-ts />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OtherTs from './components/OtherComponent';
import HelloTs from './components/HelloComponent';

@Component({
  components: {
    OtherTs,
    HelloTs,
  },
})
export default class App extends Vue {}
</script>

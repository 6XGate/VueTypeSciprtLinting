<template>
  <div id="app">
    <counter ref="counter" />
    <button @click="onInc">
      Inc
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Counter from "./parts/Counter.vue";
  import {Ref} from "vue-property-decorator";

  @Component<HomePage>({
    name: "HomePage",
    components: { Counter }
  })
  export default class HomePage extends Vue {
    @Ref()
    counter!: Counter;

    onInc(): void {
      this.counter.inc();
      // this.counter.inc2(); // this won't compile as inc2 does not exist.
    }
  }
</script>

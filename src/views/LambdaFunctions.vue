<template>
  <div class="lambdaFunctions">
    <h1>Lambda functions</h1>
    <v-data-table :items="items" :headers="headers"></v-data-table>
  </div>
</template>

<script lang="ts">
import { api } from "@/api/api";
import { ILambdaFunction } from "@/api/api-model";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class LambdaFunctions extends Vue {
  public allLambdaFunctions: ILambdaFunction[] = [];
  async mounted() {
    this.allLambdaFunctions = await api.getAllLambdaFunctions();
  }
  public get headers() {
    return [
      { text: "Account", value: "account.name" },
      { text: "Region", value: "region.alti__name" },
      { text: "Name", value: "alti__function_name" },
      { text: "Runtime", value: "alti__runtime" },
      { text: "Vpc", value: "vpc" },
    ];
  }

  public get items() {
    return this.allLambdaFunctions;
  }
}
</script>

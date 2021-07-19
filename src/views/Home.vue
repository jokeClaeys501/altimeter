<template>
  <div>
    <v-row
      ><v-col
        ><v-card @click="routeToAllEc2">
          <v-card-title>
            All EC2 instances
          </v-card-title>
          <v-card-text class="text-center">
            Watch all EC2 instances
          </v-card-text>
        </v-card></v-col
      ><v-col
        ><v-card @click="routeToAllLambdaFunctions">
          <v-card-title>
            All lambda functions
          </v-card-title>
          <v-card-text class="text-center">
            Watch all lambda functions
          </v-card-text>
        </v-card></v-col
      ><v-col
        ><v-card>
          <v-card-title>
            Placeholder
          </v-card-title>
          <v-card-text class="text-center">
            Placeholder
          </v-card-text>
        </v-card></v-col
      ></v-row
    >
    <v-row
      ><v-col
        ><v-card @click="routeToAllEc2">
          <v-card-title>
            All EC2 instances
          </v-card-title>
          <v-card-text class="text-center">
            Watch all EC2 instances
          </v-card-text>
        </v-card></v-col
      ><v-col
        ><v-card @click="routeToAllLambdaFunctions">
          <v-card-title>
            All lambda functions
          </v-card-title>
          <v-card-text class="text-center">
            Watch all lambda functions
          </v-card-text>
        </v-card></v-col
      ><v-col
        ><v-card>
          <v-card-title>
            Placeholder
          </v-card-title>
          <v-card-text class="text-center">
            Placeholder
          </v-card-text>
        </v-card></v-col
      ></v-row
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  private routeToAllEc2() {
    this.$router.push("ec2");
  }

  private routeToAllLambdaFunctions() {
    this.$router.push("lambda-function");
  }
}
</script>

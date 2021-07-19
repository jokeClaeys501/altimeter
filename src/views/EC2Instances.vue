<template>
  <div class="ec2instances">
    <h1>EC2 Instances</h1>
    <v-data-table :items="items" :headers="headers"></v-data-table>
  </div>
</template>

<script lang="ts">
import { api } from "@/api/api";
import { IEc2Instance } from "@/api/api-model";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class EC2Instances extends Vue {
  public allEc2Instances: IEc2Instance[] = [];
  async mounted() {
    this.allEc2Instances = await api.getAllEC2Instances();
  }
  public get headers() {
    return [
      { text: "Account", value: "account.name" },
      { text: "Region", value: "region.alti__name" },
      { text: "Name", value: "alti__ami_name" },
      { text: "Ami", value: "alti__ami_name" },
      { text: "Public ip", value: "alti__public_ip_address" },
      { text: "Private ip", value: "alti__private_ip_address" },
      { text: "Instance type", value: "alti__instance_type" },
      { text: "State", value: "alti__state" },
      { text: "Launch time", value: "alti__launch_time" },
    ];
  }

  public get items() {
    return this.allEc2Instances;
  }
}
</script>

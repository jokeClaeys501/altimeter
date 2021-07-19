import { request } from "@/helpers/request";
import { IEc2Instance, ILambdaFunction } from "./api-model";

export const api = {
    getAllEC2Instances: async (): Promise<IEc2Instance[]> => {
        const body = {
            query: `query {
                        ec2__instance(
                          orderBy: [alti__ami_name_asc]
                        )  {
                          account {
                            alti__account_id
                            name
                          }
                          region {
                            alti__name
                          }
                          alti__name
                          alti__ami_name
                          alti__ami_id
                          alti__launch_time
                          alti__public_ip_address
                          alti__instance_type
                          alti__state
                          tags {
                            alti__key
                            alti__value
                          }
                          alti__availability_zone
                          alti__private_ip_address
                        }
                    }
                    `
        };
    const response = await request.post('', body);
    return response.data.ec2__instance;
  },
  getAllLambdaFunctions: async (): Promise<ILambdaFunction[]> => {
        const body = {
            query: `query {
  lambda__function(
    orderBy: [alti__function_name_asc]
  ) {
    account {
      alti__account_id
      name
    }
    region {
      alti__name
    }
    alti__function_name
    alti__runtime
    vpc {
      name
      alti__cidr_block      
      tags {
        alti__key
        alti__value
      }      
    }
    # tags {
    #   alti__key
    #   alti__value
    # }
  }
}

                    `
        };
    const response = await request.post('', body);
    return response.data.lambda__function;
    },
}
export interface IEc2Instance {
    alti__ami_id: string;
    alti__ami_name: string;
    alti__availability_zone: string;
    alti__instance_type: string;
    alti__launch_time: string;
    alti__name: string;
    alti__private_ip_address: string;
    alti__public_ip_address: string;
    alti__state: string;
    account: IAccount;
    region: IRegion;
    tags: ITag[];
}

export interface IAccount {
    alti__account_id: string;
    name: string;
}

export interface IRegion{
    alti__name: string;
}

export interface ITag{
    alti__key: string;
    alti__value: string;
}

export interface ILambdaFunction{
    account: IAccount;
    alti__function_name: string;
    alti__runtime: string;
    region: IRegion;
    vpc: string;
}
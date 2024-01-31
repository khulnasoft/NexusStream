import { Nexusstream } from "@pipedream/types";

export interface MakeRequestParams {
  $?: Nexusstream;
  path: string;
  headers?: object;
  otherConfig?: object;
}

export interface ResourceFn {
  (params:object): Promise<any>;
}

export interface ResourceGeneratorParams {
  resourceFn: ResourceFn;
}

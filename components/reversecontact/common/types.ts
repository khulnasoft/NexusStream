import { Nexusstream } from "@pipedream/types";

export interface MakeRequestParams {
  $?: Nexusstream;
  path: string;
  headers?: object;
  otherConfig?: object;
}

export interface ProfileEnrichmentResult {
  person?: boolean | object;
  credits_left?: number;
}

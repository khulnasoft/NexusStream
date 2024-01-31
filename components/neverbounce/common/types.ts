import { Nexusstream } from "@pipedream/types";

export interface HttpRequestParams {
  endpoint: string;
  $?: Nexusstream;
  params?: object;
}

export interface VerifyEmailParams {
  $: Nexusstream;
  params: {
    email: string;
  };
}

export interface VerifyEmailResponse {
  result: string;
  status: string;
}

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
  email: string;
  reason: string;
  result: string;
  success: string; // API returns this as a string ("true" or "false"), not as a boolean
}

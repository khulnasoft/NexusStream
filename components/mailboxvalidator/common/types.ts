import { Nexusstream } from "@pipedream/types";

export interface HttpRequestParams {
  endpoint: string;
  $?: Nexusstream;
  params?: object;
}

export interface ValidateEmailParams {
  $: Nexusstream;
  params: {
    email: string;
  };
}

export interface ValidateEmailResponse {
  email_address: string;
  error_code?: string;
  error_message?: string;
  status: string; // API returns this as a string ("true" or "false"), not as a boolean
}

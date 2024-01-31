import { Nexusstream } from "@pipedream/types";

export interface HttpRequestParams {
  endpoint: string;
  $?: Nexusstream;
  data?: object;
}

export interface AddInviteRequestParams {
  $: Nexusstream;
  data: {
    recipient: string;
    name?: string;
    schedule?: string;
  };
}

export interface InviteRequest {
  id: number;
}

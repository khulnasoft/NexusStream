import { Nexusstream } from "@pipedream/types";

export interface HttpRequestParams {
  $: Nexusstream;
  endpoint: string;
  data: object;
}

export interface CreateJobParams {
  $: Nexusstream;
  data: string;
}

export interface JobResponse {
  data: {
    id: string;
  };
}

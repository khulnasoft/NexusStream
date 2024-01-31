import { Nexusstream } from "@pipedream/types";

export interface HttpRequestParams {
  endpoint: string;
  $?: Nexusstream;
  data?: object;
  params?: object;
}

export interface PostMessageParams {
  $: Nexusstream;
  data: {
    channel_id: string;
    message: string;
    root_id?: string;
    file_ids?: string[];
    props?: object;
  };
  params?: {
    set_online: boolean;
  };
}

export interface PostMessageResponse {
  id: string;
}

export interface Channel {
  id: string;
  name: string;
  display_name: string;
}

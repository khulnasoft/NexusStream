import {
  JSONValue, Nexusstream,
} from "@pipedream/types";

export interface HttpRequestParams {
  $: Nexusstream;
  url: string;
  data: object;
}

export interface CreateDocumentParams {
  $: Nexusstream;
  url: string;
  data: {
    [key: string]: JSONValue;
  };
}

export interface DocumentResponse {
  data: {
    file_name: string;
    file_url: string;
  };
}

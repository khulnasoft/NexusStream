import { Nexusstream } from "@pipedream/types";

interface PdAxiosRequest {
  $: Nexusstream;
}

export interface RavenToolsRequestParams extends PdAxiosRequest {
  params: object;
}

export type RavenToolsResponse =
  | {
      response: "success";
    }
  | undefined;

export interface AddKeywordParams extends RavenToolsRequestParams {
  params: { domain: string; keyword: string; };
}

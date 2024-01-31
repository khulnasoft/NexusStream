import { Nexusstream } from "@pipedream/types";

interface PdAxiosRequest {
  $: Nexusstream;
}

export interface HttpRequestParams extends PdAxiosRequest {
  url: string;
  data?: object | string;
  params?: object;
  headers?: object;
}

export interface ValidateEmailAddressParams extends PdAxiosRequest {
  email: string;
}

export interface ScreenshotWebsiteParams extends PdAxiosRequest {
  data: {
    Url: string;
    ExtraLoadingWait?: number;
    ScreenshotWidth?: number;
    ScreenshotHeight?: number;
  };
}

export interface ConvertToPDFParams extends PdAxiosRequest {
  file: Buffer;
}

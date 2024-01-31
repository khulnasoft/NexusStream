import { Nexusstream } from "@pipedream/types";

export interface HttpRequestParams {
  url: string;
  $?: Nexusstream;
  data?: object;
  params?: object;
}

export interface SearchBusinessesParams {
  $: Nexusstream;
  params: {
    attributes?: string;
    categories?: string;
    location: string;
    latitude: string;
    longitude: string;
    term: string;
    maxResults: number;
    price?: string;
  };
}

export interface SearchBusinessesByPhoneParams {
  $: Nexusstream;
  params: {
    locale?: string;
    phone: string;
  };
}

export interface GetBusinessDetailsParams {
  $: Nexusstream;
  businessIdOrAlias: string;
  params: {
    device_platform?: string;
    locale?: string;
  };
}

export interface ListBusinessReviewsParams {
  $: Nexusstream;
  businessIdOrAlias: string;
  params: {
    locale?: string;
    sort_by?: string;
  };
}

export interface SearchBusinessesResponse {
  result: Business[];
  total: number;
}

export interface SearchBusinessesByPhoneResponse {
  businesses: Business[];
}

export interface ListBusinessReviewsResponse {
  total: number;
  reviews: Review[];
  possible_languages: string[];
}

export interface Review {
  id: string;
}

export interface Business {
  id: string;
  name: string;
}

export interface PaginatedResponse {
  businesses: Business[];
  total: string;
}

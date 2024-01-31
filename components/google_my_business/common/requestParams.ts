import { Nexusstream } from "@pipedream/types";

interface PdAxiosRequest {
  $?: Nexusstream;
}
interface PaginatedRequest extends PdAxiosRequest, PaginationParams { }

interface PaginationParams {
  maxPerPage?: number;
  maxResults?: number;
}

export interface HttpRequestParams extends PdAxiosRequest {
  url: string;
  method?: string;
  data?: object;
  params?: object;
}

export interface PaginatedRequestParams
  extends HttpRequestParams,
  PaginationParams {
    resourceName: string;
  }

interface AccountLocation {
  account: string;
  location: string;
}

export interface ListPostsParams extends PaginatedRequest, AccountLocation { }
export interface ListReviewsParams extends PaginatedRequest, AccountLocation { }

export interface CreatePostParams extends PdAxiosRequest, AccountLocation {
  data: {
    topicType: string;
    languageCode?: string;
    summary?: string;
    callToAction?: object;
    event?: object;
    media?: object[];
    alertType?: string;
    offer?: object;
  };
}

export interface UpdateReplyParams extends PdAxiosRequest, AccountLocation {
  review: string;
  data: {
    comment: string;
  };
}

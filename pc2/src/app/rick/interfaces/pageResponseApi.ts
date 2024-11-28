import { responseApiGetAll } from "./responeApi_GetAll";

export interface characterResponse {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
    results: responseApiGetAll[];
  }
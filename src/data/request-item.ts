import {QueryItem} from "./query-item";
import {HeaderItem} from "./header-item";

export class RequestItem {
  hostname: string = '';
  path: string = '';
  queries: QueryItem[] = [];
  headers: HeaderItem[] = [];
}

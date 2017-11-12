import {QueryItem} from "./query-item.data";
import {HeaderItem} from "./header-item.data";

export class RequestItem {
  hostname: string = '';
  path: string = '';
  queries: QueryItem[] = [];
  headers: HeaderItem[] = [];
  body: string = '';
}

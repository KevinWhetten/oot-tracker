import {CheckType} from "./check-type";

export interface Check {
  name: string,
  type: CheckType,
  requirements: string[],
  checked: boolean
}

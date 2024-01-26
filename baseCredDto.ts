import { BaseDto } from "./baseDto";

export class BaseCredDto extends BaseDto {
  username: string;
  password: string;
  deviceId: string;
}

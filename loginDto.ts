import { BaseCredDto } from "./baseCredDto";

export class LoginDto extends BaseCredDto {
  grant_type = "password";
}

import { BaseDto } from "./baseDto";

export type OAuthDto = BaseDto & {
  access_token: string;
  token_type: string;
  expires_in: number;
}

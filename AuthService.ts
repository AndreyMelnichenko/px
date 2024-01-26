import { controllerOptions } from "./baseController";
import { PPController } from "./ppController";
import { LoginDto } from "./loginDto";
import { ApiClient } from "./ApiClient";

export class AuthService {
  private static authInstance: AuthService;
  private token: string;
  private baesId: string;
  private options: controllerOptions
  public readonly ppController: PPController;

  private constructor() {}

  public static getInstance(): AuthService {
      if (!AuthService.authInstance) {
          AuthService.authInstance = new AuthService();

      }

      return AuthService.authInstance;
  }

  public async getToken(credentials:Partial<LoginDto> = {}): Promise<string> {
    const mergedCreds: LoginDto = {
      username: "login",
      password: "password",
      deviceId: "devId",
      grant_type: "password",
      ...credentials,
    };
    return await new ApiClient().user.login(mergedCreds)
  }

  public async getBaeSid(credentials:Partial<LoginDto> = {}): Promise<string> {
    const mergedCreds: LoginDto = {
      username: "login",
      password: "password",
      deviceId: "devId",
      grant_type: "password",
      ...credentials,
    };
    return await new ApiClient().userLogin.getBaeSid(mergedCreds)
  }
}
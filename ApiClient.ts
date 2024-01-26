import { controllerOptions } from "./baseController";
import { PPController } from "./ppController";
import { UserController } from "./user.controller";
import { UserLoginController } from "./userLogin.controller";

export class ApiClient {
  public readonly publisherPerformance: PPController;
  public readonly user: UserController;
  public readonly userLogin: UserLoginController;

  constructor(options?: Partial<controllerOptions>) {
    const defOptions: controllerOptions = {};
    const mergedOtions = {
      ...defOptions,
      ...options,
    };
    this.publisherPerformance = new PPController(mergedOtions);
    this.user = new UserController(mergedOtions);
    this.userLogin = new UserLoginController(mergedOtions);
  }

  // unauthorized() {
  //   return new ApiClient();
  // }

  // static async loginAs(credentials:Partial<LoginDto> = {}): Promise<ApiClient> {
  //   const mergedCreds: LoginDto = {
  //     username: ADMIN().username,
  //     password: ADMIN().password,
  //     deviceId: ADMIN().deviceId,
  //     grant_type: "password",
  //     ...credentials,
  //   };
  //   //TODO: Refactor double new instance of ApiClient
  //   const creds = await new ApiClient().user.login(mergedCreds);
  //   const baeSid = await new ApiClient(creds).userLogin.getBaeSid(mergedCreds);
  //   return new ApiClient({
  //     ...creds,
  //     ...baeSid,
  //   });
  // }
}

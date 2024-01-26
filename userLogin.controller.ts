import { BaseController, controllerOptions } from "./baseController";
import { LoginDto } from "./loginDto";


export class UserLoginController extends BaseController {
  async getBaeSid(creds:LoginDto): Promise<string> {
    await this.request()
    .setHeaders("GET BAESID").getResponse()
    return "NEW BAESID"
  }
}

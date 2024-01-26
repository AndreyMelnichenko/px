import { BaseController, controllerOptions } from "./baseController";
import { LoginDto } from "./loginDto";

export class UserController extends BaseController {

  /**
   * Attention!!! this.dtoQueryConverter.getQueryStr(credentials) 
   * should not return empty string for PXUI API Login request
   */
  async login(credentials: LoginDto): Promise<string> {
    await this.request()
      .setHeaders("auth request")
      .getResponse();
  
    return "JWT Token"
  }
}

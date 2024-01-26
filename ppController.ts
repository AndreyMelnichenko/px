import { BaseController } from "./baseController";

export class PPController extends BaseController {
  async getPPreport(): Promise<void> {
    await this.request().getResponse()
  }

}
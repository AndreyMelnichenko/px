import { Request } from "./request"

export type controllerOptions = {
  token?: string,
  baeSid?: string,
}

export class BaseController {
  constructor(protected options: controllerOptions){}

  protected request(): Request{
    const preparedRq = new Request()

    if(this.options.token) preparedRq.setToken(this.options.token)

    return preparedRq
  }
}
import { AuthService } from "./AuthService";

export class SpecClass {
  async beforeHook(): Promise<void> {
    AuthService.getInstance()
  }

  run(){

  }
}
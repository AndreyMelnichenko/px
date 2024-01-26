export class Request {
  private name: string = "NONE"
  private token: string = "NONE TOKEN"
  private options: string

  setCallName(name: string): this {
    this.name = name
    return this
  }

  setToken(token: string): this {
    this.token = token
    return this;
  }

  setHeaders(headers: string = ""): this {
    this.options = headers
    return this;
  }

  async getResponse(): Promise<void> {
    await new Promise(resolve => {
      if(this.options) console.log(`Headers ${this.options}`)
      console.log(`Request ${this.name} token=> ${this.token}`) 
      setTimeout(resolve, 1000)
    });
  }
}
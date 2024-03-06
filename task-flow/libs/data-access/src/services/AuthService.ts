export class AuthService {
  //TODO: Criar autenticação mockada

  private storageKey = 'auth';

  constructor() {}

  public isAuthenticated(): boolean {
    return this.getUser() ? true : false;
  }

  public signIn(name: string, password: string) {
    if (name && password) {
      this.setUser(name, password);
    }
  }

  public setUser(name: string, password: string) {
    localStorage.setItem(
      `${this.storageKey}.account`,
      JSON.stringify({ name, password })
    );
  }

  public getUser() {
    return localStorage.getItem(`${this.storageKey}.account`);
  }
}

export class LoginClass {
    private id: string;
    private password: string;

    constructor(id: string, password: string) {
        this.id = id;
        this.password = password;
    }
    getId(): string {
        return this.id;
    }
    getPassword(): string {
        return this.password;
    }
   setId(id: string): void {
        this.id = id;
    }
    setPassword(password: string): void {
        this.password = password;
    }
}
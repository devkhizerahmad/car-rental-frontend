import config from "../../config/config";
import { Client, Account, ID} from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }
  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log("user acc ", userAccount);
      if (userAccount) {
        //call another method
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error("Error :", error.message);
    }
  }
  async login(email, password) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error("Error :", error.message);
    }
  }async getCurrentUser() {
    try {
      const users = await this.account.get()
      console.log("current user :", users)
      return users;
    } catch (error) {
      throw new Error("getCurrent User :", error.message);
    }
  }
  async logout() {
    try {
      await this.account.deleteSessions();
      // await this.account.deleteSession("current");
    } catch (error) {
      throw new Error("Error :", error.message);
    }
  }
}

const authService = new AuthService();

export default authService;
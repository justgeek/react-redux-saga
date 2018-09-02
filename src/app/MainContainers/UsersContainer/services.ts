import { apiUrl } from "../../Config/api.config";
import { User } from "./reducer";

export class UserService {
  static async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(`${apiUrl}/users`);
      const result = await response.json();
      console.log("GOT SOME USERS:", result);
      return result;
    } catch (e) {
      // Handle Error Here
    }
  }
}

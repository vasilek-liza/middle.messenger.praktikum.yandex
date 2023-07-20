import { API } from './api';

export interface UserProfile {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

export interface Password {
    oldPassword: string;
    newPassword: string;
}

export class UsersAPI extends API {
  constructor() {
    super("/user");
  }

  putUserProfile(data: UserProfile): Promise<unknown> {
    return this.http.put("/profile", {
      data,
      headers: {"Content-Type": "application/json"},
    });
  }

  putUserAvatar(data: FormData): Promise<unknown> {
    return this.http.put("/profile/avatar", {
      data,
    });
  }

  putUserPassword(data: Password): Promise<unknown> {
    return this.http.put("/password", {
      data,
      headers: {"Content-Type": "application/json"},
    });
  }

  postSearchUser(data: { login: string }): Promise<unknown> {
    return this.http.post("/search", {
      data,
      headers: {"Content-Type": "application/json"},
    });
  }
}

import { UserRole } from "@prisma/client";
import "next-auth";
import { DefaultSession } from "next-auth";
import "next-auth/jwt";

export type ExtendUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};

declare module "next-auth" {
  interface Session {
    role: "USER" | "ADMIN";
    user: ExtendUser;
  }

  interface User {
    role: "USER" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "USER" | "ADMIN";
  }
}

export type ExtendUser = DefaultSession["user"] & {
  role: UserRole;
};

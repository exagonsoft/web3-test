"use server";
import { AuthPayload } from "@/types/authTypes";
import { disconnectWallet } from "@/validators/authValidators";
import { cookies } from "next/headers";
import shieldBearer from "shieldbearer";

export async function isLoggedIn(): Promise<AuthPayload | boolean> {
  try {
    const jwt = cookies().get("jwt");
    if (!jwt?.value) {
      return false;
    }

    const isValid = shieldBearer.Validate(jwt.value);
    if (!isValid) {
      return false;
    }

    const authResult = shieldBearer.Decode(jwt.value);
    return authResult;
  } catch (error) {
    return false;
  }
}

export async function login(payload: AuthPayload): Promise<boolean> {
  try {
    const jwt = shieldBearer.Sign(payload);
    cookies().set("jwt", jwt);
    return true;
  } catch (error) {
    return false;
  }
}

export async function logOut(): Promise<boolean> {
  try {
    cookies().delete("jwt");
    await disconnectWallet();
    return true;
  } catch (error) {
    return false;
  }
}

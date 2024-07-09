import { login } from "@/functions/authFunctions";
import { ethers } from "ethers";

let provider: ethers.BrowserProvider | ethers.JsonRpcProvider | null = null;
let signer: ethers.JsonRpcSigner | null = null;

export const connectWallet = async (): Promise<string> => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const account = await signer.getAddress();
      return account;
    } catch (error) {
      
      return "";
    }
  } else {
    return "";
  }
};

export const disconnectWallet = async (): Promise<void> => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    provider = null;
    signer = null;
  } else {
  }
};

export async function authFormValidator(context?: any): Promise<boolean> {
  const wallet = await connectWallet();
  if (wallet) {
    login({ wallet });
    return true;
  } else {
    return false;
  }
}

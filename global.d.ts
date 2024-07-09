// global.d.ts
interface Window {
    ethereum?: {
      [x: string]: any;
      request: (args: { method: string }) => Promise<string[]>;
    };
  }
  
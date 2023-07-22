export {};
declare global {
  interface Window {
    user: {
      win?: boolean;
      time?: string;
      level?: number;
    };
  }
}
export type CardsMass = {
  value: number;
  suit: string;
  img: string;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { it, expect } from "@jest/globals";

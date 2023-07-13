export {};
declare global {
    interface Window {
        user: {
           win: boolean;
           time: string;
           level: number;
        }
    }
}
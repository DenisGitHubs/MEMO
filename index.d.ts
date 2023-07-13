export {};
declare global {
    interface Window {
        user: {
           win: boolean;
           time: Number;
           level: number;
        }
    }
}
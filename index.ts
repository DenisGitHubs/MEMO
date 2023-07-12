import { type } from "os";
import { levelStr } from "./levelChoice";
import "./styles.css";
export {}
declare global {
    interface Window {
        user: any;
        win: boolean;
        time: Number;
        level: number;
    }
}
window.user = {};
levelStr();

//ограничение по времени
// анимация карт
// удаление карт после правильных ответов

import { type } from "os";
import { levelStr } from "./levelChoice";
import "./styles.css";
export {}
declare global {
    interface Window {
        user: any;
        win: any;
        time: any;
        level: any;
    }
}
window.user = {};
levelStr();

//ограничение по времени
// анимация карт
// удаление карт после правильных ответов

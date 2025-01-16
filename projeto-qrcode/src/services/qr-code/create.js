import prompt from "prompt"
import schemaQrCode from "../../prompts-schema/schema-qrcode.js"
import handler from "./handle.js";


async function createQRCode(){
    prompt.get(schemaQrCode, handler);
    prompt.start();
}

export default createQRCode
import { readFile } from "fs/promises";
import path from "path";

const __dirname = import.meta.dirname;

const pathFile = path.join(__dirname, "../database/products.json");

const getApi = async () => {
    const preview = await readFile(pathFile, "utf-8");
    const data = JSON.parse(preview);

    return data;
};

export const Api = {
    getApi,
};

import { writeFile, readFile, rm } from "node:fs";
import { exec } from "node:child_process";
import { promisify } from "node:util";

export const execAsync = promisify(exec);
export const writeFileAsync = promisify(writeFile);
export const readFileAsync = promisify(readFile);
export const rmAsync = promisify(rm);

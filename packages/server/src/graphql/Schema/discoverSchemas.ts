import * as fs from "fs";
import * as path from "path";

export function discoverSchemas() {
  const schemaHashMap = new Map();
  const files = fs.readdirSync(path.resolve(__dirname));
  files
    .filter((file) => !file.endsWith(".js"))
    .forEach((file) => {
      schemaHashMap.set(file, file + "/index");
    });
  return schemaHashMap;
}

console.log(discoverSchemas());

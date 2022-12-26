import * as fs from "fs";
import * as path from "path";

export function discoverSchemas() {
  const schemaHashMap = new Map();
  const files = fs.readdirSync(path.resolve(__dirname));
  files
    .filter((file) => !(file.endsWith(".js") || file.endsWith(".map")))
    .forEach((file) => {
      console.log("Discovered schema with name " + file);
      schemaHashMap.set(file, "./Schema/" + file + "/index");
    });
  return schemaHashMap;
}

import { platform } from "os";
import downloadPlatform from "./downloadPlatform";
import packageSpecs from "./nugetPackages.json";

export default async function downloadCurrentPlatform(path: string) {
  const spec = packageSpecs.find((s) => s.platform === platform());
  if (!spec) {
    throw `Platform ${platform()} is not supported.`;
  }
  await downloadPlatform(path, spec);
}

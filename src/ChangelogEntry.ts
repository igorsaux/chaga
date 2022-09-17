import type ChangelogPrefix from "./ChangelogPrefix";

export default interface ChangelogEntry {
  prefix: ChangelogPrefix;
  message: string;
}

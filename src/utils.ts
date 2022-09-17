import type ChangelogPrefix from "./ChangelogPrefix";

export function changelogPrefixToDisplay(prefix: ChangelogPrefix): string {
  if (prefix === "bugfix") {
    return "Фикс";
  } else if (prefix === "tweak") {
    return "Подкрутил";
  } else if (prefix === "soundadd") {
    return "Новый SFX";
  } else if (prefix === "sounddel") {
    return "Удалил SFX";
  } else if (prefix === "rscadd") {
    return "Добавил";
  } else if (prefix === "rscdel") {
    return "Удалил";
  } else if (prefix === "imageadd") {
    return "Добавил спрайт";
  } else if (prefix === "imagedel") {
    return "Удалил спрайт";
  } else if (prefix === "maptweak") {
    return "Изменил карту";
  } else if (prefix === "spellcheck") {
    return "Исправил текст";
  } else if (prefix === "experiment") {
    return "Эксперимент";
  } else if (prefix === "admin") {
    return "Педальное";
  } else if (prefix === "balance") {
    return "Баланс";
  }

  throw "invalid prefix";
}

export function changelogPrefixes(): ChangelogPrefix[] {
  return [
    "bugfix",
    "tweak",
    "soundadd",
    "sounddel",
    "rscadd",
    "rscdel",
    "imageadd",
    "imagedel",
    "maptweak",
    "spellcheck",
    "experiment",
    "admin",
    "balance",
  ];
}

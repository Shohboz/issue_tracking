export const required = value =>
  value ? undefined : "Поле обязательное для заполнения";

export const nonEmpty = value =>
  value && value.trim() ? undefined : "Пустые строки не допускаются";

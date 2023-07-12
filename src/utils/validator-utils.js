export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = (value) => {
  if (value) return undefined;
  return "Обязательное поле";
};

export const maxLength = (maxLength) => (value) => {
  if (value) {
    if (value.length > maxLength) return `Максимальная длина: ${maxLength}`;
  }
  return undefined;
};

export const emailType = (value) => {
  const regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  if (regExpEmail.test(value)) return undefined;
  return "Некорректный email";
};

export const letters = (value) => {
  const regExpEmail = /^[a-zа-яё\s]+$/i;
  if (regExpEmail.test(value)) return undefined;
  return "Используйте только буквы";
};
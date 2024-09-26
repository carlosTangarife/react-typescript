export const randomNumber = (): number => Math.floor(Math.random() * 123) + 1;

export const generedateId = (): string => Math.random().toString(36).substring(2, 9);
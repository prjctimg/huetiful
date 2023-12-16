// @ts-nocheck

const checkArg = (arg, def) => (typeof arg === undefined ? def : arg);

const getModeChannel = (mode: string, key: number) => mode.charAt(key);
export { checkArg, getModeChannel };

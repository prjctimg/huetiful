// @ts-nocheck

const checkArg = (arg, def) => arg || def;

const getModeChannel = (mode: string, key: number) => mode.charAt(key);

export { checkArg, getModeChannel };

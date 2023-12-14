const customConcat = (hue: object) => {
  const res: number[] = [];
  const { keys } = Object;
  if (typeof hue == "object") {
    const hueKeys = keys(hue);

    //@ts-ignore
    res.push(...hueKeys.map((key) => hue[key]));
  }
  return res;
};

export { customConcat };

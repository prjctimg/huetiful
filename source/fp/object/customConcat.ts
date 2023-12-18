const customConcat = (hue: object) => {
  const res = [];
  const { keys } = Object;
  if (typeof hue == "object") {
    const hueKeys = keys(hue);

    //@ts-nocheck
    res.push(...hueKeys.map((key) => hue[key]));
  }
  // @ts-ignore
  return res.flat(1);
};

export { customConcat };

// @ts-nocheck

import { wcagContrast } from "culori/fn";
import type { Color } from "../types";

const getContrast = (color: Color, against: Color): number =>
  wcagContrast(color, against);

export { getContrast };

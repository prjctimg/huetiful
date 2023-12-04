// @ts-nocheck

import { wcagContrast } from 'culori/fn';
import type { Color } from '../paramTypes';

const getContrast = (color: Color, against: Color): number =>
  wcagContrast(color, against);

export { getContrast };

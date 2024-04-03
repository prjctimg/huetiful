import { DeficiencyType, ColorToken } from './types';

declare function colorDeficiency(
  deficiencyType?: DeficiencyType
): (color: ColorToken, severity?: number) => string;

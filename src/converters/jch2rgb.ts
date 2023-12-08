import { xyz, Vector3D } from 'ciebase-ts';
import { baseCieCam } from './ciecam';

const jch2rgb = (jch: Vector3D) =>
  xyz(baseCieCam.fromXyz({ J: jch[0], C: jch[1], h: jch[2] })).toRgb(jch);

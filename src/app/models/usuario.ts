import { Generic } from './generic';
import { Cargo } from './cargo';

export class Usuario implements Generic {
    id: number;
    nombre: string;
    fechaRegistro: string;
    cargo: Cargo;
}
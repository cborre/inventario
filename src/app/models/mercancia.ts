import { Generic } from './generic';
import { Producto } from './producto';
import { Usuario } from './usuario';

export class Mercancia implements Generic {
    id: number;
    nombre: string;
    cantidad: number;
    fechaIngreso: string;
    producto: Producto;
    usuarioRegistro: Usuario;
    usuarioModifica: Usuario;
    fechaModifica: string;
}
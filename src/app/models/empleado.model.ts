export class Empleado {
    numero: number;
    nombre: string;
    apellido: string;
    puesto: string;
    sexo: string;

    constructor(pNumero = 0, pNombre = '', pApellido = '', pPuesto = '', pSexo = 'Masculino'){
        this.numero = pNumero;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.puesto = pPuesto;
        this.sexo = pSexo;
    }
}
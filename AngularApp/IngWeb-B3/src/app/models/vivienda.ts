import { Ubicacion } from "./ubicacion";

export interface Vivienda{
    id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    propietario: string;
    localidad: string;
    provincia: string;
    ubicacion: Ubicacion;
    tipo: string;
    calle: string;
    viviendaCompleta: boolean;
    precioNoche: number;
    maxOcupantes:number;
}

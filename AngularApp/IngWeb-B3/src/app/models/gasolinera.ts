export interface Feature {
    attributes: Gasolinera;
    geometry:   Geometry;
}

export interface Gasolinera {
    provincia:  string;
    municipio:  string;
    localidad:  string;
    código_po:  number;
    longitud:   number;
    latitud:    number;
    precio_gas: number;
    precio_g_3: number;
    precio_g_5: number;
    precio_g_6: number;
    horario:    string;
    dirección:  string;
}

export interface Geometry {
    x: number;
    y: number;
}

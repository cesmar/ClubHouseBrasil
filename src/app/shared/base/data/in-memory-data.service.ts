import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const predios = [
            { idPredio: 1, descripcion: 'Departamento', estado: 1 },
            { idPredio: 2, descripcion: 'Cochera', estado: 1 },
            { idPredio: 3, descripcion: 'Depósito', estado: 1 }
        ];
        const tipopersonas = [
            { idTipoPersona: 1, descripcion: 'Propietario', estado: 1},
            { idTipoPersona: 2, descripcion: 'Inquilino', estado: 1}
        ];
        const tipogastos = [
            { idTipoGasto: 1, descripcion: 'Ingreso', estado: 1},
            { idTipoGasto: 2, descripcion: 'Egreso', estado: 1}
        ];

        const tipodocumentos = [
            { idTipoDocumento: 1, descripcion: 'DNI', estado: 1},
            { idTipoDocumento: 2, descripcion: 'RUC', estado: 1},
            { idTipoDocumento: 3, descripcion: 'PASAPORTE', estado: 1}
        ];

        const personas = [
            { id: 1, idTipoDocumento: 1, nombre: 'Carlos', apellidoPaterno: 'Espino', apellidoMaterno: 'Maraví', numeroDocumento: '45795811', estado: 1 },
            { id: 2, idTipoDocumento: 1, nombre: 'Susan', apellidoPaterno: 'Oyola', apellidoMaterno: 'Orellana', numeroDocumento: '46795811', estado: 1 },
            { id: 3, idTipoDocumento: 1, nombre: 'Wilmer', apellidoPaterno: 'Apumayta', apellidoMaterno: 'Yañez', numeroDocumento: '44702331', estado: 1 },
            { id: 4, idTipoDocumento: 1, nombre: 'Alejandro', apellidoPaterno: 'Alvarez', apellidoMaterno: 'Luna', numeroDocumento: '45702331', estado: 1 }
        ]

        return { predios, tipopersonas, tipogastos, personas };
        // return { predios };
    }
}
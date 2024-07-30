import { manejarCambioPagina } from '../paginador.js';
import mostrarPaginador from '../paginador.js';

function simularEvento(target){
    return {
        preventDefault: jest.fn(), target
    }
};

describe('manejarCambioPagina', () => {
    const mockCallback = jest.fn();
    const target = document.createElement('a');
    target.setAttribute('href', '#');
    target.dataset.pagina = '2';
    const evento = simularEvento(target);

    it('debería manejar el cambio de página según click en el número de página', () => {
        manejarCambioPagina(evento, mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(2);
    });
    
    it('debería manejar el cambio de página por default', () => {
        manejarCambioPagina(evento);
    });
});


describe('mostrarPaginador', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="paginador"></div>';
    });

    it('debería mostrar el paginador', () => {
        const $paginador = document.querySelector('#paginador');
        expect($paginador.children.length).toBe(0);
        
        const totalPokemones = 1302;
        const paginaActual = 1;
        const urlSuguiente = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';
        const urlAnterior = null;

        mostrarPaginador(totalPokemones, paginaActual, urlSuguiente, urlAnterior, () => {});
        expect($paginador.children.length).toBeGreaterThan(0);
    });
});


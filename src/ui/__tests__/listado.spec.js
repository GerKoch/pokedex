import { actualizarTextoIndicePokemones, mostrarListadoPokemones } from '../listado.js';

describe('actualizarTextoIndicePokemones', () => {
    it('debería actualizar el texto indice de pokemones', () => {
        document.body.innerHTML = '<div id="indice"></div>';
        actualizarTextoIndicePokemones('test');
        expect(document.querySelector(('#indice')).textContent)
            .toBe('test');
    });
})

describe('mostrarListadoPokemones', () => {
    it('debería mostrar el listado de pokemones', () => {
        document.body.innerHTML = '<div id="indice"></div>';
        const listadoNombresPokemones = ['bulbasaur', 'ivysaur', 'venusaur'];
        const mockCallback = jest.fn(); 
    
        mostrarListadoPokemones(listadoNombresPokemones, mockCallback);
    
        const $links = document.querySelectorAll('#indice a');
        expect($links.length).toBe(listadoNombresPokemones.length);
        $links.forEach(($link, index) => {
            expect($link.textContent).toBe(listadoNombresPokemones[index]);
            $link.click();
            expect(mockCallback).toHaveBeenCalledWith(listadoNombresPokemones[index]);
        });
    
        const $indice = document.querySelector('#indice');
    
        expect($indice.textContent).toContain(listadoNombresPokemones.join(''));
    
        describe('clickea en el primer pokemon de la lista', () => {
            $links[0].click();
            expect(mockCallback).toHaveBeenCalledWith('bulbasaur');
        });
        
        describe('clickea en el segudno pokemon de la lista', () => {
            $links[1].click();
            expect(mockCallback).toHaveBeenCalledWith('ivysaur');
        });
    
        describe('clickea en el tercer pokemon de la lista', () => {
            $links[2].click();
            expect(mockCallback).toHaveBeenCalledWith('venusaur');
        });
    });
})

describe('pokemonSeleccionadoCallback', () => {
    it('debería mostrar el pokemon seleccionado del callback', () => {
        document.body.innerHTML = '<div id="indice"></div>';
        const listadoNombresPokemones = ['bulbasaur', 'ivysaur', 'venusaur'];
    
        mostrarListadoPokemones(listadoNombresPokemones);
    
        const $links = document.querySelectorAll('#indice a');
        expect($links.length).toBe(listadoNombresPokemones.length);
    
        $links.forEach(($link, index) => {
            expect($link.textContent).toBe(listadoNombresPokemones[index])
        });
    
        const $indice = document.querySelector('#indice');
        expect($indice.textContent).toContain(listadoNombresPokemones.join(''));
    
        $links.forEach(($link) => {
            expect(() => {
                $link.click().not.toThrow();
            });
        });
    });
});

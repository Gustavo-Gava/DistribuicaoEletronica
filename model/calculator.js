let calculos = require('./element')

module.exports = {
    newElement(element, charge) {
        propriedades = calculos.discoverElement(element, charge)
        camadas = calculos.distribuicaoCamada(propriedades)
        subnivel = calculos.distribuicaoSubnivel(propriedades)

        return { propriedades, camadas, subnivel }
    }
}


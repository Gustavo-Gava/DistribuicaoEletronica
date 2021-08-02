function calcular() {
    let elemento = document.getElementById("elemento").value
    let carga = document.getElementById("carga").value
    let inputs = { element: elemento, charge: carga }

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(inputs)
    }



    fetch("http://localhost:3000/newElement", options).then(response => {
        return response.json()
    }).then(elemento => {

        if (!elemento.propriedades) {
            alert("Digite um Elemento Válido!")
            return
        }

        addPropriedadesHTML(elemento.propriedades)
        addCamadasHTML(elemento.camadas)
        addSubnivelHTML(elemento.subnivel)
        mostrarOutputs()

    })
}

function mostrarOutputs() {
    let outputs = document.getElementsByClassName("outputs")

    for (let i = 0; i < 3; i++) {
        outputs[i].classList.remove("hidden")
    }
}

function addCamadasHTML(camadas) {
    let camadasHTML = document.getElementsByClassName("camadas")

    camadasHTML[0].innerHTML = "K: " + camadas.k
    camadasHTML[1].innerHTML = "L: " + camadas.l
    camadasHTML[2].innerHTML = "M: " + camadas.m
    camadasHTML[3].innerHTML = "N: " + camadas.n
    camadasHTML[4].innerHTML = "O: " + camadas.o
    camadasHTML[5].innerHTML = "P: " + camadas.p
    camadasHTML[6].innerHTML = "Q: " + camadas.q
}

function addSubnivelHTML(subnivel) {
    let subnivelHTML = document.getElementsByClassName("subnivel")[0]

    if (subnivel.s.um != 0) {
        subnivelHTML.innerHTML = "1s<sup>" + subnivel.s.um + "</sup>"
    }
    else {
        return
    }
    if (subnivel.s.dois != 0) {
        subnivelHTML.innerHTML += " 2s<sup>" + subnivel.s.dois + "</sup>"
    }
    else {
        return
    }
    if (subnivel.p.um != 0) {
        subnivelHTML.innerHTML += " 2p<sup>" + subnivel.p.um + "</sup>"
    }
    else {
        return
    }
    if (subnivel.s.tres != 0) {
        subnivelHTML.innerHTML += " 3s<sup>" + subnivel.s.tres + "</sup>"
    }
    else {
        return
    }
    if (subnivel.p.dois != 0) {
        subnivelHTML.innerHTML += " 3p<sup>" + subnivel.p.dois + "</sup>"
    }
    else {
        return
    }
    if (subnivel.s.quatro != 0) {
        subnivelHTML.innerHTML += " 4s<sup>" + subnivel.s.quatro + "</sup>"
    }
    else {
        return
    }
    if (subnivel.d.um != 0) {
        subnivelHTML.innerHTML += " 3d<sup>" + subnivel.d.um + "</sup>"
    }
    else {
        return
    }
    if (subnivel.p.tres != 0) {
        subnivelHTML.innerHTML += " 4p<sup>" + subnivel.p.tres + "</sup>"
    }
    else {
        return
    }
    if (subnivel.s.cinco != 0) {
        subnivelHTML.innerHTML += " 5s<sup>" + subnivel.s.cinco + "</sup>"
    }
    else {
        return
    }
    if (subnivel.d.dois != 0) {
        subnivelHTML.innerHTML += " 4d<sup>" + subnivel.d.dois + "</sup>"
    }
    else {
        return
    }
    if (subnivel.p.quatro != 0) {
        subnivelHTML.innerHTML += " 5p<sup>" + subnivel.p.quatro + "</sup>"
    }
    else {
        return
    }
    if (subnivel.s.seis != 0) {
        subnivelHTML.innerHTML += " 6s<sup>" + subnivel.s.seis + "</sup>"
    }
    else {
        return
    }
    if (subnivel.f.um != 0) {
        subnivelHTML.innerHTML += " 4f<sup>" + subnivel.f.um + "</sup>"
    }
    else {
        return
    }
    if (subnivel.d.tres != 0) {
        subnivelHTML.innerHTML += " 5d<sup>" + subnivel.d.tres + "</sup>"
    }
    else {
        return
    }
    if (subnivel.p.cinco != 0) {
        subnivelHTML.innerHTML += " 6p<sup>" + subnivel.p.cinco + "</sup>"
    }
    else {
        return
    }
    if (subnivel.s.sete != 0) {
        subnivelHTML.innerHTML += " 7s<sup>" + subnivel.s.sete + "</sup>"
    }
    else {
        return
    }
    if (subnivel.f.dois != 0) {
        subnivelHTML.innerHTML += " 5f<sup>" + subnivel.f.dois + "</sup>"
    }
    else {
        return
    }
    if (subnivel.d.quatro != 0) {
        subnivelHTML.innerHTML += " 6d<sup>" + subnivel.d.quatro + "</sup>"
    }
    else {
        return
    }
    if (subnivel.p.seis != 0) {
        subnivelHTML.innerHTML += " 7p<sup>" + subnivel.p.seis + "</sup>"
    }
    else {
        return
    }
}

function addPropriedadesHTML(propriedades) {
    let propriedadesHTML = document.getElementsByClassName("propriedades")

    propriedadesHTML[0].innerHTML = "Nome do Elemento: " + propriedades.nome
    propriedadesHTML[1].innerHTML = "Abreviação: " + propriedades.abr
    propriedadesHTML[2].innerHTML = "Número Atômico: " + propriedades.num_protons
    propriedadesHTML[3].innerHTML = "Massa: " + propriedades.massa
    propriedadesHTML[4].innerHTML = "Número de Eletróns: " + propriedades.num_eletrons
    propriedadesHTML[5].innerHTML = "Número de Prótons: " + propriedades.num_protons
    propriedadesHTML[6].innerHTML = "Número de Neutrôns: " + propriedades.num_neutrons
}
module.exports = {
    discoverElement(element, charge) {
        charge = parseInt(charge, 10)
        let propriedades = {
            massa: 0,
            num_protons: 0,
            num_neutrons: 0,
            num_eletrons: 0,
            abr: "",
            nome: "",
            familia: "",
            periodo: ""
        }

        switch (element.toUpperCase()) {
            case "H":
                num_atomico = 1
                propriedades.massa = 1.008
                propriedades.num_protons = 1
                propriedades.num_neutrons = 0
                propriedades.abr = "H"
                propriedades.nome = "Hidrogênio"
                propriedades.familia = "1a"
                propriedades.periodo = 1
                break
            case "HE":
                num_atomico = 2
                propriedades.massa = 4.003
                propriedades.num_protons = 2
                propriedades.num_neutrons = Math.floor(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "He"
                propriedades.nome = "Hélio"
                propriedades.familia = "2a"
                propriedades.periodo = 1
                break
            case "LI":
                num_atomico = 3
                propriedades.massa = 6.941
                propriedades.num_protons = 3
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Li"
                propriedades.nome = "Lítio"
                propriedades.familia = "1a - Metais Alcalinos"
                propriedades.periodo = 2
                break
            case "BE":
                num_atomico = 4
                propriedades.massa = 9.012
                propriedades.num_protons = 4
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Be"
                propriedades.nome = "Berílio"
                propriedades.familia = "2A - Metais Alcalinos Terrosos"
                propriedades.periodo = 2
                break
            case "B":
                num_atomico = 5
                propriedades.massa = 10.811
                propriedades.num_protons = 5
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "B"
                propriedades.nome = "Boro"
                propriedades.familia = "3A - Família do Boro"
                propriedades.periodo = 2
                break
            case "C":
                num_atomico = 6
                propriedades.massa = 12.011
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "C"
                propriedades.nome = "Carbono"
                propriedades.familia = "4A - Família do Carbono"
                propriedades.periodo = 2
                break
            case "N":
                num_atomico = 7
                propriedades.massa = 14.007
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "N"
                propriedades.nome = "Nitrogênio"
                propriedades.familia = "2A - Metais Alcalinos Terrosos"
                propriedades.periodo = 2
                break
            case "O":
                num_atomico = 8
                propriedades.massa = 15.999
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "O"
                propriedades.nome = "Oxigênio"
                break
            case "F":
                num_atomico = 9
                propriedades.massa = 18.998
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "F"
                propriedades.nome = "Flúor"
                break
            case "NE":
                num_atomico = 10
                propriedades.massa = 20.18
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ne"
                propriedades.nome = "Neônio"
                break
            case "NA":
                num_atomico = 11
                propriedades.massa = 22.99
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Na"
                propriedades.nome = "Sódio"
                break
            case "MG":
                num_atomico = 12
                propriedades.massa = 24.305
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Mg"
                propriedades.nome = "Magnésio"
                break
            case "AL":
                num_atomico = 13
                propriedades.massa = 26.982
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.num_protons = num_atomico
                propriedades.abr = "Al"
                propriedades.nome = "Alumínio"
                break
            case "SI":
                num_atomico = 14
                propriedades.massa = 28.085
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Si"
                propriedades.nome = "Silício"
                break
            case "P":
                num_atomico = 15
                propriedades.massa = 30.974
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "P"
                propriedades.nome = "Fósforo"
                break
            case "S":
                num_atomico = 16
                propriedades.massa = 32.06
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "S"
                propriedades.nome = "Enxofre"
                break
            case "CL":
                num_atomico = 17
                propriedades.massa = 35.45
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Cl"
                propriedades.nome = "Cloro"
                break
            case "AR":
                num_atomico = 18
                propriedades.massa = 39.948
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ar"
                propriedades.nome = "Argônio"
                break
            case "K":
                num_atomico = 19
                propriedades.massa = 39.098
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "K"
                propriedades.nome = "Potássio"
                break
            case "CA":
                num_atomico = 20
                propriedades.massa = 40.078
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ca"
                propriedades.nome = "Cálcio"
                break
            case "SC":
                num_atomico = 21
                propriedades.massa = 44.956
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Sc"
                propriedades.nome = "Escândio"
                break
            case "TI":
                num_atomico = 22
                propriedades.massa = 47.867
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ti"
                propriedades.nome = "Titânio"
                break
            case "V":
                num_atomico = 23
                propriedades.massa = 50.942
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "V"
                propriedades.nome = "Vanádio"
                break
            case "CR":
                num_atomico = 24
                propriedades.massa = 51.996
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Cr"
                propriedades.nome = "Cromo"
                break
            case "MN":
                num_atomico = 25
                propriedades.massa = 54.938
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Mn"
                propriedades.nome = "Manganês"
                break
            case "FE":
                num_atomico = 26
                propriedades.massa = 55.845
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Fe"
                propriedades.nome = "Ferro"
                break
            case "CO":
                num_atomico = 27
                propriedades.massa = 58.933
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Co"
                propriedades.nome = "Cobalto"
                break
            case "NI":
                num_atomico = 28
                propriedades.massa = 58.693
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ni"
                propriedades.nome = "Níquel"
                break
            case "CU":
                num_atomico = 29
                propriedades.massa = 63.546
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Cu"
                propriedades.nome = "Cobre"
                break
            case "ZN":
                num_atomico = 30
                propriedades.massa = 65.38
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Zn"
                propriedades.nome = "Zinco"
                break
            case "GA":
                num_atomico = 31
                propriedades.massa = 69.723
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ga"
                propriedades.nome = "Gálio"
                break
            case "GE":
                num_atomico = 32
                propriedades.massa = 72.63
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ge"
                propriedades.nome = "Germânio"
                break
            case "AS":
                num_atomico = 33
                propriedades.massa = 74.922
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "As"
                propriedades.nome = "Arsênio"
                break
            case "SE":
                num_atomico = 34
                propriedades.massa = 78.971
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Se"
                propriedades.nome = "Selênio"
                break
            case "BR":
                num_atomico = 35
                propriedades.massa = 79.904
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Br"
                propriedades.nome = "Bromo"
                break
            case "KR":
                num_atomico = 36
                propriedades.massa = 83.798
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Kr"
                propriedades.nome = "Crípton"
                break
            case "RB":
                num_atomico = 37
                propriedades.massa = 85.468
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Rb"
                propriedades.nome = "Rubídio"
                break
            case "SR":
                num_atomico = 38
                propriedades.massa = 87.62
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Sr"
                propriedades.nome = "Estrôncio"
                break
            case "Y":
                num_atomico = 39
                propriedades.massa = 88.906
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Y"
                propriedades.nome = "Ítrio"
                break
            case "ZR":
                num_atomico = 40
                propriedades.massa = 91.224
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Zr"
                propriedades.nome = "Zircônio"
                break
            case "NB":
                num_atomico = 41
                propriedades.massa = 92.906
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Nb"
                propriedades.nome = "Nióbio"
                break
            case "MO":
                num_atomico = 42
                propriedades.massa = 95.95
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Mo"
                propriedades.nome = "Molibdênio"
                break
            case "TC":
                num_atomico = 43
                propriedades.massa = 98.907
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Tc"
                propriedades.nome = "Tecnécio"
                break
            case "RU":
                num_atomico = 44
                propriedades.massa = 101.07
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ru"
                propriedades.nome = "Rutênio"
                break
            case "RH":
                num_atomico = 45
                propriedades.massa = 102.91
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Rh"
                propriedades.nome = "Ródio"
                break
            case "PD":
                num_atomico = 46
                propriedades.massa = 106.42
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Pd"
                propriedades.nome = "Paládio"
                break
            case "AG":
                num_atomico = 47
                propriedades.massa = 107.87
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ag"
                propriedades.nome = "Prata"
                break
            case "CD":
                num_atomico = 48
                propriedades.massa = 112.41
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Cd"
                propriedades.nome = "Cádmio"
                break
            case "IN":
                num_atomico = 49
                propriedades.massa = 114.82
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "In"
                propriedades.nome = "Índio"
                break
            case "SN":
                num_atomico = 50
                propriedades.massa = 118.71
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Sn"
                propriedades.nome = "Estanho"
                break
            case "SB":
                num_atomico = 51
                propriedades.massa = 121.76
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Sb"
                propriedades.nome = "Antimônio"
                break
            case "TE":
                num_atomico = 52
                propriedades.massa = 127.60
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Te"
                propriedades.nome = "Telúrio"
                break
            case "I":
                num_atomico = 53
                propriedades.massa = 126.90
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "I"
                propriedades.nome = "Iodo"
                break
            case "XE":
                num_atomico = 54
                propriedades.massa = 131.30
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Xe"
                propriedades.nome = "Xenônio"
                break
            case "CS":
                num_atomico = 55
                propriedades.massa = 132.91
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Cs"
                propriedades.nome = "Césio"
                break
            case "BA":
                num_atomico = 56
                propriedades.massa = 137.33
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ba"
                propriedades.nome = "Bário"
                break
            case "LA":
                num_atomico = 57
                propriedades.massa = 138.91
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "La"
                propriedades.nome = "Lantânio"
                break
            case "CE":
                num_atomico = 58
                propriedades.massa = 140.12
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ce"
                propriedades.nome = "Cério"
                break
            case "PR":
                num_atomico = 59
                propriedades.massa = 140.91
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Pr"
                propriedades.nome = "Praseodímio"
                break
            case "ND":
                num_atomico = 60
                propriedades.massa = 144.24
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Nd"
                propriedades.nome = "Neodímio"
                break
            case "PM":
                num_atomico = 61
                propriedades.massa = 145
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Pm"
                propriedades.nome = "Promécio"
                break
            case "SM":
                num_atomico = 62
                propriedades.massa = 150.36
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Sm"
                propriedades.nome = "Samário"
                break
            case "EU":
                num_atomico = 63
                propriedades.massa = 151.96
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Eu"
                propriedades.nome = "Európio"
                break
            case "GD":
                num_atomico = 64
                propriedades.massa = 157.25
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Gd"
                propriedades.nome = "Gadolínio"
                break
            case "TB":
                num_atomico = 65
                propriedades.massa = 158.93
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Tb"
                propriedades.nome = "Térbio"
                break
            case "DY":
                num_atomico = 66
                propriedades.massa = 162.50
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Dy"
                propriedades.nome = "Disprósio"
                break
            case "HO":
                num_atomico = 67
                propriedades.massa = 164.93
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ho"
                propriedades.nome = "Hólmio"
                break
            case "ER":
                num_atomico = 68
                propriedades.massa = 167.26
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Er"
                propriedades.nome = "Érbio"
                break
            case "TM":
                num_atomico = 69
                propriedades.massa = 168.93
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Tm"
                propriedades.nome = "Túlio"
                break
            case "YB":
                num_atomico = 70
                propriedades.massa = 173.04
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Yb"
                propriedades.nome = "Itérbio"
                break
            case "LU":
                num_atomico = 71
                propriedades.massa = 174.96
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Lu"
                propriedades.nome = "Lutécio"
                break
            case "HF":
                num_atomico = 72
                propriedades.massa = 178.49
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Hf"
                propriedades.nome = "Háfnio"
                break
            case "TA":
                num_atomico = 73
                propriedades.massa = 180.95
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ta"
                propriedades.nome = "Tantálo"
                break
            case "W":
                num_atomico = 74
                propriedades.massa = 183.85
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "W"
                propriedades.nome = "Tungstênio"
                break
            case "RE":
                num_atomico = 75
                propriedades.massa = 186.21
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Re"
                propriedades.nome = "Rênio"
                break
            case "OS":
                num_atomico = 76
                propriedades.massa = 190.23
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Os"
                propriedades.nome = "Ósmio"
                break
            case "IR":
                num_atomico = 77
                propriedades.massa = 192.22
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ir"
                propriedades.nome = "Irídio"
                break
            case "PT":
                num_atomico = 78
                propriedades.massa = 195.09
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Pt"
                propriedades.nome = "Platina"
                break
            case "AU":
                num_atomico = 79
                propriedades.massa = 196.97
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Au"
                propriedades.nome = "Ouro"
                break
            case "HG":
                num_atomico = 80
                propriedades.massa = 200.59
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Hg"
                propriedades.nome = "Mercúrio"
                break
            case "TL":
                num_atomico = 81
                propriedades.massa = 204.37
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Tl"
                propriedades.nome = "Tálio"
                break
            case "PB":
                num_atomico = 82
                propriedades.massa = 207.2
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Pb"
                propriedades.nome = "Chumbo"
                break
            case "BI":
                num_atomico = 83
                propriedades.massa = 208.98
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Bi"
                propriedades.nome = "Bismuto"
                break
            case "PO":
                num_atomico = 84
                propriedades.massa = 209
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Po"
                propriedades.nome = "Polônio"
                break
            case "AT":
                num_atomico = 85
                propriedades.massa = 210
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "At"
                propriedades.nome = "Astato"
                break
            case "RN":
                num_atomico = 86
                propriedades.massa = 222
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Rn"
                propriedades.nome = "Radônio"
                break
            case "FR":
                num_atomico = 87
                propriedades.massa = 223
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Fr"
                propriedades.nome = "Frâncio"
                break
            case "RA":
                num_atomico = 88
                propriedades.massa = 226
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ra"
                propriedades.nome = "Rádio"
                break
            case "AC":
                num_atomico = 89
                propriedades.massa = 227
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ac"
                propriedades.nome = "Actínio"
                break
            case "TH":
                num_atomico = 90
                propriedades.massa = 232
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Th"
                propriedades.nome = "Tório"
                break
            case "PA":
                num_atomico = 91
                propriedades.massa = 231
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Pa"
                propriedades.nome = "Protactónio"
                break
            case "U":
                num_atomico = 92
                propriedades.massa = 238
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "U"
                propriedades.nome = "Urânio"
                break
            case "NP":
                num_atomico = 93
                propriedades.massa = 237
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Np"
                propriedades.nome = "Netúnio"
                break
            case "PU":
                num_atomico = 94
                propriedades.massa = 244
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Pu"
                propriedades.nome = "Plutônio"
                break
            case "AM":
                num_atomico = 95
                propriedades.massa = 243
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Am"
                propriedades.nome = "Amerício"
                break
            case "CM":
                num_atomico = 96
                propriedades.massa = 247
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Cm"
                propriedades.nome = "Cúrio"
                break
            case "BK":
                num_atomico = 97
                propriedades.massa = 247
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Bk"
                propriedades.nome = "Berquélio"
                break
            case "CF":
                num_atomico = 98
                propriedades.massa = 251
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Cf"
                propriedades.nome = "Califórnio"
                break
            case "ES":
                num_atomico = 99
                propriedades.massa = 252
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Es"
                propriedades.nome = "Einstênio"
                break
            case "EM":
                num_atomico = 100
                propriedades.massa = 257
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Em"
                propriedades.nome = "Férmio"
                break
            case "MD":
                num_atomico = 101
                propriedades.massa = 258
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Md"
                propriedades.nome = "Mendelévio"
                break
            case "NO":
                num_atomico = 102
                propriedades.massa = 259
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "No"
                propriedades.nome = "Nobélio"
                break
            case "LR":
                num_atomico = 103
                propriedades.massa = 266
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Lr"
                propriedades.nome = "Laurêncio"
                break
            case "RF":
                num_atomico = 104
                propriedades.massa = 267
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Rf"
                propriedades.nome = "Rutherfórdio"
                break
            case "DB":
                num_atomico = 105
                propriedades.massa = 268
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Db"
                propriedades.nome = "Dúbnio"
                break
            case "SG":
                num_atomico = 106
                propriedades.massa = 269
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Sg"
                propriedades.nome = "Seabórguio"
                break
            case "BH":
                num_atomico = 107
                propriedades.massa = 270
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Bh"
                propriedades.nome = "Bóhrio"
                break
            case "HS":
                num_atomico = 108
                propriedades.massa = 277
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Hs"
                propriedades.nome = "Hássio"
                break
            case "MT":
                num_atomico = 109
                propriedades.massa = 266
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Mt"
                propriedades.nome = "Meitnério"
                break
            case "DS":
                num_atomico = 110
                propriedades.massa = 281
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ds"
                propriedades.nome = "Darmstádio"
                break
            case "RG":
                num_atomico = 111
                propriedades.massa = 282
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Rg"
                propriedades.nome = "Roentgênio"
                break
            case "CN":
                num_atomico = 112
                propriedades.massa = 286
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Cn"
                propriedades.nome = "Copernício"
                break
            case "NH":
                num_atomico = 113
                propriedades.massa = 286
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Nh"
                propriedades.nome = "Nihônio"
                break
            case "FL":
                num_atomico = 114
                propriedades.massa = 289
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Fl"
                propriedades.nome = "Fleróvio"
                break
            case "MC":
                num_atomico = 115
                propriedades.massa = 290
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Mc"
                propriedades.nome = "Moscóvio"
                break
            case "LV":
                num_atomico = 116
                propriedades.massa = 293
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Lv"
                propriedades.nome = "Livermório"
                break
            case "TS":
                num_atomico = 117
                propriedades.massa = 294
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Ts"
                propriedades.nome = "Tenessino"
                break
            case "OG":
                num_atomico = 118
                propriedades.massa = 294
                propriedades.num_protons = num_atomico
                propriedades.num_neutrons = Math.round(propriedades.massa - propriedades.num_protons)
                propriedades.abr = "Og"
                propriedades.nome = "Oganessônio"
                break
            default:
                propriedades = false
        }

        propriedades.num_eletrons = propriedades.num_protons - charge

        return propriedades
    },
    distribuicaoCamada(propriedades) {
        let camadas = {
            k: 0,
            l: 0,
            m: 0,
            n: 0,
            o: 0,
            p: 0,
            q: 0,
        }

        let subnivel = this.distribuicaoSubnivel(propriedades)

        camadas.k = subnivel.s.um
        camadas.l = subnivel.s.dois + subnivel.p.um
        camadas.m = subnivel.s.tres + subnivel.p.dois + subnivel.d.um
        camadas.n = subnivel.s.quatro + subnivel.p.tres + subnivel.d.dois + subnivel.f.um
        camadas.o = subnivel.s.cinco + subnivel.p.quatro + subnivel.d.tres + subnivel.f.dois
        camadas.p = subnivel.s.seis + subnivel.p.cinco + subnivel.d.quatro
        camadas.q = subnivel.s.sete + subnivel.p.seis

        return camadas
    },
    distribuicaoSubnivel(propriedades) {
        let subnivel = {
            s: {
                um: 0,
                dois: 0,
                tres: 0,
                quatro: 0,
                cinco: 0,
                seis: 0,
                sete: 0,
            },
            p: {
                um: 0,
                dois: 0,
                dois: 0,
                tres: 0,
                quatro: 0,
                cinco: 0,
                seis: 0,
            },
            d: {
                um: 0,
                dois: 0,
                dois: 0,
                tres: 0,
                quatro: 0,
            },
            f: {
                um: 0,
                dois: 0,
            }
        }

        for (var i = 0; i < propriedades.num_eletrons; i++) {
            if (subnivel.s.um < 2) {
                subnivel.s.um++
            }
            else if (subnivel.s.dois < 2) {
                subnivel.s.dois++
            }
            else if (subnivel.p.um < 6) {
                subnivel.p.um++
            }
            else if (subnivel.s.tres < 2) {
                subnivel.s.tres++
            }
            else if (subnivel.p.dois < 6) {
                subnivel.p.dois++
            }
            else if (subnivel.s.quatro < 2) {
                subnivel.s.quatro++
            }
            else if (subnivel.d.um < 10) {
                subnivel.d.um++
            }
            else if (subnivel.p.tres < 6) {
                subnivel.p.tres++
            }
            else if (subnivel.s.cinco < 2) {
                subnivel.s.cinco++
            }
            else if (subnivel.d.dois < 10) {
                subnivel.d.dois++
            }
            else if (subnivel.p.quatro < 6) {
                subnivel.p.quatro++
            }
            else if (subnivel.s.seis < 2) {
                subnivel.s.seis++
            }
            else if (subnivel.f.um < 14) {
                subnivel.f.um++
            }
            else if (subnivel.d.tres < 10) {
                subnivel.d.tres++
            }
            else if (subnivel.p.cinco < 6) {
                subnivel.p.cinco++
            }
            else if (subnivel.s.sete < 2) {
                subnivel.s.sete++
            }
            else if (subnivel.f.dois < 14) {
                subnivel.f.dois++
            }
            else if (subnivel.d.quatro < 10) {
                subnivel.d.quatro++
            }
            else if (subnivel.p.seis < 6) {
                subnivel.p.seis++
            }
        }

        return subnivel

    }
}
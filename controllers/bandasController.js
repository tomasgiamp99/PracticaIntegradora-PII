let listadoDeBandas = require('../bandas')

let bandasController = {
    listadoBandas: function(req,res){
        return res.send('listadoDeBandas', {bandas})
    },

    detalleBanda: function(req,res){
        let idDeBanda = req.params.id;

        let resultadoPorId = {}

        for (let i=0; i<listadoDeBandas.length; i++){
            if(listadoDeBandas[i].id == idDeBanda){
                resultadoPorId = listadoDeBandas[i]
            }
        }
        return res.render('detalleBanda', {resultadoPorId})
    },

    porGenero: function(req,res){
        let generoDeBanda = req.params.genero

        let resultadoPorGenero = []

        for (let i=0; i<listadoDeBandas.length; i++){
            if(listadoDeBandas[i].genero == generoDeBanda){
                resultadoPorGenero.push(listadoDeBandas[i])
            }
        }
        return res.render('porGenero', {resultadoPorGenero})
    }

}

module.exports = bandasController
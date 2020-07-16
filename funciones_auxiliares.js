var coeficientes = {'ARROZ':'0.18033',
'HARINA':'0.09428',
'CEREAL':'0.22167',
'PAN':'2.08381',
'GALLETA':'0.42102',
'PRODUCTOSDEREPOSTERIA':'0.56276',
'MASASSALADASPREPARADAS':'0.10138',
'SNACK':'0.10349',
'PASTAS':'0.26583',
'CARNEDEVACUNO':'1.83118',
'CARNEDECERDO':'0.45693',
'CARNEDEPAVO':'0.07385',
'CARNEDEPOLLO':'0.91573',
'CECINAS':'0.98478',
'HAMBURGUESA':'0.12905',
'PESCADOS':'0.26577',
'MARISCOS':'0.08082',
'PESCADOSENCONSERVA':'0.20353',
'MARISCOSENCONSERVA':'0.0223',
'LECHEENPOLVO':'0.18644',
'LECHELIQUIDA':'0.45256',
'LECHECONSERVADA':'0.08348',
'YOGHURT':'0.37669',
'POSTRESLACTEOS':'0.07293',
'QUESO':'0.84248',
'HUEVOS':'0.40773',
'MANTEQUILLA':'0.16426',
'MARGARINA':'0.07462',
'ACEITEVEGETAL':'0.29183',
'MANZANA':'0.11296',
'NARANJA':'0.1119',
'PERA':'0.03486',
'PLATANO':'0.14182',
'FRUTASDEESTACION':'0.3918',
'FRUTOSSECOS':'0.13142',
'FRUTASENCONSERVA':'0.0484',
'ACELGAYESPINACA':'0.04289',
'CEBOLLAYCEBOLLIN':'0.13303',
'LECHUGA':'0.17469',
'LIMON':'0.13543',
'PALTA':'0.33389',
'PIMENTONYPIMIENTO':'0.0516',
'TOMATE':'0.32495',
'ZANAHORIA':'0.06898',
'ZAPALLO':'0.0856',
'ZAPALLOITALIANO':'0.03675',
'VERDURASDEESTACION':'0.30569',
'VERDURASCONGELADAS':'0.11295',
'VERDURASENCONSERVA':'0.04367',
'VERDURASENCURTIDAS':'0.0731',
'LEGUMBRES':'0.14401',
'PAPA':'0.3362',
'PAPASCONGELADASYDESHIDRATADAS':'0.05833',
'PAPASFRITAS':'0.12454',
'AZUCAR':'0.13136',
'ENDULZANTE':'0.04307',
'MERMELADA':'0.07621',
'MANJARYDULCESUNTABLES':'0.07214',
'CARAMELOSYGOMADEMASCAR':'0.09733',
'CHOCOLATE':'0.25488',
'HELADO':'0.25363',
'SAL':'0.02511',
'HIERBASESPECIASYCONDIMENTOS':'0.09706',
'SALSAS':'0.10893',
'ADEREZOS':'0.19046',
'SOPASYCREMAS':'0.087',
'ALIMENTOSPARABEBE':'0.1037',
'POSTRESNOLACTEOS':'0.08544',
'CAFEYSUCEDANEOS':'0.15522',
'TE':'0.17671',
'SABORIZANTEPARALECHE':'0.05023',
'AGUAEMBOTELLADA':'0.21102',
'BEBIDAGASEOSA':'1.08369',
'BEBIDAISOTONICAYENERGIZANTE':'0.06007',
'JUGOLIQUIDO':'0.32951',
'JUGOENPOLVO':'0.09755',
'PISCO':'0.23562',
'RON':'0.07718',
'WHISKY':'0.14032',
'VODKA':'0.05614',
'VINO':'0.86682',
'VINOESPUMOSO':'0.10253',
'CERVEZA':'1.39219',
'CIGARRILLOS':'1.90687',
'TELASPARACONFECCIONDEVESTUARIO':'0.03406',
'ROPADEABRIGOPARAHOMBRE':'0.17216',
'PANTALONLARGOYCORTOPARAHOMBRE':'0.23837',
'CAMISAYPOLERAPARAHOMBRE':'0.19681',
'ROPAINTERIORYDEDORMIRPARAHOMBRE':'0.0398',
'ROPADEABRIGOPARAMUJER':'0.20708',
'PANTALONFALDAYVESTIDOPARAMUJER':'0.28385',
'BLUSAYPOLERAPARAMUJER':'0.16895',
'ROPADEPORTIVAYDEBANOPARAMUJER':'0.02628',
'ROPAINTERIORYDEDORMIRPARAMUJER':'0.08361',
'ROPADEABRIGOINFANTIL':'0.05708',
'PANTALONFALDAYVESTIDOINFANTIL':'0.07989',
'CAMISABLUSAYPOLERAINFANTIL':'0.05971',
'ROPADEPORTIVASHORTSBERMUDASYTRAJESDEBANOINFANTIL':'0.03397',
'ROPAINTERIORYDEDORMIRINFANTIL':'0.02386',
'VESTUARIOPARALACTANTE':'0.02277',
'UNIFORMEYROPADEPORTIVAESCOLAR':'0.39907',
'ARTICULOSPARAREPARACIONDEVESTUARIO':'0.03652',
'ACCESORIOSDEVESTIR':'0.08105',
'SERVICIODELIMPIEZAYREPARACIONDEVESTUARIO':'0.06004',
'ZAPATILLASPARAHOMBRE':'0.23515',
'ZAPATOSPARAHOMBRE':'0.15246',
'ZAPATILLASPARAMUJER':'0.14788',
'ZAPATOSPARAMUJER':'0.14463',
'CALZADODEESTACIONPARAMUJER':'0.18584',
'ZAPATILLAINFANTIL':'0.1438',
'ZAPATOINFANTIL':'0.04193',
'CALZADOESCOLAR':'0.14934',
'ARRIENDO':'5.52872',
'MATERIALESPARALAREPARACIONDELAVIVIENDA':'0.46731',
'PINTURAYBARNIZ':'0.15008',
'GRIFERIAYACCESORIOS':'0.15152',
'SELLANTESYPEGAMENTOS':'0.05354',
'SERVICIOSPARALACONSERVACIONYREPARACIONDELAVIVIENDA':'0.8895',
'AGUAPOTABLE':'1.65637',
'SERVICIODERETIRODEBASURA':'0.09053',
'SERVICIODEALARMAPARALAVIVIENDA':'0.08189',
'GASTOCOMUN':'1.36955',
'ELECTRICIDAD':'2.27238',
'GASPORRED':'0.46326',
'GASLICUADO':'1.1474',
'CARBON':'0.04009',
'PARAFINA':'0.11292',
'LENA':'0.35214',
'CAMA':'0.24409',
'COLCHON':'0.04889',
'MUEBLESDECOMEDOR':'0.12316',
'MUEBLESPARACOCINA':'0.08476',
'MUEBLESPARALIVING':'0.31192',
'ALFOMBRAYOTROSREVESTIMIENTOSPARAPISOS':'0.05674',
'ARTICULOSORNAMENTALES':'0.11403',
'SERVICIODEREPARACIONDEMUEBLES':'0.02258',
'TEXTILESPARACAMA':'0.15219',
'TEXTILESPARABANOYCOCINA':'0.06102',
'TEXTILESPARALIVINGYCOMEDOR':'0.04704',
'CALEFON':'0.03793',
'COCINA':'0.07588',
'ARTICULOSPARACALEFACCIONDELHOGAR':'0.07897',
'HORNOSELECTRICOSYMICROONDAS':'0.02647',
'LAVADORA':'0.19793',
'REFRIGERADOR':'0.19312',
'ELECTRODOMESTICOSPEQUENOSDECOCINA':'0.18237',
'PLANCHA':'0.03349',
'SERVICIODEREPARACIONDELINEABLANCAYELECTRODOMESTICOS':'0.03963',
'VAJILLA':'0.13225',
'UTENSILIOSDECOCINA':'0.1495',
'HERRAMIENTASELECTRICASYACCESORIOS':'0.04308',
'HERRAMIENTASMANUALESYACCESORIOS':'0.06334',
'ACCESORIOSDEILUMINACION':'0.05921',
'ARTICULOSDECERRAJERIA':'0.05605',
'ACCESORIOSELECTRICOS':'0.05831',
'PILAS':'0.03477',
'AROMATIZADORYDESINFECTANTEAMBIENTAL':'0.08667',
'DETERGENTEYSUAVIZANTEPARAROPA':'0.46756',
'LAVALOZA':'0.07569',
'LIMPIADOR':'0.18733',
'INSECTICIDASYSIMILARES':'0.03315',
'ARTICULOSDELIMPIEZA':'0.10211',
'SERVILLETASYTOALLADEPAPEL':'0.19432',
'SERVICIODOMESTICO':'2.6473',
'MEDICAMENTOSANTIINFECCIOSOSANTIVIRALESYANTIFUNGICOS':'0.10445',
'MEDICAMENTOSPARAELAPARATOCARDIOVASCULAR':'0.20425',
'HORMONASYMEDICAMENTOSPARAELSISTEMAGENITO-URINARIO':'0.30228',
'MEDICAMENTOSANTIINFLAMATORIOSNOCORTICOIDESANTIMIGRANOSOSYSISTEMAOSTEO-MUSCULAR':'0.13352',
'MEDICAMENTOSPARAELSISTEMARESPIRATORIO':'0.27948',
'MEDICAMENTOSDERMATOLOGICOSDESINFECTANTESYANTISEPTICOS':'0.17123',
'MEDICAMENTOSPARAELSISTEMANERVIOSOCENTRAL':'0.37725',
'MEDICAMENTOSPARAELAPARATODIGESTIVOYMETABOLICO':'0.60521',
'PREPARADOSOFTALMOLOGICOS':'0.08479',
'MEDICAMENTOSPARAELTRATAMIENTODELCANCERMODIFICADORESDELSISTEMAINMUNEYFARMACOSUTILIZADOSENLOSCUIDADOSPALIATIVOSDELDOLOR':'0.07528',
'MEDICAMENTOSHOMEOPATICOSYSUPLEMENTOSALIMENTICIOS':'0.08545',
'PRODUCTOSPARALACURACIONDEHERIDAS':'0.0678',
'PRESERVATIVOS':'0.00823',
'LENTESDECORRECCION':'0.34303',
'ARTICULOSPARAMEDIRPARAMETROSDESALUD':'0.05639',
'CONSULTAMEDICA':'1.13844',
'PROCEDIMIENTOEINTERVENCIONQUIRURGICAAMBULATORIA':'0.55348',
'CONSULTAYTRATAMIENTOODONTOLOGICO':'1.26413',
'EXAMENDEIMAGENOLOGIAYRADIOLOGIA':'0.33872',
'EXAMENDELABORATORIOCLINICO':'0.26094',
'SERVICIODEOTROSPROFESIONALESDELASALUD':'0.34187',
'SERVICIODEHOSPITALIZACION':'0.97156',
'AUTOMOVILNUEVO':'2.85541',
'AUTOMOVILUSADO':'0.27347',
'MOTOCICLETA':'0.05903',
'BICICLETA':'0.06915',
'REPUESTOSPARAELFUNCIONAMIENTOELECTRICODELAUTOMOVIL':'0.07448',
'NEUMATICOSYLLANTAS':'0.12297',
'REPUESTOSYACCESORIOSPARAELFUNCIONAMIENTOMECANICODELAUTOMOVIL':'0.20054',
'GASOLINA':'2.73049',
'PETROLEODIESEL':'0.38425',
'LUBRICANTESYACEITESPARAELAUTOMOVIL':'0.03754',
'SERVICIODEMANTENCIONYREPARACIONDELAUTOMOVIL':'0.8548',
'SERVICIODELAVADODELAUTOMOVIL':'0.03766',
'SERVICIODEESTACIONAMIENTO':'0.2761',
'SERVICIODEPEAJE':'0.72502',
'LICENCIADECONDUCIR':'0.02589',
'REVISIONTECNICADELAUTOMOVIL':'0.07264',
'SERVICIODETRANSPORTEENTAXICOLECTIVO':'0.66401',
'SERVICIODETRANSPORTEENTAXI':'0.33569',
'SERVICIODETRANSPORTEESCOLAR':'0.20798',
'SERVICIODETRANSPORTEENMICROBUS':'0.5774',
'SERVICIODETRANSFER':'0.0251',
'SERVICIODETRANSPORTEENBUSINTERURBANO':'0.49365',
'SERVICIODETRANSPORTEAEREO':'0.75389',
'SERVICIODETRANSPORTEMULTIMODAL':'1.26432',
'EQUIPODETELEFONIAMOVIL':'0.61378',
'SERVICIODECONEXIONINTERNET':'0.29033',
'SERVICIODEBANDAANCHAMOVIL':'0.01605',
'SERVICIODEPACKDETELECOMUNICACIONES':'2.09814',
'SERVICIODETELEFONIAMOVIL':'2.34556',
'SERVICIODETELEFONIAFIJA':'0.09102',
'TELEVISOR':'0.40468',
'EQUIPODESONIDO':'0.04775',
'REPRODUCTORPORTATILDEAUDIOYVIDEO':'0.03111',
'CAMARAFOTOGRAFICA':'0.06172',
'COMPUTADOR':'0.41602',
'IMPRESORA':'0.05232',
'UNIDADDEALMACENAMIENTODIGITAL':'0.04773',
'JUGUETES':'0.39909',
'CONSOLADEVIDEOJUEGO':'0.05363',
'IMPLEMENTOSDEPORTIVOS':'0.18023',
'ARTICULOSDECAMPING':'0.04496',
'INSTRUMENTOSMUSICALES':'0.07416',
'FLORES':'0.08826',
'PLANTAS':'0.03139',
'ALIMENTOSPARAMASCOTAS':'0.68823',
'ACCESORIOSPARAMASCOTAS':'0.06456',
'SERVICIOSVETERINARIOS':'0.24731',
'SERVICIOSPRESTADOSPORCENTROSRECREATIVOS':'0.07416',
'ENTRADAAESPECTACULOSDEPORTIVOS':'0.02565',
'ENTRADAACENTROSDEDIVERSIONNOCTURNOS':'0.05024',
'SERVICIOSDEFIESTASDECUMPLEANOS':'0.15119',
'GIMNASIOS':'0.5476',
'CLASESDEPORTIVAS':'0.20658',
'CLASESRECREATIVAS':'0.1051',
'ENTRADAALCINE':'0.23441',
'ENTRADAAESPECTACULOSCULTURALES':'0.25826',
'SERVICIODEREVELADOFOTOGRAFICO':'0.02779',
'SERVICIODETELEVISIONPAGADARESIDENCIAL':'0.33837',
'SERVICIODESUSCRIPCIONENLINEA':'0.0287',
'JUEGOSDEAZAR':'0.02478',
'TEXTOESCOLAR':'0.17324',
'LIBRO':'0.22681',
'DIARIO':'0.0714',
'CUADERNO':'0.21817',
'MATERIALESPARAARTESMANUALES':'0.09202',
'ARTICULOSDEESCRITORIO':'0.03565',
'PAQUETETURISTICO':'0.76585',
'SERVICIODEEDUCACIONDEJARDININFANTIL':'0.29383',
'SERVICIODEEDUCACIONDETRANSICION':'0.21585',
'SERVICIODEEDUCACIONDE1CICLODELAENSENANZABASICA':'0.64393',
'SERVICIODEEDUCACIONDE2CICLODELAENSENANZABASICA':'0.5697',
'SERVICIODEEDUCACIONDELAENSENANZAMEDIA':'0.64279',
'SERVICIODEPREUNIVERSITARIO':'0.16925',
'SERVICIODEENSENANZAENCENTROSDEFORMACIONTECNICA':'0.14346',
'SERVICIODEENSENANZAENINSTITUTOPROFESIONAL':'0.61738',
'SERVICIODEENSENANZAUNIVERSITARIA':'2.49843',
'SERVICIODEENSENANZADEPOSTGRADOYPOSTITULO':'0.26762',
'CURSOSDECAPACITACION':'0.53344',
'ALIMENTOSCONSUMIDOSFUERADELHOGAR':'3.10518',
'SANDWICHYCOMPLETOCONSUMIDOFUERADELHOGAR':'0.57601',
'BEBIDAALCOHOLICACONSUMIDAFUERADELHOGAR':'0.16398',
'BEBIDANOALCOHOLICACONSUMIDAFUERADELHOGAR':'0.33339',
'HELADOSYPOSTRESCONSUMIDOSFUERADELHOGAR':'0.08952',
'PLATOSPREPARADOSPARALLEVAR':'1.60063',
'SERVICIODEALOJAMIENTOTURISTICO':'0.51476',
'SERVICIOSDEPELUQUERIA':'0.28677',
'SERVICIOSENCENTROSDEESTETICA':'0.11232',
'AFEITADORAYDEPILADORAELECTRICA':'0.03',
'MAQUINADEAFEITARDESECHABLE':'0.0544',
'ARTICULOSDIVERSOSPARAELCUIDADOPERSONAL':'0.03717',
'BLOQUEADORESYBRONCEADORES':'0.03724',
'COLONIASYPERFUMES':'0.20367',
'DESODORANTESYANTITRANSPIRANTES':'0.16733',
'PRODUCTOSDEHIGIENEBUCAL':'0.17978',
'PAPELHIGIENICO':'0.37335',
'JABON':'0.11949',
'PANALESDESECHABLES':'0.36613',
'PROTECCIONHIGIENICAFEMENINA':'0.08028',
'SHAMPOOYBALSAMO':'0.28385',
'CREMASPARALAPIEL':'0.17784',
'PRODUCTOSDEMAQUILLAJE':'0.15331',
'TINTURASYFIJADORES':'0.12015',
'JOYAS':'0.17174',
'RELOJDEPULSERA':'0.06962',
'ARTICULOSPARATRANSPORTEDEEFECTOSPERSONALES':'0.29735',
'ARTICULOSPARATRANSPORTEDEBEBE':'0.03873',
'LENTESDESOL':'0.04135',
'SEGUROS':'0.61603',
'GASTOFINANCIERO':'0.23354',
'SERVICIODEEMISIONDECERTIFICADO':'0.04128',
'SERVICIODEFOTOCOPIADO':'0.04202',
'MEMBRESIAENASOCIACIONPROFESIONAL':'0.09664',
'SERVICIONOTARIAL':'0.01836',
'SERVICIOFUNERARIO':'0.31463',
'CUOTASENCENTROSDEPADRESYAPODERADOS':'0.15544',
'SERVICIODERESIDENCIASPARAADULTOSMAYORES':'0.16485',
'SERVICIODESALACUNA':'0.06794'};


function pct_change(lista,lag){
    columnas=lista[0];
    cuerpo=lista.slice(1);
    var output=[];
    for(var i=0;i<cuerpo.length-lag;i++){
        var fila=[cuerpo[cuerpo.length-i-1][0]];
        for(var j=1;j<cuerpo[0].length;j++){
            var variacion=100*(cuerpo[cuerpo.length-i-1][j]/cuerpo[cuerpo.length-i-1-lag][j]-1);
            fila.push(variacion);
        }
        output=[fila].concat(output);
    }
    output=[columnas].concat(output);
    return output
};

function generar_serie_parcial(lista,matriz){
    var vector_output=[];
    var columnas=matriz[0];
    var valores=matriz.slice(1);
    var peso=0;
    for (var i=0;i<valores.length;i++){
        var valor_i=0;
        for (var j=1; j<columnas.length;j++){
            if (lista.includes(columnas[j])){
                if (i==1){
                    peso=peso+parseFloat(coeficientes[columnas[j]]);
                };
                valor_i=valor_i+coeficientes[columnas[j]]*valores[i][j]/100;
            };
        };
        vector_output.push([valores[i][0],valor_i]);
    }
    vector_output = vector_output.map(function(e) { 
        e[1] = 100*e[1]/peso; 
        return e;
      });
    vector_output=[['FECHA','INDICE_PARCIAL']].concat(vector_output);

    return vector_output;
};

function calcular_peso(glosas){
    var out=0;
    for(var i=0;i<glosas.length;i++){
        out=out+parseFloat(coeficientes[glosas[i]]);
    }
    return out
};
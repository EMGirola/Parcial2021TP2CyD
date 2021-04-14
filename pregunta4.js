/**
 * Dato el array de inventores, desarrollar una funcion que agregue una nueva propiedad
 * los descubrimientos de los inventores por ej. para Einstein 
 * ['Teoría de la relatividad especial','Equivalencia entre masa y energía','Teoría de la relatividad general']
 * 
 */

 const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];


  function findInventor(inventor, inventors) {
    let foundInventors = inventors.filter((inv) => inv.last == inventor);
    let oneInventor;
  
    if (foundInventors.length == 1) {
      oneInventor = foundInventors[0];
    }
  
    return oneInventor;
  }


  /**
   * Función que agrega descubrimientos en el array de inventors
   * @param {*} inventor 
   * @param {*} discoveries 
   * @param {*} inventors 
   */
  function addDiscoveries(inventor, discoveries, inventors){

      let searchedInventor = findInventor(inventor, inventors);

      if (searchedInventor) {

        if (!searchedInventor.discoveries) {

          searchedInventor.discoveries = discoveries;
          
        } else {
          discoveries.forEach((discovery) => {
            searchedInventor.discoveries[searchedInventor.discoveries.length] = discovery;
          })
        }
      }

      return inventors;
  }

  console.log(addDiscoveries('Einstein', 
  ['Teoría de la relatividad especial','Equivalencia entre masa y energía','Teoría de la relatividad general'], inventors
  ));


  

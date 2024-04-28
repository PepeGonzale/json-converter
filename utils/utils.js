module.exports = {
  splitJson: (json) => {
      let files = JSON.parse(json);
      let languages = Object.keys(files); 
      // get tags of the first object
      let tags = Object.keys(files[languages[0]]); 
      // create headers 
      let header = "TAG," + languages.join(","); 
      let csvLines = [];

      tags.forEach(tag => {
        // create row for each tag
          let row = `${tag}`; 
          languages.forEach(language => {
            let value = files[language][tag] || ""; // Obtener el valor de la traducción
            row += `,"${value.replace(/"/g, '""')}"`; // Encerrar el valor entre comillas y manejar comillas dentro del valor
       
          });
          console.log(row)
          csvLines.push(row); 
      });
      
 
      let csvContent = [header, ...csvLines].join("\n");

      return csvContent;
  }
};

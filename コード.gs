
function doGet(e) {
  let sheet = SpreadsheetApp.getActive().getActiveSheet();
  let values = sheet.getDataRange().getValues();
  let template = HtmlService.createTemplateFromFile("list");
  template.links = values; 
  return template.evaluate();
  }

function arrayShuffle(array) {
      array0 = array
      let n = 0
      for(let i = (array.length-1); i > 0  ; i--){
        let r = Math.floor(Math.random() * (i+1));
        let tmp = array[i];
        Logger.log(Math.floor(Math.random() * (i+1)));
        array[i] = array[r];
        array[r] = tmp;
        }
      for(let i = 0; i > 4; i++ ){
        if(array[i]==array0[0]){
          n = i;
        }
        Logger.log(n);
        
      }
      return{
          arr:array,
          anNum:n
        };
      }



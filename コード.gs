
function doGet(e) {
  let sheet = SpreadsheetApp.getActive().getActiveSheet();
  let values = sheet.getDataRange().getValues();
  let template = HtmlService.createTemplateFromFile("list");
  template.links = values; 
  return template.evaluate();
  }

function arrayShuffle(array) {
      let array0 = array.slice();
      Logger.log(array);
      Logger.log(array0);
      
      let n = 0
      for(let i = (array.length-1); i > 0  ; i--){
        let r = Math.floor(Math.random() * (i+1));
        let tmp = array[i];
        Logger.log(Math.floor(Math.random() * (i+1)));
        array[i] = array[r];
        array[r] = tmp;
        }

      Logger.log(array0[0]);
      
      for(let j = 0; j < 4; j++ ){
        Logger.log(array[j]);
        if(array[j]==array0[0]){
          n = j;
          Logger.log("一致");
        }else{
          Logger.log("不一致");
        }
        Logger.log(n);
        
      }
      return{
          arr:array,
          anNum:n
        };
      }



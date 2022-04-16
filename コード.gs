
function doGet(e) {
  
  let page = e.parameter.p;
  let sheet = SpreadsheetApp.getActive().getActiveSheet();
  let values = sheet.getDataRange().getValues();
  if(page==null){
  let template = HtmlService.createTemplateFromFile("list");
  template.links = values; 
  return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  else if(page == "result"){
  let template = HtmlService.createTemplateFromFile("result");
  template.links = values; // こうしておくとテンプレートの方で links という変数に値が入った状態で使える
  return template.evaluate()
  .setTitle("ページ遷移");
  
  }
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

function AnswersCheck(answers){
  var sheet = SpreadsheetApp.getActive().getSheetByName("ランダム解答記録"); 
  var lastRow = sheet.getLastRow();
  var values = sheet.getDataRange().getValues();
  var n = 0;
  for(let i = 1; i < 11; i++ ){
    var correctChoice = Number(values[lastRow-1][i-1]);
    var input = Number(answers["Q"+i]);
    
    if(input === correctChoice)n++;

        }return n;}


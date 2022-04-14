// (1) リクエストを受け取ると doGet が実行される
function doGet(e) {
  let sheet = SpreadsheetApp.getActive().getActiveSheet();
  let values = sheet.getDataRange().getValues();

  // (2) Spreadsheet からデータを読み込む
  // (3) テンプレートを使ってHTML文書を作って return
  let template = HtmlService.createTemplateFromFile("list");
  template.links = values; // こうしておくとテンプレートの方で links という変数に値が入った状態で使える
  return template.evaluate();

  }

function arrayShuffle(array) {
      for(let i = (array.length-1); i > 0  ; i--){
        let r = Math.floor(Math.random() * (i+1));
        let tmp = array[i];
        Logger.log(Math.floor(Math.random() * (i+1)));
        array[i] = array[r];
        array[r] = tmp;
        }
        return array;
      }

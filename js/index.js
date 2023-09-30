id = document.getElementById("id");
fio = document.getElementById("fio");
tel = document.getElementById("tel");
ad = document.getElementById("ad");

btn0
btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");

var db = openDatabase('Laba51', '1.0', 'LAB5DB', 1000000);

class Info {

    constructor(id, fio, tel, ad) {
        this.id = id;
        this.fio = fio;
        this.tel = tel;
        this.ad = ad;
      }
    }

    let info = new Info("","","","");

    // createList();

    btn0.onclick = () =>{
        if(id.value!="" && fio.value!="" && tel.value!="" && ad !=""){
            info.id = id.value;
            info.fio = fio.value;
            info.tel = tel.value;
            info.ad = ad.value;
            if(info.manNum == undefined){
                var db = openDatabase('Laba51', '1.0', 'LAB5DB', 1000000);
                db.transaction(function (tx) {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS LAB5DB (id, fio, tel, ad, manNum)');
                    tx.executeSql('INSERT INTO LAB5DB (id, fio, tel, ad, manNum) VALUES (?,?,?,?,?)', 
                        [info.id, info.fio, info.tel, info.ad, "Не указано"]);
                });
    
                console.log(info);
            }
            else {
            let manNum = document.getElementById("input5");
            info.manNum = manNum.value;
            var db = openDatabase('Laba51', '1.0', 'LAB5DB', 1000000);
                db.transaction(function (tx) {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS LAB5DB (id, fio, tel, ad, manNum)');
                    tx.executeSql('INSERT INTO LAB5DB (id, fio, tel, ad, manNum) VALUES (?,?,?,?,?)', 
                        [info.id, info.tel, info.fio, info.ad, info.manNum]);
                });
    
                console.log(info);
            }
        } 
    }

    btn1.onclick = () => {
        document.getElementById('id').value = "";
        document.getElementById('fio').value = "";
        document.getElementById('tel').value = "";
        document.getElementById('ad').value = "";
        location.reload();
    }

    btn2.onclick = () =>{
        var list = document.getElementById("select2");
     
        var id = list.value;
     
         db.transaction(function (tx) {
                     tx.executeSql("DELETE FROM LAB5DB WHERE rowid ='" + id + "'");
                     console.log(id);
                 });
         db.transaction(function(tx){
             location.reload();
         });
     }

    btn3.onclick = () =>{
        var db = openDatabase('Laba51', '1.0', 'LAB5DB', 1000000);
        var idArr = [];
        var fioArr =[];
        var telArr =[];
        var adArr =[];
        var manNumArr = [];
        
        db.transaction(function (tx) {
            tx.executeSql('SELECT id FROM LAB5DB', [],function(tx,res){
                for(let i =0;i< res.rows.length;i++){
                  idArr.push(res.rows.item(i)['id']);
                }
                console.log(res.rows.item(0));
            });
             tx.executeSql('SELECT fio FROM LAB5DB', [],function(tx,res){
                for(let i =0;i< res.rows.length;i++){
                  fioArr.push(res.rows.item(i)['fio']);
                }
                console.log(res.rows.item(0));
            });
             tx.executeSql('SELECT tel FROM LAB5DB', [],function(tx,res){
                for(let i =0;i< res.rows.length;i++){
                    telArr.push(res.rows.item(i)['tel']);
                }
                console.log(res.rows.item(0));
            });
             tx.executeSql('SELECT ad FROM LAB5DB', [],function(tx,res){
                for(let i =0;i< res.rows.length;i++){
                    adArr.push(res.rows.item(i)['ad']);
                }
                console.log(res.rows.item(0));
            });

            tx.executeSql('SELECT ad FROM LAB5DB', [],function(tx,res){
                for(let i =0;i< res.rows.length;i++){
                    manNumArr.push(res.rows.item(i)['manNum']);
                }
                console.log(res.rows.item(0));
            });
         
          
        });
        db.transaction(function(tx){


          
     createTable(idArr.length);

    let tbl = document.querySelector('#elem');
    let cell = document.querySelector('#elem');

     for(let i = 1; i < idArr.length + 1; i++){
            tbl.rows[i].cells[0].innerText = idArr[i - 1];
    }

    for(let i = 1; i < fioArr.length + 1; i++){
            tbl.rows[i].cells[1].innerText = fioArr[i - 1];
    }

     for(let i = 1; i < telArr.length + 1; i++){
            tbl.rows[i].cells[2].innerText = telArr[i - 1];
    }
     for(let i = 1; i < adArr.length + 1; i++){
            tbl.rows[i].cells[3].innerText = adArr[i - 1];
    }
    for(let i = 1; i < manNumArr.length + 1; i++){
        tbl.rows[i].cells[4].innerText = manNumArr[i - 1];
}


  


      

});

}

btn5.onclick = () =>{
    Info.prototype.manNum = "";
    console.log(info);
    createTxtField();
}
 function createTxtField(){
           var div =  document.getElementById("txtFld");
           var div2 =  document.getElementById("txtFld2");
           var p =  document.createElement('p');
        //    var v = document.createElement('v')
           p.innerText = "Адрес компании:  ";
        //    v.innerText = "Держинского 53  ";
           var input =  document.createElement('input');
            input.id = "input5";
           div.appendChild(p);
        //    div2.appendChild(v)
           div2.appendChild(input);
}

 function createTable(rows){
            console.log(rows);
          var table =  document.getElementById("elem");

           for(var i =0; i< rows; i++){
             var tr =  document.createElement('tr');
             for(var j =0; j< 5; j++){
                 var td =  document.createElement('td');
                 tr.appendChild(td);
                }
                table.appendChild(tr);
            }         
        }

         
    
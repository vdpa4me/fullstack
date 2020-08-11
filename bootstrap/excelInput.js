
var mysql = require('mysql')
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'hello1234',
	database : 'fsts'
})
connection.connect()

const xlsxFile = require('read-excel-file/node');
xlsxFile('./IBIR_input.xlsx').then((rows)=>{
	var cnt = 0
    for(var i=2; i<rows.length; i++)
    {
        //col 0
        //1
        //2
        //0tsn 1ttype 2cname 3csite	4ctid 5shipdate	6blade 7midplane 8dps 9fcm	
        //10feb 11dm 12blowerfan 13exhustfan 14ssdsize 15hddsize 16windowsver 17dhcpver	18nfsver 19dna3ver	
        //20appsver	21andromedaver 22hprver	23addsw1ver	24addsw2ver	25addsw3ver7
        var sqlStr = "INSERT INTO tester (tsn,ttype,cname,csite,ctid,shipdate,blade,midplane,dps,fcm,"+
                     "feb,dm,blowerfan,exhustfan,cdrive,ddrive,winver,sw0,sw1,sw2,"+
                     "sw3,sw4,sw5,remarks)"+
                     " VALUES ("+
                     "'"+check(rows[i][0])+"',"+
                     "'"+check(rows[i][1])+"',"+
                     "'"+check(rows[i][2])+"',"+
                     "'"+check(rows[i][3])+"',"+
                     "'"+check(rows[i][4])+"',"+
                     "'"+rows[i][5].toISOString().substring(0, 10)+"',"+
                     "'"+check(rows[i][6])+"',"+
                     "'"+check(rows[i][7])+"',"+
                     "'"+check(rows[i][8])+"',"+
                     "'"+check(rows[i][9])+"',"+
                     "'"+check(rows[i][10])+"',"+
                     "'"+check(rows[i][11])+"',"+
                     "'"+check(rows[i][12])+"',"+
                     "'"+check(rows[i][13])+"',"+
                     "'"+check(rows[i][14])+"',"+
                     "'"+check(rows[i][15])+"',"+
                     "'"+check(rows[i][16])+"',"+
                     "'"+check(rows[i][17])+"',"+
                     "'"+check(rows[i][18])+"',"+
                     "'"+check(rows[i][19])+"',"+
                     "'"+check(rows[i][20])+"',"+
                     "'"+check(rows[i][21])+"',"+
                     "'"+check(rows[i][22])+"',"+
                     "'"+check(rows[i][23])+"')";
        console.log(sqlStr);
      
        connection.query(sqlStr, function(err, results) {
            if (err) throw err;
            cnt++;
            console.log("Inserted : "+cnt);
        })
	}
});


//connection.end();

function check(value) {
    var rtn
    if(value == null)
        rtn = ""
    else
        rtn = value

    return rtn
}

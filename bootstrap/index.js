const express = require('express')
const mysql   = require('mysql')
const dbconfig = require('./config/database.js')
const connection = mysql.createConnection(dbconfig)

const path = require('path')

const app = express()

const ejs = require('ejs')
const { Console } = require('console')
app.set('view engine','ejs')
app.use(express.static('public'))

app.set('port', process.env.PORT || 3000)

app.get('/db',async(req,res)=>{
	connection.query('SELECT * FROM tester', (error,rows)=>{
		if(error) throw error;
		res.render('index', {
			rows
		})
	})
})

app.get('/ddb',async(req,res)=>{
	var queryStr = "SELECT * FROM tester WHERE tsn='"+req.query.tsn+"'"
	connection.query(queryStr, (error,rows)=>{
		if(error) throw error;
		res.render('test', {
			rows
		})
	})
})

app.listen(app.get('port'),()=>{
	console.log('Express server listening on port' + app.get('port') )
})
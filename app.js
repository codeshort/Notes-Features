const chalk = require('chalk')
const yargs= require('yargs')
const notes = require('./notes.js')
yargs.version('1.12.2')
yargs.command({
  command: 'add',
  describe:'It adds a new note',
  builder:{
    title:{
      describe:'this is my title',
      demandOption: true,
      type: 'string'
    },
    body:{
      describe:'this is my body',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    notes.addNote(argv.title,argv.body)
  }
})
yargs.command({
  command: 'remove',
  describe:'It removes a new note',
  builder:
  {
  title:{
    describe:'this is title',
    demandOption:true,
    type: 'string'
  }
},
  handler(argv){
    notes.removeNote(argv.title)
  }
})
yargs.command({
  command: 'list',
  describe:'It loists note',

  handler(){
    notes.listNotes()
  }
})

yargs.command({
  command: 'read',
  describe:'It reads a new note',
  builder:
  {
  title:{
    describe:'this is title',
    demandOption:true,
    type: 'string'
  }
},
  handler(argv){
    notes.readNote(argv.title)
  }
})

yargs.parse()
//console.log(yargs.argv)

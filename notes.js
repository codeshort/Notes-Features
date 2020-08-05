const fs = require('fs')
const chalk = require('chalk')
const getNotes =() =>{
  return 'YOUR NOTeS.......'
}
const addNote =(title,body) =>
{
   const notes = loadNotes()
   const duplicateNotes = notes.filter((note) =>  note.title===title)
   const duplicateNote = notes.find((note) =>  note.title===title)

   if(!duplicateNote)
   {
     notes.push({
       title: title,
       body: body
     })
     saveNotes(notes)
      console.log(chalk.green.inverse("new log notes"))
   }
 else
 {
   console.log(chalk.red.inverse("Note title taken"))
 }

}
const saveNotes = (notes) =>
{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes =() =>
{
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }
  catch(e)
  {
    return []
  }
}
const removeNote =(title) =>
{
const notes = loadNotes()
const noteToKeep = notes.filter(function(note)
{
  return note.title!==title
})
const noteFound = notes.filter(function(note)
{
  return note.title===title
})

saveNotes(noteToKeep)
if(noteFound.length===0)
{
  console.log(chalk.red.inverse(" No Note Found!!"))
}
else {
console.log(chalk.green.inverse("Note REmoved Successfully!! "))
}

}
const listNotes =() =>{
  const notes = loadNotes()
  console.log(chalk.magenta("your notes"))
  notes.filter((note)=>{
    console.log(note.title)
  })
}
const readNote = (title) =>{
  const notes = loadNotes()
   const getNote = notes.find((note) =>  note.title===title)
   if(!getNote)
   {
     console.log(chalk.red.inverse("The note u are looking for doesnot exist "))
   }
   else {
      console.log(chalk.green.inverse(" WE got The note u are looking for!!"))
      console .log(chalk.inverse(getNote.title)+"------>"+chalk.magenta(getNote.body))
   }


}
module.exports = {
  getNotes:getNotes,
  addNote:addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}

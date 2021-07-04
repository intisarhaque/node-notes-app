const notes = require('./notes.js')
const yargs  = require('yargs')
const chalk = require('chalk');
const { demandOption } = require('yargs');

yargs.version('1.1.0')

//create add commands
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) =>{
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: ()=>{
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv)=>{
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)
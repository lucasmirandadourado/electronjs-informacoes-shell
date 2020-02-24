const { remote } = require('electron')
const shell = require("shelljs");
const fs = require('fs');

function ip() {
    let nodePath = (shell.which('node').toString());
    shell.config.execPath = nodePath;
    let result = shell.exec('ipconfig', { silent: true, encoding: 'utf8' }).stdout;
    document.getElementById('result').value = `id: ${result}`;
}

function vagrant() {
    let nodePath = (shell.which('node').toString());
    shell.config.execPath = nodePath;
    let result = shell.exec('vagrant -v', { silent: true, encoding: 'utf8' }).stdout;
    document.getElementById('result').value = `Versão: ${result}`;
}

document.getElementById('exec_ip').addEventListener('click', function (e) {
    ip();
});

document.getElementById('exec_vagrant').addEventListener('click', function (e) {
    vagrant();
});

document.getElementById('configurar').addEventListener('click', function(e){
    e.preventDefault();
    // TODO: Falta fazer a parte de edição
    console.log('EDITAR O ARQUIVO')
})
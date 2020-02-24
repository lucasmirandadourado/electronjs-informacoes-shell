const { remote } = require('electron')
const shell = require("shelljs");

function ip() {
    let nodePath = (shell.which('node').toString());
    shell.config.execPath = nodePath;
    shell.echo("Oi");
    var version = shell.exec('ipconfig', {silent:true}).stdout;
    console.log(`ip: ${version}`);

}

document.getElementById('executar').addEventListener('click', function (e) {
    console.log('OIiii');
    ip();
});



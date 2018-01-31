const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('vsda-sample.run', function () {
        const vsda = require(`${vscode.env.appRoot}/node_modules.asar/vsda`);
        let vsdaSigner = undefined;
        try {
            vsdaSigner = new vsda.signer();
        } catch(e) {
        }
        vscode.window.showInformationMessage(`Found vsda: ${typeof vsda}`);
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;
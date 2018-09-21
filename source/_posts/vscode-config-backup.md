---
title: vscode配置备份
date: 2018-09-21 17:11:21
tags:
- vscode
- config
- backup
categories:
- vscode
---
> vscode配置备份

<!--more-->

```json
{
    "files.autoSave": "afterDelay",
    "workbench.colorTheme": "One Dark Pro",
    "workbench.iconTheme": "vscode-icons",
    "workbench.activityBar.visible": false,
    "workbench.statusBar.visible": false,
    "explorer.openEditors.visible": 0,
    "editor.fontFamily": "Fira Code,Operator Mono",
    "editor.fontLigatures": true,
    "editor.fontSize": 16,
    "editor.cursorStyle": "line",
    "editor.lineHeight": 24,
    "editor.lineNumbers": "on",
    "editor.minimap.enabled": false,
    "editor.rulers": [120],
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
    "editor.tabCompletion": true,
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "gitlens.advanced.messages": {
        "suppressShowKeyBindingsNotice": true
    },
    // sync start
    "sync.gist": "f6399f42bacbdf8a07bdfb82b6f37494",
    "sync.host": "",
    "sync.pathPrefix": "",
    "sync.quietSync": false,
    "sync.askGistName": false,
    "sync.removeExtensions": true,
    "sync.syncExtensions": true,
    "sync.autoDownload": false,
    "sync.autoUpload": false,
    "sync.lastUpload": "2018-08-15T09:07:37.428Z",
    "sync.lastDownload": "",
    "sync.forceDownload": false,
    //sync end
    //php-cs-fixer start
    "php-cs-fixer.executablePath": "/usr/local/bin/php-cs-fixer",
    "php-cs-fixer.onsave": false,
    "php-cs-fixer.rules": "@PSR2",
    "php-cs-fixer.config": ".php_cs;.php_cs.dist",
    "php-cs-fixer.allowRisky": false,
    "php-cs-fixer.pathMode": "override",
    "php-cs-fixer.exclude": [],
    "php-cs-fixer.autoFixByBracket": true,
    "php-cs-fixer.autoFixBySemicolon": false,
    "php-cs-fixer.formatHtml": false,
    "php-cs-fixer.documentFormattingProvider": true,
    //php-cs-fixer end
    "guides.enabled": false,
    "telemetry.enableTelemetry": false,
    "telemetry.enableCrashReporter": false,
    "extensions.closeExtensionDetailsOnViewChange": true,
    "extensions.showRecommendationsOnlyOnDemand": true,
    "debug.allowBreakpointsEverywhere": true,
    "window.openFilesInNewWindow": "on",
    "importCost.typescriptExtensions": [
        "\\.vue$"
    ],
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue",
        "vue-html",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "eslint.options": {
        "plugins": ["vue"]
      },
    "eslint.run": "onSave",
    "breadcrumbs.enabled": false,
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/.idea": true
    },
    "terminal.external.osxExec": "iTerm.app",
    "php-docblocker.author": {
        "name": "nilsir",
        "email": "nilsir@qq.com"
    },
    "blade.format.enable": true,
    "php.executablePath": "/usr/local/bin/php",
    "github.hosts": [
        {
            "host": "https://github.com",
            "username": "oauth",
            "token": "system"
        }
    ],
}

```

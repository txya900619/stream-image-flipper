stream-image-flipper
=================

A stream image flipper cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @txya900619/stream-image-flipper
$ stream-image-flipper COMMAND
running command...
$ stream-image-flipper (--version)
@txya900619/stream-image-flipper/0.0.0 darwin-x64 node-v16.13.0
$ stream-image-flipper --help [COMMAND]
USAGE
  $ stream-image-flipper COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`stream-image-flipper download URL`](#stream-image-flipper-download-url)
* [`stream-image-flipper help [COMMAND]`](#stream-image-flipper-help-command)
* [`stream-image-flipper plugins`](#stream-image-flipper-plugins)
* [`stream-image-flipper plugins:install PLUGIN...`](#stream-image-flipper-pluginsinstall-plugin)
* [`stream-image-flipper plugins:inspect PLUGIN...`](#stream-image-flipper-pluginsinspect-plugin)
* [`stream-image-flipper plugins:install PLUGIN...`](#stream-image-flipper-pluginsinstall-plugin-1)
* [`stream-image-flipper plugins:link PLUGIN`](#stream-image-flipper-pluginslink-plugin)
* [`stream-image-flipper plugins:uninstall PLUGIN...`](#stream-image-flipper-pluginsuninstall-plugin)
* [`stream-image-flipper plugins:uninstall PLUGIN...`](#stream-image-flipper-pluginsuninstall-plugin-1)
* [`stream-image-flipper plugins:uninstall PLUGIN...`](#stream-image-flipper-pluginsuninstall-plugin-2)
* [`stream-image-flipper plugins update`](#stream-image-flipper-plugins-update)

## `stream-image-flipper download URL`

Download and flip image from url

```
USAGE
  $ stream-image-flipper download [URL] [-o <value>]

ARGUMENTS
  URL  url image come from

FLAGS
  -o, --output=<value>  output file path

DESCRIPTION
  Download and flip image from url

EXAMPLES
  $ stream-image-flipper https://i.imgur.com/NsLIePL.jpeg -o output.jpg
```

_See code: [dist/commands/download/index.ts](https://github.com/txya900619/stream-image-flipper/blob/v0.0.0/dist/commands/download/index.ts)_

## `stream-image-flipper help [COMMAND]`

Display help for stream-image-flipper.

```
USAGE
  $ stream-image-flipper help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for stream-image-flipper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `stream-image-flipper plugins`

List installed plugins.

```
USAGE
  $ stream-image-flipper plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ stream-image-flipper plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `stream-image-flipper plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ stream-image-flipper plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ stream-image-flipper plugins add

EXAMPLES
  $ stream-image-flipper plugins:install myplugin 

  $ stream-image-flipper plugins:install https://github.com/someuser/someplugin

  $ stream-image-flipper plugins:install someuser/someplugin
```

## `stream-image-flipper plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ stream-image-flipper plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ stream-image-flipper plugins:inspect myplugin
```

## `stream-image-flipper plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ stream-image-flipper plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ stream-image-flipper plugins add

EXAMPLES
  $ stream-image-flipper plugins:install myplugin 

  $ stream-image-flipper plugins:install https://github.com/someuser/someplugin

  $ stream-image-flipper plugins:install someuser/someplugin
```

## `stream-image-flipper plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ stream-image-flipper plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ stream-image-flipper plugins:link myplugin
```

## `stream-image-flipper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stream-image-flipper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stream-image-flipper plugins unlink
  $ stream-image-flipper plugins remove
```

## `stream-image-flipper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stream-image-flipper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stream-image-flipper plugins unlink
  $ stream-image-flipper plugins remove
```

## `stream-image-flipper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stream-image-flipper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stream-image-flipper plugins unlink
  $ stream-image-flipper plugins remove
```

## `stream-image-flipper plugins update`

Update installed plugins.

```
USAGE
  $ stream-image-flipper plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

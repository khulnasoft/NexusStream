# Installing the CLI

<VideoPlayer src="https://www.youtube.com/embed/CelgPjcB2nU" title="Installing the CLI"/>

[[toc]]

## macOS

### Homebrew

```bash
brew install khulnasoft/pd-cli/nexusstream
```

### From source

Run the following command:

```bash
curl https://cli.khulnasoft.com/install | sh
```

This will automatically download and install the `pd` CLI to your Mac. You can also [download the macOS build](https://cli.khulnasoft.com/darwin/amd64/latest/pd.zip), unzip that archive, and place the `pd` binary somewhere in [your `PATH`](https://opensource.com/article/17/6/set-path-linux). 

If this returns a permissions error, you may need to run:

```bash
curl https://cli.khulnasoft.com/install | sudo sh
```

::: tip

If you encounter the error `bad CPU type in executable: pd`, you will need to install Rosetta 2 on your Mac by running the following command:

```bash
softwareupdate --install-rosetta
```

:::

## Linux

Download the [CLI build](#cli-builds) for your architecture below. Unzip that archive, and place the `pd` binary somewhere in [your `PATH`](https://opensource.com/article/17/6/set-path-linux).

## Windows (native)

[Download the CLI build for Windows](https://cli.khulnasoft.com/windows/amd64/latest/pd.zip). Unzip that archive, save `pd.exe` in Program Files, and [add its file path to `Path` in your system environment variables](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/). Use `pd.exe` in a terminal that supports ANSI colors, like the [Windows Terminal](https://github.com/microsoft/terminal).

## Windows (WSL)

Download the appropriate [Linux CLI build](#cli-builds) for your architecture. Unzip that archive, and place the `pd` binary somewhere in [your `PATH`](https://opensource.com/article/17/6/set-path-linux).

## CLI Builds

Nexusstream publishes the following builds of the CLI. If you need to use the CLI on another OS or architecture, [please reach out](https://docs.khulnasoft.com/support/).

| Operating System | Architecture | link                                                              |
| ---------------- | ------------ | ----------------------------------------------------------------- |
| Linux            | amd64        | [download](https://cli.khulnasoft.com/linux/amd64/latest/pd.zip)   |
| Linux            | 386          | [download](https://cli.khulnasoft.com/linux/386/latest/pd.zip)     |
| Linux            | arm          | [download](https://cli.khulnasoft.com/linux/arm/latest/pd.zip)     |
| Linux            | arm64        | [download](https://cli.khulnasoft.com/linux/arm64/latest/pd.zip)   |
| macOS            | amd64        | [download](https://cli.khulnasoft.com/darwin/amd64/latest/pd.zip)  |
| Windows          | amd64        | [download](https://cli.khulnasoft.com/windows/amd64/latest/pd.zip) |

Run `pd` to see a list of all commands, or `pd help <command>` to display help docs for a specific command.

See the [CLI reference](/cli/reference/) for detailed usage and examples for each command.

<Footer />

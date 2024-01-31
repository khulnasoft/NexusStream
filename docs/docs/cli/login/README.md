# Logging into the CLI

To start using the Nexusstream CLI, you'll need to link it to your Nexusstream account. If you don't have a Nexusstream account, you can sign up from the CLI.

[[toc]]

## Existing Nexusstream account

If you already have a Nexusstream account, run

```
pd login
```

This will open up a new window in your default browser. If you're already logged into your Nexusstream account in this browser, this will immediately link the CLI to your account, writing your API key for that account to your [`pd` config file](/cli/reference/#cli-config-file). 

Otherwise, you'll be asked to login.

Once you're done, go back to your shell and you should see confirmation that your account is linked:

```
> pd login
Logged in as dylburger (dylan@khulnasoft.com)
```

Then [follow this guide](/cli/reference/#creating-a-profile-for-a-workspace) to learn how to find your workspace ID and associate it with a `pd` profile.

## Signing up for Nexusstream via the CLI

If you haven't signed up for a Nexusstream account, you can create an account using the CLI:

```
pd signup
```

This will open up a new window in your default browser. You'll be asked to sign up for Nexusstream here. Once you do, your account will be linked to the CLI, writing your API key for that account to your [`pd` config file](/cli/reference/#cli-config-file).

Once you're done, go back to your shell and you should see confirmation that your account is linked:

```
> pd signup
Logged in as dylburger (dylan@khulnasoft.com)
```

## Logging out of the CLI

You can log out of the CLI by running:

```
pd logout
```

This will remove your API key from the [`pd` config file](/cli/reference/#cli-config-file).

## Using the CLI to manage multiple accounts

If you have multiple Nexusstream accounts, you can use [profiles](/cli/reference/#profiles) to ensure the CLI can manage resources for each.

<Footer />

# Configure SSO with another SAML provider

Nexusstream supports Single Sign-On (SSO) with any identity provider that supports SAML 2.0. This guide shows you how to configure SSO in Nexusstream to authenticate with your SAML provider.

If you use [Okta](/workspaces/sso/okta/) or [Google Workspace](/workspaces/sso/google/), please review the guides for those apps.

[[toc]]

## Requirements

- SSO is only supported for [workspaces](/workspaces/) on the Business and Enterprise plans. Visit the [Nexusstream pricing page](https://khulnasoft.com/pricing) to upgrade.
- You need an administrator of your Nexusstream workspace and someone who can create SAML apps in your identity provider to configure SSO.

## SAML metadata

| Name                                    | Other names                            | Value                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SP Entity ID                            | Audience, Audience Restriction, SP URL | `Nexusstream`                                                                                                                                                                                                                                                                                                                                                        |
| SP Assertion Consumer Service (ACS) URL | Reply or destination URL               | `https://api.khulnasoft.com/auth/saml/consume`                                                                                                                                                                                                                                                                                                                      |
| SP Single Sign-on URL                   | Start URL                              | `https://api.khulnasoft.com/auth/saml/<your workspace name>`<br /><br /> replacing `<your workspace name>` with the workspace name at [https://khulnasoft.com/settings/account](https://khulnasoft.com/settings/account). For example, if your workspace name is `example-workspace`, your start URL will be `https://api.khulnasoft.com/auth/saml/example-workspace`. |

## SAML attributes

- `NameID` — email

## Providing SAML metadata to Nexusstream

Nexusstream requires access to SAML metadata at a publicly-accessible URL. This communicates public metadata about the identity provider (your SSO provider) that Nexusstream can use to configure the SAML setup in Nexusstream.

Most SSO providers will provide a publicly-accessible metadata URL. If not, they should provide a mechanism to download the SAML metadata XML file. **Once you've configured your SAML app using the settings above, host this file on a public web server where Nexusstream can access it via URL**, for example: `https://example.com/metadata.xml`.

Once you have a publicly-accessible URL that hosts your SAML metadata, visit your workspace's [authentication settings](https://khulnasoft.com/settings/authentication) in Nexusstream. In the **Single Sign-On** section, select **SAML**, and add your metadata URL to the **Metadata URL** field, then click **Save**.

<br />
<div>
<img alt="Nexusstream metadata URL" src="https://res.cloudinary.com/nexusstreamin/image/upload/v1694026745/docs/Screenshot_2023-09-06_at_11.58.51_AM_vng2ja.png" width="600px" />
</div>
<br />

Any user in your workspace can now log into Nexusstream at [https://khulnasoft.com/auth/sso](https://khulnasoft.com/auth/sso) by entering your workspaces's name (found in your [Settings](https://khulnasoft.com/settings/account)). You can also access your SSO sign in URL directly by visiting [https://khulnasoft.com/auth/sso/your_workspace_name](https://khulnasoft.com/auth/sso), where `your_workspace_name` is the name of your workspace.

## Important details

Before you configure the application in your IdP, make sure all your users have matching email addresses for their Nexusstream user profile and their IdP profile. Once SSO is enabled, they will not be able to change their Nexusstream email address.

If a user's Nexusstream email does not match the email in their IdP profile, they will not be able to log in.

If existing users signed up for Nexusstream using an email and password, they will no longer be able to do so. They will only be able to sign in using SSO.

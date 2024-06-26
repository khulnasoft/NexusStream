# Single Sign-On Overview

Nexusstream supports Single Sign-On (SSO) with [Okta](./okta), [Google](./google), or [any provider](./saml) that supports SAML or Google OAuth, which allows IT and workspace administrators easier controls to manage access and security.

Using SSO with your Identity Provider (IdP) centralizes user login management and provides a single point of control for IT teams and employees.

[[toc]]

## Requirements for SSO
- Your workspace must be on a [Business or Enterprise plan](https://khulnasoft.com/pricing)
- If using SAML, your Identity Provider must support SAML 2.0
- Only workspace admins and owners can configure SSO
- Your workspace admin or owner must [verify ownership](#verifying-your-email-domain) of the SSO email domain

:::warning The below content is for workspace admins and owners
Only workspace admins and owners have access to add verified domains, set up SSO, and configure workspace login methods.
:::

## Verifying your Email Domain
In order to configure SAML SSO for your workspace, you first need to verify ownership of the email domain. If configuring Google OAuth (not SAML), you can skip this section.

1. Navigate to the [Verified Domains](https://khulnasoft.com/settings/domains) section of your workspace settings
2. Enter the domain you'd like to use for SSO (for example, `example.com`), then click **Add Domain**
3. You'll see a modal with instructions for adding a `TXT` record in the DNS configuration for your domain
4. DNS changes may take between a few minutes and up to 72 hours to propagate. Once they're live, click the **Verify** button for the domain you've entered.
5. Once Nexusstream verifies the `TXT` record, we'll show a green checkmark on the domain

![Verified Domains](https://res.cloudinary.com/nexusstreamin/image/upload/v1699938431/verified-domains_qcjpnb.png)

:::tip Make sure to verify all your domains
There's no limit on the number of domains you can verify for SSO, so if you use `example.com`, `example.net`, and `foo.example.com`, make sure to verify each one.
:::

## Setting up SSO
Navigate to the [Authentication section](https://khulnasoft.com/settings/domains) in your workspace settings to get started.

### SAML SSO

1. First, make sure you've verified the domain(s) you intend to use for SSO ([see above](#verifying-your-email-domain))
2. Click the **Enable SSO** toggle and select **SAML**
3. If setting up SAML SSO, you'll need to enter a metadata URL, which contains all the necessary configuration for Nexusstream. Refer to the provider-specific docs for the detailed walk-through ([Okta](./okta), [Google Workspace](./google), [any other SAML provider](./saml)).
4. Click **Save**

### Google OAuth

1. Click the **Enable SSO** toggle and select **Google**
2. Enter the domain that you use with Google OAuth. For example, `vandalayindustries.com`
3. Click **Save**

## Restricting Login Methods
Once you've configured SSO for your workspace, you can restrict the allowed login methods for [non-workspace owners](#workspace-owners-can-always-sign-in-using-any-login-method).

![Restrict Login Methods](https://res.cloudinary.com/nexusstreamin/image/upload/v1699914460/Google_Chrome_-_Settings_-_Authentication_-_Nexusstream_2023-11-13_at_2.27.08_PM_x1ahod.png)


| Login Method | Description |
| --  | -- |
| **Any login method** | Everyone in the workspace can sign in either using SSO or via the login method they used to create their account (email and password, Google OAuth, GitHub) |
| **SSO only** | Workspace members and admins must [sign in using SSO](https://khulnasoft.com/auth/sso) |
| **SSO with guests** | When siging in using a verified email domain, members and admins must [sign in using SSO](https://khulnasoft.com/auth/sso). If signing in with a different domain (`gmail.com` for example), members (guests) can sign in using any login method. |

### Workspace owners can always sign in using any login method
In order to ensure you don't get locked out of your Nexusstream workspace in the event of an outage with your identity provider, workspace owners can always sign in via the login method they used to create the account (email and password, Google, or GitHub).

### Login methods are enforced when signing in to khulnasoft.com
This means if you are a member of 2 workspaces and one of them allows **any login method** but the other **requires SSO**, you will be required to sign in to Nexusstream using SSO every time, independent of the workspace you are trying to access.

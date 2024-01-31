# Configure SSO with Okta

Nexusstream supports Single Sign-On (SSO) with Okta. This guide shows you how to configure SSO in Nexusstream to authenticate with your Okta org.

[[toc]]

## Requirements

- SSO is only supported for [workspaces](/workspaces/) on the Business and Enterprise plans. Visit the [Nexusstream pricing page](https://khulnasoft.com/pricing) to upgrade.
- You must be an administrator of your Nexusstream workspace
- You must have an Okta account

## Configuration

1. In your Okta **Admin** dashboard, select the **Applications** section and click **Applications** below that:

<div>
<img alt="Okta - application list" src="./images/step-1.png" width="250px">
</div>

2. Click **Browse App Catalog**:

<div>
<img alt="Okta - browse app catalog" src="./images/step-2.png" width="400px">
</div>

3. Search for "Nexusstream" and select the Nexusstream app:

<div>
<img alt="Okta - Nexusstream app" src="./images/step-3.png">
</div>

4. Click **Add**:

<div>
<img alt="Okta - Add Nexusstream app" src="./images/step-4.png">
</div>

5. Fill out the **General Settings** that Okta presents, and click **Done**:

<div>
<img alt="Okta - General Settings" src="./images/step-5.png" width="600px">
</div>

6. Select the **Sign On** tab, and click **Edit** at the top right:

<div>
<img alt="Okta - Edit Sign In" src="./images/step-6.png" width="600px">
</div>

7. Scroll down to the **SAML 2.0** settings. In the **Default Relay State** section, enter `organization_username`:

<div>
<img alt="Okta - Default Relay State" src="./images/step-7.png" width="500px">
</div>

8. Set any other configuration options you need in that section or in the **Credentials Details** section, and click **Save**.

9. In the **Sign On** section, you'll see a section that includes the setup instructions for SAML:

<div>
<img alt="Okta - SAML" src="./images/step-9-1.png" width="500px">
</div>

Click the **Identity Provider metadata** link and copy the URL from your browser's address bar:

<div>
<img alt="Okta - Identity Metadata URL" src="./images/step-9-2.png">
</div>

10. Visit your [Nexusstream workspace authentication settings](https://khulnasoft.com/settings/authentication). Click the toggle to **Enable SSO**, then click **Edit SSO Configuration**, and add the metadata URL in the **SAML** section and click **Save**:

<div>
<img alt="Nexusstream SAML Metadata URL" src="https://res.cloudinary.com/nexusstreamin/image/upload/v1699919663/saml-metadata-url_cxciur.png">
</div>

11. Back in Okta, click on the **Assignments** tab of the Nexusstream application. Click on the **Assign** dropdown and select **Assign to People**:

<div>
<img alt="Okta - Assign Users" src="./images/step-11.png">
</div>

Assign the application to the relevant users in Okta, and Nexusstream will configure the associated accounts on our end.

Users configured in your Okta app can log into Nexusstream at [https://khulnasoft.com/auth/sso](https://khulnasoft.com/auth/sso) by entering your workspaces's name (found in your [Settings](https://khulnasoft.com/settings/account)). You can also access your SSO sign in URL directly by visiting [https://khulnasoft.com/auth/sso/your-workspace-name](https://khulnasoft.com/auth/sso), where `your-workspace-name` is the name of your workspace.

## Important details

Before you configure the application in Okta, make sure all your users have matching email addresses for their Nexusstream user profile and their Okta profile. Once SSO is enabled, they will not be able to change their Nexusstream email address.

If a user's Nexusstream email does not match the email in their IDP profile, they will not be able to log in.

If existing users signed up for Nexusstream using an email and password, they will no longer be able to do so. They will only be able to sign in using SSO.

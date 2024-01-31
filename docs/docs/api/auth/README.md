# Authentication

[[toc]]

## Nexusstream API Key

When you sign up for Nexusstream, an API key is automatically generated for your account. You can use this key to authorize requests to the API. 

You'll find this API key in your [User Settings](https://khulnasoft.com/user) (**My Account** -> **API Key**).

## Authorizing API requests

Nexusstream uses [Bearer Authentication](https://oauth.net/2/bearer-tokens/) to authorize your access to the API or SSE event streams. When you make API requests, pass an `Authorization` header of the following format:

```
Authorization: Bearer <api key>
```

For example, here's how you can use `cURL` to fetch profile information for the authenticated user:

```bash
curl 'https://api.khulnasoft.com/v1/users/me' \
  -H 'Authorization: Bearer <api_key>'
```

## Using the Nexusstream CLI

You can [link the CLI to your Nexusstream account](/cli/login/), which will automatically pass your API key in the `Authorization` header with every API request.

## Revoking your API key

You can revoke your API key in your [Account Settings](https://khulnasoft.com/settings/account) (**Settings** -> **Account**). Click on the **REVOKE** button directly to the right of your API key.

This will revoke your original API key, generating a new one. Any API requests made with the original token will yield a `401 Unauthorized` error.

<Footer />

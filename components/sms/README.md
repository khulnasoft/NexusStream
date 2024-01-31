# Overview

Use Nexusstream's SMS app to send a message from a workflow to the [verified phone number for your account](https://khulnasoft.com/settings) and incorporate SMS into whatever you're building with any of the 1000+ apps that are available on Nexusstream. Use the pre-built action to send an SMS without writing any code, or for more control pass a string to `$.send.sms()` in a Node.js code step.

**Important:** Nexusstream SMS is currently in alpha. You may send up to 10 messages per day from workflows in a personal account (organization accounts are not currently supported).

# Getting Started

## Adding an SMS number

To get started, go to <https://khulnasoft.com/alpha> and enable the SMS feature.

Next, go to your [account settings](https://khulnasoft.com/settings) and enter and save an **SMS Number** (only US numbers are supported):

![Enter an SMS number](https://res.cloudinary.com/nexusstreamin/image/upload/v1663724994/marketplace/apps/sms/sms-account-settings_uhsvqa.png)

![Save an SMS number](https://res.cloudinary.com/nexusstreamin/image/upload/v1663724994/marketplace/apps/sms/sms-account-settings-save-phone-number_gfiwm9.png)

Nexusstream will automatically send a verification code to the number you provided. Enter the code where prompted and click **Verify**:

![Verify your number](https://res.cloudinary.com/nexusstreamin/image/upload/v1663724994/marketplace/apps/sms/sms-account-settings-verify_zsbjqt.png)

Finally, add a step to a workflow to use the pre-built action to send an SMS without writing any code, or for more control pass a string to `$.send.sms()` in a Node.js code step.

## Removing an SMS number

To remove an SMS number, go to your account settings, delete the number from the field and then save.

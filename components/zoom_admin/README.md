## Zoom Admin

This directory contains [event sources](https://docs.khulnasoft.com/event-sources/) that operate on data from the [Zoom API](https://marketplace.zoom.us/docs/api-reference/introduction). **These event sources work with the Zoom Admin app in Nexusstream**, specifically meant for Zoom admins operating on data across their account.

Event sources let you turn any API into an event stream. For example, the [`recording-completed.js`](recording-completed.js) event source polls the Zoom API for new meeting or webinar recordings tied to your user, and [emits](https://github.com/KhulnaSoft/nexusstream/blob/master/COMPONENT-API.md#emit) a new event for every new recording it finds. You can access these events in real-time using a [private SSE stream](https://docs.khulnasoft.com/api/sse/) tied to your source, or in batch using the [REST API](https://docs.khulnasoft.com/api/rest/). Or you can trigger [Nexusstream workflows](#nexusstream-workflows) on every new event.

[Read more in the Zoom + Nexusstream docs](https://docs.khulnasoft.com/apps/zoom/).

### Nexusstream workflows

You can trigger a [Nexusstream workflow](https://docs.khulnasoft.com/workflows/) — hosted Node.js code — on every new event from any Zoom source. You can find a few example workflows below.

To use a workflow, just **Copy** it and follow the instructions in the workflow's `README`. You can modify or extend these workflows in any way you'd like.

- [Save Zoom recordings to Amazon S3, then delete Zoom recording](https://khulnasoft.com/@dylburger/save-zoom-recordings-to-amazon-s3-p_PACKJG/readme)

For a deeper introduction to Nexusstream and event sources, see the [root `README` in this repo](/README.md), the [component API](/COMPONENT-API.md), or the [docs](https://docs.khulnasoft.com/apps/zoom/).

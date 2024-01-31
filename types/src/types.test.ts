/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import * as Nexusstream from "./index";

const stringData: Nexusstream.JSONValue = "foo";
const num: Nexusstream.JSONValue = 3;
const bool: Nexusstream.JSONValue = true;
const n: Nexusstream.JSONValue = null;

const arr: Nexusstream.JSONValue[] = [
  "hello",
  "world",
];
const arraysAreJSONToo: Nexusstream.JSONValue = arr;

const soAreObject: Nexusstream.JSONValue = {
  foo: "bar",
  blah: [
    "hello",
    "world",
  ],
  null: null,
  bool: false,
};

// @ts-expect-error $ExpectError - can't serialize functions to JSON
const func: Nexusstream.JSONValue = () => { console.log("foo"); };

const httpConfig: Nexusstream.SendConfigHTTP = {
  method: "POST",
  url: "https://example.com",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    foo: "bar",
  },
  auth: {
    username: "user",
    password: "pass",
  },
  data: {
    foo: "bar",
  },
};

const badHTTPConfig: Nexusstream.SendConfigHTTP = {
  // @ts-expect-error $ExpectError - bad method
  method: "FOO",
  url: "https://example.com",
  headers: {
    "Content-Type": "application/json",
  },
};

const s3Config: Nexusstream.SendConfigS3 = {
  bucket: "foo",
  prefix: "bar/",
  payload: {
    hello: "world",
  },
};

const emailConfig: Nexusstream.SendConfigEmail = {
  subject: "foo",
};

const emailOptionalConfig: Nexusstream.SendConfigEmail = {
  subject: "foo",
  text: "hello, world",
  html: "<h1>hello, world</h1>",
};

const emitConfig: Nexusstream.SendConfigEmit = {
  raw_event: "hello",
};

const emitObjectConfig: Nexusstream.SendConfigEmit = {
  raw_event: {
    foo: "bar",
  },
};

const sseConfig: Nexusstream.SendConfigSSE = {
  channel: "foo",
  payload: "any",
};

const dollarSend: Nexusstream.SendFunctionsWrapper = {
  http: (config: Nexusstream.SendConfigHTTP) => { console.log("foo"); },
  email: (config: Nexusstream.SendConfigEmail) => { console.log("foo"); },
  emit: (config: Nexusstream.SendConfigEmit) => { console.log("foo");},
  s3: (config: Nexusstream.SendConfigS3) => { console.log("foo"); },
  sse: (config: Nexusstream.SendConfigSSE) => { console.log("foo"); },
};

// @ts-expect-error $ExpectError - Missing s3
const badDollarSend: Nexusstream.SendFunctionsWrapper = {
  http: (config: Nexusstream.SendConfigHTTP) => { console.log("foo"); },
  email: (config: Nexusstream.SendConfigEmail) => { console.log("foo"); },
  emit: (config: Nexusstream.SendConfigEmit) => { console.log("foo"); },
  sse: (config: Nexusstream.SendConfigSSE) => { console.log("foo"); },
};

const httpResponse: Nexusstream.HTTPResponse = {
  status: 200,
  body: JSON.stringify({
    foo: "bar",
  }),
  immediate: true,
};

const methods: Nexusstream.Methods = {
  getClient(foo: string, bar: number) {
    return [
      foo,
      bar,
    ];
  },
  randomNum() {
    return Math.random();
  },
};

const googleSheets: Nexusstream.App<Nexusstream.Methods, Nexusstream.AppPropDefinitions> = {
  type: "app",
  app: "google_sheets",
  propDefinitions: {
    sheetId: {
      label: "Sheet ID",
      description: "hello, world",
      type: "integer",
      async options() {
        return [
          1,
          2,
        ];
      },
      optional: true,
      default: "foo",
      min: 0,
      max: 10,
    },
  },
};

const github: Nexusstream.App<Nexusstream.Methods, Nexusstream.AppPropDefinitions> = {
  type: "app",
  app: "github",
  propDefinitions: {
    googleSheets,
    sheetId: {
      propDefinition: [
        googleSheets,
        "sheetId",
      ],
    },
    url: {
      type: "string",
      options: [
        "foo",
        "bar",
      ],
      secret: true,
    },
  },
  methods,
};

const httpProp: Nexusstream.InterfaceProp = {
  type: "$.interface.http",
};

const timerProp: Nexusstream.InterfaceProp = {
  type: "$.interface.timer",
  default: {
    intervalSeconds: 60 * 15,
  },
};

const httpRequestProp: Nexusstream.HttpRequestProp = {
  type: "http_request",
  default: {
    auth: {
      type: "basic",
      username: "u",
      password: "p",
      token: "t",
    },
    body: {
      contentType: "application/json",
      fields: [
        {
          name: "n",
          value: "v",
        },
      ],
      mode: "fields",
      raw: "r",
    },
    headers: [
      {
        name: "n",
        value: "v",
      },
    ],
    method: "POST",
    params: [
      {
        name: "n",
        value: "v",
      },
    ],
    tab: "Params",
    url: "example.com",
  },
};

const hooks: Nexusstream.Hooks = {
  deploy: async () => { return; },
  activate: async () => { return; },
  deactivate: async () => { return; },
};

const source: Nexusstream.Source<Nexusstream.Methods, Nexusstream.SourcePropDefinitions> = {
  key: "source",
  name: "Test Source",
  description: "hello, world",
  version: "0.0.1",
  type: "source",
  methods,
  hooks,
  props: {
    googleSheets,
    github,
    url: {
      propDefinition: [
        github,
        "url",
      ],
    },
  },
  dedupe: "unique",
  async run() {
    this.$emit({
      foo: "bar ",
    }, {
      id: "foo",
      name: "channel",
      summary: "Summary",
      ts: 123,
    });
  },
};

// Bad sources

// @ts-expect-error $ExpectError - Missing key
const sourceMissingKey: Nexusstream.Source<Nexusstream.Methods, Nexusstream.SourcePropDefinitions> = {
  version: "0.0.1",
  type: "source",
  run() { console.log("foo"); },
};

// @ts-expect-error $ExpectError - Missing version
const sourceMissingVersion: Nexusstream.Source<Nexusstream.Methods, Nexusstream.SourcePropDefinitions> = {
  key: "foo",
  type: "source",
  run() { console.log("foo"); },
};

// @ts-expect-error $ExpectError - Missing type
const sourceMissingType: Nexusstream.Source<Nexusstream.Methods, Nexusstream.SourcePropDefinitions> = {
  key: "foo",
  version: "0.0.1",
  run() { console.log("foo"); },
};

const sourceWrongType: Nexusstream.Source<Nexusstream.Methods, Nexusstream.SourcePropDefinitions> = {
  key: "foo",
  version: "0.0.1",
  // @ts-expect-error $ExpectError - bad type
  type: "action",
  run() { console.log("foo"); },
};

const sourceWrongDedupeType: Nexusstream.Source<Nexusstream.Methods, Nexusstream.SourcePropDefinitions> = {
  key: "foo",
  version: "0.0.1",
  type: "source",
  // @ts-expect-error $ExpectError - bad dedupe type
  dedupe: "badValue",
  run() { console.log("foo"); },
};

const sourceReturningDataShouldWarn: Nexusstream.Source<Nexusstream.Methods, Nexusstream.SourcePropDefinitions> = {
  key: "foo",
  version: "0.0.1",
  type: "source",
  // @ts-expect-error $ExpectError - can't return data from source run method
  run(event) { return "data"; },
};

const action: Nexusstream.Action<Nexusstream.Methods, Nexusstream.ActionPropDefinitions> = {
  key: "action",
  name: "Test Action",
  description: "hello, world",
  version: "0.0.1",
  type: "action",
  methods,
  props: {
    googleSheets,
    github,
    url: {
      propDefinition: [
        github,
        "url",
      ],
    },
  },
  async run(event) {
    return "foo";
  },
};

// Bad actions

// @ts-expect-error $ExpectError - Missing key
const actionMissingKey: Nexusstream.Action<Nexusstream.Methods, Nexusstream.ActionPropDefinitions> = {
  version: "0.0.1",
  type: "action",
  run() { console.log("foo"); },
};

// @ts-expect-error $ExpectError - Missing version
const actionMissingVersion: Nexusstream.Action<Nexusstream.Methods, Nexusstream.ActionPropDefinitions> = {
  key: "foo",
  type: "action",
  run() { console.log("foo"); },
};

// @ts-expect-error $ExpectError - Missing type
const actionMissingType: Nexusstream.Action<Nexusstream.Methods, Nexusstream.ActionPropDefinitions> = {
  key: "foo",
  version: "0.0.1",
  run() { console.log("foo"); },
};

const actionWrongType: Nexusstream.Action<Nexusstream.Methods, Nexusstream.ActionPropDefinitions> = {
  key: "foo",
  version: "0.0.1",
  // @ts-expect-error $ExpectError - bad type
  type: "source",
  run() { console.log("foo"); },
};

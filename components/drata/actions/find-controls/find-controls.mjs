import drata from "../../drata.app.mjs";
import _ from "lodash";

const docsLink = "https://developers.drata.com/docs/openapi/reference/operation/GRCPublicController_getControls/";

export default {
  key: "drata-find-controls",
  name: "Find Controls",
  description: `Find Controls. [See the documentation](${docsLink}).`,
  version: "0.0.3",
  type: "action",
  props: {
    drata,
    q: {
      type: "string",
      label: "Query",
      description: "Query to search for",
      optional: true,
    },
    frameworkTags: {
      type: "string[]",
      label: "Framework Tags",
      description: "Filter data by controls associated with these framework tags",
      optional: true,
      options: [
        "NONE",
        "SOC_2",
        "ISO27001",
        "CCPA",
        "GDPR",
        "HIPAA",
        "PCI",
        "SCF",
        "NIST80053",
        "NISTCSF",
        "CMMC",
        "NIST800171",
        "MSSSPA",
        "FFIEC",
        "ISO27701",
        "COBIT",
        "SOX_ITGC",
        "ISO270012022",
        "CCM",
        "CUSTOM",
      ],
    },
    frameworkSlug: {
      type: "string",
      label: "Framework Slug",
      description: "Filter data by controls associated with these custom framework Slug",
      optional: true,
    },
    trustServiceCriteria: {
      type: "string[]",
      label: "Trust Service Criterion",
      description: "Filter controls on their Trust Service Criteria",
      optional: true,
      options: [
        "AVAILABILITY",
        "CONFIDENTIALITY",
        "SECURITY",
        "PRIVACY",
        "PROCESS_INTEGRITY",
        "GENERAL_RULES",
        "ADMINISTRATIVE_SAFEGUARDS",
        "PHYSICAL_SAFEGUARDS",
        "TECHNICAL_SAFEGUARDS",
        "REQUIREMENTS_ORGANIZATION",
        "REQUIREMENTS_POLICIES_PROCEDURES",
        "BASIC",
        "DERIVED",
        "NIST80053_PRIVACY",
      ],
    },
    ismsCategory: {
      type: "string[]",
      label: "ISMS Category",
      description: "Filter controls on their ISMS Category",
      optional: true,
      options: [
        "CONTEXT_OF_THE_ORGANIZATION",
        "LEADERSHIP",
        "PLANNING",
        "SUPPORT",
        "OPERATION",
        "PERFORMANCE_EVALUATION",
        "IMPROVEMENT",
      ],
    },
    isms2022Category: {
      type: "string[]",
      label: "ISMS Category",
      description: "Filter controls on their ISMS Category",
      optional: true,
      options: [
        "ISO_27001_2022_4_CONTEXT_OF_THE_ORGANIZATION",
        "ISO_27001_2022_5_LEADERSHIP",
        "ISO_27001_2022_6_PLANNING",
        "ISO_27001_2022_7_SUPPORT",
        "ISO_27001_2022_8_OPERATION",
        "ISO_27001_2022_9_PERFORMANCE_EVALUATION",
        "ISO_27001_2022_10_IMPROVEMENT",
      ],
    },
    isAnnexA2022: {
      type: "boolean",
      label: "Is Annex A 2022",
      description: "Filter controls on if they are an Annex A requirement",
      optional: true,
    },
    rules: {
      type: "string[]",
      label: "Rules",
      description: "Filter controls on their Hipaa rules",
      optional: true,
      options: [
        "SECURITY",
        "BREACH_NOTIFICATION",
        "PRIVACY",
      ],
    },
    subRules: {
      type: "string[]",
      label: "Sub Rules",
      description: "Filter controls on their Hipaa sub rules",
      optional: true,
      options: [
        "GENERAL_RULES",
        "ADMINISTRATIVE_SAFEGUARDS",
        "PHYSICAL_SAFEGUARDS",
        "TECHNICAL_SAFEGUARDS",
        "REQUIREMENTS_ORGANIZATION",
        "REQUIREMENTS_POLICIES_PROCEDURES",
      ],
    },
    pciRequirements: {
      type: "string[]",
      label: "PCI Requirements",
      description: "Filter controls on their PCI requirements",
      optional: true,
      options: [
        "FIREWALL",
        "PASSWORDS",
        "DATA_AT_REST_PROTECTION",
        "DATA_IN_TRANSIT_ENCRYPTION",
        "MALWARE_PROTECTION",
        "SECURE_SYSTEM_MANAGEMENT",
        "ACCESS_RESTRICTION",
        "SYSTEM_ACCESS_CONTROL",
        "PHYSICAL_ACCESS_CONTROL",
        "NETWORK_ACCESS_MONITORING",
        "VULNERABILITY_TESTING",
        "INFORMATION_SECURITY_POLICY",
      ],
    },
    chapters: {
      type: "string[]",
      label: "Chapters",
      description: "Filter controls on their GDPR chapters",
      optional: true,
      options: [
        "PRINCIPLES",
        "RIGHTS_OF_THE_DATA_SUBJECT",
        "CONTROLLER_AND_PROCESSOR",
        "TRANSFERS_OF_PERSONNEL_DATA_TO_THIRD_COUNTRIES_AND_INTERNATIONAL_ORGANIZATIONS",
      ],
    },
    statutes: {
      type: "string[]",
      label: "Statutes",
      description: "Filter controls on their CCPA statutes",
      optional: true,
      options: [
        "INDIVIDUAL_RIGHTS",
        "SERVICE_PROVIDER",
        "CCPA_SECURITY",
      ],
    },
    regulations: {
      type: "string[]",
      label: "Regulations",
      description: "Filter controls on their CCPA regulations",
      optional: true,
      options: [
        "NOTICES_TO_CONSUMERS",
        "BUSINESS_PRACTICES_FOR_HANDLING_CONSUMER_REQUESTS",
        "VERIFICATION_OF_REQUESTS",
        "SPECIAL_RULES_REGARDING_CONSUMERS_UNDER_16_YEARS_OF_AGE",
        "NON_DISCRIMINATION",
      ],
    },
    functions: {
      type: "string[]",
      label: "Functions",
      description: "Filter controls on their NIST CSF Functions",
      optional: true,
      options: [
        "IDENTIFY",
        "PROTECT",
        "DETECT",
        "RESPOND",
        "RECOVER",
      ],
    },
    sections: {
      type: "string[]",
      label: "Sections",
      description: "Filter controls on their MSSSPA Section",
      optional: true,
      options: [
        "MANAGEMENT",
        "NOTICE",
        "CHOICE_AND_CONSENT",
        "COLLECTION",
        "RETENTION",
        "DATA_SUBJECTS",
        "DISCLOSURE_TO_THIRD_PARTIES",
        "QUALITY",
        "MONITORING_AND_ENFORCEMENT",
        "MS_SSPA_SECURITY",
      ],
    },
    controlFamilies: {
      type: "string[]",
      label: "Control Families",
      description: "Filter controls on their NIST SP 800-171 Control Family",
      optional: true,
      options: [
        "AUDIT_AND_ACCOUNTABILITY",
        "CONFIGURATION_MANAGEMENT",
        "IDENTIFICATION_AND_AUTHENTICATION",
        "INCIDENT_RESPONSE",
        "MEDIA_PROTECTION",
        "PERSONNEL_SECURITY",
        "PHYSICAL_PROTECTION",
        "SECURITY_ASSESSMENT",
        "SYSTEM_AND_COMMUNICATIONS_PROTECTION",
        "SYSTEM_AND_INFORMATION_INTEGRITY",
        "NIST_CSF_RISK_ASSESSMENT",
        "NIST_CSF_MAINTENANCE",
        "NIST_800_171_ACCESS_CONTROL",
        "NIST_800_171_AWARENESS_AND_TRAINING",
      ],
    },
    controlClasses: {
      type: "string[]",
      label: "Control Classes",
      description: "Filter controls on their NIST SP 800-171 Control Class",
      optional: true,
      options: [
        "TECHNICAL",
        "OPERATIONAL",
        "NIST_800_171_MANAGEMENT",
      ],
    },
    iso27701: {
      type: "string[]",
      label: "ISO 27701",
      description: "Filter controls on their ISO27701 requirements",
      optional: true,
      options: [
        "PIMS_SPECIFIC_REQUIREMENTS",
        "PIMS_SPECIFIC_GUIDANCE",
        "PII_CONTROLS_GUIDANCE",
        "PII_PROCESSORS_GUIDANCE",
      ],
    },
    cobit: {
      type: "string[]",
      label: "COBIT",
      description: "Filter controls on their COBIT requirements",
      optional: true,
      options: [
        "EVALUATE_DIRECT_AND_MONITOR",
        "ALIGN_PLAN_AND_ORGANIZE",
        "BUILD_ACQUIRE_AND_IMPLEMENT",
        "DELIVER_SERVICE_AND_SUPPORT",
        "MONITOR_EVALUATE_AND_ASSESS",
      ],
    },
    soxitgc: {
      type: "string[]",
      label: "SOX ITGC",
      description: "Filter controls on their SOX requirements",
      optional: true,
      options: [
        "PROGRAM_DEVELOPMENT",
        "CHANGE_MANAGEMENT",
        "SYSTEM_OPERATIONS",
        "ACCESS_MANAGEMENT",
      ],
    },
    controlBaselines: {
      type: "string[]",
      label: "Control Baselines",
      description: "Filter controls on their NIST SP 800-53 Control Baseline",
      optional: true,
      options: [
        "NIST_800_53_TECHNICAL",
        "NIST_800_53_OPERATIONAL",
        "NIST_800_53_MANAGEMENT",
      ],
    },
    cmmcClasses: {
      type: "string[]",
      label: "CMMC Classes",
      description: "Filter controls on their NIST SP 800-53 Control Baseline",
      optional: true,
      options: [
        "CMMC_TECHNICAL",
        "CMMC_OPERATIONAL",
        "CMMC_MANAGEMENT",
      ],
    },
    domains: {
      type: "string[]",
      label: "Domains",
      description: "Filter controls on their FFIEC Domains",
      optional: true,
      options: [
        "FFIEC_CYBER_RISK_MANAGEMENT_AND_OVERSIGHT",
        "FFIEC_THREAT_INTELLIGENCE_AND_COLLABORATION",
        "FFIEC_CYBERSECURITY_CONTROLS",
        "FFIEC_EXTERNAL_DEPENDENCY_MANAGEMENT",
        "FFIEC_CYBER_INCIDENT_MANAGEMENT_AND_RESILIENCE",
      ],
    },
    assessmentFactors: {
      type: "string[]",
      label: "Assessment Factors",
      description: "Filter controls on their FFIEC Assessment Factors",
      optional: true,
      options: [
        "FFIEC_GOVERNANCE",
        "FFIEC_RISK_MANAGEMENT",
        "FFIEC_RESOURCES",
        "FFIEC_TRAINING_AND_CULTURE",
        "FFIEC_THREAT_INTELLIGENCE",
        "FFIEC_MONITORING_AND_ANALYZING",
        "FFIEC_INFORMATION_SHARING",
        "FFIEC_PREVENTATIVE_CONTROLS",
        "FFIEC_DETECTIVE_CONTROLS",
        "FFIEC_CORRECTIVE_CONTROLS",
        "FFIEC_CONNECTIONS",
        "FFIEC_RELATIONSHIP_MANAGEMENT",
        "FFIEC_INCIDENT_RESILIENCE_PLANNING_AND_STRATEGY",
        "FFIEC_DETECTION_RESPONSE_AND_MITIGATION",
        "FFIEC_ESCALATION_AND_REPORTING",
      ],
    },
    userIds: {
      type: "integer[]",
      label: "User Ids",
      description: "User Ids of Control Owners",
      optional: true,
    },
    isOwned: {
      type: "boolean",
      label: "Is Owned",
      description: "Filter controls on if they have a control owner",
      optional: true,
    },
    isReady: {
      type: "boolean",
      label: "Is Ready",
      description: "Filter controls on if they are ready",
      optional: true,
    },
    isAnnexA: {
      type: "boolean",
      label: "Is Annex A",
      description: "Filter controls on if they are an Annex A requirement",
      optional: true,
    },
    isArchived: {
      type: "boolean",
      label: "Is Archived",
      description: "Filter to controls that are or are not archived",
      optional: true,
    },
    isMonitored: {
      type: "boolean",
      label: "Is Monitored",
      description: "Filter to controls that are or are not monitored",
      optional: true,
    },
    hasEvidence: {
      type: "boolean",
      label: "Has Evidence",
      description: "Filter to controls with or without evidence",
      optional: true,
    },
    hasPassingTest: {
      type: "boolean",
      label: "Has Passing Test",
      description: "Filter to controls with at least one passing test",
      optional: true,
    },
    excludeIds: {
      type: "integer[]",
      label: "Exclude IDs",
      description: "Exclude controls by array of id",
      optional: true,
    },
    excludeRequirementId: {
      type: "integer",
      label: "Exclude Requirement ID",
      description: "Exclude controls if they are mapped to this requirement id",
      optional: true,
    },
    requirementId: {
      type: "integer",
      label: "Requirement ID",
      description: "Only include controls if they are mapped to this requirement id",
      optional: true,
    },
    excludeTestId: {
      type: "integer",
      label: "Exclude Test ID",
      description: "Exclude controls if they are mapped to this test id",
      optional: true,
    },
    testId: {
      type: "integer",
      label: "Test ID",
      description: "Only include controls if they are mapped to this test id",
      optional: true,
    },
    hasTicket: {
      type: "string",
      label: "Has Ticket",
      description: "Only include controls if they associted to a task management ticket",
      optional: true,
      options: [
        "IN_PROGRESS",
        "ARCHIVED",
      ],
    },
    connectionId: {
      type: "integer",
      label: "Connection ID",
      description: "This will be filled in automatic when using a taskManagementStatus.",
      optional: true,
    },
  },
  async run({ $ }) {
    const params = _.pickBy(_.pick(this, [
      "q",
      "frameworkTags",
      "frameworkSlug",
      "trustServiceCriteria",
      "ismsCategory",
      "isms2022Category",
      "isAnnexA2022",
      "rules",
      "subRules",
      "pciRequirements",
      "chapters",
      "statutes",
      "regulations",
      "functions",
      "sections",
      "controlFamilies",
      "controlClasses",
      "iso27701",
      "cobit",
      "soxitgc",
      "controlBaselines",
      "cmmcClasses",
      "domains",
      "assessmentFactors",
      "userIds",
      "isOwned",
      "isReady",
      "isAnnexA",
      "isArchived",
      "isMonitored",
      "hasEvidence",
      "hasPassingTest",
      "excludeIds",
      "excludeRequirementId",
      "requirementId",
      "excludeTestId",
      "testId",
      "hasTicket",
      "connectionId",
    ]));

    this.drata.initializeJsonProps(this, [
      "frameworkTags",
      "trustServiceCriteria",
      "ismsCategory",
      "isms2022Category",
      "rules",
      "subRules",
      "pciRequirements",
      "chapters",
      "statutes",
      "regulations",
      "functions",
      "sections",
      "controlFamilies",
      "controlClasses",
      "iso27701",
      "cobit",
      "soxitgc",
      "controlBaselines",
      "cmmcClasses",
      "domains",
      "assessmentFactors",
      "userIds",
      "excludeIds",
    ]);

    const response = await this.drata.listControls({
      $,
      paginate: true,
      params,
    });

    const suffix = response.data.length === 1
      ? ""
      : "s";
    $.export("$summary", `Succesfully found ${response.data.length} control${suffix}`);

    return response;
  },
};

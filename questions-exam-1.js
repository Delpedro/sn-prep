window.EXAM_1_QUESTIONS = [
  {
    "id": 1,
    "domain": "Database Management & Platform Security",
    "topic": "Related Lists / CI Groups",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which related list can be used to extend and track different groups assigned to a Configuration Item?",
    "options": [
      "Teams",
      "Dynamic CI Group",
      "Resource Group",
      "CMDB Alert Groups"
    ],
    "correct": [
      0
    ],
    "trap": "The word Teams sounds generic, but in this CMDB context it is the related list for grouped assignments on a CI.",
    "memory": "CI group tracking = Teams related list."
  },
  {
    "id": 5,
    "domain": "Database Management & Platform Security",
    "topic": "CMDB Tables",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which CMDB table stores the basic attributes shared by configuration items?",
    "options": [
      "CI Relationship [cmdb_rel_ci]",
      "Base Configuration Item [cmdb]",
      "Configuration Item [cmdb_ci]",
      "Configuration File [cmdb_ci_config_file]"
    ],
    "correct": [
      2
    ],
    "trap": "cmdb is the base table, but cmdb_ci is the core Configuration Item table used for CI attributes.",
    "memory": "CI attributes live on cmdb_ci."
  },
  {
    "id": 10,
    "domain": "Database Management & Platform Security",
    "topic": "Table Extension",
    "difficulty": "Medium",
    "choose": 1,
    "question": "How is the Problem table related to the Task table?",
    "options": [
      "Problem is a remote table for Task",
      "Problem extends Task",
      "Problem is a database view of Task",
      "Problem is the parent table of Task",
      "Problem references Task",
      "Problem has a many-to-many relationship with Task"
    ],
    "correct": [
      1
    ],
    "trap": "Many task-type records extend Task; the child table inherits fields from Task.",
    "memory": "Incident, Problem, Change = Task children."
  },
  {
    "id": 15,
    "domain": "Database Management & Platform Security",
    "topic": "Schema Relationships",
    "difficulty": "Medium",
    "choose": 4,
    "question": "Which schema relationship types are supported for ServiceNow tables?",
    "options": [
      "Extended by",
      "Referenced by",
      "Extending",
      "Depending",
      "Referencing",
      "Depended by"
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "trap": "Depending/Depended by sound technical but are not the schema relationship labels being tested.",
    "memory": "Schema map: extend + reference, both directions."
  },
  {
    "id": 17,
    "domain": "Database Management & Platform Security",
    "topic": "CMDB / CI Basics",
    "difficulty": "Easy",
    "choose": 1,
    "question": "In ServiceNow CMDB terminology, what does a Configuration Item represent?",
    "options": [
      "A toolset used to manage configuration data",
      "Information that describes a CI such as serial number or OS",
      "A component of infrastructure required to deliver a product or service",
      "A database storing configuration records throughout their lifecycle"
    ],
    "correct": [
      2
    ],
    "trap": "Attributes describe the CI; they are not the CI itself.",
    "memory": "CI = the thing. CMDB = where the thing is tracked."
  },
  {
    "id": 19,
    "domain": "Database Management & Platform Security",
    "topic": "CMDB Workspace",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which CMDB Workspace feature visualises the hierarchy and relationships around a selected CI?",
    "options": [
      "Unified Map",
      "Schema Map",
      "Service Mapping",
      "360\u00b0 Relationship Visualization",
      "Visualization Designer"
    ],
    "correct": [
      0
    ],
    "trap": "Schema Map is table structure. Unified Map is the CI relationship view.",
    "memory": "Unified Map = relationship view around a CI."
  },
  {
    "id": 20,
    "domain": "Database Management & Platform Security",
    "topic": "Transform Maps",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which tool determines how fields in an import set map to an existing ServiceNow table?",
    "options": [
      "Import Set",
      "Target Table",
      "Transform Map",
      "Coalesce"
    ],
    "correct": [
      2
    ],
    "trap": "Coalesce helps match records; the Transform Map owns the field mapping.",
    "memory": "Import Set lands data. Transform Map moves it."
  },
  {
    "id": 22,
    "domain": "Database Management & Platform Security",
    "topic": "Table Extension",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which table is a base table that is extended by other tables, but does not extend another table itself?",
    "options": [
      "Incident [incident]",
      "Business Service [cmdb_ci_service]",
      "Task [task]",
      "Change Request [change_request]"
    ],
    "correct": [
      2
    ],
    "trap": "Incident and Change extend Task. Task is the base table.",
    "memory": "Task sits above Incident, Problem, Change."
  },
  {
    "id": 25,
    "domain": "Database Management & Platform Security",
    "topic": "Access Controls",
    "difficulty": "Medium",
    "choose": 4,
    "question": "Which access control rules are created by default when a custom table is created?",
    "options": [
      "Read",
      "Write",
      "Access",
      "Archive",
      "Delete",
      "Create"
    ],
    "correct": [
      0,
      1,
      4,
      5
    ],
    "trap": "Access and Archive sound plausible but are not the default CRUD ACL operations.",
    "memory": "New custom table ACLs = CRUD: create, read, write, delete."
  },
  {
    "id": 32,
    "domain": "Database Management & Platform Security",
    "topic": "CMDB Ownership",
    "difficulty": "Hard",
    "choose": 3,
    "question": "The CMDB is the authoritative source for which information?",
    "options": [
      "Server log files",
      "Contents of all server and application configuration files",
      "Owner",
      "Contact",
      "Support group"
    ],
    "correct": [
      2,
      3,
      4
    ],
    "trap": "CMDB tracks ownership/support context, not all raw config file contents or logs.",
    "memory": "CMDB owns who owns/supports the CI."
  },
  {
    "id": 40,
    "domain": "Database Management & Platform Security",
    "topic": "CMDB 360 / Multisource CMDB",
    "difficulty": "Hard",
    "choose": 2,
    "question": "Which CMDB capability tracks data source activity/history as sources insert and update CI attributes?",
    "options": [
      "CMDB Data Manager",
      "CMDB 360",
      "CI Class Manager",
      "CMDB CI Lifecycle Management",
      "Multisource CMDB"
    ],
    "correct": [
      1,
      4
    ],
    "trap": "CMDB 360 is the feature area; Multisource CMDB is the specific capability within it.",
    "memory": "CMDB 360 shows it. Multisource tracks source activity."
  },
  {
    "id": 42,
    "domain": "Database Management & Platform Security",
    "topic": "Security Roles",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which elevated role is required to modify Access Control rules?",
    "options": [
      "metric_admin",
      "security_admin",
      "business_rule_admin",
      "itil_admin",
      "admin",
      "u_acl_admin"
    ],
    "correct": [
      1
    ],
    "trap": "admin alone is not enough for ACL changes; security_admin must be elevated.",
    "memory": "ACL changes = elevate security_admin."
  },
  {
    "id": 43,
    "domain": "Database Management & Platform Security",
    "topic": "Security Center",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which Security Center feature lets administrators view, compare, and update compliance scores?",
    "options": [
      "Hardening",
      "Customer Actions",
      "Scanner",
      "Metrics"
    ],
    "correct": [
      0
    ],
    "trap": "Metrics measure; Hardening is the feature used to view and improve security posture scores.",
    "memory": "Security Center score work = Hardening."
  },
  {
    "id": 45,
    "domain": "Database Management & Platform Security",
    "topic": "Importing Data",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which statement is true when importing data into ServiceNow?",
    "options": [
      "Every staging table can be used once",
      "Every Transform Map must have at least one coalesce field",
      "Every application has one staging table",
      "Every import must have at least one Transform Map",
      "Every data field has to be mapped"
    ],
    "correct": [
      3
    ],
    "trap": "Coalesce and field mapping are useful but not always required. Transform Map is the required bridge.",
    "memory": "Import needs a Transform Map."
  },
  {
    "id": 50,
    "domain": "Database Management & Platform Security",
    "topic": "Shared Responsibility",
    "difficulty": "Hard",
    "choose": 1,
    "question": "Under the Shared Responsibility Model, which area is primarily the customer's responsibility?",
    "options": [
      "Authentication and authorisation",
      "Infrastructure management",
      "Backup restoration",
      "Disaster recovery"
    ],
    "correct": [
      0
    ],
    "trap": "ServiceNow handles infrastructure/DR operations; customers own identity, access, roles, and auth configuration.",
    "memory": "Customer owns access. ServiceNow owns cloud plumbing."
  },
  {
    "id": 52,
    "domain": "Database Management & Platform Security",
    "topic": "External Data Sources",
    "difficulty": "Hard",
    "choose": 3,
    "question": "Which external data source types can ServiceNow import from when a valid transform map is available?",
    "options": [
      "OIDC",
      "CSV",
      "REST",
      "LDAP",
      "JSON"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "trap": "JSON and CSV are data formats; the exam asks for external source types.",
    "memory": "Source type \u2260 file format."
  },
  {
    "id": 55,
    "domain": "Database Management & Platform Security",
    "topic": "ACL Decision Types",
    "difficulty": "Easy",
    "choose": 2,
    "question": "Which ACL decision types are used to control whether access is granted or denied?",
    "options": [
      "Deny Unless",
      "Deny Always",
      "Allow If",
      "Allow Once",
      "Restrict Access"
    ],
    "correct": [
      0,
      2
    ],
    "trap": "Deny Always sounds security-like but the platform wording is Deny Unless.",
    "memory": "ACL decisions: Allow If / Deny Unless."
  },
  {
    "id": 59,
    "domain": "Database Management & Platform Security",
    "topic": "Report View ACLs",
    "difficulty": "Medium",
    "choose": 1,
    "question": "A developer needs users to view restricted incident reports without opening the underlying incident records. Which ACL operation controls this?",
    "options": [
      "execute",
      "add_to_list",
      "read",
      "report_view",
      "report_on"
    ],
    "correct": [
      3
    ],
    "trap": "read controls record access; report_view controls report visibility for restricted records.",
    "memory": "Reports on restricted data = report_view."
  },
  {
    "id": 2,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Platform Analytics",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Core UI Reporting and Dashboards are deprecated for new instances. What replaces them?",
    "options": [
      "Platform Analytics",
      "User Experience Analytics",
      "Performance Analytics",
      "Process Mining"
    ],
    "correct": [
      0
    ],
    "trap": "Performance Analytics sounds close, but Platform Analytics is the replacement experience.",
    "memory": "Old Reporting/Dashboards \u2192 Platform Analytics."
  },
  {
    "id": 3,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Email Notifications",
    "difficulty": "Easy",
    "choose": 3,
    "question": "Which main sections organise the configuration of an Email Notification record?",
    "options": [
      "When to apply",
      "When to run",
      "What it will contain",
      "When to send",
      "Who will receive"
    ],
    "correct": [
      2,
      3,
      4
    ],
    "trap": "When to run belongs to Business Rules. Notifications use When to send.",
    "memory": "Notifications SEND: when, who, what."
  },
  {
    "id": 7,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Reports from Lists",
    "difficulty": "Easy",
    "choose": 2,
    "question": "Which report visualisations can be generated directly from a list of records?",
    "options": [
      "Bar chart",
      "Single score",
      "Pie chart",
      "Line chart"
    ],
    "correct": [
      0,
      2
    ],
    "trap": "Line charts exist elsewhere, but from a list header the tested options are bar and pie.",
    "memory": "List quick reports = Bar + Pie."
  },
  {
    "id": 8,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Visual Task Boards",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which Visual Task Board type updates records automatically when cards are moved between lanes?",
    "options": [
      "Freeform",
      "List",
      "Guided",
      "Flexible"
    ],
    "correct": [
      2
    ],
    "trap": "Flexible boards are list-based but lane movement does not update task data the same way Guided does.",
    "memory": "Guided VTB = data-driven lanes."
  },
  {
    "id": 16,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Dashboards",
    "difficulty": "Medium",
    "choose": 3,
    "question": "Who can add visual elements to an in-line dashboard?",
    "options": [
      "Users with view access to the dashboard",
      "Users with viz_admin role",
      "Users with edit access to the dashboard",
      "Users with dashboard_admin role",
      "Dashboard owner"
    ],
    "correct": [
      2,
      3,
      4
    ],
    "trap": "View access is read-only; edit/owner/admin can add elements.",
    "memory": "Dashboard changes need edit, admin, or owner."
  },
  {
    "id": 21,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Form Splits",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which role is required to enable multiple form splits on the platform?",
    "options": [
      "itil",
      "admin",
      "personalize_form",
      "form_admin"
    ],
    "correct": [
      1
    ],
    "trap": "Form personalization roles sound plausible, but the platform property requires admin-level access.",
    "memory": "Form split config = admin."
  },
  {
    "id": 23,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Reporting Navigation",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Where do you navigate to start creating a new report?",
    "options": [
      "Performance Analytics > Create Reports",
      "Service Catalog > Request Reports",
      "Resource > Resource Reports > Reports - New",
      "Reports > Create New",
      "Self-Service > My Reports",
      "Reports > Getting Started"
    ],
    "correct": [
      3
    ],
    "trap": "CSA loves exact navigation paths; the module is Reports > Create New.",
    "memory": "New report = Reports > Create New."
  },
  {
    "id": 29,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Form Context Menu",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which menu contains options for viewing, configuring, creating favourites, and saving form data?",
    "options": [
      "Form Column Menu",
      "Form Layout Menu",
      "Form Context Menu",
      "Form Personalisation Menu"
    ],
    "correct": [
      2
    ],
    "trap": "Layout/personalisation sound close, but the broad right-click/form-header menu is the Form Context Menu.",
    "memory": "Form header/right-click actions = Form Context Menu."
  },
  {
    "id": 30,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Notifications Navigation",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Where do you navigate to see email notifications currently defined on the platform?",
    "options": [
      "System Notification > Email > Notifications",
      "Notifications > Email > System Notifications",
      "System Notifications > Definitions",
      "System Definitions > Notifications"
    ],
    "correct": [
      0
    ],
    "trap": "Several options contain the right words; CSA wants the exact path.",
    "memory": "System Notification \u2192 Email \u2192 Notifications."
  },
  {
    "id": 34,
    "domain": "Configuring Applications for Collaboration",
    "topic": "List Filters",
    "difficulty": "Easy",
    "choose": 1,
    "question": "You need incidents where State is Resolved or Closed AND Assignment Group is one of your groups. After defining the first condition with the funnel filter, what should you do?",
    "options": [
      "Select Assignment group in the search box and press enter",
      "Click AND, define the second condition, then Save",
      "Click Run, overwrite the first condition, then press enter",
      "Click AND, define the second condition, then Run",
      "This requires advanced reporting",
      "Click OR, define the second condition, then Run"
    ],
    "correct": [
      3
    ],
    "trap": "Save is not the final step for running a list filter. AND combines both required conditions.",
    "memory": "Need both conditions? Add AND, then Run."
  },
  {
    "id": 41,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Field Types",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which field type is Boolean and displays as a checkbox?",
    "options": [
      "Yes/No",
      "Positive/Negative",
      "Checked/Unchecked",
      "0/1",
      "On/Off",
      "True/False"
    ],
    "correct": [
      5
    ],
    "trap": "The UI might feel like yes/no, but the ServiceNow field type is True/False.",
    "memory": "Checkbox field type = True/False."
  },
  {
    "id": 44,
    "domain": "Configuring Applications for Collaboration",
    "topic": "Activity Stream",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which form tab displays the Activity Stream for a task record?",
    "options": [
      "Notes",
      "Related Records",
      "History",
      "Resolution Information"
    ],
    "correct": [
      0
    ],
    "trap": "History is audit-related; Notes contains comments/work notes/activity stream.",
    "memory": "Activity Stream lives in Notes."
  },
  {
    "id": 51,
    "domain": "Configuring Applications for Collaboration",
    "topic": "SLA",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which feature tracks how long a task remains open to ensure it completes within a defined time limit?",
    "options": [
      "Approval records",
      "Assignment rules",
      "Service Level Agreements",
      "Inactivity monitors"
    ],
    "correct": [
      2
    ],
    "trap": "Assignment rules route work; SLAs track timing obligations.",
    "memory": "Time target = SLA."
  },
  {
    "id": 4,
    "domain": "Data Migration & Integration",
    "topic": "Data Policies",
    "difficulty": "Hard",
    "choose": 1,
    "question": "What happens when a data policy makes a field read-only in list view?",
    "options": [
      "The field appears editable, but the update fails",
      "The field remains editable and updates successfully",
      "The field is hidden from list personalization",
      "The field appears read-only and cannot be edited"
    ],
    "correct": [
      0
    ],
    "trap": "Data Policies enforce server-side rules; the UI may allow the attempt, but save fails.",
    "memory": "Data Policy can block the save even if the UI lets you try."
  },
  {
    "id": 11,
    "domain": "Data Migration & Integration",
    "topic": "Update Sets",
    "difficulty": "Hard",
    "choose": 3,
    "question": "Which steps are used when applying an update set to an instance?",
    "options": [
      "Delete",
      "Commit",
      "Preview",
      "Copy",
      "Retrieve"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "trap": "Preview does not apply changes. Commit applies them after retrieval/preview.",
    "memory": "Retrieve \u2192 Preview \u2192 Commit."
  },
  {
    "id": 26,
    "domain": "Data Migration & Integration",
    "topic": "UI Policies",
    "difficulty": "Easy",
    "choose": 1,
    "question": "What configures how fields behave on a form when a UI Policy is triggered?",
    "options": [
      "UI Actions",
      "UI Policy Action",
      "Data Policy",
      "Client Script"
    ],
    "correct": [
      1
    ],
    "trap": "Policy defines the condition; Policy Action defines what happens to fields.",
    "memory": "UI Policy = when. UI Policy Action = field behavior."
  },
  {
    "id": 28,
    "domain": "Data Migration & Integration",
    "topic": "App Creation",
    "difficulty": "Medium",
    "choose": 1,
    "question": "Which ServiceNow feature starts the guided creation of a new application?",
    "options": [
      "Guided Application Creator",
      "System Dictionary",
      "Configuration Management Database (CMDB)",
      "Integration Hub"
    ],
    "correct": [
      0
    ],
    "trap": "Integration Hub connects systems; Guided Application Creator starts app creation.",
    "memory": "Build app = Guided App Creator."
  },
  {
    "id": 31,
    "domain": "Data Migration & Integration",
    "topic": "Business Rules",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which script can run when a record is displayed, inserted, updated, deleted, or queried?",
    "options": [
      "UI Policy",
      "Data Policy",
      "Business Rule",
      "Client Script"
    ],
    "correct": [
      2
    ],
    "trap": "Client Scripts run in the browser; Business Rules run server-side around database actions.",
    "memory": "Database event script = Business Rule."
  },
  {
    "id": 37,
    "domain": "Data Migration & Integration",
    "topic": "Integration Hub",
    "difficulty": "Medium",
    "choose": 1,
    "question": "What extends Flow Designer to call third-party systems such as Microsoft services, REST, or PowerShell?",
    "options": [
      "REST API Explorer",
      "Third-Party Import Maps",
      "Workflow",
      "Integration Hub"
    ],
    "correct": [
      3
    ],
    "trap": "REST API Explorer tests APIs; Integration Hub gives Flow Designer external actions/spokes.",
    "memory": "Flow + external systems = Integration Hub."
  },
  {
    "id": 47,
    "domain": "Data Migration & Integration",
    "topic": "Client Scripts",
    "difficulty": "Hard",
    "choose": 4,
    "question": "Which Client Script types are supported in ServiceNow?",
    "options": [
      "onCellEdit()",
      "onSubmit()",
      "onChange()",
      "onDelete()",
      "onSave()",
      "onLoad()"
    ],
    "correct": [
      0,
      1,
      2,
      5
    ],
    "trap": "onSave/onDelete sound JavaScript-like, but they are not ServiceNow Client Script types.",
    "memory": "Client scripts: load, change, submit, cell edit."
  },
  {
    "id": 6,
    "domain": "Self-Service & Automation",
    "topic": "Flow Designer Actions",
    "difficulty": "Medium",
    "choose": 3,
    "question": "Which statements correctly describe Flow Designer actions?",
    "options": [
      "Represent reusable operations for use across multiple flows",
      "Define when the flow is performed",
      "Provide the ability to build custom actions",
      "Can be contained in a spoke",
      "Require script to develop"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "trap": "When a flow runs is the trigger, not the action.",
    "memory": "Trigger = when. Action = work. Spoke = action pack."
  },
  {
    "id": 12,
    "domain": "Self-Service & Automation",
    "topic": "Flow Triggers",
    "difficulty": "Hard",
    "choose": 3,
    "question": "Which trigger types are available in Flow Designer?",
    "options": [
      "Record-based",
      "Application-based",
      "Work-based",
      "Schedule-based",
      "Role-based"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "trap": "Work-based and role-based sound platform-ish, but they are not Flow Designer trigger types.",
    "memory": "Flow triggers: record, schedule, application."
  },
  {
    "id": 14,
    "domain": "Self-Service & Automation",
    "topic": "Catalog Request Hierarchy",
    "difficulty": "Medium",
    "choose": 3,
    "question": "What records are created when an order is placed for a catalog item?",
    "options": [
      "One or more Service Catalog Task (SCTASK) records",
      "A Variable Set",
      "A Requested Item (RITM) record",
      "A Request (REQ) record",
      "A Variable"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "trap": "Variables support forms; ordering creates REQ/RITM/SCTASK records.",
    "memory": "REQ \u2192 RITM \u2192 SCTASK."
  },
  {
    "id": 24,
    "domain": "Self-Service & Automation",
    "topic": "Record Producers",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which catalog item type creates an incident or HR case record?",
    "options": [
      "Record producer",
      "Order an item",
      "Request a service",
      "Maintain a service"
    ],
    "correct": [
      0
    ],
    "trap": "Catalog items request things; record producers create records.",
    "memory": "Record producer produces records."
  },
  {
    "id": 33,
    "domain": "Self-Service & Automation",
    "topic": "Knowledge Feedback",
    "difficulty": "Easy",
    "choose": 3,
    "question": "How can an end user leave feedback on a knowledge article?",
    "options": [
      "Fill out the knowledge quality survey",
      "Give a 1\u20135 star rating",
      "Mark the article helpful or not helpful",
      "Leave a comment on the article",
      "Fill out an article quality index checklist"
    ],
    "correct": [
      1,
      2,
      3
    ],
    "trap": "Quality surveys/checklists sound governance-focused, not standard end-user feedback.",
    "memory": "Article feedback = rating, helpful, comment."
  },
  {
    "id": 36,
    "domain": "Self-Service & Automation",
    "topic": "Knowledge SEO / Accessibility",
    "difficulty": "Hard",
    "choose": 1,
    "question": "When can you view personalised recommendations to improve SEO and accessibility for Knowledge articles?",
    "options": [
      "When attaching an article to an Incident",
      "When rating or commenting on an article",
      "When editing or publishing an article",
      "When viewing an article on the Service Portal",
      "When flagging an article"
    ],
    "correct": [
      2
    ],
    "trap": "Recommendations appear during authoring/publishing, not during consumption.",
    "memory": "SEO help appears while editing/publishing."
  },
  {
    "id": 39,
    "domain": "Self-Service & Automation",
    "topic": "Catalog Fulfilment",
    "difficulty": "Easy",
    "choose": 3,
    "question": "Which options define the fulfilment process for a service catalog item?",
    "options": [
      "Execution Plan",
      "Flow",
      "Roadmap",
      "Plan",
      "Workflow"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "trap": "Plan/Roadmap sound project-like; catalog fulfilment uses Execution Plan, Flow, or Workflow.",
    "memory": "Catalog fulfilment = Execution Plan, Flow, Workflow."
  },
  {
    "id": 46,
    "domain": "Self-Service & Automation",
    "topic": "Now Assist",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which application helps quickly draft knowledge articles from cases, HR cases, or incidents?",
    "options": [
      "Knowledge Creator",
      "Knowledge Assist",
      "Now Assist",
      "Knowledge Manager"
    ],
    "correct": [
      2
    ],
    "trap": "Knowledge Assist sounds plausible, but the GenAI product is Now Assist.",
    "memory": "AI draft help = Now Assist."
  },
  {
    "id": 49,
    "domain": "Self-Service & Automation",
    "topic": "Catalog Administration",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Where does an administrator navigate to edit a catalog item?",
    "options": [
      "Service Portal",
      "Maintain Items",
      "Create Incident",
      "Service Catalogs"
    ],
    "correct": [
      1
    ],
    "trap": "Service Portal is the user-facing front end; Maintain Items is admin configuration.",
    "memory": "Edit catalog item = Maintain Items."
  },
  {
    "id": 56,
    "domain": "Self-Service & Automation",
    "topic": "Virtual Agent",
    "difficulty": "Medium",
    "choose": 3,
    "question": "Which Tier 2 support tasks can Virtual Agent perform to free support agents for complex issues?",
    "options": [
      "Impersonating users",
      "Answering FAQs",
      "Providing how-to information",
      "Performing diagnostics"
    ],
    "correct": [
      1,
      2,
      3
    ],
    "trap": "Virtual Agent helps and diagnoses; it does not impersonate users.",
    "memory": "VA = FAQ, how-to, diagnostics."
  },
  {
    "id": 57,
    "domain": "Self-Service & Automation",
    "topic": "Knowledge Management",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which application centralises creating, categorising, viewing, and governing information related to work in ServiceNow?",
    "options": [
      "Data Separation",
      "Performance Analytics",
      "Configuration Management",
      "Knowledge Management"
    ],
    "correct": [
      3
    ],
    "trap": "Configuration Management tracks assets/CIs; Knowledge manages information/articles.",
    "memory": "Articles and governance = Knowledge Management."
  },
  {
    "id": 58,
    "domain": "Self-Service & Automation",
    "topic": "Flow Variables",
    "difficulty": "Hard",
    "choose": 1,
    "question": "How can you access local flow variables in Flow Designer?",
    "options": [
      "As data pills in the Data panel",
      "As help cards in the Help panel",
      "As new icons in Flow Properties",
      "As separate tabs on the Home page"
    ],
    "correct": [
      0
    ],
    "trap": "Flow data is exposed through Data pills, not separate configuration screens.",
    "memory": "Flow variable access = data pills."
  },
  {
    "id": 9,
    "domain": "Instance Configuration",
    "topic": "AI Recommendations",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which icon marks fields that provide AI recommendations in Workspace forms?",
    "options": [
      "Star icon",
      "Sparkle icon",
      "Robot icon",
      "Information icon"
    ],
    "correct": [
      1
    ],
    "trap": "Star often means favourite; sparkle means AI/recommendation.",
    "memory": "Sparkle = AI."
  },
  {
    "id": 13,
    "domain": "Instance Configuration",
    "topic": "Tables / Modules",
    "difficulty": "Medium",
    "choose": 2,
    "question": "What is created by default when a new custom table is created?",
    "options": [
      "Dashboard to manage the table activity",
      "A table-specific admin role",
      "Module with the plural of the table label",
      "Application Menu with the same name as the table label"
    ],
    "correct": [
      2,
      3
    ],
    "trap": "Roles/dashboards sound useful, but the default automatic objects are menu/module navigation.",
    "memory": "New table creates menu + plural module."
  },
  {
    "id": 18,
    "domain": "Instance Configuration",
    "topic": "Impersonation",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Where do you select impersonation from in the Now Platform?",
    "options": [
      "Magnifying glass",
      "User menu",
      "System settings",
      "Application Navigator"
    ],
    "correct": [
      1
    ],
    "trap": "Impersonation sits under the user menu/profile, not search or navigator.",
    "memory": "Impersonate = user menu."
  },
  {
    "id": 27,
    "domain": "Instance Configuration",
    "topic": "Sidebar",
    "difficulty": "Medium",
    "choose": 1,
    "question": "What lets agents start a group discussion from a Workspace task or interaction record?",
    "options": [
      "Help menu",
      "Chatbot",
      "Connect Hub",
      "Virtual Agent",
      "Sidebar"
    ],
    "correct": [
      4
    ],
    "trap": "Virtual Agent is end-user self-service. Sidebar is agent collaboration.",
    "memory": "Workspace team discussion = Sidebar."
  },
  {
    "id": 48,
    "domain": "Instance Configuration",
    "topic": "Favorites / Next Experience",
    "difficulty": "Medium",
    "choose": 3,
    "question": "Which actions add favourites in Next Experience?",
    "options": [
      "Select the star icon in the contextual app pill",
      "Select the heart icon at the bottom of a knowledge article",
      "Select the star icon beside a module or application in the All menu",
      "Select the personalisation gear in the page header",
      "Use Create Favorite from the context menu of a list or record"
    ],
    "correct": [
      0,
      2,
      4
    ],
    "trap": "Hearts/gears feel UI-like, but favourites are star/context-menu based.",
    "memory": "Favourite = star or Create Favorite."
  },
  {
    "id": 35,
    "domain": "Platform Overview & Navigation",
    "topic": "Self-Service",
    "difficulty": "Easy",
    "choose": 1,
    "question": "Which application is available to all users by default?",
    "options": [
      "Self-Service",
      "Incident",
      "Facilities",
      "Change"
    ],
    "correct": [
      0
    ],
    "trap": "Incident/Change are process apps requiring roles; Self-Service is broadly available.",
    "memory": "All users get Self-Service."
  },
  {
    "id": 38,
    "domain": "Platform Overview & Navigation",
    "topic": "Notification Preferences",
    "difficulty": "Hard",
    "choose": 1,
    "question": "Where can users set notification preferences in the Next Experience UI?",
    "options": [
      "User Menu",
      "Subscription Management",
      "Admin Menu",
      "System Notifications",
      "Email Properties"
    ],
    "correct": [
      0
    ],
    "trap": "System Notifications is admin configuration; users manage preferences from the user menu.",
    "memory": "User preferences live in User Menu."
  },
  {
    "id": 53,
    "domain": "Platform Overview & Navigation",
    "topic": "Impersonation Limits",
    "difficulty": "Hard",
    "choose": 2,
    "question": "Which statements about user impersonation are true?",
    "options": [
      "Non-admin users with impersonator role have limited access if they impersonate admin users",
      "Admins have limited access to certain scoped app features while impersonating some scoped app admins",
      "Users must log out after each impersonation",
      "When impersonating, admins do not have the same access as the impersonated user",
      "Impersonation is not available in ServiceNow mobile apps",
      "Admins cannot view impersonation logs"
    ],
    "correct": [
      0,
      1
    ],
    "trap": "Impersonation mostly acts like the target user, but scoped/security boundaries still matter.",
    "memory": "Impersonation follows the user, except scoped/security limits."
  },
  {
    "id": 54,
    "domain": "Platform Overview & Navigation",
    "topic": "Admin Role Security",
    "difficulty": "Hard",
    "choose": 3,
    "question": "Which statements about the admin role are true?",
    "options": [
      "A user with only admin cannot grant security_admin to others",
      "To grant admin to a user, the granting user must also have admin",
      "A user with only user_admin can grant admin to others",
      "A non-admin with only security_admin can add a user to a group containing security_admin",
      "Non-admin users cannot add users to a group containing admin"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "trap": "user_admin is powerful, but not enough to grant admin/security-admin privileges.",
    "memory": "Granting powerful roles requires powerful roles."
  },
  {
    "id": 60,
    "domain": "Platform Overview & Navigation",
    "topic": "Tables / Records / Fields",
    "difficulty": "Easy",
    "choose": 1,
    "question": "In a table, what do records and fields correspond to?",
    "options": [
      "Each record and field corresponds to a row",
      "Each record and field corresponds to a column",
      "Each record is a column and each field is a row",
      "Each record is a row and each field is a column"
    ],
    "correct": [
      3
    ],
    "trap": "This is easy but often reversed under pressure.",
    "memory": "Record = row. Field = column."
  }
];

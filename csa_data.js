// ServiceNow CSA Exam Prep — 200 Questions
// Domains follow the official exam blueprint:
//   ui-navigation  (20%) — IDs   1-40
//   collaboration  (20%) — IDs  41-80
//   database-admin (30%) — IDs  81-140
//   self-service   (20%) — IDs 141-180
//   dev-intro      (10%) — IDs 181-200
//
// Multi-select questions have answer as an array, e.g. ["A","C"]
// Single-select questions have answer as a string, e.g. "B"

const CSA_QUESTIONS = [

  // ═══════════════════════════════════════════════════════
  // DOMAIN 1: User Interface & Navigation (20%) — IDs 1–40
  // ═══════════════════════════════════════════════════════

  // --- Application Navigator & Search ---
  {
    id: 1,
    q: "What is the primary purpose of the Application Navigator in ServiceNow?",
    opts: [
      "To create and deploy new applications to the ServiceNow Store",
      "To navigate between applications and modules using the left-side panel",
      "To monitor running transactions and system performance",
      "To manage integration connections to external systems"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 2,
    q: "A user wants to quickly find the 'Incident' module without scrolling. What should they use?",
    opts: [
      "The global search bar in the banner",
      "The filter text field at the top of the Application Navigator",
      "The breadcrumb trail at the top of the current page",
      "The notification bell in the banner"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 3,
    q: "Where can a user find recently visited records and pages in ServiceNow?",
    opts: [
      "The Favourites section of the Application Navigator",
      "The History section of the Application Navigator",
      "The global search bar dropdown",
      "The user profile menu in the top-right corner"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 4,
    q: "How does a user add a module to their Favourites in the Application Navigator?",
    opts: [
      "Right-click the module and select 'Add to Favourites'",
      "Drag the module to the top of the navigator",
      "Click the star icon that appears when hovering over the module",
      "Navigate to User Preferences and select the module"
    ],
    answer: "C", domain: "ui-navigation", community: ""
  },
  {
    id: 5,
    q: "What does the global search bar in the ServiceNow banner search across?",
    opts: [
      "Only the current module's records",
      "Only records in tables the user has previously visited",
      "Records across all tables configured for global search",
      "Only Knowledge Base articles"
    ],
    answer: "C", domain: "ui-navigation", community: ""
  },
  {
    id: 6,
    q: "What URL suffix is used in ServiceNow to open a specific record directly?",
    opts: [
      ".list",
      ".record",
      ".do",
      ".view"
    ],
    answer: "C", domain: "ui-navigation", community: ""
  },
  {
    id: 7,
    q: "What does 'Impersonate User' allow an administrator to do?",
    opts: [
      "Send emails and notifications on behalf of another user",
      "View and interact with the system exactly as that user would",
      "Temporarily grant admin rights to another user",
      "Audit all actions taken by a specific user"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },

  // --- Forms ---
  {
    id: 8,
    q: "How do you access Form Layout to change which fields appear on a form?",
    opts: [
      "Navigate to System Definition > Form Layout",
      "Right-click the form header and choose Configure > Form Layout",
      "Open System Properties and select Form Configuration",
      "Use Studio > Form Designer from the application menu"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 9,
    q: "How many columns can a single section on a ServiceNow form have?",
    opts: [
      "1 or 2",
      "1, 2, or 3",
      "Up to 4",
      "There is no column limit per section"
    ],
    answer: "A", domain: "ui-navigation", community: ""
  },
  {
    id: 10,
    q: "What is a 'View' in the context of ServiceNow forms?",
    opts: [
      "A saved filter applied to a list to show specific records",
      "A specific form layout that can be displayed based on role, URL parameter, or condition",
      "A personalised column configuration for a list",
      "A read-only version of a form shown to non-admin users"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 11,
    q: "A user wants to add a field to their own form view without affecting other users. What should they use?",
    opts: [
      "Form Layout (Configure > Form Layout)",
      "Personalise Form (right-click form header > Personalise > Form)",
      "Create a new View in System Properties",
      "Studio > Form Designer"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 12,
    q: "What is a 'Related List' on a ServiceNow form?",
    opts: [
      "A dropdown field that references records from another table",
      "A list at the bottom of a form showing related records from another table",
      "A list of fields that are marked as mandatory on the form",
      "A list of similar knowledge articles shown in the sidebar"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 13,
    q: "What is a form Annotation in ServiceNow?",
    opts: [
      "A comment added to a record's activity log",
      "A static text or image element on a form used to display instructions, not stored as data",
      "A mandatory field that requires a note before the record can be saved",
      "A system-generated field that timestamps all record changes"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 14,
    q: "What is the difference between Form Layout and Form Design in ServiceNow?",
    opts: [
      "Form Layout is for admin use only; Form Design is available to all roles",
      "Both arrange fields on a form — Form Design is the newer visual interface that also lets you configure field properties inline",
      "Form Layout is deprecated and should be replaced with Form Design",
      "Form Design controls visual styling (colours/fonts); Form Layout controls field placement only"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },

  // --- Lists ---
  {
    id: 15,
    q: "What does the 'Column Chooser' feature allow a user to do in a list view?",
    opts: [
      "Change the number of columns in a form section",
      "Add or remove columns displayed in the current list",
      "Reorder fields in a form layout",
      "Export selected columns to CSV"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 16,
    q: "How do you sort a list by a specific column in ServiceNow?",
    opts: [
      "Click the column header to toggle ascending/descending sort",
      "Right-click the column header and choose 'Sort Ascending'",
      "Use the filter bar to add a sort order condition",
      "Click the gear icon in the list header"
    ],
    answer: "A", domain: "ui-navigation", community: ""
  },
  {
    id: 17,
    q: "What is a Saved Filter in ServiceNow?",
    opts: [
      "A server-side Business Rule that filters records before they are displayed",
      "A named set of conditions saved for re-use to filter a list",
      "A system property that hides records from unauthorised users",
      "An ACL that restricts which records are returned in a query"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 18,
    q: "What do the breadcrumbs at the top of a filtered list display?",
    opts: [
      "The navigation path showing which application and module you are in",
      "The active filter conditions currently applied to the list",
      "The hierarchy of parent tables the current table extends from",
      "The list of recently accessed records"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 19,
    q: "How do you edit multiple records at once from a list view?",
    opts: [
      "Use the 'Bulk Update' module under System Administration",
      "Check multiple records, then use 'Update Selected' from the Actions menu",
      "Import a CSV file with the updated values using Import Sets",
      "Open each record individually — bulk editing from a list is not supported"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 20,
    q: "How do you export a list of records to Excel in ServiceNow?",
    opts: [
      "Use a Data Policy to export records to a spreadsheet",
      "Navigate to System Export > Excel Export module",
      "Right-click a column header or use the list header Actions menu and select Export > Excel",
      "Print the list — ServiceNow automatically converts it to Excel format"
    ],
    answer: "C", domain: "ui-navigation", community: ""
  },
  {
    id: 21,
    q: "What is a personalised list view in ServiceNow?",
    opts: [
      "A list layout visible to all users in the same role",
      "A custom column configuration saved for a specific user",
      "A list filtered by the logged-in user's assignment group",
      "A list view created by an admin and pushed to all users"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },

  // --- Homepages & Dashboards ---
  {
    id: 22,
    q: "What is the difference between a Homepage and a Dashboard in ServiceNow?",
    opts: [
      "Homepages are created by admins; dashboards are created by end users",
      "Homepages are personal to each user; dashboards can be shared with groups or roles",
      "Dashboards are limited to performance analytics data; homepages show all report types",
      "There is no functional difference — they are two names for the same feature"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 23,
    q: "What is a 'Gauge' widget on a ServiceNow homepage?",
    opts: [
      "A speedometer that displays platform performance and node health",
      "A mini report widget added to a homepage to show data at a glance",
      "An SLA indicator showing time remaining before a breach",
      "A widget that monitors scheduled job execution status"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 24,
    q: "Which of the following best describes Performance Analytics in ServiceNow?",
    opts: [
      "A reporting tool that generates one-time snapshots of list data",
      "A feature for tracking KPIs with historical data, trends, and targets over time",
      "A tool for monitoring system resource usage such as CPU and memory",
      "A module that analyses the performance of Business Rules and scripts"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 25,
    q: "Which of the following are features available in the ServiceNow Application Navigator? (Select 2)",
    opts: [
      "Favourites for quick access to frequently used modules",
      "Column Chooser to customise list views",
      "History showing recently visited records and pages",
      "Role Manager to assign roles to users"
    ],
    answer: ["A", "C"], domain: "ui-navigation", community: ""
  },

  // --- Tags ---
  {
    id: 26,
    q: "What is the purpose of Tags in ServiceNow?",
    opts: [
      "Tags are labels applied to modules in the navigator for categorisation",
      "Tags are personalised labels applied to records for personal organisation and searching",
      "Tags define the category assigned to a notification for subscription management",
      "Tags are metadata attached to Update Sets to indicate their release version"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 27,
    q: "Can a ServiceNow tag be shared with other users?",
    opts: [
      "Yes, tags can be shared with any user or group",
      "Yes, but only by administrators",
      "No, tags are personal and visible only to the user who created them",
      "Yes, but only within the same assignment group"
    ],
    answer: "C", domain: "ui-navigation", community: ""
  },
  {
    id: 28,
    q: "How do you apply a tag to a record in ServiceNow?",
    opts: [
      "Use the tag icon or right-click menu on the record to add a tag label",
      "Navigate to System Tags and manually link the tag to the record's sys_id",
      "Create a Business Rule that auto-tags records based on conditions",
      "Tags can only be applied from list view, not from the form"
    ],
    answer: "A", domain: "ui-navigation", community: ""
  },

  // --- Connect & Collaboration UI ---
  {
    id: 29,
    q: "What is the Connect feature in ServiceNow?",
    opts: [
      "A tool for configuring REST integrations to external systems",
      "A built-in messaging and collaboration feature for discussing records with colleagues",
      "A module for managing network and VPN connections",
      "A plugin for connecting ServiceNow to Microsoft Teams"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 30,
    q: "Which of the following correctly describes how Connect conversations work?",
    opts: [
      "Connect conversations can only be started from the user profile menu",
      "Conversations can be attached to a specific record, letting users discuss it in context",
      "Connect is a read-only feed — users cannot reply to messages",
      "Connect conversations are always visible to all users regardless of record permissions"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },

  // --- Service Portal (UI topic) ---
  {
    id: 31,
    q: "What is the Service Portal in ServiceNow?",
    opts: [
      "The backend administration console for system configuration",
      "A configurable self-service web interface built with AngularJS for end users",
      "A reporting portal accessible only to management roles",
      "The integration portal for connecting third-party applications"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 32,
    q: "What are the building blocks that make up a Service Portal? (Select 2)",
    opts: [
      "Pages and Widgets",
      "Update Sets and Transform Maps",
      "Themes and Portals",
      "Business Rules and Client Scripts"
    ],
    answer: ["A", "C"], domain: "ui-navigation", community: ""
  },

  // --- General UI ---
  {
    id: 33,
    q: "What happens when you click a reference field link on a ServiceNow form?",
    opts: [
      "A modal popup appears showing the referenced record inline",
      "You are navigated to the full form of the referenced record",
      "A list of related records is displayed below the field",
      "The field becomes editable to allow you to change the reference"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 34,
    q: "What does the 'New' button on a ServiceNow form do?",
    opts: [
      "It clears the current form to start a new record of the same type",
      "It opens a blank form to create a new record in the current table",
      "It creates a copy of the currently open record",
      "It opens the Form Designer to add a new field to the form"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 35,
    q: "In ServiceNow, what does 'dot-walking' refer to?",
    opts: [
      "Navigating between form sections by clicking section headers",
      "Referencing a field on a related record by chaining field names with dots (e.g. caller_id.department)",
      "A method of filtering lists using wildcard characters",
      "Walking through an approval workflow step by step"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 36,
    q: "A user can collapse a section on a ServiceNow form by doing which of the following?",
    opts: [
      "Right-clicking the section header and selecting 'Collapse'",
      "Clicking the section header label",
      "Dragging the section border upward",
      "Sections cannot be collapsed — they are always fully visible"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 37,
    q: "What is the Activity section (Work Notes / Additional Comments) on a Task record used for?",
    opts: [
      "Work Notes are visible to end users; Additional Comments are visible only to agents",
      "Work Notes are internal agent notes; Additional Comments are visible to the caller/requester",
      "Both are internal only and never visible to end users",
      "Both are always visible to all users regardless of role"
    ],
    answer: "B", domain: "ui-navigation", community: ""
  },
  {
    id: 38,
    q: "What is a Visual Task Board (VTB) in ServiceNow?",
    opts: [
      "A Kanban-style board that lets teams visualise and manage tasks in columns",
      "A Gantt chart view for tracking project milestones and timelines",
      "A widget on the homepage that shows task completion statistics",
      "A report type that displays tasks in a calendar view"
    ],
    answer: "A", domain: "ui-navigation", community: ""
  },
  {
    id: 39,
    q: "Which of the following statements about ServiceNow list personalisation is correct?",
    opts: [
      "Column personalisation applies to all users viewing the same list",
      "Only administrators can change which columns appear in a list",
      "Each user can personalise their own list column layout without affecting others",
      "List personalisation requires a change to Form Layout by an administrator"
    ],
    answer: "C", domain: "ui-navigation", community: ""
  },
  {
    id: 40,
    q: "Which of the following can a standard (non-admin) user personalise in ServiceNow? (Select 2)",
    opts: [
      "Their own Homepage layout",
      "System-wide form layout for all users",
      "Their own column configuration in a list view",
      "ACL rules controlling their own data access"
    ],
    answer: ["A", "C"], domain: "ui-navigation", community: ""
  },

  // ═══════════════════════════════════════════════════════
  // DOMAIN 2: Collaboration (20%) — IDs 41–80
  // ═══════════════════════════════════════════════════════

  // --- Notifications ---
  {
    id: 41,
    q: "What are the three main components that define a ServiceNow Notification?",
    opts: [
      "Template, Schedule, and Recipients",
      "When to send, Who will receive, and What it will contain",
      "Trigger, Action, and Condition",
      "Subject, Body, and Attachment"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 42,
    q: "What is a Notification Template in ServiceNow?",
    opts: [
      "A pre-built notification rule that fires on common system events",
      "A reusable email subject and body definition used by Notification records",
      "A scheduled report that is automatically emailed to a distribution list",
      "A template for creating new notification categories"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 43,
    q: "Which of the following can be used to specify who receives a ServiceNow notification? (Select 2)",
    opts: [
      "Users or groups specified directly on the notification",
      "A field on the record that contains a user or email value (e.g. Assigned to)",
      "Only users who have logged in within the last 30 days",
      "Any user with an active session at the time the notification fires"
    ],
    answer: ["A", "B"], domain: "collaboration", community: ""
  },
  {
    id: 44,
    q: "What is a Notification Category used for in ServiceNow?",
    opts: [
      "To organise notifications into groups that users can subscribe to or unsubscribe from",
      "To set the priority level of a notification (Low, Medium, High)",
      "To define which tables a notification applies to",
      "To categorise notifications for billing and licensing purposes"
    ],
    answer: "A", domain: "collaboration", community: ""
  },
  {
    id: 45,
    q: "Which table stores outbound email messages sent by ServiceNow?",
    opts: [
      "sys_notification",
      "sys_email",
      "sysevent_email_action",
      "sys_trigger"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 46,
    q: "When configuring a notification's 'When to send' condition, which trigger options are available? (Select 2)",
    opts: [
      "Record is inserted",
      "Record is deleted",
      "Specific field value changes",
      "User logs into the system"
    ],
    answer: ["A", "C"], domain: "collaboration", community: ""
  },
  {
    id: 47,
    q: "What is the purpose of the 'Digest' option on a Notification in ServiceNow?",
    opts: [
      "It compresses the email body to reduce file size",
      "It batches multiple notification events into a single email sent at a scheduled interval",
      "It encrypts the email content for secure transmission",
      "It converts HTML email content to plain text format"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 48,
    q: "An email notification is not being sent to a user. Which of the following could be a reason?",
    opts: [
      "The user's profile has 'Email' set to false (notifications disabled)",
      "The user is not currently logged into ServiceNow",
      "The user's record is in the Pending state",
      "The notification was created more than 30 days ago"
    ],
    answer: "A", domain: "collaboration", community: ""
  },

  // --- Groups & Assignment ---
  {
    id: 49,
    q: "In ServiceNow, what is an Assignment Rule?",
    opts: [
      "An ACL that controls which users can be assigned a record",
      "A rule that automatically assigns records to users or groups based on defined conditions",
      "A workflow approval step that routes tasks to a manager",
      "A UI Policy that makes the Assignment Group field mandatory"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 50,
    q: "What is the primary benefit of assigning roles to Groups rather than directly to individual Users?",
    opts: [
      "Groups can have more roles than individual users",
      "Role assignment to groups is faster to process at login",
      "Roles are inherited by all group members, making administration cleaner and less error-prone",
      "Individual users cannot have roles assigned directly in ServiceNow"
    ],
    answer: "C", domain: "collaboration", community: ""
  },
  {
    id: 51,
    q: "What happens to roles when a group is nested inside another group (parent-child groups)?",
    opts: [
      "Child groups inherit all roles assigned to the parent group",
      "Parent groups inherit roles from child groups",
      "Nested groups cannot share roles — each group has independent role assignments",
      "Roles are duplicated across both groups automatically"
    ],
    answer: "A", domain: "collaboration", community: ""
  },
  {
    id: 52,
    q: "Which table stores ServiceNow user groups?",
    opts: [
      "sys_user",
      "sys_user_role",
      "sys_user_group",
      "sys_group_member"
    ],
    answer: "C", domain: "collaboration", community: ""
  },
  {
    id: 53,
    q: "Which of the following are true about ServiceNow Groups? (Select 2)",
    opts: [
      "Groups can be used for task assignment, notification subscriptions, and role inheritance",
      "A user can only be a member of one group at a time",
      "Groups can be nested — a child group inherits the parent group's roles",
      "Groups are always public and visible to all users in the system"
    ],
    answer: ["A", "C"], domain: "collaboration", community: ""
  },
  {
    id: 54,
    q: "What is the sys_user table used for in ServiceNow?",
    opts: [
      "Storing user roles and permissions",
      "Storing all user account records (name, email, active status, etc.)",
      "Storing group membership relationships",
      "Storing user session and login history"
    ],
    answer: "B", domain: "collaboration", community: ""
  },

  // --- Surveys ---
  {
    id: 55,
    q: "What is a ServiceNow Survey used for?",
    opts: [
      "Surveying system performance metrics after a scheduled job runs",
      "Collecting structured feedback from users, typically triggered by a process event",
      "Auditing user activity and login patterns",
      "Generating automated reports on task completion rates"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 56,
    q: "What typically triggers a survey to be sent to a user in ServiceNow?",
    opts: [
      "A user manually requests a survey from the Service Portal",
      "An automated trigger such as an Incident being closed or resolved",
      "A nightly scheduled job that sends surveys to all active users",
      "Surveys can only be sent manually by administrators"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 57,
    q: "Which of the following are valid question types available in a ServiceNow Survey? (Select 2)",
    opts: [
      "Single-choice (radio button)",
      "Code Editor",
      "Rating scale (e.g. 1–5 stars)",
      "File Upload"
    ],
    answer: ["A", "C"], domain: "collaboration", community: ""
  },
  {
    id: 58,
    q: "Can ServiceNow surveys be set up as anonymous (responses not linked to the user)?",
    opts: [
      "No — all survey responses are always linked to the respondent",
      "Yes — surveys can be configured to collect anonymous responses",
      "Yes — but only for surveys sent via email, not the Service Portal",
      "No — anonymity requires a third-party survey integration"
    ],
    answer: "B", domain: "collaboration", community: ""
  },

  // --- Reporting ---
  {
    id: 59,
    q: "When creating a report in ServiceNow, which of the following must always be specified first?",
    opts: [
      "The chart type (bar, pie, etc.)",
      "The source table the report will query",
      "The user or group the report is shared with",
      "The scheduled run frequency"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 60,
    q: "What is a Scheduled Report in ServiceNow?",
    opts: [
      "A report that only runs when triggered manually by an administrator",
      "A report configured to run automatically at defined intervals and email results to recipients",
      "A report that refreshes its data every time it is opened",
      "A report stored in a shared dashboard visible to all users"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 61,
    q: "What does the 'Group by' option do in a ServiceNow report?",
    opts: [
      "Groups the report results by the logged-in user's group",
      "Aggregates and categorises report data by the values in a selected field",
      "Shares the report with a specific group of users",
      "Groups multiple reports together on a single dashboard tab"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 62,
    q: "Which report type is best suited for showing how a metric changes over a period of time?",
    opts: [
      "Pie Chart",
      "Heat Map",
      "Trend (Line Chart)",
      "List Report"
    ],
    answer: "C", domain: "collaboration", community: ""
  },
  {
    id: 63,
    q: "Which of the following are valid report types available in ServiceNow? (Select 3)",
    opts: [
      "Bar Chart",
      "Network Topology Diagram",
      "Pie Chart",
      "Heat Map"
    ],
    answer: ["A", "C", "D"], domain: "collaboration", community: ""
  },
  {
    id: 64,
    q: "With whom can a ServiceNow report be shared?",
    opts: [
      "Only the report owner",
      "All users, specific users or groups, or kept private to the creator",
      "Only users with the 'report_admin' role",
      "Only users in the same assignment group as the report creator"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 65,
    q: "What is the key difference between a ServiceNow Report and a Performance Analytics Indicator?",
    opts: [
      "Reports require the Performance Analytics plugin; indicators do not",
      "Reports provide a real-time snapshot of data; Performance Analytics tracks KPI values historically over time",
      "Indicators are visible to all users; reports are always private",
      "There is no difference — they display the same data in different formats"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 66,
    q: "What is a Dashboard in ServiceNow?",
    opts: [
      "A personal homepage visible only to the logged-in user",
      "A shared page that aggregates multiple reports and widgets into a single view",
      "A module that shows real-time system health metrics",
      "A read-only view of a table's records in a grid layout"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 67,
    q: "What is a Calendar report used for in ServiceNow?",
    opts: [
      "Scheduling when automated reports should be emailed",
      "Displaying records plotted on a calendar view based on a date field",
      "Showing year-over-year comparison data in a side-by-side layout",
      "Displaying team availability and shift schedules"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 68,
    q: "What is a Heat Map report in ServiceNow?",
    opts: [
      "A map showing geographic distribution of incidents by region",
      "A grid report that uses colour intensity to show the volume or severity of data across two dimensions",
      "A report showing system CPU and memory temperature readings",
      "A Gantt-style chart showing task duration and overlap"
    ],
    answer: "B", domain: "collaboration", community: ""
  },

  // --- SLA (Collaboration context) ---
  {
    id: 69,
    q: "What does SLA stand for in the context of ServiceNow?",
    opts: [
      "System Licence Agreement",
      "Service Level Agreement — a commitment defining expected response and resolution times",
      "Standard Lifecycle Automation",
      "Scheduled Log Archive"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 70,
    q: "What is an SLA Definition in ServiceNow used for?",
    opts: [
      "Documenting the contract between ServiceNow and the customer",
      "Defining the target times, conditions, and schedules for an SLA applied to task records",
      "Setting the escalation path when a major incident occurs",
      "Defining the maximum number of tasks a user can have open simultaneously"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 71,
    q: "Under what common condition does a ServiceNow SLA timer typically pause?",
    opts: [
      "When the assigned agent goes offline",
      "When the Incident or task is placed in the 'On Hold' state",
      "When a Work Note is added to the record",
      "When the record is viewed but not updated"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 72,
    q: "What is the difference between an SLA and an OLA in ServiceNow?",
    opts: [
      "SLA is internal-facing; OLA is customer-facing",
      "SLA is the commitment to the customer; OLA is an internal agreement between support teams",
      "OLA applies to Change requests; SLA applies to Incidents only",
      "They are identical terms used interchangeably"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 73,
    q: "Can multiple SLA definitions be active on a single record at the same time?",
    opts: [
      "No — only one SLA can be active per record at any time",
      "Yes — for example, a Response SLA and a Resolution SLA can run simultaneously on an Incident",
      "Yes — but only if the record belongs to a VIP priority category",
      "No — SLAs are applied at the group level, not the record level"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 74,
    q: "Which of the following are true about SLA schedules in ServiceNow? (Select 2)",
    opts: [
      "An SLA schedule defines the business hours during which the SLA timer runs",
      "Without a schedule, the SLA timer runs 24 hours a day, 7 days a week",
      "SLA schedules always run Monday to Friday 09:00–17:00 by default",
      "Schedules can only be linked to Change records, not Incidents"
    ],
    answer: ["A", "B"], domain: "collaboration", community: ""
  },

  // --- Knowledge Management (Collaboration) ---
  {
    id: 75,
    q: "What is a Knowledge Base in ServiceNow?",
    opts: [
      "A database containing the CMDB CI relationship data",
      "A top-level container for organising and publishing knowledge articles",
      "A repository of approved scripts and Business Rules",
      "A library of pre-built integration connectors"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 76,
    q: "What are the typical states an article passes through in the ServiceNow Knowledge article workflow?",
    opts: [
      "New > Open > Resolved > Closed",
      "Draft > Review > Published > Retired",
      "Pending > Approved > Live > Archived",
      "Created > Submitted > Accepted > Active"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 77,
    q: "What is a Knowledge Category in ServiceNow?",
    opts: [
      "A type of knowledge article focused on known errors",
      "A classification used to organise articles within a Knowledge Base",
      "A role that grants permission to manage knowledge articles",
      "An external knowledge source integrated via REST API"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 78,
    q: "Which of the following are true about ServiceNow Knowledge Bases? (Select 2)",
    opts: [
      "A Knowledge Base can be configured to be public (accessible without login) or internal",
      "Knowledge articles always require admin approval before publishing",
      "A single ServiceNow instance can have multiple Knowledge Bases",
      "Knowledge articles cannot be linked to Incident records"
    ],
    answer: ["A", "C"], domain: "collaboration", community: ""
  },
  {
    id: 79,
    q: "What is a Knowledge Block in ServiceNow?",
    opts: [
      "A lock placed on an article to prevent editing during review",
      "A reusable content snippet that can be embedded in multiple knowledge articles",
      "A permission setting that restricts access to a knowledge category",
      "A bulk import tool for migrating articles from an external source"
    ],
    answer: "B", domain: "collaboration", community: ""
  },
  {
    id: 80,
    q: "Can a ServiceNow Incident record be linked to a Knowledge Base article?",
    opts: [
      "No — Incidents and Knowledge articles are stored in completely separate modules",
      "Yes — agents can link a relevant knowledge article to an Incident as part of the resolution",
      "Yes — but only after the Incident is closed",
      "No — knowledge articles can only be linked to Problem records"
    ],
    answer: "B", domain: "collaboration", community: ""
  },

  // ═══════════════════════════════════════════════════════
  // DOMAIN 3: Database Administration (30%) — IDs 81–140
  // ═══════════════════════════════════════════════════════

  // --- Tables & Fields ---
  {
    id: 81,
    q: "What is a ServiceNow table?",
    opts: [
      "A visual layout for displaying form fields in rows and columns",
      "A database object that stores records of a specific type (like a spreadsheet with rows and columns)",
      "A configuration item that maps relationships between CIs",
      "A template for creating new applications in Studio"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 82,
    q: "What is the sys_id field in ServiceNow?",
    opts: [
      "A sequential auto-incrementing number unique within a table",
      "A globally unique 32-character identifier assigned to every record",
      "A field that stores the name of the table a record belongs to",
      "A field used to link records across tables via dot-walking"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 83,
    q: "What is a Reference field in ServiceNow?",
    opts: [
      "A field that displays a calculated value based on other fields",
      "A field that stores a link to a record in another table",
      "A field that holds a URL pointing to an external system",
      "A read-only field automatically populated by a Business Rule"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 84,
    q: "What is a Dictionary Entry in ServiceNow?",
    opts: [
      "A glossary record for documenting the meaning of ITSM terms",
      "The metadata definition for a field — specifying its type, label, max length, etc.",
      "A record that maps field names between different versions of an application",
      "A system configuration record for specifying allowed field values"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 85,
    q: "Which of the following are valid ServiceNow field types? (Select 2)",
    opts: [
      "Reference",
      "Matrix Grid",
      "Integer",
      "SLA Timer"
    ],
    answer: ["A", "C"], domain: "database-admin", community: ""
  },
  {
    id: 86,
    q: "What is table inheritance (extension) in ServiceNow?",
    opts: [
      "A process where one instance copies table definitions from another instance",
      "A feature where a child table inherits all columns and behaviour from its parent table, and can add its own",
      "An automated process that merges duplicate records across related tables",
      "A method for sharing records between tables without duplication"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 87,
    q: "The Incident, Problem, and Change tables all extend which base table?",
    opts: [
      "sys_record",
      "task",
      "sys_base_task",
      "itsm_core"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 88,
    q: "When you query a parent table in ServiceNow, what records are returned?",
    opts: [
      "Only records that were directly created on the parent table — child table records are excluded",
      "Records from the parent table and all tables that extend it",
      "Only records from the most recently extended child table",
      "Records from the parent table only, with a count of child records shown separately"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 89,
    q: "What does a Choice field type (or 'Select Box') store in ServiceNow?",
    opts: [
      "A reference to a record in another table",
      "A value from a predefined list of options defined in the Choice list",
      "A free-text value entered by the user",
      "A boolean true/false value"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 90,
    q: "What is a many-to-many (M2M) relationship table in ServiceNow used for?",
    opts: [
      "Linking a single parent record to exactly two child records",
      "Relating records where each record on either side can be associated with multiple records on the other side",
      "Duplicating records from one table into another for reporting",
      "Defining the inheritance hierarchy between extended tables"
    ],
    answer: "B", domain: "database-admin", community: ""
  },

  // --- Import Sets & Transform Maps ---
  {
    id: 91,
    q: "What is the primary purpose of Import Sets in ServiceNow?",
    opts: [
      "To import Update Sets from another ServiceNow instance",
      "To provide a staging area where data from external sources is loaded before being transformed",
      "To import custom applications from the ServiceNow App Store",
      "To import role and user configurations from Active Directory"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 92,
    q: "What is a Transform Map in ServiceNow?",
    opts: [
      "A script that transforms the format of a report from list to chart",
      "A configuration that maps and transforms data from an Import Set staging table into a target ServiceNow table",
      "A workflow that moves records between states during their lifecycle",
      "A template that maps field labels between different languages for localisation"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 93,
    q: "What does 'Coalesce' mean in the context of a Transform Map field mapping?",
    opts: [
      "It merges two fields into a single concatenated value",
      "It designates a field as the unique key — if a record with that value exists, update it rather than insert a duplicate",
      "It removes null values from the imported data before transformation",
      "It converts numeric values to string format during the transform"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 94,
    q: "Which of the following are true about ServiceNow Import Sets? (Select 2)",
    opts: [
      "Data is first loaded into a staging (Import Set) table before being transformed to a target table",
      "Import Sets can only be used to import data into the sys_user table",
      "Supported data sources include CSV, Excel, XML, JDBC, and REST",
      "Import Sets automatically delete staged data after a successful transform"
    ],
    answer: ["A", "C"], domain: "database-admin", community: ""
  },
  {
    id: 95,
    q: "What is a Data Source in the context of ServiceNow Import Sets?",
    opts: [
      "A table that acts as the origin for report data",
      "A configuration record defining the connection and format of the external data to be imported",
      "A Business Rule that validates incoming data before it is saved",
      "The target table where transformed data is stored after import"
    ],
    answer: "B", domain: "database-admin", community: ""
  },

  // --- ACLs ---
  {
    id: 96,
    q: "What is an Access Control List (ACL) in ServiceNow?",
    opts: [
      "A list of users who are permitted to log into the ServiceNow instance",
      "A rule that defines who can perform which operations (read, write, create, delete) on tables, fields, or records",
      "A list of IP addresses allowed to access the ServiceNow instance",
      "A configuration record for managing API authentication keys"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 97,
    q: "At which three levels can ACLs be applied in ServiceNow? (Select 3)",
    opts: [
      "Table level",
      "Application level",
      "Field level",
      "Record level"
    ],
    answer: ["A", "C", "D"], domain: "database-admin", community: ""
  },
  {
    id: 98,
    q: "What are the available operation types that an ACL can control? (Select 2)",
    opts: [
      "Read",
      "Archive",
      "Write",
      "Sync"
    ],
    answer: ["A", "C"], domain: "database-admin", community: ""
  },
  {
    id: 99,
    q: "What happens in ServiceNow when a user attempts an operation and a matching ACL exists but the user does not satisfy its conditions?",
    opts: [
      "The user is prompted to provide additional authentication",
      "The operation is denied and the field or record is hidden or read-only",
      "The user is logged out and redirected to the login page",
      "The operation proceeds but the action is flagged for admin review"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 100,
    q: "What does the 'Requires role' field on an ACL specify?",
    opts: [
      "The role a user must NOT have in order to access the data",
      "The minimum role level required — users with this role satisfy the ACL's role check",
      "The role automatically assigned to a user who passes the ACL",
      "The role of the administrator who created the ACL"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 101,
    q: "An ACL can include which of the following to determine if access is granted? (Select 2)",
    opts: [
      "A role requirement (user must have a specific role)",
      "A condition (field-based filter evaluated against the record)",
      "A scheduled window (ACL only applies during certain hours)",
      "A notification that alerts the user when they are denied access"
    ],
    answer: ["A", "B"], domain: "database-admin", community: ""
  },
  {
    id: 102,
    q: "What is the 'admin overrides' behaviour with ACLs in ServiceNow?",
    opts: [
      "Admins always bypass all ACLs regardless of configuration",
      "By default, users with the 'admin' role bypass ACL checks unless the elevated security plugin changes this",
      "Admins can only bypass ACLs on tables they created",
      "Admin override only applies to read operations, not write"
    ],
    answer: "B", domain: "database-admin", community: ""
  },

  // --- Roles & Users ---
  {
    id: 103,
    q: "What is a Role in ServiceNow?",
    opts: [
      "A permission set applied directly to individual records to control access",
      "A label assigned to users or groups that is referenced by ACLs to grant or restrict access",
      "A workflow step that requires a specific user to complete an approval",
      "A system job that runs with elevated privileges"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 104,
    q: "What does the 'itil' role grant in ServiceNow?",
    opts: [
      "Full administrative access to all platform configuration",
      "Access to work on ITSM records such as Incidents, Problems, and Changes as a fulfiller",
      "Read-only access to all tables in the system",
      "Access to create and modify Business Rules and Client Scripts"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 105,
    q: "What does the 'admin' role allow a user to do that standard roles do not?",
    opts: [
      "View and edit their own user profile",
      "Bypass most ACLs and have unrestricted access across the platform",
      "Access the Service Portal as an end user",
      "Create Incidents on behalf of other users"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 106,
    q: "What is the 'snc_internal' role in ServiceNow?",
    opts: [
      "A role assigned to all users that allows basic internal system access",
      "An internal ServiceNow system role visible in base ACLs but never assigned to customer users",
      "A role that grants access to internal knowledge bases only",
      "A temporary role used during instance maintenance windows"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 107,
    q: "A role in ServiceNow 'contains' another role. What does this mean?",
    opts: [
      "The child role's permissions override the parent role's permissions",
      "Any user assigned the parent role automatically also has the contained (child) role",
      "The child role can only be used within the same application scope as the parent",
      "The parent role is required before the child role can be assigned"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 108,
    q: "Which of the following are best practices for role assignment in ServiceNow? (Select 2)",
    opts: [
      "Assign roles to groups rather than individual users to simplify administration",
      "Assign the 'admin' role to all IT staff for convenience",
      "Apply the principle of least privilege — give users only the access they need",
      "Roles should always be assigned at the record level, not the table level"
    ],
    answer: ["A", "C"], domain: "database-admin", community: ""
  },
  {
    id: 109,
    q: "Which table stores role records in ServiceNow?",
    opts: [
      "sys_user",
      "sys_user_group",
      "sys_user_role",
      "sys_security_acl"
    ],
    answer: "C", domain: "database-admin", community: ""
  },

  // --- Data Policies ---
  {
    id: 110,
    q: "What is a Data Policy in ServiceNow?",
    opts: [
      "A rule applied client-side (in the browser) to make fields mandatory or read-only on a form",
      "A server-side rule that enforces field requirements (mandatory/read-only) regardless of how data is submitted",
      "A scheduled job that enforces data retention and archiving rules",
      "A UI Policy that applies field conditions based on user role"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 111,
    q: "What is the key difference between a Data Policy and a UI Policy?",
    opts: [
      "Data Policies run on the client; UI Policies run on the server",
      "UI Policies affect form behaviour in the browser; Data Policies enforce rules server-side including API and imports",
      "Data Policies are more powerful and replace UI Policies in modern ServiceNow",
      "There is no functional difference — they are applied in the same way"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 112,
    q: "What does the 'Apply to import sets' option on a Data Policy do?",
    opts: [
      "Applies the policy rules to data imported via Import Sets and Transform Maps",
      "Prevents any data from being imported into the table",
      "Applies the policy only to records imported from external CSV files",
      "Overrides the Transform Map field mappings with the Data Policy rules"
    ],
    answer: "A", domain: "database-admin", community: ""
  },

  // --- Update Sets ---
  {
    id: 113,
    q: "What is the primary purpose of Update Sets in ServiceNow?",
    opts: [
      "To update data records in bulk across multiple tables simultaneously",
      "To capture and package configuration changes so they can be moved between instances",
      "To automatically deploy patches from ServiceNow's update servers",
      "To track which records were modified during a scheduled maintenance window"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 114,
    q: "Which of the following types of changes are captured in an Update Set?",
    opts: [
      "Data records such as Incident and Change records",
      "Configuration changes such as Business Rules, UI Policies, Form Layouts, and Scripts",
      "User session and login history",
      "Attachments added to records"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 115,
    q: "What does it mean when an Update Set is in the 'Complete' state?",
    opts: [
      "The Update Set has been committed to production and is now live",
      "The Update Set has been marked as finished and is ready to be exported or moved to another instance",
      "The Update Set cannot be modified and will auto-deploy within 24 hours",
      "All conflicts in the Update Set have been resolved"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 116,
    q: "What is the recommended promotion path for Update Sets in ServiceNow?",
    opts: [
      "Production → Test → Development",
      "Development → Test → Production",
      "Development → Production (skipping Test for minor changes)",
      "Test → Production → Development (for rollback purposes)"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 117,
    q: "What is the purpose of 'Previewing' an Update Set on a target instance?",
    opts: [
      "To display a list of all records that will be created by the Update Set",
      "To check for conflicts between the incoming changes and existing configuration on the target instance",
      "To schedule when the Update Set will be committed",
      "To send the Update Set changes to the destination instance automatically"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 118,
    q: "What are 'Skipped Records' during an Update Set preview?",
    opts: [
      "Records that failed validation and were excluded from the Update Set",
      "Changes where the target instance has a more recent version — the admin must decide whether to accept the incoming change",
      "Records that are already identical on the target instance and require no update",
      "Changes from a different application scope that were excluded automatically"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 119,
    q: "What does it mean to 'Commit' an Update Set?",
    opts: [
      "It marks the Update Set as complete on the source instance",
      "It applies all the captured configuration changes to the target instance",
      "It creates a backup of the target instance before changes are applied",
      "It permanently locks the Update Set so no further changes can be added"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 120,
    q: "Which of the following are true about ServiceNow Update Sets? (Select 2)",
    opts: [
      "Update Sets capture configuration changes, not data record changes",
      "A committed Update Set can always be fully reversed with no data loss",
      "Multiple Update Sets can be merged into one before committing",
      "The Default Update Set should be used for all production changes"
    ],
    answer: ["A", "C"], domain: "database-admin", community: ""
  },
  {
    id: 121,
    q: "What is the 'Default' Update Set in ServiceNow?",
    opts: [
      "The Update Set created automatically when you first activate a plugin",
      "A system-provided Update Set that captures changes when no other Update Set is selected as current",
      "The Update Set that is automatically promoted to production on a nightly schedule",
      "A read-only Update Set containing the baseline configuration of a new instance"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 122,
    q: "Can an Update Set that has already been committed to a target instance be backed out?",
    opts: [
      "No — once committed, changes are permanent and cannot be reversed",
      "Yes — committed Update Sets can be backed out, though this may not fully restore the previous state in all cases",
      "Yes — all committed Update Sets are fully reversible with zero risk",
      "No — Update Sets cannot be backed out, which is why Testing is mandatory"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 123,
    q: "What is the recommended practice for naming Update Sets?",
    opts: [
      "Use the system-generated name (e.g. 'Update Set 123456') to maintain consistency",
      "Use a clear naming convention that includes the project, date, or change reference for traceability",
      "Name Update Sets after the developer who made the changes",
      "Leave Update Sets with the default name to avoid confusion during preview"
    ],
    answer: "B", domain: "database-admin", community: ""
  },

  // --- System Properties & Misc DB Admin ---
  {
    id: 124,
    q: "Where are System Properties managed in ServiceNow?",
    opts: [
      "System Definition > Tables",
      "System Properties > All Properties (or specific property modules)",
      "System Administration > Configuration Manager",
      "System Security > Properties"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 125,
    q: "What is the purpose of System Logs in ServiceNow?",
    opts: [
      "To display a history of all user login attempts",
      "To record system events, errors, warnings, and debug information for troubleshooting",
      "To show a changelog of all configuration changes made in the system",
      "To store email audit trails for compliance purposes"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 126,
    q: "What is a Scheduled Script Execution (Scheduled Job) in ServiceNow?",
    opts: [
      "A script attached to a Business Rule that runs on a time delay",
      "A server-side script configured to execute automatically at a defined time or repeating interval",
      "A client-side script that checks for form updates every few minutes",
      "A Flow Designer action that schedules a subflow to run later"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 127,
    q: "What does the 'Active' checkbox on a ServiceNow user record control?",
    opts: [
      "Whether the user appears in reference field searches",
      "Whether the user can log in to the ServiceNow instance",
      "Whether the user receives email notifications",
      "Whether the user's records are shown in list views"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 128,
    q: "What is a service account in ServiceNow?",
    opts: [
      "An account used by a service desk agent to manage all customer accounts",
      "A non-human user account created for integrations and automated processes",
      "A premium account tier with access to advanced features",
      "An account type restricted to read-only operations"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 129,
    q: "What is a 'Global' scope in ServiceNow application development?",
    opts: [
      "A scope that makes an application available to all users regardless of role",
      "The default application scope where configuration applies across the entire instance unless scoped otherwise",
      "A scope used for ServiceNow Store applications to prevent modification",
      "A data scope that includes records from all tables in a single query"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 130,
    q: "What is Instance Scan in ServiceNow?",
    opts: [
      "A security vulnerability scanner that tests instance network ports",
      "A built-in health check tool that evaluates your instance against best practices and flags findings",
      "A performance monitoring tool that tracks response times and error rates",
      "A comparison tool that identifies differences between two instances"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 131,
    q: "When cloning a ServiceNow instance, what is the purpose of 'Exclude Tables' in the clone configuration?",
    opts: [
      "To prevent specific tables from being included in the source data copied to the target instance",
      "To delete tables from the target instance that don't exist in the source",
      "To protect tables from being overwritten during an upgrade",
      "To exclude tables from Update Set capture during the clone process"
    ],
    answer: "A", domain: "database-admin", community: ""
  },
  {
    id: 132,
    q: "What is a 'Configuration Record' in ServiceNow (as opposed to a data record)?",
    opts: [
      "A record stored in any table that has been flagged as sensitive",
      "A record that defines system behaviour — such as a Business Rule, Script Include, or Form Layout — rather than operational data",
      "Any record created by a user with the 'admin' role",
      "A record in the CMDB that defines a Configuration Item"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 133,
    q: "What is the upgrade process step where ServiceNow identifies conflicts between your customisations and the new base system code?",
    opts: [
      "Preview",
      "Skipped Records review",
      "Instance Scan",
      "Conflict Resolution"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 134,
    q: "Which of the following are best practices before performing a ServiceNow upgrade? (Select 2)",
    opts: [
      "Clone production to a sub-production instance and run the upgrade there first",
      "Apply the upgrade directly to production during peak business hours for fastest feedback",
      "Review the release notes for new features, deprecations, and breaking changes",
      "Delete all Update Sets before upgrading to avoid conflicts"
    ],
    answer: ["A", "C"], domain: "database-admin", community: ""
  },
  {
    id: 135,
    q: "What does the 'stats.do' page in ServiceNow show?",
    opts: [
      "A list of all active users currently logged into the instance",
      "System diagnostic information including node health, active sessions, and memory usage",
      "A summary of all failed Business Rules and Client Scripts",
      "Statistics on the number of records in each table"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 136,
    q: "What is a CMDB (Configuration Management Database) in ServiceNow?",
    opts: [
      "A database of approved change request templates",
      "A repository of Configuration Items (CIs) and their relationships, representing the IT infrastructure",
      "A centralised log of all configuration changes made in ServiceNow",
      "A database storing custom table definitions and field metadata"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 137,
    q: "What is a Configuration Item (CI) in ServiceNow CMDB?",
    opts: [
      "Any change request that has been approved and implemented",
      "An asset or component in the IT infrastructure tracked in the CMDB, such as a server or application",
      "A configuration record such as a Business Rule or UI Policy",
      "A system property that controls platform behaviour"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 138,
    q: "What is the base table for all CI types in the ServiceNow CMDB?",
    opts: [
      "cmdb",
      "cmdb_ci",
      "sys_ci",
      "task_ci"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 139,
    q: "What is the purpose of CI relationships in the CMDB?",
    opts: [
      "To link incidents to the CIs they affect for reporting",
      "To map how CIs depend on or connect to each other, enabling impact analysis",
      "To define the approval chain for changes affecting a CI",
      "To link CIs to the vendor contracts covering them"
    ],
    answer: "B", domain: "database-admin", community: ""
  },
  {
    id: 140,
    q: "Why is CMDB data accuracy critical in ServiceNow?",
    opts: [
      "Inaccurate CMDB data prevents users from logging Incidents",
      "CMDB data that is stale or incorrect leads to wrong impact assessments and poor change/incident decisions",
      "CMDB accuracy is required for ServiceNow licensing compliance",
      "Inaccurate CMDB data triggers automatic SLA breaches"
    ],
    answer: "B", domain: "database-admin", community: ""
  },

  // ═══════════════════════════════════════════════════════
  // DOMAIN 4: Self-Service & Process Automation (20%) — IDs 141–180
  // ═══════════════════════════════════════════════════════

  // --- Service Catalog ---
  {
    id: 141,
    q: "What is the ServiceNow Service Catalog?",
    opts: [
      "A list of all CIs in the CMDB organised by service type",
      "A self-service storefront where users can request services, items, and access",
      "A directory of all ServiceNow applications installed on the instance",
      "A catalogue of approved Change templates for standard changes"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 142,
    q: "What does a Catalog Item create when ordered by a user?",
    opts: [
      "An Incident record linked to the user's account",
      "A Request (sc_request) and Requested Item (sc_req_item) record",
      "A Change Request submitted for CAB approval",
      "A Problem record assigned to the service owner"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 143,
    q: "What is a Record Producer in the ServiceNow Service Catalog?",
    opts: [
      "A tool for bulk-producing records from an imported CSV file",
      "A catalog item type that creates a record in any specified table (e.g. an Incident) rather than a Requested Item",
      "A workflow that automatically generates approval records",
      "A script that creates records in response to a Flow Designer trigger"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 144,
    q: "What is an Order Guide in the ServiceNow Service Catalog?",
    opts: [
      "A document that guides users on how to place orders in the catalog",
      "A catalog item type that bundles multiple catalog items into a single ordered request",
      "A guide for service desk agents on how to fulfil catalog requests",
      "A report showing the most frequently ordered catalog items"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 145,
    q: "What are Variables on a Catalog Item used for?",
    opts: [
      "Storing system-level configuration values for the catalog",
      "Collecting information from the user when they place a request",
      "Defining the workflow steps for fulfilling the request",
      "Setting the price and delivery time for the catalog item"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 146,
    q: "Which of the following can a Service Catalog contain? (Select 2)",
    opts: [
      "Catalog Items (create Requested Items)",
      "GlideRecord scripts for automated record creation",
      "Record Producers (create records on any table)",
      "CMDB CI discovery definitions"
    ],
    answer: ["A", "C"], domain: "self-service", community: ""
  },
  {
    id: 147,
    q: "What is the sc_req_item table in ServiceNow?",
    opts: [
      "The table that stores Service Request (parent) records",
      "The table that stores Requested Item (RITM) records — the individual items within a request",
      "The table that stores Catalog Task records for fulfillment",
      "The table that stores Service Catalog item definitions"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 148,
    q: "A Catalog UI Policy is similar to a regular UI Policy, but with what key difference?",
    opts: [
      "Catalog UI Policies run on the server; regular UI Policies run in the browser",
      "Catalog UI Policies apply to catalog item variable fields; regular UI Policies apply to table fields on a form",
      "Catalog UI Policies can only set fields as mandatory; regular UI Policies have more actions",
      "There is no functional difference — either type can be used interchangeably"
    ],
    answer: "B", domain: "self-service", community: ""
  },

  // --- Incident Management ---
  {
    id: 149,
    q: "What is the primary goal of Incident Management in ITSM?",
    opts: [
      "To identify the root cause of recurring failures",
      "To restore normal service operation as quickly as possible with minimal business impact",
      "To plan and implement changes to the IT infrastructure",
      "To proactively prevent incidents from occurring through monitoring"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 150,
    q: "How is Incident Priority calculated in ServiceNow?",
    opts: [
      "Priority is manually assigned by the agent based on their judgement",
      "Priority is automatically derived from the combination of Impact and Urgency",
      "Priority is set by the caller when they raise the Incident",
      "Priority is determined by the SLA that fires when the Incident is created"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 151,
    q: "Which of the following are valid states for a ServiceNow Incident? (Select 3)",
    opts: [
      "New",
      "Cancelled",
      "In Progress",
      "Resolved"
    ],
    answer: ["A", "C", "D"], domain: "self-service", community: ""
  },
  {
    id: 152,
    q: "What is the difference between an Incident and a Service Request?",
    opts: [
      "An Incident is created by agents; a Service Request is created by end users",
      "An Incident represents an unplanned disruption; a Service Request is a formal request for something (access, equipment, etc.)",
      "Service Requests always require CAB approval; Incidents do not",
      "They are the same thing — Service Request is an older term for Incident"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 153,
    q: "What is a Major Incident in ServiceNow?",
    opts: [
      "Any Incident with more than 5 work notes added by the agent",
      "A high-impact, high-urgency Incident that requires special coordination and escalation procedures",
      "An Incident that has been open for more than 48 hours without resolution",
      "An Incident that has been escalated to the CAB for approval"
    ],
    answer: "B", domain: "self-service", community: ""
  },

  // --- Problem Management ---
  {
    id: 154,
    q: "What is the primary goal of Problem Management?",
    opts: [
      "To restore service as quickly as possible when an Incident occurs",
      "To identify and eliminate the root cause of recurring incidents to prevent future occurrences",
      "To manage the approval process for changes to the IT infrastructure",
      "To track all assets and configuration items in the CMDB"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 155,
    q: "What is a 'Known Error' in ServiceNow Problem Management?",
    opts: [
      "An Incident that has been reported by more than 10 users",
      "A Problem where the root cause has been identified and a workaround or fix is documented",
      "A Change that failed during implementation and caused an outage",
      "A recurring error logged by an automated monitoring tool"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 156,
    q: "What is the difference between a Problem and a Known Error?",
    opts: [
      "A Problem has a workaround; a Known Error does not",
      "A Problem is under investigation with no confirmed root cause; a Known Error has a confirmed root cause and documented workaround",
      "Known Errors are visible to end users; Problems are internal only",
      "They are the same record type — Known Error is a sub-state of a Problem"
    ],
    answer: "B", domain: "self-service", community: ""
  },

  // --- Change Management ---
  {
    id: 157,
    q: "What are the three standard Change Request types in ServiceNow? (Select 3)",
    opts: [
      "Standard",
      "Expedited",
      "Normal",
      "Emergency"
    ],
    answer: ["A", "C", "D"], domain: "self-service", community: ""
  },
  {
    id: 158,
    q: "What is a Standard Change in ServiceNow?",
    opts: [
      "Any change that follows the normal approval process through the CAB",
      "A pre-approved, low-risk, repeatable change that does not require CAB review each time",
      "A change submitted during a standard maintenance window only",
      "A change that affects a single user rather than a shared service"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 159,
    q: "What is a Normal Change in ServiceNow, and what approval does it require?",
    opts: [
      "Any change submitted during normal business hours — no approval required",
      "A change that requires risk assessment and approval, typically via the Change Advisory Board (CAB)",
      "A pre-approved change type with no formal review process",
      "A change that only requires the submitter's manager to approve"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 160,
    q: "What is an Emergency Change in ServiceNow?",
    opts: [
      "A change that requires 30 days advance notice and full board approval",
      "An urgent change to fix a critical issue, with an expedited or post-implementation approval process",
      "A change that bypasses all documentation requirements",
      "A change triggered automatically by a Major Incident workflow"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 161,
    q: "What must every Change Request include regardless of its type? (Select 2)",
    opts: [
      "An implementation plan",
      "A CAB meeting agenda",
      "A backout (rollback) plan",
      "An attached Performance Analytics report"
    ],
    answer: ["A", "C"], domain: "self-service", community: ""
  },
  {
    id: 162,
    q: "What is the Change Calendar in ServiceNow used for?",
    opts: [
      "A calendar showing when SLA schedules are active",
      "A visual timeline of scheduled and in-progress changes to prevent conflicts and manage risk",
      "A calendar for scheduling CAB meetings and sending invitations",
      "A display showing each agent's change workload for the month"
    ],
    answer: "B", domain: "self-service", community: ""
  },

  // --- Flow Designer & Workflow ---
  {
    id: 163,
    q: "What is Flow Designer in ServiceNow?",
    opts: [
      "A tool for designing form layouts and UI elements",
      "A no-code/low-code automation tool for building process flows using triggers and actions",
      "A diagramming tool for mapping business processes for documentation",
      "A module for designing report layouts and dashboard configurations"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 164,
    q: "What is a 'Trigger' in the context of Flow Designer?",
    opts: [
      "A condition evaluated at each step of the flow to determine the next path",
      "The event or condition that initiates a flow — such as a record being created or updated",
      "A notification sent to an approver to start an approval task",
      "An action in the flow that triggers an outbound REST call"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 165,
    q: "What is a Subflow in Flow Designer?",
    opts: [
      "A smaller version of a flow designed for use on mobile devices",
      "A reusable, standalone flow that can be called from within other flows",
      "A flow that runs as a background (asynchronous) process only",
      "A flow restricted to running within a single application scope"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 166,
    q: "What is an Approval in the ServiceNow process automation context?",
    opts: [
      "A mandatory review step where a designated user must approve or reject a request before it proceeds",
      "An automated validation step that checks data completeness before saving",
      "A read-only notification sent to a manager when a high-priority task is created",
      "A system-generated confirmation sent to the requester when their request is fulfilled"
    ],
    answer: "A", domain: "self-service", community: ""
  },
  {
    id: 167,
    q: "In ServiceNow, what is the difference between a Flow and a Workflow (legacy)?",
    opts: [
      "Flows run client-side; Workflows run server-side",
      "Flow Designer uses a modern no-code interface and is the recommended approach; Workflow Editor is the older technology being replaced",
      "Workflows support approvals; Flows do not",
      "Flows are only available with the ITSM Pro licence; Workflows are included in base ServiceNow"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 168,
    q: "What type of trigger in Flow Designer fires when a record in a table meets specified conditions?",
    opts: [
      "Schedule trigger",
      "Inbound email trigger",
      "Record-based trigger",
      "Application trigger"
    ],
    answer: "C", domain: "self-service", community: ""
  },

  // --- Service Portal (Self-Service context) ---
  {
    id: 169,
    q: "What is a Widget in the ServiceNow Service Portal?",
    opts: [
      "A small application icon shown in the Application Navigator",
      "A modular, reusable component made of HTML, CSS, and JavaScript that displays content or functionality on a portal page",
      "A pre-built integration connector available in the ServiceNow Store",
      "A mini-form embedded in an email notification"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 170,
    q: "What technology is the ServiceNow Service Portal built on?",
    opts: [
      "React.js",
      "AngularJS (Angular 1)",
      "Vue.js",
      "Vanilla JavaScript only"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 171,
    q: "In Service Portal, what is a 'Theme' used for?",
    opts: [
      "Setting which users have access to the portal",
      "Defining the visual styling of the portal including colours, fonts, and logos",
      "Specifying which widgets appear on each page of the portal",
      "Configuring the search behaviour across portal pages"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 172,
    q: "How does a user access the Service Portal in ServiceNow?",
    opts: [
      "Through the Application Navigator under 'Self-Service'",
      "Via a separate URL path such as /sp on the instance (e.g. instance.service-now.com/sp)",
      "Only through the mobile app — it is not available on desktop",
      "By navigating to System > Portal in the admin console"
    ],
    answer: "B", domain: "self-service", community: ""
  },

  // --- General Process Automation ---
  {
    id: 173,
    q: "What is an Inbound Action in ServiceNow?",
    opts: [
      "A rule that processes inbound email and performs actions such as creating or updating records",
      "An action that fires when a user logs into the instance",
      "A server-side script that handles incoming API calls",
      "A Flow Designer action that pulls data from an external source"
    ],
    answer: "A", domain: "self-service", community: ""
  },
  {
    id: 174,
    q: "What is an Event in ServiceNow?",
    opts: [
      "A calendar entry for a scheduled Change or maintenance window",
      "A system record that represents something that happened — used to trigger notifications, scripts, or workflows",
      "A user action logged for compliance auditing",
      "A CMDB record representing a real-world IT event or outage"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 175,
    q: "What is a Script Action in ServiceNow?",
    opts: [
      "A type of Business Rule that fires only when triggered by a script",
      "A server-side script associated with an Event that executes when that event fires",
      "An action in Flow Designer that runs a GlideRecord script",
      "A Client Script that is called programmatically from another script"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 176,
    q: "What is the purpose of Catalog Tasks (sc_task) in a Service Catalog request?",
    opts: [
      "Tasks created for the requester to complete as part of their service request",
      "Assignments created for fulfilment teams to complete work as part of delivering a catalog request",
      "Automated scripts that run when a catalog item is ordered",
      "Approval tasks sent to managers when a high-value item is requested"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 177,
    q: "In the ServiceNow Incident Management lifecycle, what is the difference between 'Resolved' and 'Closed'?",
    opts: [
      "Resolved and Closed are the same state — the terms are used interchangeably",
      "Resolved means the fix has been applied and is awaiting user confirmation; Closed means the Incident is fully complete",
      "Resolved means the agent has closed the ticket; Closed requires admin approval",
      "Closed is an intermediate state; Resolved is the final state"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 178,
    q: "What is a Virtual Agent in ServiceNow?",
    opts: [
      "A role assigned to a senior service desk agent who handles escalated issues",
      "An AI-powered conversational interface that handles common user requests and questions automatically",
      "An automated monitoring agent that detects CI failures in the CMDB",
      "A robotic process automation (RPA) tool for automating desktop tasks"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 179,
    q: "What is the Now Mobile app in ServiceNow?",
    opts: [
      "A mobile version of ServiceNow Studio for developing applications on the go",
      "A mobile application allowing employees and agents to access ServiceNow functionality from their phones",
      "A mobile-specific reporting tool for executive dashboards",
      "A separate product from ServiceNow designed for IT asset management only"
    ],
    answer: "B", domain: "self-service", community: ""
  },
  {
    id: 180,
    q: "What does 'Configuration vs Customisation' mean in the ServiceNow context, and which is preferred?",
    opts: [
      "They mean the same thing — ServiceNow does not distinguish between the two",
      "Configuration uses built-in tools and is upgrade-safe; Customisation modifies base system code and risks upgrade conflicts. Configuration is always preferred",
      "Customisation is preferred because it provides more flexibility and better performance",
      "Configuration is for admins; Customisation is for developers — both are equally recommended"
    ],
    answer: "B", domain: "self-service", community: ""
  },

  // ═══════════════════════════════════════════════════════
  // DOMAIN 5: Introduction to Development (10%) — IDs 181–200
  // ═══════════════════════════════════════════════════════

  // --- Business Rules ---
  {
    id: 181,
    q: "What is a Business Rule in ServiceNow?",
    opts: [
      "A client-side script that runs in the browser when a form is loaded",
      "A server-side script that executes when a database operation (insert, update, delete, query) occurs on a table",
      "A scheduled script that runs at a defined time interval",
      "A workflow step that enforces approval requirements"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },
  {
    id: 182,
    q: "Which Business Rule timing option runs BEFORE the record is saved to the database, allowing the script to modify field values before they are committed?",
    opts: [
      "After",
      "Async",
      "Before",
      "Display"
    ],
    answer: "C", domain: "dev-intro", community: ""
  },
  {
    id: 183,
    q: "Which Business Rule timing option runs AFTER the record is saved, in a separate background thread, without blocking the user?",
    opts: [
      "Before",
      "Display",
      "After",
      "Async"
    ],
    answer: "D", domain: "dev-intro", community: ""
  },
  {
    id: 184,
    q: "When does a 'Display' Business Rule fire?",
    opts: [
      "When a record is inserted into the database",
      "When a record is retrieved and loaded for display in a form, before the form is shown to the user",
      "When a field on the form loses focus",
      "When a record is deleted from the database"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },
  {
    id: 185,
    q: "Which of the following are valid 'When' trigger options for a Business Rule? (Select 2)",
    opts: [
      "Before",
      "On Submit",
      "Async",
      "On Load"
    ],
    answer: ["A", "C"], domain: "dev-intro", community: ""
  },
  {
    id: 186,
    q: "In a Business Rule, which object is used to access and modify the current record's field values?",
    opts: [
      "g_form",
      "current",
      "g_record",
      "this"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },

  // --- Client Scripts ---
  {
    id: 187,
    q: "What is a Client Script in ServiceNow?",
    opts: [
      "A server-side script that runs when a record is queried",
      "A script that runs in the user's browser to control form behaviour dynamically",
      "A scheduled script that runs on the client's local machine",
      "A script embedded in a notification template to personalise email content"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },
  {
    id: 188,
    q: "Which Client Script type fires when a form is first loaded?",
    opts: [
      "onChange",
      "onSubmit",
      "onLoad",
      "onCellEdit"
    ],
    answer: "C", domain: "dev-intro", community: ""
  },
  {
    id: 189,
    q: "Which Client Script type fires when the value of a specific field is changed by the user?",
    opts: [
      "onLoad",
      "onSubmit",
      "onCellEdit",
      "onChange"
    ],
    answer: "D", domain: "dev-intro", community: ""
  },
  {
    id: 190,
    q: "Which Client Script type fires when the user clicks Submit on a form, before the record is saved?",
    opts: [
      "onLoad",
      "onChange",
      "onSubmit",
      "onCellEdit"
    ],
    answer: "C", domain: "dev-intro", community: ""
  },
  {
    id: 191,
    q: "In a Client Script, which API object is used to interact with form fields (e.g. get/set values, make fields mandatory)?",
    opts: [
      "current",
      "g_form",
      "g_user",
      "g_record"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },
  {
    id: 192,
    q: "What is the key difference between a Client Script and a Business Rule?",
    opts: [
      "Client Scripts run faster because they execute on the server, not the browser",
      "Client Scripts run in the user's browser and control form behaviour; Business Rules run on the server and control database behaviour",
      "Business Rules can only read data; Client Scripts can both read and write",
      "Client Scripts are triggered by system events; Business Rules are triggered by user actions"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },

  // --- UI Policies ---
  {
    id: 193,
    q: "What is a UI Policy in ServiceNow?",
    opts: [
      "A server-side rule that enforces field requirements when data is saved",
      "A declarative, client-side rule that controls form field behaviour (mandatory, visible, read-only) based on conditions",
      "A policy that controls which users can see which UI elements across the platform",
      "A rule that defines the visual theme applied to a specific form view"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },
  {
    id: 194,
    q: "What are the three actions a UI Policy can perform on a form field?",
    opts: [
      "Create, Read, and Delete",
      "Mandatory, Read-only, and Visible (show/hide)",
      "Required, Locked, and Highlighted",
      "Active, Inactive, and Archived"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },
  {
    id: 195,
    q: "What does the 'Reverse if false' option on a UI Policy action do?",
    opts: [
      "It deletes the UI Policy if it has never fired",
      "When the UI Policy condition becomes false, it automatically reverses the action (e.g. un-makes a field mandatory)",
      "It runs the UI Policy in the opposite order to other UI Policies",
      "It applies the UI Policy actions to the next record when the current one is saved"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },
  {
    id: 196,
    q: "What is a UI Policy Script used for?",
    opts: [
      "Writing server-side logic that overrides the UI Policy conditions",
      "Adding JavaScript to execute custom logic as part of the UI Policy when conditions are met",
      "Automatically generating UI Policies from Business Rule logic",
      "Running the UI Policy asynchronously in the background"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },

  // --- Script Includes ---
  {
    id: 197,
    q: "What is a Script Include in ServiceNow?",
    opts: [
      "A server-side reusable JavaScript library/class that can be called from Business Rules, other scripts, or REST APIs",
      "A snippet of code included inside a notification template",
      "A client-side script that is automatically included on every form load",
      "A scheduled job that includes and runs multiple scripts in sequence"
    ],
    answer: "A", domain: "dev-intro", community: ""
  },
  {
    id: 198,
    q: "What does the 'Client Callable' option on a Script Include enable?",
    opts: [
      "It allows the Script Include to run on both client and server simultaneously",
      "It allows the Script Include to be invoked from client-side scripts using GlideAjax",
      "It makes the Script Include available to external REST API callers",
      "It allows the Script Include to be called directly from a notification template"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },

  // --- GlideRecord ---
  {
    id: 199,
    q: "What is GlideRecord in ServiceNow?",
    opts: [
      "A UI component for displaying table records in a grid format",
      "A server-side JavaScript API used to query and manipulate records in ServiceNow tables",
      "A client-side API for reading field values from the current form",
      "A REST API endpoint for accessing ServiceNow data from external systems"
    ],
    answer: "B", domain: "dev-intro", community: ""
  },
  {
    id: 200,
    q: "Which of the following are valid GlideRecord operations? (Select 2)",
    opts: [
      "query() — executes the database query and iterates through results",
      "render() — renders the record as HTML for display on a form",
      "insert() — inserts a new record into the table",
      "publish() — publishes the record to the Service Portal"
    ],
    answer: ["A", "C"], domain: "dev-intro", community: ""
  }

];

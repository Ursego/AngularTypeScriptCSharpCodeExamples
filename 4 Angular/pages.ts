import { Page } from '../core/models/page';
import { FilingConfigComponent } from '../efile/components/filing-config/filing-config.component';
import { AtomicNodesComponent } from '../maintain/components/atomic-nodes/atomic-nodes.component';
import { GeneralSettingsComponent } from '../maintain/components/general-settings/general-settings.component';
import { JurisdictionLocksComponent } from '../maintain/components/jurisdiction-locks/jurisdiction-locks.component';
import { MaintainFieldsComponent } from '../maintain/components/maintain-fields/maintain-fields.component';
import { DataChgSubComponent } from '../eventmodel/components/data-chg-sub/data-chg-sub.component';
import { MaintainSearchConfigComponent } from '../maintain/components/maintain-search-config/maintain-search-config.component';
import { RoleTabAccessComponent } from '../maintain/components/role-tab-access/role-tab-access.component';
import { TemplateAssignmentComponent } from '../maintain/components/template-assignment/template-assignment.component';
import { SetupFormsAccessComponent } from '../maintain/components/setup-forms-access/setup-forms-access.component';
import { SetupFormsGroupsComponent } from '../maintain/components/setup-forms-groups/setup-forms-groups.component';
import { SpreadsheetTemplatesComponent } from '../maintain/components/spreadsheet-templates/spreadsheet-templates.component';
import { MaintainToolbarComponent } from '../maintain/components/toolbar/maintain-toolbar.component';
import { TransactionsComponent } from '../maintain/components/transactions/transactions.component';
import { XslTemplatesComponent } from '../maintain/components/xsl-templates/xsl-templates.component';
import { ConfigSearchHeaderInOutComponent } from '../property-records/components/config-search-header-in-out/config-search-header-in-out.component';
import { DataletConfigComponent } from '../property-records/components/datalet-config/datalet-config.component';
import { DataletHeaderComponent } from '../property-records/components/datalet-header/datalet-header.component';
import { DataletSettingsComponent } from '../property-records/components/datalet-settings/datalet-settings.component';
import { DataletsMenuComponent } from '../property-records/components/datalets-menu/datalets-menu.component';
import { DataModelExtensionComponent } from '../inquire/components/data-model-extension/data-model-extension.component';
import { ListManagementComponent } from '../property-records/components/list-management/list-management.component';
import { ReportConfigComponent } from '../property-records/components/report-config/report-config.component';
import { ReportDefinitionComponent } from '../property-records/components/report-definition/report-definition.component';
import { SearchSettingsComponent } from '../property-records/components/search-settings/search-settings.component';
import { SearchesMenuComponent } from '../property-records/components/searches-menu/searches-menu.component';
import { AdvancedConfigComponent } from '../sitewide-settings/components/advanced-config/advanced-config.component';
import { MapConfigComponent } from '../sitewide-settings/components/map-config/map-config.component';
import { SessionManagementComponent } from '../users-role-access/components/session-management/session-management.component';
import { UserManagementSettingsComponent } from '../users-role-access/components/user-management/settings/user-management-settings.component';
import { UserManagementComponent } from '../users-role-access/components/user-management/user-management.component';

import {
  eFile,
  cashieringIntegration,
  maintain,
  propertyRecords,
  sitewideSettings,
  usersAccess,
  ac2Jobs,
  logs,
  maintainLocal,
  inquire,
  appsUtilities,
  eventModel,
  ac2,
  ac2JobsLocal,
} from './sections';

import { MaintainRoleSettingsComponent } from '../maintain/components/maintain-role-settings/maintain-role-settings.component';
import { OnDemandJobComponent } from '../reports-jobs/components/on-demand-job/on-demand-job.component';
import { InformationReportComponent } from '../users-role-access/components/user-management/information-report/information-report.component';
import { SummaryReportComponent } from '../users-role-access/components/user-management/summary-report/summaryreport.component';
import { AccessProfileReportComponent } from '../users-role-access/components/user-management/access-profile-report/access-profile-report.component';
import { IdFormatsComponent } from '../maintain/components/id-formats/id-formats.component';
import { NameSegmentDefinitionComponent } from '../maintain/components/name-segment-definition/name-segment-definition.component';
import { FilingServiceErrorlogComponent } from '../efile/components/filing-service-errorlog/filing-service-errorlog.component';
import { TaxRollsComponent } from '../property-records/components/tax-rolls/tax-rolls.component';
import { LovConfigurationComponent } from '../property-records/components/lov-configuration/lov-configuration.component';
import { JobsAccessComponent } from '../reports-jobs/components/jobs-access/jobs-access.component';
import { QuickLinksComponent } from '../maintain/components/quick-links/quick-links.component';
import { QuickViewLayoutsComponent } from '../maintain/components/quick-view-layouts/quick-view-layouts.component';
import { SiteDateJurSettingsComponent } from '../sitewide-settings/components/site-date-jur-settings/site-date-jur-settings.component';
import { AuthenticationProviderComponent } from '../sitewide-settings/components/authentication-provider/authentication-provider.component';
import { AuditReportsComponent } from '../users-role-access/components/user-management/audit-reports/audit-reports.component';
import { MapServerSettingsComponent } from '../sitewide-settings/components/map-server-settings/map-server-settings.component';
import { DataPanelConfigComponent } from '../maintain/components/data-panel-configuration/data-panel-configuration.component';
import { SystemKeySettingsComponent } from '../sitewide-settings/components/system-key-settings/system-key-settings.component';
import { AuditConfigurationComponent } from '../sitewide-settings/components/audit-configuration/audit-configuration.component';
import { ErrorLogsComponent } from '../logs/components/error-logs/error-logs.component';
import { SystemDriveComponent } from '../inquire/components/system-drive/system-drive.component';
import { SiteMaintenanceComponent } from '../sitewide-settings/components/site-maintenance/site-maintenance.component';
import { BusinessAreasComponent } from '../inquire/components/business-areas/business-areas.component';
import { SecurityLogsComponent } from '../logs/components/security-logs/security-logs.component';
import { DataIntegrityCheckComponent } from '../apps-utilities/components/data-integrity-check/data-integrity-check.component';
import { ISketchComponent } from '../apps-utilities/components/isketch/isketch.component';
import { PrintManagerUtilityComponent } from '../apps-utilities/components/print-manager-utility/print-manager-utility.component';
import { SetupFormMenusComponent } from '../maintain/components/setup-form-menus/setup-form-menus.component';
import { MailQueueErrorlogComponent } from '../logs/components/mail-queue-error-logs/mail-queue-error-logs.component';
import { BusinessEventErrorSummaryLogComponent } from '../eventmodel/components/business-events/business-event-summary/business-event-summary-details.component';
import { DataEventErrorSummaryLogComponent } from '../eventmodel/components/data-events/data-event-summary-details/data-event-summary-details.component';
import { DataFeedLogComponent } from '../data-feed-mgmnt/components/data-feed-events/data-feed-details.component';
import { SketchComponent } from '../maintain/components/isketch/isketch.component';
import { DataEventTriggersComponent } from '../data-event-triggers/components/data-event-triggrs/data-event-triggrs.component';
import { DataEventTriggrsSettingsComponent } from '../data-event-triggers/components/data-event-triggrs-settings/data-event-triggrs-settings.component';
import { DataEventTriggrsAddDialogComponent } from '../data-event-triggers/components/data-event-triggrs-addDialog/data-event-triggrs-addDialog.component';
import { DataEventTriggrsFileUpldDialogComponent } from '../data-event-triggers/components/data-event-triggrs-fileUploadDialog/data-event-triggrs-fileUpldDialog.component';
import { DataEventTriggrsRuleDialogComponent } from '../data-event-triggers/components/data-event-triggrs-ruleDialog/data-event-triggrs-ruleDialog.component';
import { DataEventTriggrsFactsetDialogComponent } from '../data-event-triggers/components/data-event-triggrs-factsetDialog/data-event-triggrs-factsetDialog.component';
import { ExternalLinksComponent } from '../maintain/components/external-links/external-links.component';
import { GenericLettersComponent } from '../maintain/components/generic-letters/generic-letters.component';
import { NamedSqlQueryComponent } from '../sitewide-settings/components/named-sql-queries/named-sql-queries.component';
import { JobSqlQueryComponent } from '../reports-jobs/components/job-sql-queries/job-sql-queries.component';
import { BusRuleSetForWFComponent } from '../bus-ruleset-wf/components/bus-ruleset-wf/bus-ruleset-wf.component';
import { BusRuleSetForWFSettingsComponent } from '../bus-ruleset-wf/components/bus-ruleset-wf-settings/bus-ruleset-wf-settings.component';
import { BusRuleSetForWFRuleDialogComponent } from '../bus-ruleset-wf/components/bus-ruleset-wf-rulesDialog/bus-ruleset-wf-rulesDialog.component';
import { BusRuleSetForWFFactsetDialogComponent } from '../bus-ruleset-wf/components/bus-ruleset-wf-factsetDialog/bus-ruleset-wf-factsetDialog.component';
import { SigninSettingsComponent } from '../sitewide-settings/components/signin-settings/signin-settings.component';
import { AssessorAssignmentComponent } from '../maintain/components/assessor-assignment/assessor-assignment.component';
import { JobTokensComponent } from '../reports-jobs/components/job-tokens/job-tokens.component';
import { JobsConfigComponent } from '../reports-jobs/components/jobs-config/jobs-config.component';
import { TaxYearSettingsComponent } from '../sitewide-settings/components/tax-year-settings/tax-year-settings.component';
import { TCSearchConfigComponent } from '../tyler-cashiering-integration/components/search-configuration/search-config.component';
import { AppLauncherSettingsComponent } from '../sitewide-settings/components/app-luncher-settings/app-launcher.component';
import { HelpConfigurationComponent } from '../sitewide-settings/components/help-config/help-config.component';
import { JobFileManagementComponent } from '../reports-jobs/components/job-file-management/job-file-management.component';
import { OAuthClientSettingsComponent } from '../sitewide-settings/components/oauth-client-settings/oauth-client-settings.component';
import { ContentManagerUtilityComponent } from '../apps-utilities/components/content-manager-utility/content-manager-utility.component';
import { BatchCalcConfigurationComponent } from '../reports-jobs/components/batch-calc-config/batch-calc-config.component';
import { DownloadUploadFolderAccessComponent } from '../reports-jobs/components/download-upload-folder-access/download-upload-folder-access.component';

// tslint:disable-next-line:max-line-length
// Reference the section inside the route so it can be listed on the overview page
export const angularPagesConfig: Page[] = [
  {
    section: usersAccess,
    name: $localize`:user management label text@@userManagementLabelText:User Management`,
    path: 'usermanagement/users',
    component: UserManagementComponent,
    fullSize: true,
  },
  {
    section: usersAccess,
    path: 'usermanagement/settings',
    component: UserManagementSettingsComponent,
    fullSize: true,
    displayOn: 'none',
  },
  {
    section: usersAccess,
    name: $localize`:user sessions label text@@userSessionsLabelText:User Sessions`,
    path: 'usermanagement/sessions',
    component: SessionManagementComponent,
    fullSize: true,
  },
  {
    // section: usersAccess, Note : this section should be call in user management and it's not supposed to be shown on the global menu
    name: $localize`:user informatio report label@@userInformationReportLabel:User Information Report`,
    path: 'usermanagement/informationreport',
    component: InformationReportComponent,
    fullSize: true,
  },
  {
    // section: usersAccess, Note : this section should be call in user management and it's not supposed to be shown on the global menu
    name: $localize`:user summary report label@@userSummaryReportLabel:User Summary Report`,
    path: 'usermanagement/summaryreport',
    component: SummaryReportComponent,
    fullSize: true,
  },
  {
    // section: usersAccess, Note : this section should be call in user management and it's not supposed to be shown on the global menu
    name: $localize`:access profile report label@@accessProfielReportLabel:Access Profile Report`,
    path: 'usermanagement/accessprofilereport',
    component: AccessProfileReportComponent,
    fullSize: true,
  },
  {
    // section: usersAccess, Note : this section should be call in user management and it's not supposed to be shown on the global menu
    name: $localize`:user audit reports label@@userAuditReportsLabel:User Audit Reports`,
    path: 'usermanagement/auditreports',
    component: AuditReportsComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:datalet settings label@@dataletSettingsLabel:Datalet Settings`,
    path: 'prm/dataletsettings',
    component: DataletSettingsComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:search settings label@@searchSettingsLabel:Search Settings`,
    path: 'prm/searchsettings',
    component: SearchSettingsComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:search header input and results label@@searchHeaderInputAndResultsLabel:Search Header, Input & Results`,
    path: 'prm/searches',
    component: ConfigSearchHeaderInOutComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:search menu options and access label@@searchMenuOptionsAndAccessLabel:Search Menu, Options & Access`,
    path: 'prm/searchesmenu',
    component: SearchesMenuComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:datalet menu options and access label@@dataletMenuOptionsAndAccessLabel:Datalet Menu, Options & Access`,
    path: 'prm/dataletsmenu',
    component: DataletsMenuComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:lov configuration label@@lovConfigurationLabel:LOV Configuration`,
    path: 'prm/lovconfiguration',
    component: LovConfigurationComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:datalet configuration label@@dataletConfigurationLabel:Datalet Configuration`,
    path: 'prm/dataletsconfig',
    component: DataletConfigComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:datalet header configuration label@@dataletHeaderConfigurationLabel:Datalet Header Configuration`,
    path: 'prm/dataletheader',
    component: DataletHeaderComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:report data configuration label@@reportDataConfigurationLabel:Report Data Configuration`,
    path: 'prm/reportconfig',
    component: ReportConfigComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:report settings label@@reportSettingsLabel:Report Settings`,
    path: 'prm/reportdef',
    component: ReportDefinitionComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:list management label@@listManagementLabel:List Management`,
    path: 'prm/listmanagement',
    component: ListManagementComponent,
    fullSize: true,
  },
  {
    section: propertyRecords,
    name: $localize`:roll types for searches label@@rollTypesForSearchesLabel:Roll Types for Searches`,
    path: 'prm/taxrolls',
    component: TaxRollsComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:assign templates label@@assignTemplatesLabel:Assign Templates`,
    path: 'maintain/role-template-assignment',
    fullSize: true,
    component: TemplateAssignmentComponent,
  },
  {
    section: maintain,
    name: $localize`:external links label@@externalLingksLabel:External Links`,
    path: 'maintain/externallinks',
    component: ExternalLinksComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:general settings label@@generalSettingsLabel:General Settings`,
    path: 'maintain/generalsettings',
    component: GeneralSettingsComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:id formats label@@idFormatsLabel:ID Formats`,
    path: 'maintain/id-formats',
    component: IdFormatsComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:name segment definition label@@nameSegmentDefinitionLabel:Name Segment Definition`,
    path: 'maintain/name-segment-definition',
    component: NameSegmentDefinitionComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:quick links configuration label@@quickLinksCOnfigurationLabel:Quick Links Configuration`,
    path: 'maintain/quick-links',
    component: QuickLinksComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:sketch configuration label@@sketchConfigurationLabel:Sketch Configuration`,
    path: 'maintain/isketch',
    component: SketchComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:quck view layouts label@@quckViewLayoutsLabel:Quick View Layouts`,
    path: 'maintain/quick-view-layouts',
    component: QuickViewLayoutsComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:setup form menu label@@setupFormMenuLabel:Setup Form Menu`,
    path: 'maintain/setup-form-menu',
    component: SetupFormMenusComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:role settings label@@roleSettingsLabel:Role Settings`,
    path: 'maintain/rolesettings',
    component: MaintainRoleSettingsComponent,
    fullSize: true,
  },
  {
    section: [maintain, maintainLocal],
    name: $localize`:setup form access label@@setupFormAccessLabel:Setup Form Access`,
    path: 'maintain/setupformsaccess',
    component: SetupFormsAccessComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:setup forms groups label@@setupFormsGroupLabel:Setup Form Groups`,
    path: 'maintain/setupformsgroups',
    component: SetupFormsGroupsComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:tab access label@@tabAcessLabel:Tab Access`,
    path: 'maintain/role-tab-access',
    component: RoleTabAccessComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:spreadsheet templates label@@spreadsheetTemplatesLabel:Spreadsheet Templates`,
    path: 'maintain/spreadsheettemplates',
    component: SpreadsheetTemplatesComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:search configuration label@@searchConfigurationLabel:Search Configuration`,
    path: 'maintain/searchconfig',
    fullSize: true,
    component: MaintainSearchConfigComponent,
  },
  {
    section: maintain,
    name: $localize`:toolbar buttons by role label@@toolbarButtonsByRoleLabel:Toolbar Buttons By Role`,
    path: 'maintain/toolbar',
    fullSize: true,
    component: MaintainToolbarComponent,
  },
  {
    section: maintain,
    name: $localize`:transactions label@@transactionsLabel:Transactions`,
    path: 'maintain/transactions',
    fullSize: true,
    component: TransactionsComponent,
  },
  {
    section: [maintain, maintainLocal],
    name: $localize`:letter templates label@@lettersTemplatesLabel:Letter Templates`,
    path: 'maintain/letters',
    fullSize: true,
    component: GenericLettersComponent,
  },
  {
    section: maintain,
    name: $localize`:assessor assignment rules label@@assessorAssignmentRulesLabel:Assessor Assignment Rules`,
    path: 'maintain/assessorassign',
    fullSize: true,
    component: AssessorAssignmentComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:advanced configuration label@@advancedConfigurationLabel:Advanced Configuration`,
    path: 'info/advancedconfig',
    fullSize: true,
    component: AdvancedConfigComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:authentication provider settings label@@authenticationProviderSettingsLabel:Authentication Provider Settings`,
    path: 'info/authenticationproviders',
    fullSize: true,
    component: AuthenticationProviderComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:help configuration label@@helpConfigurationLabel:Help Configuration`,
    path: 'info/customhelp',
    fullSize: true,
    component: HelpConfigurationComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:map services label@@mapServicesLabel:Map Services`,
    path: 'info/mapservices',
    fullSize: true,
    component: MapConfigComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:site date and jurisdiction settings label@@siteDateAndJurisdictionSettingsLabel:Site, Date & Jurisdiction Settings`,
    path: 'info/settings',
    fullSize: true,
    component: SiteDateJurSettingsComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:site maintanence label@@siteMaintanenceLabel:Site Maintenance`,
    path: 'info/sitemaintenance',
    fullSize: true,
    component: SiteMaintenanceComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:map configuration label@@mapConfigurationLabel:Map Configuration`,
    path: 'info/mapconfig',
    component: MapServerSettingsComponent,
    fullSize: true,
  },
  {
    section: sitewideSettings,
    name: $localize`:signin account and password settings label@@signinAccountAndPasswordSettingsLabel:Sign In, Account & Password Settings`,
    path: 'info/signinsettings',
    fullSize: true,
    component: SigninSettingsComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:system key settings label@@systemLeySettingsLabel:System Key Settings`,
    path: 'info/systemkeys',
    fullSize: true,
    component: SystemKeySettingsComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:audit configuration label@@auditConfigurationLabel:Audit Configuration`,
    path: 'info/auditconfig',
    fullSize: true,
    component: AuditConfigurationComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:named sql queries label@@namedSQLQueriesLabel:Named SQL Queries`,
    path: 'info/namedqueries',
    fullSize: true,
    component: NamedSqlQueryComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:tax year settings label@@taxYearSettingsLabel:Tax Year Settings`,
    path: 'info/taxyearsettings',
    fullSize: true,
    component: TaxYearSettingsComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:app launcher label@@appLauncherLabel:App Launcher`,
    path: 'info/applaunchersettings',
    fullSize: true,
    component: AppLauncherSettingsComponent,
  },
  {
    section: maintain,
    name: $localize`:tab definition label@@tabDefinitionLabel:Tab Definition`,
    path: 'maintain/atomicnodes',
    fullSize: true,
    component: AtomicNodesComponent,
  },
  {
    section: maintain,
    name: $localize`:fields label@@fieldsLabel:Fields`,
    path: 'maintain/fields',
    component: MaintainFieldsComponent,
    fullSize: true,
  },
  {
    section: [maintain, maintainLocal],
    name: $localize`:jurisdiction locks label@@jurisdictionLocksLabel:Jurisdiction Locks`,
    path: 'maintain/jurisdictionlocks',
    component: JurisdictionLocksComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:templates label@@templatesLabel:Templates`,
    path: 'maintain/xsl-templates',
    component: XslTemplatesComponent,
    fullSize: true,
  },
  {
    section: eFile,
    name: $localize`:filing transforms label@@filingTransfromsLabel:Filing Transforms`,
    path: 'efile/filingconfig',
    component: FilingConfigComponent,
    fullSize: true,
  },
  {
    section: inquire,
    name: $localize`:business areas label@@businessAreasLabel:Business Areas`,
    path: 'inquire/businessareas',
    component: BusinessAreasComponent,
    fullSize: true,
  },
  {
    section: inquire,
    name: $localize`:system drive access label@@systemDriveAccessLabel:System Drive Access`,
    path: 'inquire/systemdrive',
    component: SystemDriveComponent,
    fullSize: true,
  },
  {
    section: inquire,
    name: $localize`:data model extension label@@dataModelExtensionLabel:Data Model Extension`,
    path: 'inquire/datamodelextension',
    component: DataModelExtensionComponent,
    fullSize: true,
  },
  {
    section: ac2Jobs,
    name: $localize`:on demand job assignment label@@onDemanfJobAssignmentLabel:On Demand Job Assignment`,
    path: 'jobs/ondemandjobassignment',
    component: OnDemandJobComponent,
    fullSize: true,
  },
  {
    section: eventModel,
    name: $localize`:data event queues or errors label@@dataEventQueuesOrErrorsLabel:Data Event Queues / Errors`,
    path: 'eventmodel/dataeventservices',
    component: DataEventErrorSummaryLogComponent,
    fullSize: true,
  },
  {
    section: eventModel,
    name: $localize`:business event queues or errors label@@businessEventQueuesOrErrorsLabel:Business Event Queues / Errors`,
    path: 'eventmodel/businesseventservices',
    component: BusinessEventErrorSummaryLogComponent,
    fullSize: true,
  },
  {
    section: eventModel,
    name: $localize`:data event triggers and rules label@@dataEventTriggersAndRulesLabel:Data Event Triggers & Rules`,
    path: 'eventmodel/dataevents',
    component: DataEventTriggersComponent,
    fullSize: true,
  },
  {
    section: eventModel,
    name: $localize`:data event triggers and rules label@@dataEventTriggersAndRulesLabel:Data Event Triggers & Rules`,
    path: 'eventmodel/dataeventsSettings/:emRxlTrigId',
    component: DataEventTriggrsSettingsComponent,
    fullSize: true,
    displayOn: 'none',
  },
  {
    section: eventModel,
    name: $localize`:data event triggers and rules label@@dataEventTriggersAndRulesLabel:Data Event Triggers & Rules`,
    path: 'eventmodel/dataeventsAdd',
    component: DataEventTriggrsAddDialogComponent,
    fullSize: true,
    displayOn: 'none',
  },
  {
    section: eventModel,
    name: $localize`:data event triggers and rules label@@dataEventTriggersAndRulesLabel:Data Event Triggers & Rules`,
    path: 'eventmodel/dataeventsAddEditRule',
    component: DataEventTriggrsRuleDialogComponent,
    fullSize: true,
    displayOn: 'none',
  },
  {
    section: eventModel,
    name: $localize`:data event triggers and rules label@@dataEventTriggersAndRulesLabel:Data Event Triggers & Rules`,
    path: 'eventmodel/dataeventsAddEditFactset',
    component: DataEventTriggrsFactsetDialogComponent,
    fullSize: true,
    displayOn: 'none',
  },
  {
    section: eventModel,
    name: $localize`:data event triggers and rules label@@dataEventTriggersAndRulesLabel:Data Event Triggers & Rules`,
    path: 'eventmodel/dataeventsFileUpload',
    component: DataEventTriggrsFileUpldDialogComponent,
    fullSize: true,
    displayOn: 'none',
  },
  {
    section: eventModel,
    name: $localize`:data change subscriptions label@@dataChangeSubscriptions:Data Change Subscriptions`,
    path: 'eventmodel/subscriptions',
    component: DataChgSubComponent,
    fullSize: true,
    featureFlag: 'FF_DataChangesWebApi_Enable',
  },
  {
    section: ac2,
    name: $localize`:business rulesets for workflows label@@businessRulesetsForWorkflowsLabel:Business Rulesets for Workflows`,
    path: 'ac/rules',
    component: BusRuleSetForWFComponent,
    fullSize: true,
  },
  {
    section: ac2,
    name: $localize`:business rulesets for workflows label@@businessRulesetsForWorkflowsLabel:Business Rulesets for Workflows`,
    path: 'ac/rules/busruleswfSettings/:busRuleSetWFLogEntryId',
    component: BusRuleSetForWFSettingsComponent,
    fullSize: true,
    displayOn: 'none',
  },

  {
    section: ac2,
    name: $localize`:business rulesets for ruleset label@@businessRulesetsForRulesetLabel:Business Rulesets for Ruleset`,
    path: 'ac/rules/busruleswfAddEditRule',
    component: BusRuleSetForWFRuleDialogComponent,
    fullSize: true,
    displayOn: 'none',
  },
  {
    section: ac2,
    name: $localize`:tables for factset label@@tablesForFactsetLabel:Tables for Factset`,
    path: 'ac/rules/busruleswfAddEditFactset',
    component: BusRuleSetForWFFactsetDialogComponent,
    fullSize: true,
    displayOn: 'none',
  },
  {
    section: ac2,
    name: $localize`:data feed management label@@dataFeedManagementLabel:Data Feed Management`,
    path: 'ac2/datafeedmanagement',
    component: DataFeedLogComponent,
    fullSize: true,
  },
  {
    section: logs,
    name: $localize`:page name for a page where users can view system errors@@errorLogsPageName:Error Logs`,
    path: $localize`:routed url@@errorLogsUrl:logs/error`,
    component: ErrorLogsComponent,
    fullSize: true,
  },
  {
    section: logs,
    name: $localize`:filing service error log page name@@filingServiceErrorLogPageName:Filing Service Error Log`,
    path: 'efile/filing-service-errorlog',
    component: FilingServiceErrorlogComponent,
    fullSize: true,
  },
  {
    section: logs,
    name: $localize`:security logs page name@@securityLogsPageName:Security Logs`,
    path: 'logs/security',
    component: SecurityLogsComponent,
    fullSize: true,
  },
  {
    section: logs,
    name: $localize`:mail service error logs page name@@mailServiceErrorLogsPageName:Mail Service Error Logs`,
    path: 'logs/mail-service-errorlog',
    component: MailQueueErrorlogComponent,
    fullSize: true,
  },
  {
    section: [ac2Jobs, ac2JobsLocal],
    name: $localize`:report and job queries label text@@reportJobSqlQueriesLabelText:Report & Job SQL Queries`,
    path: 'Reports/jobSqlQuery',
    component: JobSqlQueryComponent,
    fullSize: true,
  },
  {
    section: [ac2Jobs, ac2JobsLocal],
    name: $localize`:report and job access label@@reportsAndJobAccessLabel:Report & Job Access`,
    path: 'Reports/JobsAccess',
    component: JobsAccessComponent,
    fullSize: true,
  },
  {
    section: [ac2Jobs],
    name: $localize`:download and upload folder access label@@downloadAndUploadFolderAccessLabel:Download & Upload Folder Access`,
    path: 'DownloadUploadFolder/Access',
    component: DownloadUploadFolderAccessComponent,
    fullSize: true,
  },
  {
    section: ac2Jobs,
    name: $localize`:activity center job tokens label@@activityCenterJobTokensLabel:Activity Center Job Tokens`,
    path: 'jobs/token',
    component: JobTokensComponent,
    fullSize: true,
  },
  {
    section: [ac2Jobs],
    name: $localize`:local reports and job file management label@@localReportsAndJobFileManagementLabel:Local Reports & Jobs File Management`,
    path: 'jobs/files',
    component: JobFileManagementComponent,
    fullSize: true,
  },
  {
    section: ac2Jobs,
    name: $localize`:activity center job configuration label@@activityCenterJobConfigurationLabel:Activity Center Job Configuration`,
    path: 'jobs/jobsconfiguration',
    component: JobsConfigComponent,
    fullSize: true,
  },
  {
    section: ac2Jobs,
    name: $localize`:mass calculation configuration label@@massCalculationConfigLabel:Mass Calculation Configuration`,
    path: 'jobs/batch-calc',
    component: BatchCalcConfigurationComponent,
    fullSize: true,
  },
  {
    section: maintain,
    name: $localize`:data panel configuration label@@dataPanelConfigurationLabel:Data Panel Configuration`,
    path: 'maintain/DataPanelConfig',
    component: DataPanelConfigComponent,
    fullSize: true,
  },
  {
    section: appsUtilities,
    name: $localize`:workflow integrity check label@@workflowIntegrityCheckLabel:Workflow Integrity Check`,
    path: 'utilities/data-integrity-check',
    fullSize: true,
    component: DataIntegrityCheckComponent,
  },
  {
    section: appsUtilities,
    name: $localize`:isketch label@@isketchLabel:iSketch`,
    path: 'utilities/isketch-utility',
    fullSize: true,
    component: ISketchComponent,
  },
  {
    section: appsUtilities,
    name: $localize`:print manager label@@printMangerLabel:Print Manager`,
    path: 'utilities/print-manager-utility',
    fullSize: true,
    component: PrintManagerUtilityComponent,
  },
  {
    section: appsUtilities,
    name: $localize`:content manager utility label@@contentManagerUtilityLabel:Content Manager Utility`,
    path: 'utilities/content-manager-utility',
    fullSize: true,
    component: ContentManagerUtilityComponent,
  },
  {
    section: cashieringIntegration,
    name: $localize`:cashiering search configuration label@@cashieringSearchConfigurationLabel:Cashiering Search Configuration`,
    path: 'cashieringIntegration/searchconfig',
    fullSize: true,
    component: TCSearchConfigComponent,
  },
  {
    section: sitewideSettings,
    name: $localize`:oauth client settings label@@oauthClientSettingsLabel:OAuth Client Settings`,
    path: 'info/oauthclientsettings',
    fullSize: true,
    component: OAuthClientSettingsComponent,
  },
];

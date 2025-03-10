import { AdvancedConfigEffect } from './effects/advanced-config.effect';
import { AtomicNodesEffect } from './effects/atomic-nodes.effect';
import { CustomHelpLinksEffect } from './effects/custom-help.effect';
import { DataletHeaderEffect } from './effects/datalet-header.effect';
import { DataletSettingEffect } from './effects/datalet-setting.effect';
import { DataletsConfigurationEffect } from './effects/datalets-configuration.effect';
import { DataletsMenuEffect } from './effects/datalets-menu.effect';
import { FilingConfigEffect } from './effects/filing-config.effect';
import { GeneralSettingsEffect } from './effects/general-settings.effects';
import { GenericLettersEffect } from './effects/generic-letters.effect';
import { IDFormatRecordsEffect } from './effects/id-formats.effect';
import { NameSegmentDefinitionRecordEffect } from './effects/name-segment-definition.effect';
import { nameSegmentDefinitionReducer } from './reducers/name-segment-definition.reducer';
import { JurisdictionLocksEffect } from './effects/jurisdiction-locks.effect';
import { JurisdictionSelectEffect } from './effects/jurisdiction-select.effect';
import { ListManagementCategoryEffect } from './effects/list-management-categories.effect';
import { ListManagementEffect } from './effects/list-management.effect';
import { MaintainFieldsEffect } from './effects/maintain-fields.effect';
import { DataChgSubEffect } from './effects/data-chg-sub.effect';
import { MaintainSearchTypeEffect } from './effects/maintain-search-config.effect';
import { MaintainToolbarEffect } from './effects/maintain-toolbar.effect';
import { MaintainTransactionAccessEffect } from './effects/maintain-transaction-access.effect';
import { MaintainTransactionDefinitionEffect } from './effects/maintain-transaction-definition.effect';
import { MapConfigEffect } from './effects/map-config.effect';
import { ModulesEffect } from './effects/modules.effect';
import { QuickLinksEffect } from './effects/quick-links.effect';
import { ReportConfigEffect } from './effects/report-config.effect';
import { ReportDefinitionEffect } from './effects/report-definition.effect';
import { RoleModulesEffect } from './effects/role-modules.effect';
import { RoleTabAccessEffect } from './effects/role-tab-access.effect';
import { RoleTemplateAssignmentEffect } from './effects/role-template-assignment.effect';
import { RoleTransactionMenuEffect } from './effects/role-transaction-menu.effect';
import { SearchConfigurationEffect } from './effects/search-configuration-effect';
import { SearchSettingEffect } from './effects/search-setting.effect';
import { SearchesMenuEffect } from './effects/searches-menu.effect';
import { SearchTypesEffect } from './effects/searchtypes.effect';
import { SessionManagementEffect } from './effects/session-management.effect';
import { SetupFormsPermissionEffect } from './effects/setup-forms-permission.effect';
import { SetupFormsEffect } from './effects/setup-forms.effect';
import { SetupFormMenuEffect } from './effects/setup-form-menu.effect';
import { SpreadsheetTemplatesEffect } from './effects/spreadsheet-templates.effect';
import { TCSearchConfigEffect } from './effects/tc-search-config.effect';
import { UserManagementEffect } from './effects/user-management.effect';
import { UserRolesEffect } from './effects/users-roles.effect';
import { XslTemplateEffect } from './effects/xsl-template.effect';
import { AdvancedConfigReducer } from './reducers/advanced-config.reducer';
import { AtomicNodesReducer } from './reducers/atomic-nodes.reducer';
import { CustomHelpLinksReducer } from './reducers/custom-help.reducer';
import { DataletsConfigurationReducers } from './reducers/datalet-configuration.reducer';
import { DataletHeaderReducer } from './reducers/datalet-header.reducer';
import { dataletSettingsReducer } from './reducers/datalet-settings.reducer';
import { dataletsMenuReducer } from './reducers/datalets-menu.reducer';
import { DataModelExtensionEffect } from './effects/data-model-extension.effect';
import { DataModelExtensionReducer } from './reducers/data-model-extension.reducer';
import { ErrorReducer } from './reducers/error.reducer';
import { FilingConfigReducer } from './reducers/filing-config.reducer';
import { generalSettingsReducer } from './reducers/general-settings.reducer';
import { GenericLettersReducer } from './reducers/generic-letters.reducer';
import { IDFormatsReducer } from './reducers/id-formats.reducer';
import { JurisdictionLocksReducer } from './reducers/jurisdiction-locks.reducer';
import { JurisdictionSelectReducer } from './reducers/jurisdiction-select.reducer';
import { ListManagementCategoryReducers } from './reducers/list-management-category.reducer';
import { ListManagementReducers } from './reducers/list-management.reducer';
import { MaintainFieldsReducer } from './reducers/maintain-fields.reducer';
import { dataChgSubReducer } from './reducers/data-chg-sub.reducer';
import { maintainSearchConfigReducer } from './reducers/maintain-search-config.reducer';
import { MaintainToolbarReducer } from './reducers/maintain-toolbar.reducer';
import { MaintainTransactionAccessReducer } from './reducers/maintain-transaction-access.reducer';
import { MaintainTransactionDefinitionReducer } from './reducers/maintain-transaction-definition.reducer';
import { MapConfigReducer } from './reducers/map-config.reducer';
import { ModulesReducer } from './reducers/modules.reducer';
import { QuickLinksReducer } from './reducers/quick-links.reducer';
import { ReportConfigReducer } from './reducers/report-config.reducer';
import { ReportDefinitionReducers } from './reducers/report-definition.reducer';
import { RoleModulesReducer } from './reducers/role-modules.reducer';
import { RoleTabAccessReducer } from './reducers/role-tab-access.reducer';
import { RoleTemplateAssignmentReducer } from './reducers/role-template-assignment.reducer';
import { RoleTransactionMenuReducer } from './reducers/role-transaction-menu.reducer';
import { SearchConfigurationReducer } from './reducers/search-configuration.reducer';
import { SearchSettingsReducer } from './reducers/search-settings.reducer';
import { searchesMenuReducer } from './reducers/searches-menu.reducer';
import { searchTypesReducer } from './reducers/searchtypes.reducer';
import { SessionManagementReducer } from './reducers/session-management.reducer';
import { SetupFormsPermissionReducers } from './reducers/setup-forms-permission.reducer';
import { SetupFormsReducers } from './reducers/setup-forms.reducer';
import { SetupFormMenuReducers } from './reducers/setup-form-menu.reducer';
import { SpreadsheetTemplatesReducer } from './reducers/spreadsheet-templates.reducer';
import { TCSearchConfigReducer } from './reducers/tc-search-config.reducer';
import { UserManagementReducer } from './reducers/user-management.reducer';
import { usersRolesReducer } from './reducers/users-roles.reducers';
import { MaintainRoleSettingEffect } from './effects/maintain-role-setting.effect';
import { maintainRoleSettingReducer } from './reducers/maintain-role-setting.reducer';
import { OnDemandJobReducers } from './reducers/on-demand-job.reducer';
import { OnDemandJobEffect } from './effects/on-demand-job.effect';
import { JobAccessEffect } from './effects/job-access.effect';
import { JobAccessReducer } from './reducers/job-access.reducer';
import { UserInfoReportsReducer } from './reducers/user-info-report.reducer';
import { UserInfoReportsEffect } from './effects/user-info-reports.effect';
import { FeatureFlagsReducer } from './reducers/feature-flags.reducer';
import { FeatureFlagsEffect } from './effects/feature-flags.effect';
import { LogEntriesReducer } from './reducers/filing-service-errorlog.reducer';
import { DataEventChangeLogEntriesEffect } from './effects/data-event-change-log.effects';
import { DataEventChangeLogEntriesReducer } from './reducers/data-event-change-log.reducer';
import { BusinessEventChangeLogEntriesEffect } from './effects/business-event-change-log.effects';
import { BusinessEventChangeLogEntriesReducer } from './reducers/business-event-change-log.reducer';
import { DataFeedLogEntriesEffect } from './effects/data-feed-details-log.effects';
import { DataFeedLogEntriesReducer } from './reducers/data-feed-details-log.reducer';
import { DataEventTriggrsEffect } from './effects/data-event-triggrs.effects';
import { DataEventTriggrsReducer } from './reducers/data-event-triggrs.reducer';
import { LogEntriesEffect } from './effects/filing-service-errorlog.effect';
import { TaxRollsReducer } from './reducers/tax-rolls.reducer';
import { TaxRollsEffect } from './effects/tax-rolls.effect';
import { ModuleAccessReducer } from './reducers/module-access.reducer';
import { ModuleAccessEffect } from './effects/module-access.effect';
import { LovsConfigurationReducer } from './reducers/lov-configuration.reducer';
import { LovsConfigurationsEffect } from './effects/lovs-configurations.effect';
import { JobsReportsAccessReducer } from './reducers/jobs-reports-access.reducer';
import { JobsReportsAccessEffect } from './effects/jobs-reports-access.effect';
import { authenticationProviderReducer } from './reducers/authentication-provider.reducer';
import { LoginAuthenticationProviderEffect } from './effects/login-authentication-provider.effect';
import { SiteDateJurSettingsReducer } from './reducers/site-date-jur-settings.reducer';
import { SiteDateJurSettingsEffect } from './effects/site-date-jur-settings.effect';
import { AuditReportsEffect } from './effects/audit-reports.effect';
import { AuditReportsReducer } from './reducers/audit-reports.reducer';
import { mapServerSettingsReducer } from './reducers/map-server-settings.reducer';
import { MapServerSettingEffect } from './effects/map-server-setting.effect';
import { dataPanelConfigReducer } from './reducers/data-panel-config.reducer';
import { DataPanelConfigEffect } from './effects/data-panel-config.effect';
import { ServerInfoReducer } from './reducers/server-info.reducer';
import { ServerInfoEffect } from './effects/server-info.effect';
import { SystemKeySettingsReducer } from './reducers/system-key-settings.reducer';
import { SystemKeySettingsEffect } from './effects/system-key-settings.effect';
import { ShellInfoReducer } from './reducers/shell-info.reducer';
import { ShellInfoEffect } from './effects/shell-info.effect';
import { SystemDriveReducer } from './reducers/system-drive.reducer';
import { SystemDriveEffect } from './effects/system-drive.effect';
import { ErrorLogsReducer } from './reducers/error-logs.reducer';
import { ErrorLogsEffect } from './effects/error-logs.effect';
import { XslTemplateReducer } from './reducers/xsl-templates.reducer';
import { SiteMaintenanceReducer } from './reducers/site-maintenance.reducer';
import { SiteMaintenanceEffect } from './effects/site-maintenance.effect';
import { BusinessAreasReducer } from './reducers/business-areas.reducer';
import { BusinessAreasEffect } from './effects/business-areas.effect';
import { SecurityLogsReducer } from './reducers/security-logs.reducer';
import { SecurityLogsEffect } from './effects/security-logs.effect';
import { DataIntegrityCheckReducer } from './reducers/data-integrity-check.reducer';
import { DataIntegrityCheckEffect } from './effects/data-integrity-check.effect';
import { ISketchReducer, SketchConfigurationReducer } from './reducers/isketch.reducer';
import { ISketchEffect } from './effects/isketch.effect';
import { TransactionMenuReducer } from './reducers/transaction-menu.reducer';
import { TransactionMenuEffect } from './effects/transaction-menu.effect';
import { PrintManagerUtilityReducer } from './reducers/print-manager-utility.reducer';
import { PrintManagerUtilityEffect } from './effects/print-manager-utility.effect';
import { HelpMenuReducer } from './reducers/help-menu.reducer';
import { HelpMenuEffect } from './effects/help-menu.effect';
import { MailServiceErrorLogsEffect } from './effects/mail-queue-error-log.effect';
import { MailQueueEntriesReducer } from './reducers/mail-queue-error-log.reducer';
import { QuickViewLayoutReducer } from './reducers/quick-view-layout.reducer';
import { QuickViewLayoutEffect } from './effects/quick-view-layout.effect';
import { ExternalLinksReducer } from './reducers/external-links.reducer';
import { ExternalLinksEffect } from './effects/external-links.effect';
import { RoleSelectionSettingsEffect } from './effects/role-selection-settings.effect';
import { RoleSelectionSettingsReducer } from './reducers/role-selection-settings.reducer';
import { FormTemplateAssignmentEffect } from './effects/form-template-assignment.effect';
import { FormTemplateAssignmentReducer } from './reducers/form-template-assignment.reducer';
import { SqlQueriesReducer } from './reducers/sql-queries.reducer';
import { SqlQueriesEffect } from './effects/sql-queries.effect';
import { JobSqlQueriesReducer } from './reducers/job-sql-queries.reducer';
import { JobSqlQueriesEffect } from './effects/job-sql-queries.effect';
import { BusRuleSetWFLogEntriesReducer } from './reducers/bus-ruleset-wf-log.reducer';
import { BusinessRulesSetWFLogEntriesEffect } from './effects/bus-ruleset-wf-log.effects';
import { AssessorAssignmentReducer } from './reducers/assessor-assignment.reducer';
import { AssessorAssignmentEffect } from './effects/assessor-assignment.effect';
import { SignInSettingsReducer } from './reducers/signin-settings.reducer';
import { SignInSettingsEffect } from './effects/signin-settings.effect';
import { JobTokensReducer } from './reducers/job-tokens.reducer';
import { JobTokensEffect } from './effects/job-tokens.effect';
import { JobsConfigReducer } from './reducers/jobs-config.reducer';
import { JobsConfigEffect } from './effects/jobs-config.effect';
import { TaxYearSettingsEffect } from './effects/tax-year-settings.effect';
import { TaxYearSettingsReducer } from './reducers/tax-year-settings.reducer';
import { ProxyConfigReducer } from './reducers/proxy-config.reducer';
import { ProxyConfigEffect } from './effects/proxy-config.effect';
import { EnvironmentKeysReducer } from './reducers/environment-keys.reducer';
import { EnvironmentKeysEffect } from './effects/environment-keys.effect';
import { SecretKeysReducer } from './reducers/secret-keys.reducer';
import { SecretKeysEffect } from './effects/secret-keys.effect';
import { AppLauncherSettingsReducer } from './reducers/app-launcher-settings.reducer';
import { AppLauncherSettingsEffect } from './effects/app-launcher-settings.effect';
import { AppLauncherReducer } from './reducers/app-launcher.reducer';
import { AppLauncherEffect } from './effects/app-launcher.effect';
import { StandardHelpLinksReducer } from './reducers/help-config.reducer';
import { StandardHelpLinksEffect } from './effects/help-config.effect';
import { JobFilesReducer } from '../reports-jobs/store/reducers/job-files.reducer';
import { JobFilesEffect } from '../reports-jobs/store/effects/job-files.effect';
import { OAuthClientSettingsReducer } from './reducers/oauth-client-settings.reducer';
import { OAuthClientSettingsEffect } from './effects/oauth-client-settings.effect';
import { ContentManagerUtilityEffect } from './effects/content-manager-utility.effect';
import { ContentManagerUtilityReducer } from './reducers/content-manager-utility.reducer';
import { BatchCalcReducer } from '../reports-jobs/store/reducers/batch-calc.reducer';
import { BatchCalcEffect } from '../reports-jobs/store/effects/batch-calc.effect';
import { JobFoldersReducer } from '../reports-jobs/store/reducers/job-folders.reducer';
import { JobFoldersEffect } from '../reports-jobs/store/effects/job-folders.effect';

export const reducerConfig = {
  customHelpConfig: CustomHelpLinksReducer,
  lettersConfig: GenericLettersReducer,
  roleSelectionSettings: RoleSelectionSettingsReducer,
  users: usersRolesReducer,
  dataletSetting: dataletSettingsReducer,
  searchSetting: SearchSettingsReducer,
  modules: ModulesReducer,
  searchTypes: searchTypesReducer,
  SearchSettingsConfiguration: SearchConfigurationReducer,
  searchesMenu: searchesMenuReducer,
  dataletsMenu: dataletsMenuReducer,
  dataletsConfiguration: DataletsConfigurationReducers,
  dataModelExtension: DataModelExtensionReducer,
  reportDefinitionConfiguration: ReportDefinitionReducers,
  listManagementConfiguration: ListManagementReducers,
  listCategories: ListManagementCategoryReducers,
  roleTabAccess: RoleTabAccessReducer,
  roleModules: RoleModulesReducer,
  dataletHeader: DataletHeaderReducer,
  generalSettings: generalSettingsReducer,
  roleSettings: maintainRoleSettingReducer,
  setupFormsPermissionsConfig: SetupFormsPermissionReducers,
  setupFormsConfig: SetupFormsReducers,
  setupFormMenuConfig: SetupFormMenuReducers,
  spreadsheetTemplates: SpreadsheetTemplatesReducer,
  tcSearchConfigs: TCSearchConfigReducer,
  maintainSearchConfig: maintainSearchConfigReducer,
  quickLinksConfig: QuickLinksReducer,
  quickViewLayouts: QuickViewLayoutReducer,
  roleTemplateAssignment: RoleTemplateAssignmentReducer,
  formTemplateAssignment: FormTemplateAssignmentReducer,
  advancedConfig: AdvancedConfigReducer,
  mapconfig: MapConfigReducer,
  atomicNodesConfig: AtomicNodesReducer,
  idFormatRecordsConfig: IDFormatsReducer,
  nameSegmentDefinitionRecordsConfig: nameSegmentDefinitionReducer,
  xslTemplateConfig: XslTemplateReducer,
  filingServiceErrorLogConfig: LogEntriesReducer,
  DataEventChangeDetailsLogConfig: DataEventChangeLogEntriesReducer,
  BusinessEventChangeDetailsLogConfig: BusinessEventChangeLogEntriesReducer,
  DataFeedDetailsLogConfig: DataFeedLogEntriesReducer,
  DataEventTriggersLogConfig: DataEventTriggrsReducer,
  DataEventTriggerRuleLogConfig: DataEventTriggrsReducer,
  DataEventTriggerFactSetLogConfig: DataEventTriggrsReducer,
  BusRuleSetWFLogConfig: BusRuleSetWFLogEntriesReducer,
  userManagement: UserManagementReducer,
  maintainFields: MaintainFieldsReducer,
  dataChgSub: dataChgSubReducer,
  filingConfig: FilingConfigReducer,
  jurisdictionLocksConfiguration: JurisdictionLocksReducer,
  jurisdictionSelector: JurisdictionSelectReducer,
  toolbar: MaintainToolbarReducer,
  maintainTransactionDefinition: MaintainTransactionDefinitionReducer,
  maintainTransactionAccess: MaintainTransactionAccessReducer,
  roleTransactionMenu: RoleTransactionMenuReducer,
  errors: ErrorReducer,
  reportConfig: ReportConfigReducer,
  sessionManagement: SessionManagementReducer,
  onDemandJob: OnDemandJobReducers,
  jobAccess: JobAccessReducer,
  userReports: UserInfoReportsReducer,
  featureFlags: FeatureFlagsReducer,
  taxRolls: TaxRollsReducer,
  moduleAccess: ModuleAccessReducer,
  lovsConfigurations: LovsConfigurationReducer,
  jobsReportsAccess: JobsReportsAccessReducer,
  jobsConfig: JobsConfigReducer,
  authenticationProvider: authenticationProviderReducer,
  siteDateJurSettings: SiteDateJurSettingsReducer,
  auditReports: AuditReportsReducer,
  mapServerSetting: mapServerSettingsReducer,
  dataPanelConfigs: dataPanelConfigReducer,
  serverInfo: ServerInfoReducer,
  systemKeySettings: SystemKeySettingsReducer,
  shellInfo: ShellInfoReducer,
  signInSettings: SignInSettingsReducer,
  businessAreas: BusinessAreasReducer,
  systemDrive: SystemDriveReducer,
  errorLogs: ErrorLogsReducer,
  siteMaintenance: SiteMaintenanceReducer,
  securityLogs: SecurityLogsReducer,
  dataIntegrityCheck: DataIntegrityCheckReducer,
  iSketch: ISketchReducer,
  sketchConfig: SketchConfigurationReducer,
  externalLinks: ExternalLinksReducer,
  transactionMenu: TransactionMenuReducer,
  printManagerUtility: PrintManagerUtilityReducer,
  help: HelpMenuReducer,
  MailQueueErrorLogConfig: MailQueueEntriesReducer,
  assessorAssignment: AssessorAssignmentReducer,
  sqlQueries: SqlQueriesReducer,
  jobSqlQueries : JobSqlQueriesReducer,
  jobTokens: JobTokensReducer,
  taxYearSettings: TaxYearSettingsReducer,
  proxyConfig: ProxyConfigReducer,
  evironmentKeys: EnvironmentKeysReducer,
  secretKeys: SecretKeysReducer,
  appLauncherSettings: AppLauncherSettingsReducer,
  appLauncher: AppLauncherReducer,
  helpConfig: StandardHelpLinksReducer,
  jobFiles: JobFilesReducer,
  oauthClients: OAuthClientSettingsReducer,
  contentManagerUtility: ContentManagerUtilityReducer,
  batchCalc: BatchCalcReducer,  
  jobFolders: JobFoldersReducer,
};

export const effectsConfig = [
  CustomHelpLinksEffect,
  GenericLettersEffect,
  RoleSelectionSettingsEffect,
  UserRolesEffect,
  DataletSettingEffect,
  SearchSettingEffect,
  ModulesEffect,
  SearchTypesEffect,
  SearchConfigurationEffect,
  SetupFormsPermissionEffect,
  SetupFormsEffect,
  SetupFormMenuEffect,
  DataletsConfigurationEffect,
  DataModelExtensionEffect,
  ReportDefinitionEffect,
  QuickLinksEffect,
  QuickViewLayoutEffect,
  SearchesMenuEffect,
  ISketchEffect,
  DataletsMenuEffect,
  ListManagementEffect,
  ListManagementCategoryEffect,
  ListManagementEffect,
  RoleModulesEffect,
  DataletHeaderEffect,
  GeneralSettingsEffect,
  MaintainRoleSettingEffect,
  SpreadsheetTemplatesEffect,
  TCSearchConfigEffect,
  MaintainSearchTypeEffect,
  RoleTabAccessEffect,
  RoleTemplateAssignmentEffect,
  FormTemplateAssignmentEffect,
  XslTemplateEffect,
  AdvancedConfigEffect,
  MapConfigEffect,
  AtomicNodesEffect,
  IDFormatRecordsEffect,
  NameSegmentDefinitionRecordEffect,
  LogEntriesEffect,
  DataEventChangeLogEntriesEffect,
  BusinessEventChangeLogEntriesEffect,
  DataFeedLogEntriesEffect,
  DataEventTriggrsEffect,
  BusinessRulesSetWFLogEntriesEffect,
  UserManagementEffect,
  MaintainFieldsEffect,
  DataChgSubEffect,
  FilingConfigEffect,
  JurisdictionLocksEffect,
  JurisdictionSelectEffect,
  MaintainToolbarEffect,
  MaintainTransactionDefinitionEffect,
  MaintainTransactionAccessEffect,
  RoleTransactionMenuEffect,
  ReportConfigEffect,
  SessionManagementEffect,
  OnDemandJobEffect,
  JobAccessEffect,
  UserInfoReportsEffect,
  FeatureFlagsEffect,
  TaxRollsEffect,
  ModuleAccessEffect,
  LovsConfigurationsEffect,
  JobsReportsAccessEffect,
  JobsConfigEffect,
  LoginAuthenticationProviderEffect,
  SiteDateJurSettingsEffect,
  AuditReportsEffect,
  MapServerSettingEffect,
  DataPanelConfigEffect,
  ServerInfoEffect,
  SystemKeySettingsEffect,
  ShellInfoEffect,
  SignInSettingsEffect,
  BusinessAreasEffect,
  SystemDriveEffect,
  ErrorLogsEffect,
  SiteMaintenanceEffect,
  ExternalLinksEffect,
  SecurityLogsEffect,
  DataIntegrityCheckEffect,
  ISketchEffect,
  TransactionMenuEffect,
  PrintManagerUtilityEffect,
  HelpMenuEffect,
  MailServiceErrorLogsEffect,
  AssessorAssignmentEffect,
  SqlQueriesEffect,
  JobSqlQueriesEffect,
  JobTokensEffect,
  TaxYearSettingsEffect,
  ProxyConfigEffect,
  EnvironmentKeysEffect,
  SecretKeysEffect,
  AppLauncherSettingsEffect,
  AppLauncherEffect,
  StandardHelpLinksEffect,
  JobFilesEffect,
  OAuthClientSettingsEffect,
  ContentManagerUtilityEffect,
  BatchCalcEffect,
  JobFoldersEffect,
];

import { AddBranchDialogComponent } from './sitewide-settings/components/advanced-config/add-branch-dialog/add-branch-dialog.component';
import { AddLayoutDialogComponent } from './property-records/components/report-definition/layout-setting/add-layout-dialog/add-layout-dialog.component';
import { AddFormsGroupDialogComponent } from './maintain/components/setup-forms-groups/add-forms-group-dialog/add-forms-group-dialog.component';
import { AddNonTreeItemDialogComponent } from './sitewide-settings/components/advanced-config/add-non-tree-item-dialog/add-non-tree-item-dialog.component';
import { AddSetupFormsDialogComponent } from './maintain/components/setup-forms-groups/add-setup-forms-dialog/add-setup-forms-dialog.component';
import { AddSetupFormGroupDialogComponent } from './maintain/components/setup-forms-access/add-setup-form-group-dialog/add-setup-form-group-dialog.component';
import { AddTemplateDialogComponent } from './maintain/components/xsl-templates/add-template-dialog/add-template-dialog.component';
import { AdvancedConfigComponent } from './sitewide-settings/components/advanced-config/advanced-config.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AtomicNodesComponent } from './maintain/components/atomic-nodes/atomic-nodes.component';
import { AtomicNodesDialogComponent } from './maintain/components/atomic-nodes/atomic-nodes-dialog/atomic-nodes-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ConfigHeaderEditorDialogComponent } from './property-records/components/config-search-header-in-out/config-search-header/config-header-editor-dialog/config-header-editor-dialog.component';
import { ConfigKeyEditorComponent } from './sitewide-settings/components/advanced-config/config-key-editor/config-key-editor.component';
import { ConfigSearchFieldDialogComponent } from './property-records/components/config-search-header-in-out/config-search-fields/config-search-field-dialog/config-search-field-dialog.component';
import { ConfigSearchFieldsComponent } from './property-records/components/config-search-header-in-out/config-search-fields/config-search-fields.component';
import { ConfigSearchFilterDialogComponent } from './property-records/components/config-search-header-in-out/config-search-filters/config-search-filter-dialog/config-search-filter-dialog.component';
import { ConfigSearchFiltersComponent } from './property-records/components/config-search-header-in-out/config-search-filters/config-search-filters.component';
import { ConfigSearchHeaderComponent } from './property-records/components/config-search-header-in-out/config-search-header/config-search-header.component';
import { ConfigSearchHeaderInOutComponent } from './property-records/components/config-search-header-in-out/config-search-header-in-out.component';
import { ConfigSearchOuterFieldsComponent } from './property-records/components/config-search-header-in-out/config-search-outer-fields/config-search-outer-fields.component';
import { ConfigSearchOuterFieldsDialogComponent } from './property-records/components/config-search-header-in-out/config-search-outer-fields/config-search-outer-fields-dialog/config-search-outer-fields-dialog.component';
import { ConfigValueSearchComponent } from './sitewide-settings/components/advanced-config/config-value-search/config-value-search.component';
import { ConfirmationDialogComponent } from './maintain/components/xsl-templates/confirmation-dialog/confirmation-dialog.component';
import { CustomHelpComponent } from './sitewide-settings/components/help-config/custom-help/custom-help.component';
import { CustomHelpEditDialogComponent } from './sitewide-settings/components/help-config/custom-help/custom-help-edit-dialog/custom-help-edit-dialog.component';
import { CriteriaGroupsComponent } from './property-records/components/config-search-header-in-out/criteria-groups/criteria-groups.component';
import { CriteriaGroupsDialogComponent } from './property-records/components/config-search-header-in-out/criteria-groups/criteria-groups-dialog/criteria-groups-dialog.component';
import { DataletConfigComponent } from './property-records/components/datalet-config/datalet-config.component';
import { DataletConfigurationSetChildrenDialogComponent } from './property-records/components/datalet-config/datalet-parent-child-relationship/datalet-configuration-set-children-dialog/datalet-configuration-set-children-dialog.component';
import { DataletDialogComponent } from './property-records/components/datalet-config/datalet-dialog/datalet-dialog.component';
import { DataletHeaderComponent } from './property-records/components/datalet-header/datalet-header.component';
import { DataletHeaderTestDialogComponent } from './property-records/components/datalet-config/datalets-configuration-header/datalet-header-test-dialog/datalet-header-test-dialog.component';
import { DataletParentChildRelationshipComponent } from './property-records/components/datalet-config/datalet-parent-child-relationship/datalet-parent-child-relationship.component';
import { DataletsConfigurationCloneDataletComponent } from './property-records/components/datalet-config/datalets-configuration-header/datalets-configuration-clone-datalet/datalets-configuration-clone-datalet.component';
import { DataletsConfigurationCopyToRolesComponent } from './property-records/components/datalet-config/datalets-configuration-header/datalets-configuration-copy-to-roles/datalets-configuration-copy-to-roles.component';
import { DataletsConfigurationFieldsComponent } from './property-records/components/datalet-config/datalets-configuration-fields/datalets-configuration-fields.component';
import { DataletsConfigurationFieldsDialogComponent } from './property-records/components/datalet-config/datalets-configuration-fields/datalets-configuration-fields-dialog/datalets-configuration-fields-dialog.component';
import { DataletsConfigurationHeaderComponent } from './property-records/components/datalet-config/datalets-configuration-header/datalets-configuration-header.component';
import { DataletSettingsComponent } from './property-records/components/datalet-settings/datalet-settings.component';
import { DataletSettingsService } from './property-records/services/datalet.settings.service';
import { DataletsFilterComponent } from './property-records/components/datalet-config/datalets-filter/datalets-filter.component';
import { DataletsMenuComponent } from './property-records/components/datalets-menu/datalets-menu.component';
import { DataletsMenuDialogComponent } from './property-records/components/datalets-menu/datalets-menu-dialog/datalets-menu-dialog.component';
import { DataModelExtensionComponent } from './inquire/components/data-model-extension/data-model-extension.component';
import { DataModelExtensionDialogComponent } from './inquire/components/data-model-extension/data-model-extension-dialog/data-model-extension-dialog.component';
import { effectsConfig, reducerConfig } from './Store/storeConfig';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { EditTCSearchFieldComponent } from './tyler-cashiering-integration/components/search-configuration/cards/dialogs/edit-search-field.component';
import { EditTCSearchOptionsComponent } from './tyler-cashiering-integration/components/search-configuration/cards/dialogs/edit-search-options.component';
import { EditSetupFormGroupDialogComponent } from './maintain/components/setup-forms-access/edit-setup-form-group-dialog/edit-setup-form-group-dialog.component';
import { ErrorsComponent } from './core/components/errors/errors.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { FilingConfigByFilingComponent } from './efile/components/filing-config/filing-config-by-filing/filing-config-by-filing.component';
import { FilingConfigByTransformComponent } from './efile/components/filing-config/filing-config-by-transform/filing-config-by-transform.component';
import { FilingConfigComponent } from './efile/components/filing-config/filing-config.component';
import { FilingDialogComponent } from './efile/components/filing-config/filing-config-by-filing/filing-dialog/filing-dialog.component';
import { FilingParameterDialogComponent } from './efile/components/filing-config/filing-config-by-filing/filing-parameter-dialog/filing-parameter-dialog.component';
import { FilingParametersSectionComponent } from './efile/components/filing-config/filing-config-by-filing/filing-parameters-section/filing-parameters-section.component';
import { FilingServiceErrorlogComponent } from './efile/components/filing-service-errorlog/filing-service-errorlog.component';
import { FilingServiceErrorlogDialogComponent } from './efile/components/filing-service-errorlog/filing-service-errorlog-dialog/filing-service-errorlog-dialog.component';
import { FilingServiceErrorlogReplayComponent } from './efile/components/filing-service-errorlog/filing-service-errorlog-replay/filing-service-errorlog-replay.component';
import { FilingTokenArgumentDialogComponent } from './efile/components/filing-config/filing-config-by-filing/filing-token-argument-dialog/filing-token-argument-dialog.component';
import { FilingTokenArgumentsSectionComponent } from './efile/components/filing-config/filing-config-by-filing/filing-tokens-section/filing-token-arguments-section/filing-token-arguments-section.component';
import { FilingTokenDialogComponent } from './efile/components/filing-config/filing-config-by-filing/filing-token-dialog/filing-token-dialog.component';
import { FilingTokensSectionComponent } from './efile/components/filing-config/filing-config-by-filing/filing-tokens-section/filing-tokens-section.component';
import { FilingTransformDeleteDialogComponent } from './efile/components/filing-config/filing-config-by-transform/filing-transform-delete-dialog/filing-transform-delete-dialog.component';
import { FilingTransformDialogComponent } from './efile/components/filing-config/filing-config-by-transform/filing-transform-dialog/filing-transform-dialog.component';
import { FilterDataletsPipe } from './property-records/components/datalet-config/datalets-configuration-header/pipes/filter-datalets.pipe';
import { FilterJursPipe } from './users-role-access/components/user-management/add-edit-jurisdiction/tyler-jurisdictions-drop-down/pipes/filter-jurs.pipe';
import { FilterMaintainTablesPipe } from './maintain/components/maintain-fields/maintain-table-list/pipes/filter-maintain-tables.pipe';
import { FilterSpreadsheetTemplatesPipe } from './maintain/components/spreadsheet-templates/pipes/filter-spreadsheet-templates.pipe';
import { FirstletterUppercasePipe } from './core/pipes/firstletter-uppercase.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralSettingsComponent } from './maintain/components/general-settings/general-settings.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HistoryTemplatesDialogComponent } from './maintain/components/xsl-templates/history-templates-dialog/history-templates-dialog.component';
import { HistoryTemplateXslDialogComponent } from './maintain/components/xsl-templates/history-template-xsl-dialog/history-template-xsl-dialog.component';
import { IdFormatsComponent } from './maintain/components/id-formats/id-formats.component';
import { IdFormatsDialogComponent } from './maintain/components/id-formats/id-formats-dialog/id-formats-dialog.component';
import { HttpErrorInterceptor } from './core/http-interceptors/error-interceptor';
import { InheritedFromBaseComponent } from './property-records/components/config-search-header-in-out/inherited-from-base/inherited-from-base.component';
import { JurisdictionLockEditDialogComponent } from './maintain/components/jurisdiction-locks/jurisdiction-lock-edit-dialog/jurisdiction-lock-edit-dialog.component';
import { JurisdictionLocksComponent } from './maintain/components/jurisdiction-locks/jurisdiction-locks.component';
import { JurisdictionsTreeViewComponent } from './users-role-access/components/user-management/add-edit-role/jurisdictions-tree-view/jurisdictions-tree-view.component';
import { LayoutSettingComponent } from './property-records/components/report-definition/layout-setting/layout-setting.component';
import { ListManagementCategoriesComponent } from './property-records/components/list-management-categories/list-management-categories.component';
import { ListManagementCategoriesDialogComponent } from './property-records/components/list-management-categories/list-management-categories-dialog/list-management-categories-dialog.component';
import { ListManagementComponent } from './property-records/components/list-management/list-management.component';
import { ListWithTypeAheadComponent } from './sitewide-settings/components/help-config/custom-help/custom-help-edit-dialog/list-with-typeahead/list-with-typeahead.component';
import { MaintainBaselineFieldSectionComponent } from './maintain/components/maintain-fields/maintain-baseline-field-section/maintain-baseline-field-section.component';
import { MaintainFieldEditDialogComponent } from './maintain/components/maintain-fields/maintain-field-edit-dialog/maintain-field-edit-dialog.component';
import { MaintainFieldInquireDialogComponent } from './maintain/components/maintain-fields/maintain-field-inquire-dialog/maintain-field-inquire-dialog.component';
import { MaintainFieldsComponent } from './maintain/components/maintain-fields/maintain-fields.component';
import { MaintainLovDataDialogComponent } from './maintain/components/maintain-fields/maintain-lov-data-dialog/maintain-lov-data-dialog.component';
import { MaintainLovDetailDialogComponent } from './maintain/components/maintain-fields/maintain-lov-detail-dialog/maintain-lov-detail-dialog.component';
import { MaintainLovEditDialogComponent } from './maintain/components/maintain-fields/maintain-lov-edit-dialog/maintain-lov-edit-dialog.component';
import { MaintainLovInfoSectionComponent } from './maintain/components/maintain-fields/maintain-lov-info-section/maintain-lov-info-section.component';
import { MaintainRoleSettingsComponent } from './maintain/components/maintain-role-settings/maintain-role-settings.component';
import { MaintainSearchConfigComponent } from './maintain/components/maintain-search-config/maintain-search-config.component';
import { MaintainSearchConfigDialogComponent } from './maintain/components/maintain-search-config/maintain-search-config-dialog/maintain-search-config-dialog.component';
import { MaintainTableFilterComponent } from './maintain/components/maintain-fields/maintain-table-filter/maintain-table-filter.component';
import { MaintainTableListComponent } from './maintain/components/maintain-fields/maintain-table-list/maintain-table-list.component';
import { MaintainToolbarComponent } from './maintain/components/toolbar/maintain-toolbar.component';
import { MaintainToolbarRoleComponent } from './maintain/components/toolbar/maintain-toolbar-role/maintain-toolbar-role.component';
import { MaintainToolbarRoleDialogComponent } from './maintain/components/toolbar/maintain-toolbar-role/maintain-toolbar-role-dialog/maintain-toolbar-role-dialog.component';
import { MaintainToolbarTransactionComponent } from './maintain/components/transactions/maintain-toolbar-transaction/maintain-toolbar-transaction.component';
import { MaintainToolbarTransactionDialogComponent } from './maintain/components/transactions/maintain-toolbar-transaction/maintain-toolbar-transaction-dialog/maintain-toolbar-transaction-dialog.component';
import { MapConfigComponent } from './sitewide-settings/components/map-config/map-config.component';
import { MapConfigDialogComponent } from './sitewide-settings/components/map-config/map-config-dialog/map-config-dialog.component';
import { MaterialModule } from './material-module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NameSegmentDefinitionComponent } from './maintain/components/name-segment-definition/name-segment-definition.component';
import { OmniBarComponent } from './core/components/omni-bar/omni-bar.component';
import { OnDemandJobComponent } from './reports-jobs/components/on-demand-job/on-demand-job.component';
import { OverviewComponent } from './core/components/overview/overview.component';
import { OverviewSectionComponent } from './core/components/overview-section/overview-section.component';
import { PasswordSettingsComponent } from './sitewide-settings/components/signin-settings/password-settings/password-settings.component';
import { PasswordSettingsDialogComponent } from './sitewide-settings/components/signin-settings/password-settings/password-settings-dialog/password-settings-dialog.component';
import { QuickLinksComponent } from './maintain/components/quick-links/quick-links.component';
import { QuickLinksEditDialogComponent } from './maintain/components/quick-links/quick-links-edit-dialog/quick-links-edit-dialog.component';
import { ReportConfigComponent } from './property-records/components/report-config/report-config.component';
import { ReportDefinitionComponent } from './property-records/components/report-definition/report-definition.component';
import { ReportSqlConfigComponent } from './property-records/components/report-config/report-sql-config/report-sql-config.component';
import { ReportSqlConfigDialogComponent } from './property-records/components/report-config/report-sql-config/report-sql-config-dialog/report-sql-config-dialog.component';
import { ReportSqlConfigFieldComponent } from './property-records/components/report-config/report-sql-config-field/report-sql-config-field.component';
import { ReportSqlConfigFieldDialogComponent } from './property-records/components/report-config/report-sql-config-field/report-sql-config-field-dialog/report-sql-config-field-dialog.component';
import { RoleModulesService } from './users-role-access/services/role-modules.service';
import { RoleSelectionDialogComponent } from './users-role-access/components/role-selection/role-selection-dialog/role-selection-dialog.component';
import { RoleTabAccessComponent } from './maintain/components/role-tab-access/role-tab-access.component';
import { TemplateAssignmentComponent } from './maintain/components/template-assignment/template-assignment.component';
import { RouterModule } from '@angular/router';
import { SafePipePipe } from './users-role-access/components/user-management/pipes/safe-pipe.pipe';
import { SearchConfigurationFieldsDetailDialogComponent } from './property-records/components/config-search-header-in-out/config-search-fields/search-configuration-fields-detail-dialog/search-configuration-fields-detail-dialog.component';
import { SearchesMenuComponent } from './property-records/components/searches-menu/searches-menu.component';
import { SearchesMenuDialogComponent } from './property-records/components/searches-menu/searches-menu-dialog/searches-menu-dialog.component';
import { SearchSettingsComponent } from './property-records/components/search-settings/search-settings.component';
import { SearchTypesComponent } from './property-records/components/config-search-header-in-out/search-types/search-types.component';
import { SearchTypesService } from './property-records/services/search-types.service';
import { SessionManagementComponent } from './users-role-access/components/session-management/session-management.component';
import { SettingEditorComponent } from './property-records/components/setting-editor/setting-editor.component';
import { SettingEditorDialogComponent } from './property-records/components/setting-editor/setting-editor-dialog/setting-editor-dialog.component';
import { SetupFormsAccessComponent } from './maintain/components/setup-forms-access/setup-forms-access.component';
import { SetupFormsGroupsComponent } from './maintain/components/setup-forms-groups/setup-forms-groups.component';
import { SetupFormMenusComponent } from './maintain/components/setup-form-menus/setup-form-menus.component';
import { SetupFormMenusEditDialogComponent } from './maintain/components/setup-form-menus/setup-form-menu-table/setup-form-menus-edit-dialog/setup-form-menus-edit-dialog.component';
import { ShortenArrayPipe } from './users-role-access/components/user-management/pipes/shorten-array.pipe';
import { SpreadsheetTemplateFieldDialogComponent } from './maintain/components/spreadsheet-templates/spreadsheet-template-field-dialog/spreadsheet-template-field-dialog.component';
import { SpreadsheetTemplatesComponent } from './maintain/components/spreadsheet-templates/spreadsheet-templates.component';
import { SqlConfigComponent } from './property-records/components/datalet-header/sql-config/sql-config.component';
import { SqlConfigDialogComponent } from './property-records/components/datalet-header/sql-config/sql-config-dialog/sql-config-dialog.component';
import { SqlConfigFieldComponent } from './property-records/components/datalet-header/sql-config-field/sql-config-field.component';
import { SqlConfigFieldDialogComponent } from './property-records/components/datalet-header/sql-config-field/sql-config-field-dialog/sql-config-field-dialog.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TCSearchConfigComponent } from './tyler-cashiering-integration/components/search-configuration/search-config.component';
import { TCSearchFieldsComponent } from './tyler-cashiering-integration/components/search-configuration/cards/search-fields.component';
import { TCSearchOptionsComponent } from './tyler-cashiering-integration/components/search-configuration/cards/search-options.component';
import { TemplateByRoleDialogComponent } from './maintain/components/template-assignment/template-by-role-dialog/template-by-role-dialog.component';
import { TransactionAccessComponent } from './maintain/components/transactions/transaction-access/transaction-access.component';
import { TransactionAccessDialogComponent } from './maintain/components/transactions/transaction-access/transaction-access-dialog/transaction-access-dialog.component';
import { TransactionDefinitionComponent } from './maintain/components/transactions/transaction-definition/transaction-definition.component';
import { TransactionDefinitionDialogComponent } from './maintain/components/transactions/transaction-definition/transaction-definition-dialog/transaction-definition-dialog.component';
import { TransactionsComponent } from './maintain/components/transactions/transactions.component';
import { TransactionsTreeComponent } from './maintain/components/transactions-tree/transactions-tree.component';
import { TransformParametersSectionComponent } from './efile/components/filing-config/filing-config-by-transform/transform-parameters-section/transform-parameters-section.component';
import { TreePanelComponent } from './sitewide-settings/components/advanced-config/tree-panel/tree-panel.component';
import { TylerNoCopyPasteDirective } from './users-role-access/components/user-management/directives/tyler-no-copy-paste.directive';
import { TylerUIModule, TylerDateFormatMomentAdapter, i18nMatPaginator, getHtmlLang } from '@iasworld/tyler-ui';
import { UniqueDataletNameValidatorDirectiveDirective } from './property-records/components/datalet-config/datalets-configuration-header/validators/unique-datalet-name-validator-directive.directive';
import { UniqueTemplateNameValidatorDirective } from './maintain/components/xsl-templates/validators/unique-template-name-validator-directive.directive';
import { UpgradeModule } from '@angular/upgrade/static';
import { UserManagementAccountEditSettingsComponent } from './users-role-access/components/user-management/edit-settings/user-management-account-edit-settings.component';
import { UserManagementAccountEditUserComponent } from './users-role-access/components/user-management/account-edit-user/user-management-account-edit-user.component';
import { UserManagementAccountSettingsComponent } from './users-role-access/components/user-management/account-settings/user-management-account-settings.component';
import { UserManagementDetailsComponent } from './users-role-access/components/user-management/details/user-management-details.component';
import { UserManagementDialogComponent } from './users-role-access/components/user-management/user-dialog/user-management-dialog.component';
import { UserManagementMultipleUserNavigationComponent } from './users-role-access/components/user-management/settings/user-management-multiple-user-navigation/user-management-multiple-user-navigation.component';
import { UserManagementRoleJurisdictionComponent } from './users-role-access/components/user-management/settings/user-management-role-jurisdiction/user-management-role-jurisdiction.component';
import { UserManagementSecurityGroupAccessComponent } from './users-role-access/components/user-management/security-group-access/user-management-security-group-access.component';
import { UserManagementSettingsComponent } from './users-role-access/components/user-management/settings/user-management-settings.component';
import { UserManagementSingleUserNavigationComponent } from './users-role-access/components/user-management/settings/user-management-single-user-navigation/user-management-single-user-navigation.component';
import { UserManagementJurisdictionSelectComponent } from './users-role-access/components/user-management/security-group-access/jurisdiction-select/user-management-jurisdiction-select.component';
import { UserManagementSecurityGroupRolesComponent } from './users-role-access/components/user-management/security-group-access/security-group-roles/user-management-security-group-roles.component';
import { UsersRolesService } from './users-role-access/services/usersRoles.service';
import { UserManagementAddEditJurisdictionComponent } from './users-role-access/components/user-management/add-edit-jurisdiction/user-management-add-edit-jurisdiction.component';
import { TylerJurisdictionsDropDownComponent } from './users-role-access/components/user-management/add-edit-jurisdiction/tyler-jurisdictions-drop-down/tyler-jurisdictions-drop-down.component';
import { UserManagementAddEditRoleComponent } from './users-role-access/components/user-management/add-edit-role/user-management-add-edit-role.component';
import { TylerRoleDropDownComponent } from './users-role-access/components/user-management/add-edit-role/tyler-role-drop-down/tyler-role-drop-down.component';
import { UserManagementSingleJurAddEditRoleComponent } from './users-role-access/components/user-management/single-jur-add-edit-role/user-management-single-jur-add-edit-role.component';
import { TransformParameterDialogComponent } from './efile/components/filing-config/filing-config-by-transform/transform-parameters-section/transform-parameter-dialog/transform-parameter-dialog.component';
import { UserManagementAddUserComponent } from './users-role-access/components/user-management/add-user/user-management-add-user.component';
import { ViewEditAccessComponent } from './maintain/components/role-tab-access/view-edit-access/view-edit-access.component';
import { ViewEditAccessDialogComponent } from './maintain/components/role-tab-access/view-edit-access/view-edit-access-dialog/view-edit-access-dialog.component';
import { XslSettingComponent } from './property-records/components/datalet-header/xsl-setting/xsl-setting.component';
import { XslSettingDialogComponent } from './property-records/components/datalet-header/xsl-setting/xsl-setting-dialog/xsl-setting-dialog.component';
import { XslTemplatesComponent } from './maintain/components/xsl-templates/xsl-templates.component';
import { OnDemandJobDialogComponent } from './reports-jobs/components/on-demand-job/ias-jobs/on-demand-job-dialog/on-demand-job-dialog.component';
import { UserManagementAddEditAddEditSecurityAccessComponent } from './users-role-access/components/user-management/security-group-access/add-edit-security-access/user-management-add-edit-add-edit-security-access.component';
import { UserManagementAccessGroupTreeViewComponent } from './users-role-access/components/user-management/security-group-access/add-edit-security-access/access-group-tree-view/user-management-group-tree.component';
import { UserOverridesComponent } from './users-role-access/components/user-management/user-overrides/user-overrides.component';
import { AddEditOverrideComponent } from './users-role-access/components/user-management/user-overrides/add-edit-override/add-edit-override.component';
import { InformationReportComponent } from './users-role-access/components/user-management/information-report/information-report.component';
import { SummaryReportComponent } from './users-role-access/components/user-management/summary-report/summaryreport.component';
import { SettingtableComponent } from './property-records/components/setting-editor/settingtable/settingtable.component';
import { AccessProfileReportComponent } from './users-role-access/components/user-management/access-profile-report/access-profile-report.component';
import { AccessDeniedComponent } from './core/components/access-denied/access-denied.component';
import { TaxRollsComponent } from './property-records/components/tax-rolls/tax-rolls.component';
import { TaxRollsForSearchesComponent } from './property-records/components/tax-rolls/tax-rolls-for-searches/tax-rolls-for-searches.component';
import { TaxRollEditDialogComponent } from './property-records/components/tax-rolls/tax-rolls-for-searches/tax-roll-edit-dialog/tax-roll-edit-dialog.component';
import { TaxRollGroupAssignmentComponent } from './property-records/components/tax-rolls/tax-roll-group-assignment/tax-roll-group-assignment.component';
import { AddEditTaxRollGroupComponent } from './property-records/components/tax-rolls/tax-roll-group-assignment/add-edit-tax-roll-group/add-edit-tax-roll-group.component';
import { LovConfigurationComponent } from './property-records/components/lov-configuration/lov-configuration.component';
import { LovConfigurationListComponent } from './property-records/components/lov-configuration/lov-configuration-list/lov-configuration-list.component';
import { LovValuesListComponent } from './property-records/components/lov-configuration/lov-values-list/lov-values-list.component';
import { JobsAccessComponent } from './reports-jobs/components/jobs-access/jobs-access.component';
import { JobsAccessFilterComponent } from './reports-jobs/components/jobs-access/jobs-access-filter/jobs-access-filter.component';
import { JobsConfigComponent } from './reports-jobs/components/jobs-config/jobs-config.component';
import { JobsConfigFilterComponent } from './reports-jobs/components/jobs-config/jobs-config-filter/jobs-config-filter.component';
import { LovConfigurationDialogComponent } from './property-records/components/lov-configuration/lov-configuration-list/lov-configuration-dialog/lov-configuration-dialog.component';
import { LovValueDialogComponent } from './property-records/components/lov-configuration/lov-values-list/lov-value-dialog/lov-value-dialog.component';
import { LovConfigurationGenerateValueComponent } from './property-records/components/lov-configuration/lov-configuration-list/lov-configuration-generate-value/lov-configuration-generate-value.component';
import { SiteDateJurSettingsComponent } from './sitewide-settings/components/site-date-jur-settings/site-date-jur-settings.component';
import { AuthenticationProviderComponent } from './sitewide-settings/components/authentication-provider/authentication-provider.component';
import { AuditReportsComponent } from './users-role-access/components/user-management/audit-reports/audit-reports.component';
import { OidcComponent } from './sitewide-settings/components/authentication-provider/oidc/oidc.component';
import { AuthenticatorEditorComponent } from './sitewide-settings/components/authentication-provider/authenticator-editor/authenticator-editor.component';
import { BusinessAreasComponent } from './inquire/components/business-areas/business-areas.component';
import { OidcEditorComponent } from './sitewide-settings/components/authentication-provider/authenticator-editor/oidc-editor/oidc-editor.component';
import { MapServerSettingsComponent } from './sitewide-settings/components/map-server-settings/map-server-settings.component';
import { DateSettingsDialogComponent } from './sitewide-settings/components/site-date-jur-settings/settings-dialogs/date-settings-dialog/date-settings-dialog.component';
import { SiteSettingsDialogComponent } from './sitewide-settings/components/site-date-jur-settings/settings-dialogs/site-settings-dialog/site-settings-dialog.component';
import { JurSettingsDialogComponent } from './sitewide-settings/components/site-date-jur-settings/settings-dialogs/jur-settings-dialog/jur-settings-dialog.component';
import { DataPanelConfigComponent } from './maintain/components/data-panel-configuration/data-panel-configuration.component';
import { ServerInfoComponent } from './sitewide-settings/components/server-info/server-info.component';
import { DataPanelContentDialogComponent } from './maintain/components/data-panel-configuration/data-panel-content-dialog/data-panel-content-dialog.component';
import { SystemKeySettingsComponent } from './sitewide-settings/components/system-key-settings/system-key-settings.component';
import { DeleteSystemKeyDialogComponent } from './sitewide-settings/components/system-key-settings/system-key-dialogs/delete-system-key-dialog/delete-system-key-dialog.component';
import { EditSystemKeyDialogComponent } from './sitewide-settings/components/system-key-settings/system-key-dialogs/edit-system-key-dialog/edit-system-key-dialog.component';
import { AddSystemKeyDialogComponent } from './sitewide-settings/components/system-key-settings/system-key-dialogs/add-system-key-dialog/add-system-key-dialog.component';
import { AddEnvironmentKeyDialogComponent } from './sitewide-settings/components/system-key-settings/environment-key-dialogs/add-environment-key-dialog/add-environment-key-dialog.component';
import { AddSecretKeyDialogComponent } from './sitewide-settings/components/system-key-settings/secret-key-dialogs/add-secret-key-dialog/add-secret-key-dialog.component';
import { AuditConfigurationComponent } from './sitewide-settings/components/audit-configuration/audit-configuration.component';
import { AuditConfigurationDialogComponent } from './sitewide-settings/components/audit-configuration/audit-configuration-dialog/audit-configuration-dialog.component';
import { QuickViewLayoutsComponent } from './maintain/components/quick-view-layouts/quick-view-layouts.component';
import { QuickViewLayoutsTableComponent } from './maintain/components/quick-view-layouts/quick-view-layouts-table/quick-view-layouts-table.component';
import { EditQuickViewLayoutsDialogComponent } from './maintain/components/quick-view-layouts/edit-quick-view-layouts-dialog/edit-quick-view-layouts-dialog.component';
import { AddQuickViewLayoutsDialogComponent } from './maintain/components/quick-view-layouts/add-quick-view-layouts-dialog/add-quick-view-layouts-dialog.component';
import { SystemDriveComponent } from './inquire/components/system-drive/system-drive.component';
import { SystemDriveAddUserDialogComponent } from './inquire/components/system-drive/system-drive-add-user-dialog/system-drive-add-user-dialog.component';
import { SystemDriveUserFilterComponent } from './inquire/components/system-drive/system-drive-user-filter/system-drive-user-filter.component';
import { ErrorLogsComponent } from './logs/components/error-logs/error-logs.component';
import { ErrorLogDetailsDialogComponent } from './logs/components/error-logs/error-log-details-dialog/error-log-details-dialog.component';
import { SiteMaintenanceComponent } from './sitewide-settings/components/site-maintenance/site-maintenance.component';
import { EditSiteMaintenanceDialogComponent } from './sitewide-settings/components/site-maintenance/maintenance-dialogs/edit-maintenance-dialog/edit-maintenance-dialog.component';
import { AdminCommonModule } from './common/admin-common.module';
import { XslTemplatesTableComponent } from './maintain/components/xsl-templates/xsl-templates-table/xsl-templates-table.component';
import { SecurityLogsComponent } from './logs/components/security-logs/security-logs.component';
import { DataIntegrityCheckComponent } from './apps-utilities/components/data-integrity-check/data-integrity-check.component';
import { ISketchComponent } from './apps-utilities/components/isketch/isketch.component';
import { PrintManagerUtilityComponent } from './apps-utilities/components/print-manager-utility/print-manager-utility.component';
import { SetupFormMenuTableComponent } from './maintain/components/setup-form-menus/setup-form-menu-table/setup-form-menu-table.component';
import { BusinessAreaMenuDialogComponent } from './inquire/components/business-areas/business-area-menu-dialog/business-area-menu-dialog.component';
import { BusinessAreaXmlDialogComponent } from './inquire/components/business-areas/business-area-xml-dialog/business-area-xml-dialog.component';
import { TransactionsTreeDialogComponent } from './maintain/components/transactions-tree/transactions-tree-dialog/transactions-tree-dialog.component';
import { MailQueueErrorlogComponent } from './logs/components/mail-queue-error-logs/mail-queue-error-logs.component';
import { MailQueueErrorlogDialogComponent } from './logs/components/mail-queue-error-logs/mail-queue-error-logs-dialog/mail-queue-error-logs-dialog.component';
import { MailQueueErrorlogReplayComponent } from './logs/components/mail-queue-error-logs/mail-queue-error-logs-replay/mail-queue-error-logs-replay.component';
import { BusinessEventErrorSummaryLogComponent } from './eventmodel/components/business-events/business-event-summary/business-event-summary-details.component';
import { BusinessEventErrorResubmitlogComponent } from './eventmodel/components/business-events/business-event-summary/business-event-error/business-event-error.component';
import { BusinessEventErrorLogDialogComponent } from './eventmodel/components/business-events/business-event-summary/business-event-error/business-event-error-dialog/business-event-error-dialog.component';
import { DataEventErrorSummaryLogComponent } from './eventmodel/components/data-events/data-event-summary-details/data-event-summary-details.component';
import { DataEventLogDialogComponent } from './eventmodel/components/data-events/data-event-summary-details/data-event-details/data-event-details-dialog/data-event-details-dialog.component';
import { DataEventErrorLogDialogComponent } from './eventmodel/components/data-events/data-event-summary-details/data-event-error-details/data-event-error-details-dialog/data-event-error-details-dialog.component';
import { DataEventErrorQueuelogComponent } from './eventmodel/components/data-events/data-event-summary-details/data-event-details/data-event-details.component';
import { DataEventErrorResubmitlogComponent } from './eventmodel/components/data-events/data-event-summary-details/data-event-error-details/data-event-error-details.component';
import { DataFeedLogDialogComponent } from './data-feed-mgmnt/components/data-feed-events/data-feed-details-dialog/data-feed-details-dialog.component';
import { DataFeedLogComponent } from './data-feed-mgmnt/components/data-feed-events/data-feed-details.component';
import { SketchComponent } from './maintain/components/isketch/isketch.component';
import { SketchEditDialogComponent } from './maintain/components/isketch/isketch-edit-dialog/isketch-edit-dialog.component';
import { ExternalLinksComponent } from './maintain/components/external-links/external-links.component';
import { ExternalLinksEditDialogComponent } from './maintain/components/external-links/external-links-edit-dialog/external-links-edit-dialog.component';
import { NameSegmentDialogComponent } from './maintain/components/name-segment-definition/name-segment-dialog/name-segment-dialog.component';
import { DataEventTriggersComponent } from './data-event-triggers/components/data-event-triggrs/data-event-triggrs.component';
import { DataEventTriggrsSettingsComponent } from './data-event-triggers/components/data-event-triggrs-settings/data-event-triggrs-settings.component';
import { DataEventTriggrsNavigationComponent } from './data-event-triggers/components/data-event-triggrs-navigation/data-event-triggrs-navigation.component';
import { DataEventTriggrsDialogComponent } from './data-event-triggers/components/data-event-triggrs-dialog/data-event-triggrs-dialog.component';
import { DataEventTriggrsAddDialogComponent } from './data-event-triggers/components/data-event-triggrs-addDialog/data-event-triggrs-addDialog.component';
import { DataEventTriggrsFileUpldDialogComponent } from './data-event-triggers/components/data-event-triggrs-fileUploadDialog/data-event-triggrs-fileUpldDialog.component';
import { DataEventTriggersRuleComponent } from './data-event-triggers/components/data-event-triggrs-rules/data-event-triggrs-rules.component';
import { DataEventTriggersFactSetComponent } from './data-event-triggers/components/data-event-triggrs-factset/data-event-triggrs-factset.component';
import { DataEventTriggrsRuleDialogComponent } from './data-event-triggers/components/data-event-triggrs-ruleDialog/data-event-triggrs-ruleDialog.component';
import { TemplateByFormDialogComponent } from './maintain/components/template-assignment/template-by-form-dialog/template-by-form-dialog.component';
import { DataEventTriggrsFactsetDialogComponent } from './data-event-triggers/components/data-event-triggrs-factsetDialog/data-event-triggrs-factsetDialog.component';
import { DataEventTriggersTestRuleComponent } from './data-event-triggers/components/data-event-triggrs-testRule/data-event-triggrs-testRule.component';
import { UserReportsAndJobAccessComponent } from './users-role-access/components/user-management/settings/user-reports-and-job-access/user-reports-and-job-access.component';
import { DataEventMontrdJurTaxYrDialogDialogComponent } from './data-event-triggers/components/data-event-montrd-JurTaxYrDialog/data-event-montrd-JurTaxYrDialog.component';
import { GenericLettersComponent } from './maintain/components/generic-letters/generic-letters.component';
import { GenericLettersDialogUploadTemplateComponent } from './maintain/components/generic-letters/generic-letters-dialog-upload-template/generic-letters-dialog-upload-template.component';
import { NamedSqlQueryComponent } from './sitewide-settings/components/named-sql-queries/named-sql-queries.component';
import { NamedSqlQueryDialogComponent } from './sitewide-settings/components/named-sql-queries/named-sql-query-dialog/named-sql-query-dialog.component';
import { AccountSettingsComponent } from './sitewide-settings/components/signin-settings/account-settings/account-settings.component';
import { AccountSettingsDialogComponent } from './sitewide-settings/components/signin-settings/account-settings/account-settings-dialog/account-settings-dialog.component';
import { BusRuleSetForWFComponent } from './bus-ruleset-wf/components/bus-ruleset-wf/bus-ruleset-wf.component';
import { TestNamedSqlQueryComponent } from './sitewide-settings/components/named-sql-queries/named-sql-query-dialog/test-named-sql-query/test-named-sql-query.component';
import { BusRuleSetForWFDialogComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-dialog/bus-ruleset-wf-dialog.component';
import { BusRuleSetForWFNavigationComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-navigation/bus-ruleset-wf-navigation.component';
import { BusRuleSetForWFSettingsComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-settings/bus-ruleset-wf-settings.component';
import { BusRuleSetForWFRuleComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-rules/bus-ruleset-wf-rules.component';
import { BusRuleSetForWFFactSetComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-factset/bus-ruleset-wf-factset.component';
import { BusRuleSetForWFRuleDialogComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-rulesDialog/bus-ruleset-wf-rulesDialog.component';
import { BusRuleSetForWFFactsetDialogComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-factsetDialog/bus-ruleset-wf-factsetDialog.component';
import { BusRuleSetWFRuleTestRuleComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-rules-testRule/bus-ruleset-wf-rules-testRule.component';
import { SigninPageSettingsComponent } from './sitewide-settings/components/signin-settings/signin-page-settings/signin-page-settings.component';
import { SigninPageSettingsDialogComponent } from './sitewide-settings/components/signin-settings/signin-page-settings/signin-page-settings-dialog/signin-page-settings-dialog.component';
import { SigninMessageSettingsComponent } from './sitewide-settings/components/signin-settings/signin-message-settings/signin-message-settings.component';
import { SigninMessageSettingsDialogComponent } from './sitewide-settings/components/signin-settings/signin-message-settings/signin-message-settings-dialog/signin-message-settings-dialog.component';
import { SigninSettingsComponent } from './sitewide-settings/components/signin-settings/signin-settings.component';
import { UserGroupsAndPermissionsComponent } from './users-role-access/components/user-management/settings/user-groups-and-permissions/user-groups-and-permissions.component';
import { AssessorAssignmentComponent } from './maintain/components/assessor-assignment/assessor-assignment.component';
import { AssessorAssignmentRuleDialogComponent } from './maintain/components/assessor-assignment/assessor-assignment-rule-dialog/assessor-assignment-rule-dialog.component';
import { AssessorAssignmentCriterionDialogComponent } from './maintain/components/assessor-assignment/assessor-assignment-criterion-dialog/assessor-assignment-criterion-dialog.component';
import { ModulePermissionGuard } from './core/guards/module-permission.guard';
import { JobTokensComponent } from './reports-jobs/components/job-tokens/job-tokens.component';
import { JobTokensDialogComponent } from './reports-jobs/components/job-tokens/job-tokens-dialog/job-tokens-dialog.component';
import { JobsConfigFileUpldDialogComponent } from './reports-jobs/components/jobs-config/jobs-config-fileUploadDialog/jobs-config-fileUpldDialog.component';
import { JobsConfigDialogComponent } from './reports-jobs/components/jobs-config/jobs-config-dialog/jobs-config-dialog.component';
import { TaxYearSettingsComponent } from './sitewide-settings/components/tax-year-settings/tax-year-settings.component';
import { TaxYearSettingsDialogComponent } from './sitewide-settings/components/tax-year-settings/tax-year-settings-dialog/tax-year-settings-dialog.component';
import { JobsConfigParameterComponent } from './reports-jobs/components/jobs-config/jobs-config-parameter/jobs-config-parameter.component';
import { JobsConfigParameterDialogComponent } from './reports-jobs/components/jobs-config/jobs-config-parameter-dialog/jobs-config-parameter-dialog.component';
import { ProxyConfigDialogComponent } from './sitewide-settings/components/map-config/proxy-config-dialog/proxy-config-dialog.component';
import { OnDemandIasJobsComponent } from './reports-jobs/components/on-demand-job/ias-jobs/on-demand-ias-jobs.component';
import { OnDemandSSRSJobsComponent } from './reports-jobs/components/on-demand-job/ssrs-jobs/on-demand-ssrs-jobs.component';
import { OnDemandSsrsJobDialogComponent } from './reports-jobs/components/on-demand-job/ssrs-jobs/on-demand-ssrs-job-dialog/on-demand-ssrs-job-dialog.component';
import { AtomicNodesRefreshDialogComponent } from './maintain/components/atomic-nodes/atomic-nodes-refresh-dialog/atomic-nodes-refresh-dialog.component';
import { PaymentTypesComponent } from './tyler-cashiering-integration/components/payment-types/payment-types.component';
import { EnvironmentKeysEditDialogComponent } from './sitewide-settings/components/system-key-settings/environment-keys-edit-dialog/environment-keys-edit-dialog.component';
import { AppLauncherSettingsComponent } from './sitewide-settings/components/app-luncher-settings/app-launcher.component';
import { AppLauncherSettingsDialogComponent } from './sitewide-settings/components/app-luncher-settings/app-launcher-dialog/app-launcher-dialog.component';
import { SecretKeysEditDialogComponent } from './sitewide-settings/components/system-key-settings/secret-keys-edit-dialog/secret-keys-edit-dialog.component';
import { SecretSubkeyEditDialogComponent } from './sitewide-settings/components/system-key-settings/secret-subkey-edit-dialog/secret-subkey-edit-dialog.component';
import { TCReferenceValuesComponent } from './tyler-cashiering-integration/components/search-configuration/cards/reference-values.component';
import { EditTCReferenceValueComponent } from './tyler-cashiering-integration/components/search-configuration/cards/dialogs/edit-reference-value.component';
import { HelpConfigurationComponent } from './sitewide-settings/components/help-config/help-config.component';
import { StandardHelpComponent } from './sitewide-settings/components/help-config/standard-help/standard-help.component';
import { StandardHelpRoleAccessComponent } from './sitewide-settings/components/help-config/standard-help/standard-help-role-access/standard-help-role-access.component';
import { TestFactsetQueryComponent } from './data-event-triggers/components/data-event-triggrs-factsetDialog/test-factset-sql-query/test-factset-sql-query.component';
import { TestRuleFactsetQueryComponent } from './bus-ruleset-wf/components/bus-ruleset-wf-factsetDialog/test-rule-factset-sql-query/test-rule-factset-sql-query.component';
import { JobFileManagementComponent } from './reports-jobs/components/job-file-management/job-file-management.component';
import { JobFileRenameDialogComponent } from './reports-jobs/components/job-file-management/job-file-rename-dialog/job-file-rename-dialog.component';
import { JobFileUploadDialogComponent } from './reports-jobs/components/job-file-management/job-file-upload-dialog/job-file-upload-dialog.component';
import { JobFileReplaceDialogComponent } from './reports-jobs/components/job-file-management/job-file-replace-dialog/job-file-replace-dialog.component';
import { UserGroupsAndPermissionsDialogComponent } from './users-role-access/components/user-management/settings/user-groups-and-permissions/user-groups-and-permissions-dialog/user-groups-and-permissions-dialog.component';
import { ExportDataletConfigurationDialogComponent } from './property-records/components/datalet-config/datalets-configuration-header/datalet-configuration-export-dialog/datalet-configuration-export-dialog.component';
import { ImportDataletConfigurationDialogComponent } from './property-records/components/datalet-config/datalets-configuration-header/datalet-configuration-import-dialog/datalet-configuration-import-dialog.component';
import { LanguageSettingsDialogComponent } from './sitewide-settings/components/site-date-jur-settings/settings-dialogs/language-settings-dialog/language-settings-dialog.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { UserManagementSetUpFormAccessComponent } from './users-role-access/components/user-management/settings/user-management-setup-form-access/user-management-setup-form-access.component';
import { TransactionsGroupDialogComponent } from './maintain/components/transactions-tree/transactions-group-dialog/transactions-group-dialog.component';
import { AddEditTransactionDialogComponent } from './maintain/components/transactions-tree/add-edit-transaction-group/add-edit-transaction-dialog.component';
import { OAuthClientSettingsComponent } from './sitewide-settings/components/oauth-client-settings/oauth-client-settings.component';
import { OAuthClientSettingsDialogComponent } from './sitewide-settings/components/oauth-client-settings/oauth-client-settings-dialog/oauth-client-settings-dialog.component';
import { ContentManagerUtilityComponent } from './apps-utilities/components/content-manager-utility/content-manager-utility.component';
import { BatchCalcConfigurationComponent } from './reports-jobs/components/batch-calc-config/batch-calc-config.component';
import { BatchCalcJobDialogComponent } from './reports-jobs/components/batch-calc-config/batch-calc-job-dialog/batch-calc-job-dialog.component';
import { BatchCalcJobTypesComponent } from './reports-jobs/components/batch-calc-config/batch-calc-types/batch-calc-types.component';
import { BatchCalcJobTypesDialogComponent } from './reports-jobs/components/batch-calc-config/batch-calc-job-types-dialog/batch-calc-job-types-dialog.component';
import { DownloadUploadFolderAccessComponent } from './reports-jobs/components/download-upload-folder-access/download-upload-folder-access.component';
import { FolderDialogComponent } from './reports-jobs/components/download-upload-folder-access/folder-dialog/folder-dialog.component';
import { FilterMaintainSearchPipe } from "./maintain/components/maintain-search-config/maintain-search-list/pipes/filter-maintain-search.pipe";
import { MaintainSearchListComponent } from "./maintain/components/maintain-search-config/maintain-search-list/maintain-search-list.component";
import { MaintainSearchFilterComponent } from "./maintain/components/maintain-search-config/maintain-search-filter/maintain-search-filter.component";
import { DataChgSubComponent } from "./eventmodel/components/data-chg-sub/data-chg-sub.component";
import { DataChgSubFilterComponent } from "./eventmodel/components/data-chg-sub/data-chg-sub-filter/data-chg-sub-filter.component";
import { DataChgSubListComponent } from "./eventmodel/components/data-chg-sub/data-chg-sub-list/data-chg-sub-list.component";
import { DataChgSubListFilterPipe } from "./eventmodel/components/data-chg-sub/data-chg-sub-list/pipes/data-chg-sub-list-filter.pipe";
import { DataChgSubCardComponent } from "./eventmodel/components/data-chg-sub/data-chg-sub-card/data-chg-sub-card.component";
import { DataChgSubDialogComponent } from './eventmodel/components/data-chg-sub/data-chg-sub-dialog/data-chg-sub-dialog.component';
import { DataChgSubTblListComponent } from './eventmodel/components/data-chg-sub/data-chg-sub-tbl-list/data-chg-sub-tbl-list.component';
import { DataChgSubColListComponent } from './eventmodel/components/data-chg-sub/data-chg-sub-col-list/data-chg-sub-col-list.component';
import { DataChgSubTblDialogComponent } from './eventmodel/components/data-chg-sub/data-chg-sub-tbl-dialog/data-chg-sub-tbl-dialog.component';
import { DataChgSubColDialogComponent } from './eventmodel/components/data-chg-sub/data-chg-sub-col-list/data-chg-sub-col-dialog/data-chg-sub-col-dialog.component';
import { JobSqlQueryComponent } from './reports-jobs/components/job-sql-queries/job-sql-queries.component';
import { TestJobSqlQueryComponent } from './reports-jobs/components/job-sql-queries/job-sql-query-dialog/test-job-sql-query/test-job-sql-query.component';
import { AddJobSqlQueryDialogComponent } from './reports-jobs/components/job-sql-queries/job-sql-query-dialog/add-job-sql-query-dialog.component';
import { EditJobSqlQueryDialogComponent } from './reports-jobs/components/job-sql-queries/job-sql-query-dialog/edit-job-sql-query-dialog.component';
import { JurisdictionLocksAuditLogDialogComponent } from './maintain/components/jurisdiction-locks/jurisdiction-locks-audit-log-dialog/jurisdiction-locks-audit-log-dialog.component';
import { BatchCalcJobTypeParametersDialogComponent } from './reports-jobs/components/batch-calc-config/batch-calc-job-type-params-dialog/batch-calc-job-type-params-dialog.component';
import { DeleteFolderDialogComponent } from './reports-jobs/components/download-upload-folder-access/delete-folder-dialog/delete-folder-dialog.component';

const devTools = environment.production
  ? []
  : [
      StoreDevtoolsModule.instrument({
        name: 'iasWorld Admin',
      connectInZone: true}),
    ];

@NgModule({ declarations: [
        AppComponent,
        OverviewComponent,
        OmniBarComponent,
        DataletSettingsComponent,
        ReportDefinitionComponent,
        SearchSettingsComponent,
        SettingEditorDialogComponent,
        SettingEditorComponent,
        OverviewSectionComponent,
        FirstletterUppercasePipe,
        RoleSelectionDialogComponent,
        RoleSelectionDialogComponent,
        ConfigSearchHeaderInOutComponent,
        ConfigSearchHeaderComponent,
        ConfigSearchFieldsComponent,
        ConfigSearchFiltersComponent,
        ConfigSearchOuterFieldsComponent,
        SearchTypesComponent,
        ConfigHeaderEditorDialogComponent,
        ConfigSearchFieldDialogComponent,
        ConfigSearchFilterDialogComponent,
        ConfigSearchOuterFieldsDialogComponent,
        ConfirmationDialogComponent,
        HelpConfigurationComponent,
        CustomHelpComponent,
        StandardHelpComponent,
        StandardHelpRoleAccessComponent,
        CustomHelpEditDialogComponent,
        SearchConfigurationFieldsDetailDialogComponent,
        InheritedFromBaseComponent,
        SearchesMenuComponent,
        DataletsMenuComponent,
        SearchesMenuDialogComponent,
        DataletsMenuDialogComponent,
        CriteriaGroupsComponent,
        CriteriaGroupsDialogComponent,
        DataletConfigComponent,
        DataletsConfigurationHeaderComponent,
        ExportDataletConfigurationDialogComponent,
        ImportDataletConfigurationDialogComponent,
        DataletDialogComponent,
        DataletsConfigurationFieldsComponent,
        DataletsConfigurationFieldsDialogComponent,
        DataletParentChildRelationshipComponent,
        DataletConfigurationSetChildrenDialogComponent,
        DataletsConfigurationCopyToRolesComponent,
        DataModelExtensionComponent,
        DataModelExtensionDialogComponent,
        UniqueDataletNameValidatorDirectiveDirective,
        UniqueTemplateNameValidatorDirective,
        DataletsConfigurationCloneDataletComponent,
        DataletsFilterComponent,
        FilterDataletsPipe,
        FilterMaintainTablesPipe,
        FilterSpreadsheetTemplatesPipe,
        HistoryTemplatesDialogComponent,
        HistoryTemplateXslDialogComponent,
        IdFormatsComponent,
        IdFormatsDialogComponent,
        LayoutSettingComponent,
        ListManagementComponent,
        ListManagementCategoriesComponent,
        ListManagementCategoriesDialogComponent,
        ListWithTypeAheadComponent,
        SqlConfigComponent,
        SqlConfigFieldComponent,
        DataletHeaderComponent,
        XslSettingComponent,
        SqlConfigDialogComponent,
        SqlConfigFieldDialogComponent,
        XslSettingDialogComponent,
        RoleTabAccessComponent,
        ViewEditAccessComponent,
        DataletHeaderTestDialogComponent,
        SetupFormsAccessComponent,
        SetupFormsGroupsComponent,
        AddFormsGroupDialogComponent,
        AddSetupFormsDialogComponent,
        AddSetupFormGroupDialogComponent,
        EditTCSearchFieldComponent,
        EditTCSearchOptionsComponent,
        EditSetupFormGroupDialogComponent,
        SpreadsheetTemplatesComponent,
        SpreadsheetTemplateFieldDialogComponent,
        ViewEditAccessDialogComponent,
        TemplateAssignmentComponent,
        TransactionsTreeComponent,
        TemplateByRoleDialogComponent,
        XslTemplatesComponent,
        AddTemplateDialogComponent,
        GeneralSettingsComponent,
        AdvancedConfigComponent,
        MapConfigComponent,
        MapConfigDialogComponent,
        MaintainSearchConfigComponent,
        MaintainSearchConfigDialogComponent,
        AddBranchDialogComponent,
        TreePanelComponent,
        UserManagementSettingsComponent,
        UserManagementDialogComponent,
        UserManagementDetailsComponent,
        UserManagementSingleUserNavigationComponent,
        UserManagementMultipleUserNavigationComponent,
        UserManagementAccountSettingsComponent,
        UserManagementRoleJurisdictionComponent,
        UserManagementSetUpFormAccessComponent,
        UserManagementAccountEditUserComponent,
        ConfigValueSearchComponent,
        ConfigKeyEditorComponent,
        MaintainFieldsComponent,
        MaintainTableFilterComponent,
        MaintainTableListComponent,
        MaintainBaselineFieldSectionComponent,
        MaintainFieldEditDialogComponent,
        MaintainFieldInquireDialogComponent,
        AtomicNodesComponent,
        AtomicNodesDialogComponent,
        AddNonTreeItemDialogComponent,
        FilingConfigComponent,
        FilingConfigByFilingComponent,
        FilingConfigByTransformComponent,
        FilingDialogComponent,
        FilingParametersSectionComponent,
        FilingServiceErrorlogComponent,
        FilingServiceErrorlogDialogComponent,
        FilingServiceErrorlogReplayComponent,
        FilingTransformDialogComponent,
        FilingTransformDeleteDialogComponent,
        FilingTokensSectionComponent,
        FilingTokenArgumentsSectionComponent,
        FilingParameterDialogComponent,
        FilingTokenDialogComponent,
        FilingTokenArgumentDialogComponent,
        JurisdictionLockEditDialogComponent,
        JurisdictionLocksComponent,
        SetupFormsAccessComponent,
        SetupFormsGroupsComponent,
        SetupFormMenusComponent,
        SetupFormMenusEditDialogComponent,
        MaintainToolbarRoleComponent,
        MaintainToolbarTransactionComponent,
        MaintainToolbarComponent,
        TransactionsComponent,
        MaintainLovDataDialogComponent,
        MaintainLovDetailDialogComponent,
        MaintainLovEditDialogComponent,
        MaintainLovInfoSectionComponent,
        MaintainToolbarTransactionDialogComponent,
        TransactionAccessComponent,
        TransactionDefinitionComponent,
        TransactionDefinitionDialogComponent,
        MaintainRoleSettingsComponent,
        TransactionDefinitionDialogComponent,
        TransactionAccessDialogComponent,
        MaintainToolbarRoleDialogComponent,
        UserManagementAccountEditSettingsComponent,
        TransformParametersSectionComponent,
        ErrorsComponent,
        PasswordSettingsComponent,
        PasswordSettingsDialogComponent,
        QuickLinksComponent,
        QuickLinksEditDialogComponent,
        ReportConfigComponent,
        ReportSqlConfigFieldDialogComponent,
        ReportSqlConfigFieldComponent,
        ReportSqlConfigDialogComponent,
        ReportSqlConfigComponent,
        TylerNoCopyPasteDirective,
        ShortenArrayPipe,
        SessionManagementComponent,
        SafePipePipe,
        TCSearchConfigComponent,
        TCSearchFieldsComponent,
        TCSearchOptionsComponent,
        UserManagementAddEditJurisdictionComponent,
        TylerJurisdictionsDropDownComponent,
        TransformParameterDialogComponent,
        FilterJursPipe,
        UserManagementAddEditRoleComponent,
        TylerRoleDropDownComponent,
        JurisdictionsTreeViewComponent,
        UserManagementSingleJurAddEditRoleComponent,
        UserManagementAddUserComponent,
        OnDemandJobComponent,
        OnDemandIasJobsComponent,
        OnDemandSSRSJobsComponent,
        OnDemandJobDialogComponent,
        OnDemandSsrsJobDialogComponent,
        UserManagementSecurityGroupAccessComponent,
        UserManagementJurisdictionSelectComponent,
        UserManagementSecurityGroupRolesComponent,
        UserManagementAddEditAddEditSecurityAccessComponent,
        UserManagementAccessGroupTreeViewComponent,
        UserOverridesComponent,
        UserReportsAndJobAccessComponent,
        UserGroupsAndPermissionsComponent,
        UserGroupsAndPermissionsDialogComponent,
        AddEditOverrideComponent,
        InformationReportComponent,
        SummaryReportComponent,
        SettingtableComponent,
        AccessProfileReportComponent,
        AccessDeniedComponent,
        TaxRollsComponent,
        TaxRollsForSearchesComponent,
        TaxRollEditDialogComponent,
        TaxRollGroupAssignmentComponent,
        AddEditTaxRollGroupComponent,
        LovConfigurationComponent,
        LovConfigurationListComponent,
        LovValuesListComponent,
        JobsAccessComponent,
        JobsAccessFilterComponent,
        JobsConfigComponent,
        JobsConfigFilterComponent,
        JobsConfigParameterComponent,
        LovConfigurationDialogComponent,
        LovValueDialogComponent,
        LovConfigurationGenerateValueComponent,
        SiteDateJurSettingsComponent,
        AuthenticationProviderComponent,
        OidcComponent,
        AuditReportsComponent,
        AuthenticatorEditorComponent,
        OidcEditorComponent,
        MapServerSettingsComponent,
        BusinessAreasComponent,
        SiteSettingsDialogComponent,
        DateSettingsDialogComponent,
        JurSettingsDialogComponent,
        DataPanelConfigComponent,
        ServerInfoComponent,
        SigninSettingsComponent,
        DataPanelContentDialogComponent,
        SystemKeySettingsComponent,
        DeleteSystemKeyDialogComponent,
        AddSystemKeyDialogComponent,
        AddEnvironmentKeyDialogComponent,
        AddSecretKeyDialogComponent,
        EditSystemKeyDialogComponent,
        AuditConfigurationComponent,
        AuditConfigurationDialogComponent,
        SystemDriveComponent,
        SystemDriveAddUserDialogComponent,
        SystemDriveUserFilterComponent,
        QuickViewLayoutsComponent,
        QuickViewLayoutsTableComponent,
        EditQuickViewLayoutsDialogComponent,
        AddQuickViewLayoutsDialogComponent,
        ErrorLogsComponent,
        ErrorLogDetailsDialogComponent,
        SiteMaintenanceComponent,
        TaxYearSettingsComponent,
        EditSiteMaintenanceDialogComponent,
        XslTemplatesTableComponent,
        SecurityLogsComponent,
        DataIntegrityCheckComponent,
        ISketchComponent,
        PrintManagerUtilityComponent,
        SetupFormMenuTableComponent,
        BusinessAreaMenuDialogComponent,
        BusinessAreaXmlDialogComponent,
        TransactionsTreeDialogComponent,
        MailQueueErrorlogComponent,
        MailQueueErrorlogDialogComponent,
        MailQueueErrorlogReplayComponent,
        DataEventLogDialogComponent,
        DataEventErrorLogDialogComponent,
        DataEventErrorQueuelogComponent,
        DataEventErrorResubmitlogComponent,
        BusinessEventErrorSummaryLogComponent,
        DataEventTriggersComponent,
        DataEventTriggrsSettingsComponent,
        DataEventTriggrsNavigationComponent,
        DataEventTriggersTestRuleComponent,
        DataEventTriggersRuleComponent,
        DataEventTriggersFactSetComponent,
        DataEventTriggrsDialogComponent,
        DataEventTriggrsAddDialogComponent,
        DataEventTriggrsRuleDialogComponent,
        DataEventMontrdJurTaxYrDialogDialogComponent,
        DataEventTriggrsFactsetDialogComponent,
        TestFactsetQueryComponent,
        DataEventTriggrsFileUpldDialogComponent,
        DataEventErrorSummaryLogComponent,
        DataChgSubComponent,
        DataChgSubDialogComponent,
        DataChgSubFilterComponent,
        DataChgSubListComponent,
        DataChgSubListFilterPipe,
        DataChgSubCardComponent,
        DataChgSubTblListComponent,
        DataChgSubColListComponent,
        DataChgSubTblDialogComponent,
        DataChgSubColDialogComponent,
        BusinessEventErrorResubmitlogComponent,
        BusinessEventErrorLogDialogComponent,
        DataFeedLogDialogComponent,
        DataFeedLogComponent,
        AccountSettingsComponent,
        AccountSettingsDialogComponent,
        BusRuleSetForWFComponent,
        BusRuleSetForWFDialogComponent,
        BusRuleSetForWFNavigationComponent,
        BusRuleSetForWFSettingsComponent,
        BusRuleSetForWFRuleComponent,
        BusRuleSetForWFFactSetComponent,
        BusRuleSetForWFRuleDialogComponent,
        BusRuleSetForWFFactsetDialogComponent,
        TestRuleFactsetQueryComponent,
        BusRuleSetWFRuleTestRuleComponent,
        SketchComponent,
        SketchEditDialogComponent,
        ExternalLinksComponent,
        ExternalLinksEditDialogComponent,
        NameSegmentDefinitionComponent,
        NameSegmentDialogComponent,
        TemplateByFormDialogComponent,
        GenericLettersComponent,
        GenericLettersDialogUploadTemplateComponent,
        NamedSqlQueryComponent,
        NamedSqlQueryDialogComponent,
        TestNamedSqlQueryComponent,
        SigninPageSettingsComponent,
        SigninPageSettingsDialogComponent,
        SigninMessageSettingsComponent,
        SigninMessageSettingsDialogComponent,
        AssessorAssignmentComponent,
        AssessorAssignmentRuleDialogComponent,
        AssessorAssignmentCriterionDialogComponent,
        AddLayoutDialogComponent,
        JobTokensComponent,
        JobTokensDialogComponent,
        JobsConfigFileUpldDialogComponent,
        JobsConfigFileUpldDialogComponent,
        JobsConfigDialogComponent,
        JobsConfigParameterComponent,
        JobsConfigParameterDialogComponent,
        JobFileManagementComponent,
        JobFileRenameDialogComponent,
        JobFileUploadDialogComponent,
        JobFileReplaceDialogComponent,
        BatchCalcConfigurationComponent,
        BatchCalcJobDialogComponent,
        BatchCalcJobTypesComponent,
        BatchCalcJobTypesDialogComponent,
        BatchCalcJobTypeParametersDialogComponent,
        TaxYearSettingsDialogComponent,
        ProxyConfigDialogComponent,
        AtomicNodesRefreshDialogComponent,
        PaymentTypesComponent,
        EnvironmentKeysEditDialogComponent,
        AppLauncherSettingsComponent,
        AppLauncherSettingsDialogComponent,
        SecretKeysEditDialogComponent,
        SecretSubkeyEditDialogComponent,
        TCReferenceValuesComponent,
        EditTCReferenceValueComponent,
        LanguageSettingsDialogComponent,
        TransactionsGroupDialogComponent,
        AddEditTransactionDialogComponent,
        OAuthClientSettingsComponent,
        OAuthClientSettingsDialogComponent,
        ContentManagerUtilityComponent,
        DownloadUploadFolderAccessComponent,
        FolderDialogComponent,
        FilterMaintainSearchPipe,
        MaintainSearchListComponent,
        MaintainSearchFilterComponent,
        JobSqlQueryComponent,
        AddJobSqlQueryDialogComponent,
        EditJobSqlQueryDialogComponent,
        TestJobSqlQueryComponent,
        JurisdictionLocksAuditLogDialogComponent,
        DeleteFolderDialogComponent
    ],
    bootstrap: [AppComponent],
    imports: [MaterialModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        AdminCommonModule,
        BrowserModule,
        CommonModule,
        UpgradeModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TylerUIModule,
        StoreModule.forRoot(reducerConfig, {
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            },
        }),
        EffectsModule.forRoot(effectsConfig),
        ...devTools], providers: [
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
        UsersRolesService,
        DataletSettingsService,
        SearchTypesService,
        RoleModulesService,
        { provide: DateAdapter, useClass: TylerDateFormatMomentAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MatPaginatorIntl, useValue: i18nMatPaginator() },
        { provide: LOCALE_ID, useValue: getHtmlLang() },
        ModulePermissionGuard,
        provideHttpClient(withInterceptorsFromDi()),
    ] })

export class AppModule {}

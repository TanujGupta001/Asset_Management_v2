const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'itam-connector',
  service: 'asset-management-goalseek-service',
  location: 'asia-south1'
};
exports.connectorConfig = connectorConfig;

const createDepartmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDepartment', inputVars);
}
createDepartmentRef.operationName = 'CreateDepartment';
exports.createDepartmentRef = createDepartmentRef;

exports.createDepartment = function createDepartment(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createDepartmentRef(dcInstance, inputVars));
}
;

const updateDepartmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDepartment', inputVars);
}
updateDepartmentRef.operationName = 'UpdateDepartment';
exports.updateDepartmentRef = updateDepartmentRef;

exports.updateDepartment = function updateDepartment(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateDepartmentRef(dcInstance, inputVars));
}
;

const deleteDepartmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteDepartment', inputVars);
}
deleteDepartmentRef.operationName = 'DeleteDepartment';
exports.deleteDepartmentRef = deleteDepartmentRef;

exports.deleteDepartment = function deleteDepartment(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteDepartmentRef(dcInstance, inputVars));
}
;

const createEmployeeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateEmployee', inputVars);
}
createEmployeeRef.operationName = 'CreateEmployee';
exports.createEmployeeRef = createEmployeeRef;

exports.createEmployee = function createEmployee(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createEmployeeRef(dcInstance, inputVars));
}
;

const updateEmployeeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEmployee', inputVars);
}
updateEmployeeRef.operationName = 'UpdateEmployee';
exports.updateEmployeeRef = updateEmployeeRef;

exports.updateEmployee = function updateEmployee(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateEmployeeRef(dcInstance, inputVars));
}
;

const deleteEmployeeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEmployee', inputVars);
}
deleteEmployeeRef.operationName = 'DeleteEmployee';
exports.deleteEmployeeRef = deleteEmployeeRef;

exports.deleteEmployee = function deleteEmployee(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteEmployeeRef(dcInstance, inputVars));
}
;

const createVendorRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateVendor', inputVars);
}
createVendorRef.operationName = 'CreateVendor';
exports.createVendorRef = createVendorRef;

exports.createVendor = function createVendor(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createVendorRef(dcInstance, inputVars));
}
;

const deleteVendorRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteVendor', inputVars);
}
deleteVendorRef.operationName = 'DeleteVendor';
exports.deleteVendorRef = deleteVendorRef;

exports.deleteVendor = function deleteVendor(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteVendorRef(dcInstance, inputVars));
}
;

const createAssetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateAsset', inputVars);
}
createAssetRef.operationName = 'CreateAsset';
exports.createAssetRef = createAssetRef;

exports.createAsset = function createAsset(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createAssetRef(dcInstance, inputVars));
}
;

const updateAssetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateAsset', inputVars);
}
updateAssetRef.operationName = 'UpdateAsset';
exports.updateAssetRef = updateAssetRef;

exports.updateAsset = function updateAsset(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateAssetRef(dcInstance, inputVars));
}
;

const updateAssetStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateAssetStatus', inputVars);
}
updateAssetStatusRef.operationName = 'UpdateAssetStatus';
exports.updateAssetStatusRef = updateAssetStatusRef;

exports.updateAssetStatus = function updateAssetStatus(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateAssetStatusRef(dcInstance, inputVars));
}
;

const updateAssetAssignmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateAssetAssignment', inputVars);
}
updateAssetAssignmentRef.operationName = 'UpdateAssetAssignment';
exports.updateAssetAssignmentRef = updateAssetAssignmentRef;

exports.updateAssetAssignment = function updateAssetAssignment(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateAssetAssignmentRef(dcInstance, inputVars));
}
;

const deleteAssetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAsset', inputVars);
}
deleteAssetRef.operationName = 'DeleteAsset';
exports.deleteAssetRef = deleteAssetRef;

exports.deleteAsset = function deleteAsset(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteAssetRef(dcInstance, inputVars));
}
;

const createMovementRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovement', inputVars);
}
createMovementRef.operationName = 'CreateMovement';
exports.createMovementRef = createMovementRef;

exports.createMovement = function createMovement(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createMovementRef(dcInstance, inputVars));
}
;

const createTransferRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTransfer', inputVars);
}
createTransferRef.operationName = 'CreateTransfer';
exports.createTransferRef = createTransferRef;

exports.createTransfer = function createTransfer(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createTransferRef(dcInstance, inputVars));
}
;

const createSoftwareLicenseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSoftwareLicense', inputVars);
}
createSoftwareLicenseRef.operationName = 'CreateSoftwareLicense';
exports.createSoftwareLicenseRef = createSoftwareLicenseRef;

exports.createSoftwareLicense = function createSoftwareLicense(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createSoftwareLicenseRef(dcInstance, inputVars));
}
;

const updateSoftwareLicenseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateSoftwareLicense', inputVars);
}
updateSoftwareLicenseRef.operationName = 'UpdateSoftwareLicense';
exports.updateSoftwareLicenseRef = updateSoftwareLicenseRef;

exports.updateSoftwareLicense = function updateSoftwareLicense(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateSoftwareLicenseRef(dcInstance, inputVars));
}
;

const deleteSoftwareLicenseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteSoftwareLicense', inputVars);
}
deleteSoftwareLicenseRef.operationName = 'DeleteSoftwareLicense';
exports.deleteSoftwareLicenseRef = deleteSoftwareLicenseRef;

exports.deleteSoftwareLicense = function deleteSoftwareLicense(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteSoftwareLicenseRef(dcInstance, inputVars));
}
;

const createInventoryItemRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInventoryItem', inputVars);
}
createInventoryItemRef.operationName = 'CreateInventoryItem';
exports.createInventoryItemRef = createInventoryItemRef;

exports.createInventoryItem = function createInventoryItem(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInventoryItemRef(dcInstance, inputVars));
}
;

const updateInventoryItemRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateInventoryItem', inputVars);
}
updateInventoryItemRef.operationName = 'UpdateInventoryItem';
exports.updateInventoryItemRef = updateInventoryItemRef;

exports.updateInventoryItem = function updateInventoryItem(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateInventoryItemRef(dcInstance, inputVars));
}
;

const deleteInventoryItemRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteInventoryItem', inputVars);
}
deleteInventoryItemRef.operationName = 'DeleteInventoryItem';
exports.deleteInventoryItemRef = deleteInventoryItemRef;

exports.deleteInventoryItem = function deleteInventoryItem(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteInventoryItemRef(dcInstance, inputVars));
}
;

const createTelephoneRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTelephone', inputVars);
}
createTelephoneRef.operationName = 'CreateTelephone';
exports.createTelephoneRef = createTelephoneRef;

exports.createTelephone = function createTelephone(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars);
  return executeMutation(createTelephoneRef(dcInstance, inputVars));
}
;

const deleteTelephoneRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTelephone', inputVars);
}
deleteTelephoneRef.operationName = 'DeleteTelephone';
exports.deleteTelephoneRef = deleteTelephoneRef;

exports.deleteTelephone = function deleteTelephone(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteTelephoneRef(dcInstance, inputVars));
}
;

const createPrinterRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePrinter', inputVars);
}
createPrinterRef.operationName = 'CreatePrinter';
exports.createPrinterRef = createPrinterRef;

exports.createPrinter = function createPrinter(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars);
  return executeMutation(createPrinterRef(dcInstance, inputVars));
}
;

const deletePrinterRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePrinter', inputVars);
}
deletePrinterRef.operationName = 'DeletePrinter';
exports.deletePrinterRef = deletePrinterRef;

exports.deletePrinter = function deletePrinter(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePrinterRef(dcInstance, inputVars));
}
;

const createAuditLogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateAuditLog', inputVars);
}
createAuditLogRef.operationName = 'CreateAuditLog';
exports.createAuditLogRef = createAuditLogRef;

exports.createAuditLog = function createAuditLog(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createAuditLogRef(dcInstance, inputVars));
}
;

const createAdminUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateAdminUser', inputVars);
}
createAdminUserRef.operationName = 'CreateAdminUser';
exports.createAdminUserRef = createAdminUserRef;

exports.createAdminUser = function createAdminUser(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createAdminUserRef(dcInstance, inputVars));
}
;

const updateAdminUserPasswordRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateAdminUserPassword', inputVars);
}
updateAdminUserPasswordRef.operationName = 'UpdateAdminUserPassword';
exports.updateAdminUserPasswordRef = updateAdminUserPasswordRef;

exports.updateAdminUserPassword = function updateAdminUserPassword(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateAdminUserPasswordRef(dcInstance, inputVars));
}
;

const deleteAdminUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAdminUser', inputVars);
}
deleteAdminUserRef.operationName = 'DeleteAdminUser';
exports.deleteAdminUserRef = deleteAdminUserRef;

exports.deleteAdminUser = function deleteAdminUser(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteAdminUserRef(dcInstance, inputVars));
}
;

const getDepartmentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDepartments');
}
getDepartmentsRef.operationName = 'GetDepartments';
exports.getDepartmentsRef = getDepartmentsRef;

exports.getDepartments = function getDepartments(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getDepartmentsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getEmployeesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEmployees');
}
getEmployeesRef.operationName = 'GetEmployees';
exports.getEmployeesRef = getEmployeesRef;

exports.getEmployees = function getEmployees(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getEmployeesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAvailableEmployeesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAvailableEmployees');
}
getAvailableEmployeesRef.operationName = 'GetAvailableEmployees';
exports.getAvailableEmployeesRef = getAvailableEmployeesRef;

exports.getAvailableEmployees = function getAvailableEmployees(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAvailableEmployeesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getVendorsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetVendors');
}
getVendorsRef.operationName = 'GetVendors';
exports.getVendorsRef = getVendorsRef;

exports.getVendors = function getVendors(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getVendorsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAssetsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAssets');
}
getAssetsRef.operationName = 'GetAssets';
exports.getAssetsRef = getAssetsRef;

exports.getAssets = function getAssets(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAssetsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAssetByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAssetById', inputVars);
}
getAssetByIdRef.operationName = 'GetAssetById';
exports.getAssetByIdRef = getAssetByIdRef;

exports.getAssetById = function getAssetById(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getAssetByIdRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAssetsByStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAssetsByStatus', inputVars);
}
getAssetsByStatusRef.operationName = 'GetAssetsByStatus';
exports.getAssetsByStatusRef = getAssetsByStatusRef;

exports.getAssetsByStatus = function getAssetsByStatus(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getAssetsByStatusRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAssetsByDepartmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAssetsByDepartment', inputVars);
}
getAssetsByDepartmentRef.operationName = 'GetAssetsByDepartment';
exports.getAssetsByDepartmentRef = getAssetsByDepartmentRef;

exports.getAssetsByDepartment = function getAssetsByDepartment(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getAssetsByDepartmentRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getMovementsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMovements');
}
getMovementsRef.operationName = 'GetMovements';
exports.getMovementsRef = getMovementsRef;

exports.getMovements = function getMovements(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getMovementsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getRecentMovementsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRecentMovements', inputVars);
}
getRecentMovementsRef.operationName = 'GetRecentMovements';
exports.getRecentMovementsRef = getRecentMovementsRef;

exports.getRecentMovements = function getRecentMovements(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getRecentMovementsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getTransfersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTransfers');
}
getTransfersRef.operationName = 'GetTransfers';
exports.getTransfersRef = getTransfersRef;

exports.getTransfers = function getTransfers(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getTransfersRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getSoftwareLicensesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSoftwareLicenses');
}
getSoftwareLicensesRef.operationName = 'GetSoftwareLicenses';
exports.getSoftwareLicensesRef = getSoftwareLicensesRef;

exports.getSoftwareLicenses = function getSoftwareLicenses(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getSoftwareLicensesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getInventoryItemsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetInventoryItems');
}
getInventoryItemsRef.operationName = 'GetInventoryItems';
exports.getInventoryItemsRef = getInventoryItemsRef;

exports.getInventoryItems = function getInventoryItems(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getInventoryItemsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getTelephonesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTelephones');
}
getTelephonesRef.operationName = 'GetTelephones';
exports.getTelephonesRef = getTelephonesRef;

exports.getTelephones = function getTelephones(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getTelephonesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getPrintersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPrinters');
}
getPrintersRef.operationName = 'GetPrinters';
exports.getPrintersRef = getPrintersRef;

exports.getPrinters = function getPrinters(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getPrintersRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAuditLogsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAuditLogs', inputVars);
}
getAuditLogsRef.operationName = 'GetAuditLogs';
exports.getAuditLogsRef = getAuditLogsRef;

exports.getAuditLogs = function getAuditLogs(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getAuditLogsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAdminUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAdminUsers');
}
getAdminUsersRef.operationName = 'GetAdminUsers';
exports.getAdminUsersRef = getAdminUsersRef;

exports.getAdminUsers = function getAdminUsers(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAdminUsersRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAdminUserByUsernameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAdminUserByUsername', inputVars);
}
getAdminUserByUsernameRef.operationName = 'GetAdminUserByUsername';
exports.getAdminUserByUsernameRef = getAdminUserByUsernameRef;

exports.getAdminUserByUsername = function getAdminUserByUsername(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getAdminUserByUsernameRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAvailableResourcesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAvailableResources');
}
getAvailableResourcesRef.operationName = 'GetAvailableResources';
exports.getAvailableResourcesRef = getAvailableResourcesRef;

exports.getAvailableResources = function getAvailableResources(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAvailableResourcesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

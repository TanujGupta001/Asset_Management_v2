# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `itam-connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetDepartments*](#getdepartments)
  - [*GetEmployees*](#getemployees)
  - [*GetAvailableEmployees*](#getavailableemployees)
  - [*GetVendors*](#getvendors)
  - [*GetAssets*](#getassets)
  - [*GetAssetById*](#getassetbyid)
  - [*GetAssetsByStatus*](#getassetsbystatus)
  - [*GetAssetsByDepartment*](#getassetsbydepartment)
  - [*GetMovements*](#getmovements)
  - [*GetRecentMovements*](#getrecentmovements)
  - [*GetTransfers*](#gettransfers)
  - [*GetSoftwareLicenses*](#getsoftwarelicenses)
  - [*GetInventoryItems*](#getinventoryitems)
  - [*GetTelephones*](#gettelephones)
  - [*GetPrinters*](#getprinters)
  - [*GetAuditLogs*](#getauditlogs)
  - [*GetAdminUsers*](#getadminusers)
  - [*GetAdminUserByUsername*](#getadminuserbyusername)
  - [*GetAvailableResources*](#getavailableresources)
- [**Mutations**](#mutations)
  - [*CreateDepartment*](#createdepartment)
  - [*UpdateDepartment*](#updatedepartment)
  - [*DeleteDepartment*](#deletedepartment)
  - [*CreateEmployee*](#createemployee)
  - [*UpdateEmployee*](#updateemployee)
  - [*DeleteEmployee*](#deleteemployee)
  - [*CreateVendor*](#createvendor)
  - [*DeleteVendor*](#deletevendor)
  - [*CreateAsset*](#createasset)
  - [*UpdateAsset*](#updateasset)
  - [*UpdateAssetStatus*](#updateassetstatus)
  - [*UpdateAssetAssignment*](#updateassetassignment)
  - [*DeleteAsset*](#deleteasset)
  - [*CreateMovement*](#createmovement)
  - [*CreateTransfer*](#createtransfer)
  - [*CreateSoftwareLicense*](#createsoftwarelicense)
  - [*UpdateSoftwareLicense*](#updatesoftwarelicense)
  - [*DeleteSoftwareLicense*](#deletesoftwarelicense)
  - [*CreateInventoryItem*](#createinventoryitem)
  - [*UpdateInventoryItem*](#updateinventoryitem)
  - [*DeleteInventoryItem*](#deleteinventoryitem)
  - [*CreateTelephone*](#createtelephone)
  - [*DeleteTelephone*](#deletetelephone)
  - [*CreatePrinter*](#createprinter)
  - [*DeletePrinter*](#deleteprinter)
  - [*CreateAuditLog*](#createauditlog)
  - [*CreateAdminUser*](#createadminuser)
  - [*UpdateAdminUserPassword*](#updateadminuserpassword)
  - [*DeleteAdminUser*](#deleteadminuser)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `itam-connector`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@itam/dataconnect` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@itam/dataconnect';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@itam/dataconnect';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `itam-connector` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetDepartments
You can execute the `GetDepartments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getDepartments(options?: ExecuteQueryOptions): QueryPromise<GetDepartmentsData, undefined>;

interface GetDepartmentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDepartmentsData, undefined>;
}
export const getDepartmentsRef: GetDepartmentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDepartments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetDepartmentsData, undefined>;

interface GetDepartmentsRef {
  ...
  (dc: DataConnect): QueryRef<GetDepartmentsData, undefined>;
}
export const getDepartmentsRef: GetDepartmentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDepartmentsRef:
```typescript
const name = getDepartmentsRef.operationName;
console.log(name);
```

### Variables
The `GetDepartments` query has no variables.
### Return Type
Recall that executing the `GetDepartments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDepartmentsData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDepartmentsData {
  departments: ({
    id: UUIDString;
    name: string;
    head?: string | null;
    description?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Department_Key)[];
}
```
### Using `GetDepartments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDepartments } from '@itam/dataconnect';


// Call the `getDepartments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDepartments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDepartments(dataConnect);

console.log(data.departments);

// Or, you can use the `Promise` API.
getDepartments().then((response) => {
  const data = response.data;
  console.log(data.departments);
});
```

### Using `GetDepartments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDepartmentsRef } from '@itam/dataconnect';


// Call the `getDepartmentsRef()` function to get a reference to the query.
const ref = getDepartmentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDepartmentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.departments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.departments);
});
```

## GetEmployees
You can execute the `GetEmployees` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getEmployees(options?: ExecuteQueryOptions): QueryPromise<GetEmployeesData, undefined>;

interface GetEmployeesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEmployeesData, undefined>;
}
export const getEmployeesRef: GetEmployeesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEmployees(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetEmployeesData, undefined>;

interface GetEmployeesRef {
  ...
  (dc: DataConnect): QueryRef<GetEmployeesData, undefined>;
}
export const getEmployeesRef: GetEmployeesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEmployeesRef:
```typescript
const name = getEmployeesRef.operationName;
console.log(name);
```

### Variables
The `GetEmployees` query has no variables.
### Return Type
Recall that executing the `GetEmployees` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEmployeesData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetEmployeesData {
  employees: ({
    id: UUIDString;
    name: string;
    email?: string | null;
    role?: string | null;
    phone?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
  } & Employee_Key)[];
}
```
### Using `GetEmployees`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEmployees } from '@itam/dataconnect';


// Call the `getEmployees()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEmployees();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEmployees(dataConnect);

console.log(data.employees);

// Or, you can use the `Promise` API.
getEmployees().then((response) => {
  const data = response.data;
  console.log(data.employees);
});
```

### Using `GetEmployees`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEmployeesRef } from '@itam/dataconnect';


// Call the `getEmployeesRef()` function to get a reference to the query.
const ref = getEmployeesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEmployeesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.employees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.employees);
});
```

## GetAvailableEmployees
You can execute the `GetAvailableEmployees` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAvailableEmployees(options?: ExecuteQueryOptions): QueryPromise<GetAvailableEmployeesData, undefined>;

interface GetAvailableEmployeesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAvailableEmployeesData, undefined>;
}
export const getAvailableEmployeesRef: GetAvailableEmployeesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAvailableEmployees(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAvailableEmployeesData, undefined>;

interface GetAvailableEmployeesRef {
  ...
  (dc: DataConnect): QueryRef<GetAvailableEmployeesData, undefined>;
}
export const getAvailableEmployeesRef: GetAvailableEmployeesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAvailableEmployeesRef:
```typescript
const name = getAvailableEmployeesRef.operationName;
console.log(name);
```

### Variables
The `GetAvailableEmployees` query has no variables.
### Return Type
Recall that executing the `GetAvailableEmployees` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAvailableEmployeesData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAvailableEmployeesData {
  employees: ({
    id: UUIDString;
    name: string;
    email?: string | null;
    role?: string | null;
    phone?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
  } & Employee_Key)[];
}
```
### Using `GetAvailableEmployees`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAvailableEmployees } from '@itam/dataconnect';


// Call the `getAvailableEmployees()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAvailableEmployees();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAvailableEmployees(dataConnect);

console.log(data.employees);

// Or, you can use the `Promise` API.
getAvailableEmployees().then((response) => {
  const data = response.data;
  console.log(data.employees);
});
```

### Using `GetAvailableEmployees`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAvailableEmployeesRef } from '@itam/dataconnect';


// Call the `getAvailableEmployeesRef()` function to get a reference to the query.
const ref = getAvailableEmployeesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAvailableEmployeesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.employees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.employees);
});
```

## GetVendors
You can execute the `GetVendors` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getVendors(options?: ExecuteQueryOptions): QueryPromise<GetVendorsData, undefined>;

interface GetVendorsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetVendorsData, undefined>;
}
export const getVendorsRef: GetVendorsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getVendors(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetVendorsData, undefined>;

interface GetVendorsRef {
  ...
  (dc: DataConnect): QueryRef<GetVendorsData, undefined>;
}
export const getVendorsRef: GetVendorsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getVendorsRef:
```typescript
const name = getVendorsRef.operationName;
console.log(name);
```

### Variables
The `GetVendors` query has no variables.
### Return Type
Recall that executing the `GetVendors` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetVendorsData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetVendorsData {
  vendors: ({
    id: UUIDString;
    name: string;
    contactPerson?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Vendor_Key)[];
}
```
### Using `GetVendors`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getVendors } from '@itam/dataconnect';


// Call the `getVendors()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getVendors();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getVendors(dataConnect);

console.log(data.vendors);

// Or, you can use the `Promise` API.
getVendors().then((response) => {
  const data = response.data;
  console.log(data.vendors);
});
```

### Using `GetVendors`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getVendorsRef } from '@itam/dataconnect';


// Call the `getVendorsRef()` function to get a reference to the query.
const ref = getVendorsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getVendorsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.vendors);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.vendors);
});
```

## GetAssets
You can execute the `GetAssets` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAssets(options?: ExecuteQueryOptions): QueryPromise<GetAssetsData, undefined>;

interface GetAssetsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAssetsData, undefined>;
}
export const getAssetsRef: GetAssetsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAssets(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAssetsData, undefined>;

interface GetAssetsRef {
  ...
  (dc: DataConnect): QueryRef<GetAssetsData, undefined>;
}
export const getAssetsRef: GetAssetsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAssetsRef:
```typescript
const name = getAssetsRef.operationName;
console.log(name);
```

### Variables
The `GetAssets` query has no variables.
### Return Type
Recall that executing the `GetAssets` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAssetsData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAssetsData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    cpuBrand?: string | null;
    monitorBrand?: string | null;
    keyboardBrand?: string | null;
    mouseBrand?: string | null;
    cpuSerial?: string | null;
    monitorSerial?: string | null;
    keyboardSerial?: string | null;
    mouseSerial?: string | null;
    macAddress?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: DateString | null;
    warrantyYears?: number | null;
    warrantyExpiry?: DateString | null;
    windowsLicense?: string | null;
    msLicense?: string | null;
    windowsLicensePurchaseDate?: DateString | null;
    msLicensePurchaseDate?: DateString | null;
    antivirus?: string | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & Asset_Key)[];
}
```
### Using `GetAssets`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAssets } from '@itam/dataconnect';


// Call the `getAssets()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAssets();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAssets(dataConnect);

console.log(data.assets);

// Or, you can use the `Promise` API.
getAssets().then((response) => {
  const data = response.data;
  console.log(data.assets);
});
```

### Using `GetAssets`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAssetsRef } from '@itam/dataconnect';


// Call the `getAssetsRef()` function to get a reference to the query.
const ref = getAssetsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAssetsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.assets);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.assets);
});
```

## GetAssetById
You can execute the `GetAssetById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAssetById(vars: GetAssetByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetByIdData, GetAssetByIdVariables>;

interface GetAssetByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssetByIdVariables): QueryRef<GetAssetByIdData, GetAssetByIdVariables>;
}
export const getAssetByIdRef: GetAssetByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAssetById(dc: DataConnect, vars: GetAssetByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetByIdData, GetAssetByIdVariables>;

interface GetAssetByIdRef {
  ...
  (dc: DataConnect, vars: GetAssetByIdVariables): QueryRef<GetAssetByIdData, GetAssetByIdVariables>;
}
export const getAssetByIdRef: GetAssetByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAssetByIdRef:
```typescript
const name = getAssetByIdRef.operationName;
console.log(name);
```

### Variables
The `GetAssetById` query requires an argument of type `GetAssetByIdVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAssetByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetAssetById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAssetByIdData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAssetByIdData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    cpuBrand?: string | null;
    monitorBrand?: string | null;
    keyboardBrand?: string | null;
    mouseBrand?: string | null;
    cpuSerial?: string | null;
    monitorSerial?: string | null;
    keyboardSerial?: string | null;
    mouseSerial?: string | null;
    macAddress?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: DateString | null;
    warrantyYears?: number | null;
    warrantyExpiry?: DateString | null;
    windowsLicense?: string | null;
    msLicense?: string | null;
    windowsLicensePurchaseDate?: DateString | null;
    msLicensePurchaseDate?: DateString | null;
    antivirus?: string | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & Asset_Key)[];
}
```
### Using `GetAssetById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAssetById, GetAssetByIdVariables } from '@itam/dataconnect';

// The `GetAssetById` query requires an argument of type `GetAssetByIdVariables`:
const getAssetByIdVars: GetAssetByIdVariables = {
  id: ..., 
};

// Call the `getAssetById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAssetById(getAssetByIdVars);
// Variables can be defined inline as well.
const { data } = await getAssetById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAssetById(dataConnect, getAssetByIdVars);

console.log(data.assets);

// Or, you can use the `Promise` API.
getAssetById(getAssetByIdVars).then((response) => {
  const data = response.data;
  console.log(data.assets);
});
```

### Using `GetAssetById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAssetByIdRef, GetAssetByIdVariables } from '@itam/dataconnect';

// The `GetAssetById` query requires an argument of type `GetAssetByIdVariables`:
const getAssetByIdVars: GetAssetByIdVariables = {
  id: ..., 
};

// Call the `getAssetByIdRef()` function to get a reference to the query.
const ref = getAssetByIdRef(getAssetByIdVars);
// Variables can be defined inline as well.
const ref = getAssetByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAssetByIdRef(dataConnect, getAssetByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.assets);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.assets);
});
```

## GetAssetsByStatus
You can execute the `GetAssetsByStatus` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAssetsByStatus(vars: GetAssetsByStatusVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetsByStatusData, GetAssetsByStatusVariables>;

interface GetAssetsByStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssetsByStatusVariables): QueryRef<GetAssetsByStatusData, GetAssetsByStatusVariables>;
}
export const getAssetsByStatusRef: GetAssetsByStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAssetsByStatus(dc: DataConnect, vars: GetAssetsByStatusVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetsByStatusData, GetAssetsByStatusVariables>;

interface GetAssetsByStatusRef {
  ...
  (dc: DataConnect, vars: GetAssetsByStatusVariables): QueryRef<GetAssetsByStatusData, GetAssetsByStatusVariables>;
}
export const getAssetsByStatusRef: GetAssetsByStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAssetsByStatusRef:
```typescript
const name = getAssetsByStatusRef.operationName;
console.log(name);
```

### Variables
The `GetAssetsByStatus` query requires an argument of type `GetAssetsByStatusVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAssetsByStatusVariables {
  status: string;
}
```
### Return Type
Recall that executing the `GetAssetsByStatus` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAssetsByStatusData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAssetsByStatusData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    cpuBrand?: string | null;
    monitorBrand?: string | null;
    keyboardBrand?: string | null;
    mouseBrand?: string | null;
    cpuSerial?: string | null;
    monitorSerial?: string | null;
    keyboardSerial?: string | null;
    mouseSerial?: string | null;
    macAddress?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: DateString | null;
    warrantyYears?: number | null;
    warrantyExpiry?: DateString | null;
    windowsLicense?: string | null;
    msLicense?: string | null;
    windowsLicensePurchaseDate?: DateString | null;
    msLicensePurchaseDate?: DateString | null;
    antivirus?: string | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & Asset_Key)[];
}
```
### Using `GetAssetsByStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAssetsByStatus, GetAssetsByStatusVariables } from '@itam/dataconnect';

// The `GetAssetsByStatus` query requires an argument of type `GetAssetsByStatusVariables`:
const getAssetsByStatusVars: GetAssetsByStatusVariables = {
  status: ..., 
};

// Call the `getAssetsByStatus()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAssetsByStatus(getAssetsByStatusVars);
// Variables can be defined inline as well.
const { data } = await getAssetsByStatus({ status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAssetsByStatus(dataConnect, getAssetsByStatusVars);

console.log(data.assets);

// Or, you can use the `Promise` API.
getAssetsByStatus(getAssetsByStatusVars).then((response) => {
  const data = response.data;
  console.log(data.assets);
});
```

### Using `GetAssetsByStatus`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAssetsByStatusRef, GetAssetsByStatusVariables } from '@itam/dataconnect';

// The `GetAssetsByStatus` query requires an argument of type `GetAssetsByStatusVariables`:
const getAssetsByStatusVars: GetAssetsByStatusVariables = {
  status: ..., 
};

// Call the `getAssetsByStatusRef()` function to get a reference to the query.
const ref = getAssetsByStatusRef(getAssetsByStatusVars);
// Variables can be defined inline as well.
const ref = getAssetsByStatusRef({ status: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAssetsByStatusRef(dataConnect, getAssetsByStatusVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.assets);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.assets);
});
```

## GetAssetsByDepartment
You can execute the `GetAssetsByDepartment` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAssetsByDepartment(vars: GetAssetsByDepartmentVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetsByDepartmentData, GetAssetsByDepartmentVariables>;

interface GetAssetsByDepartmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssetsByDepartmentVariables): QueryRef<GetAssetsByDepartmentData, GetAssetsByDepartmentVariables>;
}
export const getAssetsByDepartmentRef: GetAssetsByDepartmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAssetsByDepartment(dc: DataConnect, vars: GetAssetsByDepartmentVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetsByDepartmentData, GetAssetsByDepartmentVariables>;

interface GetAssetsByDepartmentRef {
  ...
  (dc: DataConnect, vars: GetAssetsByDepartmentVariables): QueryRef<GetAssetsByDepartmentData, GetAssetsByDepartmentVariables>;
}
export const getAssetsByDepartmentRef: GetAssetsByDepartmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAssetsByDepartmentRef:
```typescript
const name = getAssetsByDepartmentRef.operationName;
console.log(name);
```

### Variables
The `GetAssetsByDepartment` query requires an argument of type `GetAssetsByDepartmentVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAssetsByDepartmentVariables {
  deptId: UUIDString;
}
```
### Return Type
Recall that executing the `GetAssetsByDepartment` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAssetsByDepartmentData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAssetsByDepartmentData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    cpuBrand?: string | null;
    monitorBrand?: string | null;
    keyboardBrand?: string | null;
    mouseBrand?: string | null;
    cpuSerial?: string | null;
    monitorSerial?: string | null;
    keyboardSerial?: string | null;
    mouseSerial?: string | null;
    macAddress?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: DateString | null;
    warrantyYears?: number | null;
    warrantyExpiry?: DateString | null;
    windowsLicense?: string | null;
    msLicense?: string | null;
    windowsLicensePurchaseDate?: DateString | null;
    msLicensePurchaseDate?: DateString | null;
    antivirus?: string | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & Asset_Key)[];
}
```
### Using `GetAssetsByDepartment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAssetsByDepartment, GetAssetsByDepartmentVariables } from '@itam/dataconnect';

// The `GetAssetsByDepartment` query requires an argument of type `GetAssetsByDepartmentVariables`:
const getAssetsByDepartmentVars: GetAssetsByDepartmentVariables = {
  deptId: ..., 
};

// Call the `getAssetsByDepartment()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAssetsByDepartment(getAssetsByDepartmentVars);
// Variables can be defined inline as well.
const { data } = await getAssetsByDepartment({ deptId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAssetsByDepartment(dataConnect, getAssetsByDepartmentVars);

console.log(data.assets);

// Or, you can use the `Promise` API.
getAssetsByDepartment(getAssetsByDepartmentVars).then((response) => {
  const data = response.data;
  console.log(data.assets);
});
```

### Using `GetAssetsByDepartment`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAssetsByDepartmentRef, GetAssetsByDepartmentVariables } from '@itam/dataconnect';

// The `GetAssetsByDepartment` query requires an argument of type `GetAssetsByDepartmentVariables`:
const getAssetsByDepartmentVars: GetAssetsByDepartmentVariables = {
  deptId: ..., 
};

// Call the `getAssetsByDepartmentRef()` function to get a reference to the query.
const ref = getAssetsByDepartmentRef(getAssetsByDepartmentVars);
// Variables can be defined inline as well.
const ref = getAssetsByDepartmentRef({ deptId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAssetsByDepartmentRef(dataConnect, getAssetsByDepartmentVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.assets);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.assets);
});
```

## GetMovements
You can execute the `GetMovements` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getMovements(options?: ExecuteQueryOptions): QueryPromise<GetMovementsData, undefined>;

interface GetMovementsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMovementsData, undefined>;
}
export const getMovementsRef: GetMovementsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMovements(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMovementsData, undefined>;

interface GetMovementsRef {
  ...
  (dc: DataConnect): QueryRef<GetMovementsData, undefined>;
}
export const getMovementsRef: GetMovementsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMovementsRef:
```typescript
const name = getMovementsRef.operationName;
console.log(name);
```

### Variables
The `GetMovements` query has no variables.
### Return Type
Recall that executing the `GetMovements` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMovementsData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMovementsData {
  movements: ({
    id: UUIDString;
    movementType: string;
    movementDate: TimestampString;
    fromLocation?: string | null;
    toLocation?: string | null;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    asset: {
      id: UUIDString;
      assetTag: string;
      type: string;
      status: string;
      department?: {
        id: UUIDString;
        name: string;
      } & Department_Key;
    } & Asset_Key;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
  } & Movement_Key)[];
}
```
### Using `GetMovements`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMovements } from '@itam/dataconnect';


// Call the `getMovements()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMovements();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMovements(dataConnect);

console.log(data.movements);

// Or, you can use the `Promise` API.
getMovements().then((response) => {
  const data = response.data;
  console.log(data.movements);
});
```

### Using `GetMovements`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMovementsRef } from '@itam/dataconnect';


// Call the `getMovementsRef()` function to get a reference to the query.
const ref = getMovementsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMovementsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movements);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movements);
});
```

## GetRecentMovements
You can execute the `GetRecentMovements` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getRecentMovements(vars: GetRecentMovementsVariables, options?: ExecuteQueryOptions): QueryPromise<GetRecentMovementsData, GetRecentMovementsVariables>;

interface GetRecentMovementsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRecentMovementsVariables): QueryRef<GetRecentMovementsData, GetRecentMovementsVariables>;
}
export const getRecentMovementsRef: GetRecentMovementsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRecentMovements(dc: DataConnect, vars: GetRecentMovementsVariables, options?: ExecuteQueryOptions): QueryPromise<GetRecentMovementsData, GetRecentMovementsVariables>;

interface GetRecentMovementsRef {
  ...
  (dc: DataConnect, vars: GetRecentMovementsVariables): QueryRef<GetRecentMovementsData, GetRecentMovementsVariables>;
}
export const getRecentMovementsRef: GetRecentMovementsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRecentMovementsRef:
```typescript
const name = getRecentMovementsRef.operationName;
console.log(name);
```

### Variables
The `GetRecentMovements` query requires an argument of type `GetRecentMovementsVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetRecentMovementsVariables {
  limit: number;
}
```
### Return Type
Recall that executing the `GetRecentMovements` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRecentMovementsData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetRecentMovementsData {
  movements: ({
    id: UUIDString;
    movementType: string;
    movementDate: TimestampString;
    fromLocation?: string | null;
    toLocation?: string | null;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    asset: {
      id: UUIDString;
      assetTag: string;
      type: string;
      status: string;
      department?: {
        id: UUIDString;
        name: string;
      } & Department_Key;
    } & Asset_Key;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
  } & Movement_Key)[];
}
```
### Using `GetRecentMovements`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRecentMovements, GetRecentMovementsVariables } from '@itam/dataconnect';

// The `GetRecentMovements` query requires an argument of type `GetRecentMovementsVariables`:
const getRecentMovementsVars: GetRecentMovementsVariables = {
  limit: ..., 
};

// Call the `getRecentMovements()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRecentMovements(getRecentMovementsVars);
// Variables can be defined inline as well.
const { data } = await getRecentMovements({ limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRecentMovements(dataConnect, getRecentMovementsVars);

console.log(data.movements);

// Or, you can use the `Promise` API.
getRecentMovements(getRecentMovementsVars).then((response) => {
  const data = response.data;
  console.log(data.movements);
});
```

### Using `GetRecentMovements`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRecentMovementsRef, GetRecentMovementsVariables } from '@itam/dataconnect';

// The `GetRecentMovements` query requires an argument of type `GetRecentMovementsVariables`:
const getRecentMovementsVars: GetRecentMovementsVariables = {
  limit: ..., 
};

// Call the `getRecentMovementsRef()` function to get a reference to the query.
const ref = getRecentMovementsRef(getRecentMovementsVars);
// Variables can be defined inline as well.
const ref = getRecentMovementsRef({ limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRecentMovementsRef(dataConnect, getRecentMovementsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movements);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movements);
});
```

## GetTransfers
You can execute the `GetTransfers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getTransfers(options?: ExecuteQueryOptions): QueryPromise<GetTransfersData, undefined>;

interface GetTransfersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTransfersData, undefined>;
}
export const getTransfersRef: GetTransfersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTransfers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetTransfersData, undefined>;

interface GetTransfersRef {
  ...
  (dc: DataConnect): QueryRef<GetTransfersData, undefined>;
}
export const getTransfersRef: GetTransfersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTransfersRef:
```typescript
const name = getTransfersRef.operationName;
console.log(name);
```

### Variables
The `GetTransfers` query has no variables.
### Return Type
Recall that executing the `GetTransfers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTransfersData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetTransfersData {
  transfers: ({
    id: UUIDString;
    transferDate: TimestampString;
    reason?: string | null;
    approvedBy?: string | null;
    handover?: string | null;
    notes?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    asset: {
      id: UUIDString;
      assetTag: string;
      type: string;
      status: string;
    } & Asset_Key;
    fromDepartment?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    toDepartment?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    fromEmployee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    toEmployee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
  } & Transfer_Key)[];
}
```
### Using `GetTransfers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTransfers } from '@itam/dataconnect';


// Call the `getTransfers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTransfers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTransfers(dataConnect);

console.log(data.transfers);

// Or, you can use the `Promise` API.
getTransfers().then((response) => {
  const data = response.data;
  console.log(data.transfers);
});
```

### Using `GetTransfers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTransfersRef } from '@itam/dataconnect';


// Call the `getTransfersRef()` function to get a reference to the query.
const ref = getTransfersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTransfersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.transfers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.transfers);
});
```

## GetSoftwareLicenses
You can execute the `GetSoftwareLicenses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getSoftwareLicenses(options?: ExecuteQueryOptions): QueryPromise<GetSoftwareLicensesData, undefined>;

interface GetSoftwareLicensesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetSoftwareLicensesData, undefined>;
}
export const getSoftwareLicensesRef: GetSoftwareLicensesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSoftwareLicenses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetSoftwareLicensesData, undefined>;

interface GetSoftwareLicensesRef {
  ...
  (dc: DataConnect): QueryRef<GetSoftwareLicensesData, undefined>;
}
export const getSoftwareLicensesRef: GetSoftwareLicensesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSoftwareLicensesRef:
```typescript
const name = getSoftwareLicensesRef.operationName;
console.log(name);
```

### Variables
The `GetSoftwareLicenses` query has no variables.
### Return Type
Recall that executing the `GetSoftwareLicenses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSoftwareLicensesData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSoftwareLicensesData {
  softwareLicenses: ({
    id: UUIDString;
    licenseNumber: string;
    type: string;
    edition?: string | null;
    productKey?: string | null;
    purchaseDate?: DateString | null;
    expiryDate?: DateString | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    asset?: {
      id: UUIDString;
      assetTag: string;
      type: string;
      status: string;
    } & Asset_Key;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & SoftwareLicense_Key)[];
}
```
### Using `GetSoftwareLicenses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSoftwareLicenses } from '@itam/dataconnect';


// Call the `getSoftwareLicenses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSoftwareLicenses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSoftwareLicenses(dataConnect);

console.log(data.softwareLicenses);

// Or, you can use the `Promise` API.
getSoftwareLicenses().then((response) => {
  const data = response.data;
  console.log(data.softwareLicenses);
});
```

### Using `GetSoftwareLicenses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSoftwareLicensesRef } from '@itam/dataconnect';


// Call the `getSoftwareLicensesRef()` function to get a reference to the query.
const ref = getSoftwareLicensesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSoftwareLicensesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.softwareLicenses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.softwareLicenses);
});
```

## GetInventoryItems
You can execute the `GetInventoryItems` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getInventoryItems(options?: ExecuteQueryOptions): QueryPromise<GetInventoryItemsData, undefined>;

interface GetInventoryItemsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetInventoryItemsData, undefined>;
}
export const getInventoryItemsRef: GetInventoryItemsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getInventoryItems(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetInventoryItemsData, undefined>;

interface GetInventoryItemsRef {
  ...
  (dc: DataConnect): QueryRef<GetInventoryItemsData, undefined>;
}
export const getInventoryItemsRef: GetInventoryItemsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getInventoryItemsRef:
```typescript
const name = getInventoryItemsRef.operationName;
console.log(name);
```

### Variables
The `GetInventoryItems` query has no variables.
### Return Type
Recall that executing the `GetInventoryItems` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetInventoryItemsData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetInventoryItemsData {
  inventoryItems: ({
    id: UUIDString;
    type: string;
    brand?: string | null;
    serial?: string | null;
    productKey?: string | null;
    condition: string;
    assignedTo?: string | null;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
    } & Department_Key;
  } & InventoryItem_Key)[];
}
```
### Using `GetInventoryItems`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getInventoryItems } from '@itam/dataconnect';


// Call the `getInventoryItems()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getInventoryItems();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getInventoryItems(dataConnect);

console.log(data.inventoryItems);

// Or, you can use the `Promise` API.
getInventoryItems().then((response) => {
  const data = response.data;
  console.log(data.inventoryItems);
});
```

### Using `GetInventoryItems`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getInventoryItemsRef } from '@itam/dataconnect';


// Call the `getInventoryItemsRef()` function to get a reference to the query.
const ref = getInventoryItemsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getInventoryItemsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.inventoryItems);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryItems);
});
```

## GetTelephones
You can execute the `GetTelephones` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getTelephones(options?: ExecuteQueryOptions): QueryPromise<GetTelephonesData, undefined>;

interface GetTelephonesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTelephonesData, undefined>;
}
export const getTelephonesRef: GetTelephonesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTelephones(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetTelephonesData, undefined>;

interface GetTelephonesRef {
  ...
  (dc: DataConnect): QueryRef<GetTelephonesData, undefined>;
}
export const getTelephonesRef: GetTelephonesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTelephonesRef:
```typescript
const name = getTelephonesRef.operationName;
console.log(name);
```

### Variables
The `GetTelephones` query has no variables.
### Return Type
Recall that executing the `GetTelephones` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTelephonesData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetTelephonesData {
  telephones: ({
    id: UUIDString;
    extension?: string | null;
    contactNumber?: string | null;
    assignedTo?: string | null;
    organization?: string | null;
    serial?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Telephone_Key)[];
}
```
### Using `GetTelephones`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTelephones } from '@itam/dataconnect';


// Call the `getTelephones()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTelephones();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTelephones(dataConnect);

console.log(data.telephones);

// Or, you can use the `Promise` API.
getTelephones().then((response) => {
  const data = response.data;
  console.log(data.telephones);
});
```

### Using `GetTelephones`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTelephonesRef } from '@itam/dataconnect';


// Call the `getTelephonesRef()` function to get a reference to the query.
const ref = getTelephonesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTelephonesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.telephones);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.telephones);
});
```

## GetPrinters
You can execute the `GetPrinters` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getPrinters(options?: ExecuteQueryOptions): QueryPromise<GetPrintersData, undefined>;

interface GetPrintersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPrintersData, undefined>;
}
export const getPrintersRef: GetPrintersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPrinters(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetPrintersData, undefined>;

interface GetPrintersRef {
  ...
  (dc: DataConnect): QueryRef<GetPrintersData, undefined>;
}
export const getPrintersRef: GetPrintersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPrintersRef:
```typescript
const name = getPrintersRef.operationName;
console.log(name);
```

### Variables
The `GetPrinters` query has no variables.
### Return Type
Recall that executing the `GetPrinters` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPrintersData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPrintersData {
  printers: ({
    id: UUIDString;
    serial?: string | null;
    brand?: string | null;
    model?: string | null;
    productNumber?: string | null;
    assignedTo?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Printer_Key)[];
}
```
### Using `GetPrinters`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPrinters } from '@itam/dataconnect';


// Call the `getPrinters()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPrinters();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPrinters(dataConnect);

console.log(data.printers);

// Or, you can use the `Promise` API.
getPrinters().then((response) => {
  const data = response.data;
  console.log(data.printers);
});
```

### Using `GetPrinters`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPrintersRef } from '@itam/dataconnect';


// Call the `getPrintersRef()` function to get a reference to the query.
const ref = getPrintersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPrintersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.printers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.printers);
});
```

## GetAuditLogs
You can execute the `GetAuditLogs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAuditLogs(vars: GetAuditLogsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAuditLogsData, GetAuditLogsVariables>;

interface GetAuditLogsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAuditLogsVariables): QueryRef<GetAuditLogsData, GetAuditLogsVariables>;
}
export const getAuditLogsRef: GetAuditLogsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAuditLogs(dc: DataConnect, vars: GetAuditLogsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAuditLogsData, GetAuditLogsVariables>;

interface GetAuditLogsRef {
  ...
  (dc: DataConnect, vars: GetAuditLogsVariables): QueryRef<GetAuditLogsData, GetAuditLogsVariables>;
}
export const getAuditLogsRef: GetAuditLogsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAuditLogsRef:
```typescript
const name = getAuditLogsRef.operationName;
console.log(name);
```

### Variables
The `GetAuditLogs` query requires an argument of type `GetAuditLogsVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAuditLogsVariables {
  limit: number;
}
```
### Return Type
Recall that executing the `GetAuditLogs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAuditLogsData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAuditLogsData {
  auditLogs: ({
    id: UUIDString;
    action: string;
    entity: string;
    entityId?: UUIDString | null;
    performedBy?: string | null;
    details?: string | null;
    createdAt: TimestampString;
  } & AuditLog_Key)[];
}
```
### Using `GetAuditLogs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAuditLogs, GetAuditLogsVariables } from '@itam/dataconnect';

// The `GetAuditLogs` query requires an argument of type `GetAuditLogsVariables`:
const getAuditLogsVars: GetAuditLogsVariables = {
  limit: ..., 
};

// Call the `getAuditLogs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAuditLogs(getAuditLogsVars);
// Variables can be defined inline as well.
const { data } = await getAuditLogs({ limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAuditLogs(dataConnect, getAuditLogsVars);

console.log(data.auditLogs);

// Or, you can use the `Promise` API.
getAuditLogs(getAuditLogsVars).then((response) => {
  const data = response.data;
  console.log(data.auditLogs);
});
```

### Using `GetAuditLogs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAuditLogsRef, GetAuditLogsVariables } from '@itam/dataconnect';

// The `GetAuditLogs` query requires an argument of type `GetAuditLogsVariables`:
const getAuditLogsVars: GetAuditLogsVariables = {
  limit: ..., 
};

// Call the `getAuditLogsRef()` function to get a reference to the query.
const ref = getAuditLogsRef(getAuditLogsVars);
// Variables can be defined inline as well.
const ref = getAuditLogsRef({ limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAuditLogsRef(dataConnect, getAuditLogsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.auditLogs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.auditLogs);
});
```

## GetAdminUsers
You can execute the `GetAdminUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAdminUsers(options?: ExecuteQueryOptions): QueryPromise<GetAdminUsersData, undefined>;

interface GetAdminUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAdminUsersData, undefined>;
}
export const getAdminUsersRef: GetAdminUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAdminUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAdminUsersData, undefined>;

interface GetAdminUsersRef {
  ...
  (dc: DataConnect): QueryRef<GetAdminUsersData, undefined>;
}
export const getAdminUsersRef: GetAdminUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAdminUsersRef:
```typescript
const name = getAdminUsersRef.operationName;
console.log(name);
```

### Variables
The `GetAdminUsers` query has no variables.
### Return Type
Recall that executing the `GetAdminUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAdminUsersData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAdminUsersData {
  adminUsers: ({
    id: UUIDString;
    username: string;
    role: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & AdminUser_Key)[];
}
```
### Using `GetAdminUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAdminUsers } from '@itam/dataconnect';


// Call the `getAdminUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAdminUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAdminUsers(dataConnect);

console.log(data.adminUsers);

// Or, you can use the `Promise` API.
getAdminUsers().then((response) => {
  const data = response.data;
  console.log(data.adminUsers);
});
```

### Using `GetAdminUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAdminUsersRef } from '@itam/dataconnect';


// Call the `getAdminUsersRef()` function to get a reference to the query.
const ref = getAdminUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAdminUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.adminUsers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.adminUsers);
});
```

## GetAdminUserByUsername
You can execute the `GetAdminUserByUsername` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAdminUserByUsername(vars: GetAdminUserByUsernameVariables, options?: ExecuteQueryOptions): QueryPromise<GetAdminUserByUsernameData, GetAdminUserByUsernameVariables>;

interface GetAdminUserByUsernameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAdminUserByUsernameVariables): QueryRef<GetAdminUserByUsernameData, GetAdminUserByUsernameVariables>;
}
export const getAdminUserByUsernameRef: GetAdminUserByUsernameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAdminUserByUsername(dc: DataConnect, vars: GetAdminUserByUsernameVariables, options?: ExecuteQueryOptions): QueryPromise<GetAdminUserByUsernameData, GetAdminUserByUsernameVariables>;

interface GetAdminUserByUsernameRef {
  ...
  (dc: DataConnect, vars: GetAdminUserByUsernameVariables): QueryRef<GetAdminUserByUsernameData, GetAdminUserByUsernameVariables>;
}
export const getAdminUserByUsernameRef: GetAdminUserByUsernameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAdminUserByUsernameRef:
```typescript
const name = getAdminUserByUsernameRef.operationName;
console.log(name);
```

### Variables
The `GetAdminUserByUsername` query requires an argument of type `GetAdminUserByUsernameVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAdminUserByUsernameVariables {
  username: string;
}
```
### Return Type
Recall that executing the `GetAdminUserByUsername` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAdminUserByUsernameData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAdminUserByUsernameData {
  adminUsers: ({
    id: UUIDString;
    username: string;
    role: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & AdminUser_Key)[];
}
```
### Using `GetAdminUserByUsername`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAdminUserByUsername, GetAdminUserByUsernameVariables } from '@itam/dataconnect';

// The `GetAdminUserByUsername` query requires an argument of type `GetAdminUserByUsernameVariables`:
const getAdminUserByUsernameVars: GetAdminUserByUsernameVariables = {
  username: ..., 
};

// Call the `getAdminUserByUsername()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAdminUserByUsername(getAdminUserByUsernameVars);
// Variables can be defined inline as well.
const { data } = await getAdminUserByUsername({ username: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAdminUserByUsername(dataConnect, getAdminUserByUsernameVars);

console.log(data.adminUsers);

// Or, you can use the `Promise` API.
getAdminUserByUsername(getAdminUserByUsernameVars).then((response) => {
  const data = response.data;
  console.log(data.adminUsers);
});
```

### Using `GetAdminUserByUsername`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAdminUserByUsernameRef, GetAdminUserByUsernameVariables } from '@itam/dataconnect';

// The `GetAdminUserByUsername` query requires an argument of type `GetAdminUserByUsernameVariables`:
const getAdminUserByUsernameVars: GetAdminUserByUsernameVariables = {
  username: ..., 
};

// Call the `getAdminUserByUsernameRef()` function to get a reference to the query.
const ref = getAdminUserByUsernameRef(getAdminUserByUsernameVars);
// Variables can be defined inline as well.
const ref = getAdminUserByUsernameRef({ username: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAdminUserByUsernameRef(dataConnect, getAdminUserByUsernameVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.adminUsers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.adminUsers);
});
```

## GetAvailableResources
You can execute the `GetAvailableResources` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
getAvailableResources(options?: ExecuteQueryOptions): QueryPromise<GetAvailableResourcesData, undefined>;

interface GetAvailableResourcesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAvailableResourcesData, undefined>;
}
export const getAvailableResourcesRef: GetAvailableResourcesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAvailableResources(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAvailableResourcesData, undefined>;

interface GetAvailableResourcesRef {
  ...
  (dc: DataConnect): QueryRef<GetAvailableResourcesData, undefined>;
}
export const getAvailableResourcesRef: GetAvailableResourcesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAvailableResourcesRef:
```typescript
const name = getAvailableResourcesRef.operationName;
console.log(name);
```

### Variables
The `GetAvailableResources` query has no variables.
### Return Type
Recall that executing the `GetAvailableResources` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAvailableResourcesData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAvailableResourcesData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    status: string;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
    } & Employee_Key;
  } & Asset_Key)[];
  inventoryItems: ({
    id: UUIDString;
    type: string;
    brand?: string | null;
    serial?: string | null;
    productKey?: string | null;
    condition: string;
    assignedTo?: string | null;
    notes?: string | null;
  } & InventoryItem_Key)[];
  telephones: ({
    id: UUIDString;
    extension?: string | null;
    contactNumber?: string | null;
    assignedTo?: string | null;
    organization?: string | null;
    serial?: string | null;
    status: string;
  } & Telephone_Key)[];
}
```
### Using `GetAvailableResources`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAvailableResources } from '@itam/dataconnect';


// Call the `getAvailableResources()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAvailableResources();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAvailableResources(dataConnect);

console.log(data.assets);
console.log(data.inventoryItems);
console.log(data.telephones);

// Or, you can use the `Promise` API.
getAvailableResources().then((response) => {
  const data = response.data;
  console.log(data.assets);
  console.log(data.inventoryItems);
  console.log(data.telephones);
});
```

### Using `GetAvailableResources`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAvailableResourcesRef } from '@itam/dataconnect';


// Call the `getAvailableResourcesRef()` function to get a reference to the query.
const ref = getAvailableResourcesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAvailableResourcesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.assets);
console.log(data.inventoryItems);
console.log(data.telephones);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.assets);
  console.log(data.inventoryItems);
  console.log(data.telephones);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `itam-connector` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateDepartment
You can execute the `CreateDepartment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createDepartment(vars: CreateDepartmentVariables): MutationPromise<CreateDepartmentData, CreateDepartmentVariables>;

interface CreateDepartmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDepartmentVariables): MutationRef<CreateDepartmentData, CreateDepartmentVariables>;
}
export const createDepartmentRef: CreateDepartmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDepartment(dc: DataConnect, vars: CreateDepartmentVariables): MutationPromise<CreateDepartmentData, CreateDepartmentVariables>;

interface CreateDepartmentRef {
  ...
  (dc: DataConnect, vars: CreateDepartmentVariables): MutationRef<CreateDepartmentData, CreateDepartmentVariables>;
}
export const createDepartmentRef: CreateDepartmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDepartmentRef:
```typescript
const name = createDepartmentRef.operationName;
console.log(name);
```

### Variables
The `CreateDepartment` mutation requires an argument of type `CreateDepartmentVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateDepartmentVariables {
  name: string;
  head?: string | null;
  description?: string | null;
}
```
### Return Type
Recall that executing the `CreateDepartment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDepartmentData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDepartmentData {
  department_insert: Department_Key;
}
```
### Using `CreateDepartment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDepartment, CreateDepartmentVariables } from '@itam/dataconnect';

// The `CreateDepartment` mutation requires an argument of type `CreateDepartmentVariables`:
const createDepartmentVars: CreateDepartmentVariables = {
  name: ..., 
  head: ..., // optional
  description: ..., // optional
};

// Call the `createDepartment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDepartment(createDepartmentVars);
// Variables can be defined inline as well.
const { data } = await createDepartment({ name: ..., head: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDepartment(dataConnect, createDepartmentVars);

console.log(data.department_insert);

// Or, you can use the `Promise` API.
createDepartment(createDepartmentVars).then((response) => {
  const data = response.data;
  console.log(data.department_insert);
});
```

### Using `CreateDepartment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDepartmentRef, CreateDepartmentVariables } from '@itam/dataconnect';

// The `CreateDepartment` mutation requires an argument of type `CreateDepartmentVariables`:
const createDepartmentVars: CreateDepartmentVariables = {
  name: ..., 
  head: ..., // optional
  description: ..., // optional
};

// Call the `createDepartmentRef()` function to get a reference to the mutation.
const ref = createDepartmentRef(createDepartmentVars);
// Variables can be defined inline as well.
const ref = createDepartmentRef({ name: ..., head: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDepartmentRef(dataConnect, createDepartmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.department_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.department_insert);
});
```

## UpdateDepartment
You can execute the `UpdateDepartment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
updateDepartment(vars: UpdateDepartmentVariables): MutationPromise<UpdateDepartmentData, UpdateDepartmentVariables>;

interface UpdateDepartmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDepartmentVariables): MutationRef<UpdateDepartmentData, UpdateDepartmentVariables>;
}
export const updateDepartmentRef: UpdateDepartmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDepartment(dc: DataConnect, vars: UpdateDepartmentVariables): MutationPromise<UpdateDepartmentData, UpdateDepartmentVariables>;

interface UpdateDepartmentRef {
  ...
  (dc: DataConnect, vars: UpdateDepartmentVariables): MutationRef<UpdateDepartmentData, UpdateDepartmentVariables>;
}
export const updateDepartmentRef: UpdateDepartmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDepartmentRef:
```typescript
const name = updateDepartmentRef.operationName;
console.log(name);
```

### Variables
The `UpdateDepartment` mutation requires an argument of type `UpdateDepartmentVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDepartmentVariables {
  id: UUIDString;
  name?: string | null;
  head?: string | null;
  description?: string | null;
}
```
### Return Type
Recall that executing the `UpdateDepartment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDepartmentData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDepartmentData {
  department_update?: Department_Key | null;
}
```
### Using `UpdateDepartment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDepartment, UpdateDepartmentVariables } from '@itam/dataconnect';

// The `UpdateDepartment` mutation requires an argument of type `UpdateDepartmentVariables`:
const updateDepartmentVars: UpdateDepartmentVariables = {
  id: ..., 
  name: ..., // optional
  head: ..., // optional
  description: ..., // optional
};

// Call the `updateDepartment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDepartment(updateDepartmentVars);
// Variables can be defined inline as well.
const { data } = await updateDepartment({ id: ..., name: ..., head: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDepartment(dataConnect, updateDepartmentVars);

console.log(data.department_update);

// Or, you can use the `Promise` API.
updateDepartment(updateDepartmentVars).then((response) => {
  const data = response.data;
  console.log(data.department_update);
});
```

### Using `UpdateDepartment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDepartmentRef, UpdateDepartmentVariables } from '@itam/dataconnect';

// The `UpdateDepartment` mutation requires an argument of type `UpdateDepartmentVariables`:
const updateDepartmentVars: UpdateDepartmentVariables = {
  id: ..., 
  name: ..., // optional
  head: ..., // optional
  description: ..., // optional
};

// Call the `updateDepartmentRef()` function to get a reference to the mutation.
const ref = updateDepartmentRef(updateDepartmentVars);
// Variables can be defined inline as well.
const ref = updateDepartmentRef({ id: ..., name: ..., head: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDepartmentRef(dataConnect, updateDepartmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.department_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.department_update);
});
```

## DeleteDepartment
You can execute the `DeleteDepartment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deleteDepartment(vars: DeleteDepartmentVariables): MutationPromise<DeleteDepartmentData, DeleteDepartmentVariables>;

interface DeleteDepartmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDepartmentVariables): MutationRef<DeleteDepartmentData, DeleteDepartmentVariables>;
}
export const deleteDepartmentRef: DeleteDepartmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteDepartment(dc: DataConnect, vars: DeleteDepartmentVariables): MutationPromise<DeleteDepartmentData, DeleteDepartmentVariables>;

interface DeleteDepartmentRef {
  ...
  (dc: DataConnect, vars: DeleteDepartmentVariables): MutationRef<DeleteDepartmentData, DeleteDepartmentVariables>;
}
export const deleteDepartmentRef: DeleteDepartmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteDepartmentRef:
```typescript
const name = deleteDepartmentRef.operationName;
console.log(name);
```

### Variables
The `DeleteDepartment` mutation requires an argument of type `DeleteDepartmentVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteDepartmentVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteDepartment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteDepartmentData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteDepartmentData {
  department_delete?: Department_Key | null;
}
```
### Using `DeleteDepartment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteDepartment, DeleteDepartmentVariables } from '@itam/dataconnect';

// The `DeleteDepartment` mutation requires an argument of type `DeleteDepartmentVariables`:
const deleteDepartmentVars: DeleteDepartmentVariables = {
  id: ..., 
};

// Call the `deleteDepartment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteDepartment(deleteDepartmentVars);
// Variables can be defined inline as well.
const { data } = await deleteDepartment({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteDepartment(dataConnect, deleteDepartmentVars);

console.log(data.department_delete);

// Or, you can use the `Promise` API.
deleteDepartment(deleteDepartmentVars).then((response) => {
  const data = response.data;
  console.log(data.department_delete);
});
```

### Using `DeleteDepartment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteDepartmentRef, DeleteDepartmentVariables } from '@itam/dataconnect';

// The `DeleteDepartment` mutation requires an argument of type `DeleteDepartmentVariables`:
const deleteDepartmentVars: DeleteDepartmentVariables = {
  id: ..., 
};

// Call the `deleteDepartmentRef()` function to get a reference to the mutation.
const ref = deleteDepartmentRef(deleteDepartmentVars);
// Variables can be defined inline as well.
const ref = deleteDepartmentRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteDepartmentRef(dataConnect, deleteDepartmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.department_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.department_delete);
});
```

## CreateEmployee
You can execute the `CreateEmployee` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createEmployee(vars: CreateEmployeeVariables): MutationPromise<CreateEmployeeData, CreateEmployeeVariables>;

interface CreateEmployeeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEmployeeVariables): MutationRef<CreateEmployeeData, CreateEmployeeVariables>;
}
export const createEmployeeRef: CreateEmployeeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createEmployee(dc: DataConnect, vars: CreateEmployeeVariables): MutationPromise<CreateEmployeeData, CreateEmployeeVariables>;

interface CreateEmployeeRef {
  ...
  (dc: DataConnect, vars: CreateEmployeeVariables): MutationRef<CreateEmployeeData, CreateEmployeeVariables>;
}
export const createEmployeeRef: CreateEmployeeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createEmployeeRef:
```typescript
const name = createEmployeeRef.operationName;
console.log(name);
```

### Variables
The `CreateEmployee` mutation requires an argument of type `CreateEmployeeVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateEmployeeVariables {
  name: string;
  email?: string | null;
  departmentId?: UUIDString | null;
  role?: string | null;
  phone?: string | null;
  status?: string | null;
}
```
### Return Type
Recall that executing the `CreateEmployee` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateEmployeeData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateEmployeeData {
  employee_insert: Employee_Key;
}
```
### Using `CreateEmployee`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createEmployee, CreateEmployeeVariables } from '@itam/dataconnect';

// The `CreateEmployee` mutation requires an argument of type `CreateEmployeeVariables`:
const createEmployeeVars: CreateEmployeeVariables = {
  name: ..., 
  email: ..., // optional
  departmentId: ..., // optional
  role: ..., // optional
  phone: ..., // optional
  status: ..., // optional
};

// Call the `createEmployee()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createEmployee(createEmployeeVars);
// Variables can be defined inline as well.
const { data } = await createEmployee({ name: ..., email: ..., departmentId: ..., role: ..., phone: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createEmployee(dataConnect, createEmployeeVars);

console.log(data.employee_insert);

// Or, you can use the `Promise` API.
createEmployee(createEmployeeVars).then((response) => {
  const data = response.data;
  console.log(data.employee_insert);
});
```

### Using `CreateEmployee`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createEmployeeRef, CreateEmployeeVariables } from '@itam/dataconnect';

// The `CreateEmployee` mutation requires an argument of type `CreateEmployeeVariables`:
const createEmployeeVars: CreateEmployeeVariables = {
  name: ..., 
  email: ..., // optional
  departmentId: ..., // optional
  role: ..., // optional
  phone: ..., // optional
  status: ..., // optional
};

// Call the `createEmployeeRef()` function to get a reference to the mutation.
const ref = createEmployeeRef(createEmployeeVars);
// Variables can be defined inline as well.
const ref = createEmployeeRef({ name: ..., email: ..., departmentId: ..., role: ..., phone: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createEmployeeRef(dataConnect, createEmployeeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.employee_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.employee_insert);
});
```

## UpdateEmployee
You can execute the `UpdateEmployee` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
updateEmployee(vars: UpdateEmployeeVariables): MutationPromise<UpdateEmployeeData, UpdateEmployeeVariables>;

interface UpdateEmployeeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEmployeeVariables): MutationRef<UpdateEmployeeData, UpdateEmployeeVariables>;
}
export const updateEmployeeRef: UpdateEmployeeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateEmployee(dc: DataConnect, vars: UpdateEmployeeVariables): MutationPromise<UpdateEmployeeData, UpdateEmployeeVariables>;

interface UpdateEmployeeRef {
  ...
  (dc: DataConnect, vars: UpdateEmployeeVariables): MutationRef<UpdateEmployeeData, UpdateEmployeeVariables>;
}
export const updateEmployeeRef: UpdateEmployeeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateEmployeeRef:
```typescript
const name = updateEmployeeRef.operationName;
console.log(name);
```

### Variables
The `UpdateEmployee` mutation requires an argument of type `UpdateEmployeeVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateEmployeeVariables {
  id: UUIDString;
  name?: string | null;
  email?: string | null;
  departmentId?: UUIDString | null;
  role?: string | null;
  phone?: string | null;
  status?: string | null;
}
```
### Return Type
Recall that executing the `UpdateEmployee` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateEmployeeData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateEmployeeData {
  employee_update?: Employee_Key | null;
}
```
### Using `UpdateEmployee`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateEmployee, UpdateEmployeeVariables } from '@itam/dataconnect';

// The `UpdateEmployee` mutation requires an argument of type `UpdateEmployeeVariables`:
const updateEmployeeVars: UpdateEmployeeVariables = {
  id: ..., 
  name: ..., // optional
  email: ..., // optional
  departmentId: ..., // optional
  role: ..., // optional
  phone: ..., // optional
  status: ..., // optional
};

// Call the `updateEmployee()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateEmployee(updateEmployeeVars);
// Variables can be defined inline as well.
const { data } = await updateEmployee({ id: ..., name: ..., email: ..., departmentId: ..., role: ..., phone: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateEmployee(dataConnect, updateEmployeeVars);

console.log(data.employee_update);

// Or, you can use the `Promise` API.
updateEmployee(updateEmployeeVars).then((response) => {
  const data = response.data;
  console.log(data.employee_update);
});
```

### Using `UpdateEmployee`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateEmployeeRef, UpdateEmployeeVariables } from '@itam/dataconnect';

// The `UpdateEmployee` mutation requires an argument of type `UpdateEmployeeVariables`:
const updateEmployeeVars: UpdateEmployeeVariables = {
  id: ..., 
  name: ..., // optional
  email: ..., // optional
  departmentId: ..., // optional
  role: ..., // optional
  phone: ..., // optional
  status: ..., // optional
};

// Call the `updateEmployeeRef()` function to get a reference to the mutation.
const ref = updateEmployeeRef(updateEmployeeVars);
// Variables can be defined inline as well.
const ref = updateEmployeeRef({ id: ..., name: ..., email: ..., departmentId: ..., role: ..., phone: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateEmployeeRef(dataConnect, updateEmployeeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.employee_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.employee_update);
});
```

## DeleteEmployee
You can execute the `DeleteEmployee` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deleteEmployee(vars: DeleteEmployeeVariables): MutationPromise<DeleteEmployeeData, DeleteEmployeeVariables>;

interface DeleteEmployeeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEmployeeVariables): MutationRef<DeleteEmployeeData, DeleteEmployeeVariables>;
}
export const deleteEmployeeRef: DeleteEmployeeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteEmployee(dc: DataConnect, vars: DeleteEmployeeVariables): MutationPromise<DeleteEmployeeData, DeleteEmployeeVariables>;

interface DeleteEmployeeRef {
  ...
  (dc: DataConnect, vars: DeleteEmployeeVariables): MutationRef<DeleteEmployeeData, DeleteEmployeeVariables>;
}
export const deleteEmployeeRef: DeleteEmployeeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteEmployeeRef:
```typescript
const name = deleteEmployeeRef.operationName;
console.log(name);
```

### Variables
The `DeleteEmployee` mutation requires an argument of type `DeleteEmployeeVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteEmployeeVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteEmployee` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteEmployeeData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteEmployeeData {
  employee_delete?: Employee_Key | null;
}
```
### Using `DeleteEmployee`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteEmployee, DeleteEmployeeVariables } from '@itam/dataconnect';

// The `DeleteEmployee` mutation requires an argument of type `DeleteEmployeeVariables`:
const deleteEmployeeVars: DeleteEmployeeVariables = {
  id: ..., 
};

// Call the `deleteEmployee()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteEmployee(deleteEmployeeVars);
// Variables can be defined inline as well.
const { data } = await deleteEmployee({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteEmployee(dataConnect, deleteEmployeeVars);

console.log(data.employee_delete);

// Or, you can use the `Promise` API.
deleteEmployee(deleteEmployeeVars).then((response) => {
  const data = response.data;
  console.log(data.employee_delete);
});
```

### Using `DeleteEmployee`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteEmployeeRef, DeleteEmployeeVariables } from '@itam/dataconnect';

// The `DeleteEmployee` mutation requires an argument of type `DeleteEmployeeVariables`:
const deleteEmployeeVars: DeleteEmployeeVariables = {
  id: ..., 
};

// Call the `deleteEmployeeRef()` function to get a reference to the mutation.
const ref = deleteEmployeeRef(deleteEmployeeVars);
// Variables can be defined inline as well.
const ref = deleteEmployeeRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteEmployeeRef(dataConnect, deleteEmployeeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.employee_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.employee_delete);
});
```

## CreateVendor
You can execute the `CreateVendor` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createVendor(vars: CreateVendorVariables): MutationPromise<CreateVendorData, CreateVendorVariables>;

interface CreateVendorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateVendorVariables): MutationRef<CreateVendorData, CreateVendorVariables>;
}
export const createVendorRef: CreateVendorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createVendor(dc: DataConnect, vars: CreateVendorVariables): MutationPromise<CreateVendorData, CreateVendorVariables>;

interface CreateVendorRef {
  ...
  (dc: DataConnect, vars: CreateVendorVariables): MutationRef<CreateVendorData, CreateVendorVariables>;
}
export const createVendorRef: CreateVendorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createVendorRef:
```typescript
const name = createVendorRef.operationName;
console.log(name);
```

### Variables
The `CreateVendor` mutation requires an argument of type `CreateVendorVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateVendorVariables {
  name: string;
  contactPerson?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
}
```
### Return Type
Recall that executing the `CreateVendor` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateVendorData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateVendorData {
  vendor_insert: Vendor_Key;
}
```
### Using `CreateVendor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createVendor, CreateVendorVariables } from '@itam/dataconnect';

// The `CreateVendor` mutation requires an argument of type `CreateVendorVariables`:
const createVendorVars: CreateVendorVariables = {
  name: ..., 
  contactPerson: ..., // optional
  email: ..., // optional
  phone: ..., // optional
  address: ..., // optional
};

// Call the `createVendor()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createVendor(createVendorVars);
// Variables can be defined inline as well.
const { data } = await createVendor({ name: ..., contactPerson: ..., email: ..., phone: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createVendor(dataConnect, createVendorVars);

console.log(data.vendor_insert);

// Or, you can use the `Promise` API.
createVendor(createVendorVars).then((response) => {
  const data = response.data;
  console.log(data.vendor_insert);
});
```

### Using `CreateVendor`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createVendorRef, CreateVendorVariables } from '@itam/dataconnect';

// The `CreateVendor` mutation requires an argument of type `CreateVendorVariables`:
const createVendorVars: CreateVendorVariables = {
  name: ..., 
  contactPerson: ..., // optional
  email: ..., // optional
  phone: ..., // optional
  address: ..., // optional
};

// Call the `createVendorRef()` function to get a reference to the mutation.
const ref = createVendorRef(createVendorVars);
// Variables can be defined inline as well.
const ref = createVendorRef({ name: ..., contactPerson: ..., email: ..., phone: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createVendorRef(dataConnect, createVendorVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.vendor_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.vendor_insert);
});
```

## DeleteVendor
You can execute the `DeleteVendor` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deleteVendor(vars: DeleteVendorVariables): MutationPromise<DeleteVendorData, DeleteVendorVariables>;

interface DeleteVendorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteVendorVariables): MutationRef<DeleteVendorData, DeleteVendorVariables>;
}
export const deleteVendorRef: DeleteVendorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteVendor(dc: DataConnect, vars: DeleteVendorVariables): MutationPromise<DeleteVendorData, DeleteVendorVariables>;

interface DeleteVendorRef {
  ...
  (dc: DataConnect, vars: DeleteVendorVariables): MutationRef<DeleteVendorData, DeleteVendorVariables>;
}
export const deleteVendorRef: DeleteVendorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteVendorRef:
```typescript
const name = deleteVendorRef.operationName;
console.log(name);
```

### Variables
The `DeleteVendor` mutation requires an argument of type `DeleteVendorVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteVendorVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteVendor` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteVendorData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteVendorData {
  vendor_delete?: Vendor_Key | null;
}
```
### Using `DeleteVendor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteVendor, DeleteVendorVariables } from '@itam/dataconnect';

// The `DeleteVendor` mutation requires an argument of type `DeleteVendorVariables`:
const deleteVendorVars: DeleteVendorVariables = {
  id: ..., 
};

// Call the `deleteVendor()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteVendor(deleteVendorVars);
// Variables can be defined inline as well.
const { data } = await deleteVendor({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteVendor(dataConnect, deleteVendorVars);

console.log(data.vendor_delete);

// Or, you can use the `Promise` API.
deleteVendor(deleteVendorVars).then((response) => {
  const data = response.data;
  console.log(data.vendor_delete);
});
```

### Using `DeleteVendor`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteVendorRef, DeleteVendorVariables } from '@itam/dataconnect';

// The `DeleteVendor` mutation requires an argument of type `DeleteVendorVariables`:
const deleteVendorVars: DeleteVendorVariables = {
  id: ..., 
};

// Call the `deleteVendorRef()` function to get a reference to the mutation.
const ref = deleteVendorRef(deleteVendorVars);
// Variables can be defined inline as well.
const ref = deleteVendorRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteVendorRef(dataConnect, deleteVendorVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.vendor_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.vendor_delete);
});
```

## CreateAsset
You can execute the `CreateAsset` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createAsset(vars: CreateAssetVariables): MutationPromise<CreateAssetData, CreateAssetVariables>;

interface CreateAssetRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAssetVariables): MutationRef<CreateAssetData, CreateAssetVariables>;
}
export const createAssetRef: CreateAssetRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAsset(dc: DataConnect, vars: CreateAssetVariables): MutationPromise<CreateAssetData, CreateAssetVariables>;

interface CreateAssetRef {
  ...
  (dc: DataConnect, vars: CreateAssetVariables): MutationRef<CreateAssetData, CreateAssetVariables>;
}
export const createAssetRef: CreateAssetRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAssetRef:
```typescript
const name = createAssetRef.operationName;
console.log(name);
```

### Variables
The `CreateAsset` mutation requires an argument of type `CreateAssetVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateAssetVariables {
  assetTag: string;
  type?: string | null;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
  vendorId?: UUIDString | null;
  cpuBrand?: string | null;
  monitorBrand?: string | null;
  keyboardBrand?: string | null;
  mouseBrand?: string | null;
  cpuSerial?: string | null;
  monitorSerial?: string | null;
  keyboardSerial?: string | null;
  mouseSerial?: string | null;
  macAddress?: string | null;
  invoiceNumber?: string | null;
  purchaseDate?: DateString | null;
  warrantyYears?: number | null;
  warrantyExpiry?: DateString | null;
  windowsLicense?: string | null;
  msLicense?: string | null;
  windowsLicensePurchaseDate?: DateString | null;
  msLicensePurchaseDate?: DateString | null;
  antivirus?: string | null;
  status?: string | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `CreateAsset` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAssetData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAssetData {
  asset_insert: Asset_Key;
}
```
### Using `CreateAsset`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAsset, CreateAssetVariables } from '@itam/dataconnect';

// The `CreateAsset` mutation requires an argument of type `CreateAssetVariables`:
const createAssetVars: CreateAssetVariables = {
  assetTag: ..., 
  type: ..., // optional
  departmentId: ..., // optional
  employeeId: ..., // optional
  vendorId: ..., // optional
  cpuBrand: ..., // optional
  monitorBrand: ..., // optional
  keyboardBrand: ..., // optional
  mouseBrand: ..., // optional
  cpuSerial: ..., // optional
  monitorSerial: ..., // optional
  keyboardSerial: ..., // optional
  mouseSerial: ..., // optional
  macAddress: ..., // optional
  invoiceNumber: ..., // optional
  purchaseDate: ..., // optional
  warrantyYears: ..., // optional
  warrantyExpiry: ..., // optional
  windowsLicense: ..., // optional
  msLicense: ..., // optional
  windowsLicensePurchaseDate: ..., // optional
  msLicensePurchaseDate: ..., // optional
  antivirus: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `createAsset()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAsset(createAssetVars);
// Variables can be defined inline as well.
const { data } = await createAsset({ assetTag: ..., type: ..., departmentId: ..., employeeId: ..., vendorId: ..., cpuBrand: ..., monitorBrand: ..., keyboardBrand: ..., mouseBrand: ..., cpuSerial: ..., monitorSerial: ..., keyboardSerial: ..., mouseSerial: ..., macAddress: ..., invoiceNumber: ..., purchaseDate: ..., warrantyYears: ..., warrantyExpiry: ..., windowsLicense: ..., msLicense: ..., windowsLicensePurchaseDate: ..., msLicensePurchaseDate: ..., antivirus: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAsset(dataConnect, createAssetVars);

console.log(data.asset_insert);

// Or, you can use the `Promise` API.
createAsset(createAssetVars).then((response) => {
  const data = response.data;
  console.log(data.asset_insert);
});
```

### Using `CreateAsset`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAssetRef, CreateAssetVariables } from '@itam/dataconnect';

// The `CreateAsset` mutation requires an argument of type `CreateAssetVariables`:
const createAssetVars: CreateAssetVariables = {
  assetTag: ..., 
  type: ..., // optional
  departmentId: ..., // optional
  employeeId: ..., // optional
  vendorId: ..., // optional
  cpuBrand: ..., // optional
  monitorBrand: ..., // optional
  keyboardBrand: ..., // optional
  mouseBrand: ..., // optional
  cpuSerial: ..., // optional
  monitorSerial: ..., // optional
  keyboardSerial: ..., // optional
  mouseSerial: ..., // optional
  macAddress: ..., // optional
  invoiceNumber: ..., // optional
  purchaseDate: ..., // optional
  warrantyYears: ..., // optional
  warrantyExpiry: ..., // optional
  windowsLicense: ..., // optional
  msLicense: ..., // optional
  windowsLicensePurchaseDate: ..., // optional
  msLicensePurchaseDate: ..., // optional
  antivirus: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `createAssetRef()` function to get a reference to the mutation.
const ref = createAssetRef(createAssetVars);
// Variables can be defined inline as well.
const ref = createAssetRef({ assetTag: ..., type: ..., departmentId: ..., employeeId: ..., vendorId: ..., cpuBrand: ..., monitorBrand: ..., keyboardBrand: ..., mouseBrand: ..., cpuSerial: ..., monitorSerial: ..., keyboardSerial: ..., mouseSerial: ..., macAddress: ..., invoiceNumber: ..., purchaseDate: ..., warrantyYears: ..., warrantyExpiry: ..., windowsLicense: ..., msLicense: ..., windowsLicensePurchaseDate: ..., msLicensePurchaseDate: ..., antivirus: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAssetRef(dataConnect, createAssetVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.asset_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.asset_insert);
});
```

## UpdateAsset
You can execute the `UpdateAsset` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
updateAsset(vars: UpdateAssetVariables): MutationPromise<UpdateAssetData, UpdateAssetVariables>;

interface UpdateAssetRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAssetVariables): MutationRef<UpdateAssetData, UpdateAssetVariables>;
}
export const updateAssetRef: UpdateAssetRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateAsset(dc: DataConnect, vars: UpdateAssetVariables): MutationPromise<UpdateAssetData, UpdateAssetVariables>;

interface UpdateAssetRef {
  ...
  (dc: DataConnect, vars: UpdateAssetVariables): MutationRef<UpdateAssetData, UpdateAssetVariables>;
}
export const updateAssetRef: UpdateAssetRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateAssetRef:
```typescript
const name = updateAssetRef.operationName;
console.log(name);
```

### Variables
The `UpdateAsset` mutation requires an argument of type `UpdateAssetVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateAssetVariables {
  id: UUIDString;
  assetTag?: string | null;
  type?: string | null;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
  vendorId?: UUIDString | null;
  cpuBrand?: string | null;
  monitorBrand?: string | null;
  keyboardBrand?: string | null;
  mouseBrand?: string | null;
  cpuSerial?: string | null;
  monitorSerial?: string | null;
  keyboardSerial?: string | null;
  mouseSerial?: string | null;
  macAddress?: string | null;
  invoiceNumber?: string | null;
  purchaseDate?: DateString | null;
  warrantyYears?: number | null;
  warrantyExpiry?: DateString | null;
  windowsLicense?: string | null;
  msLicense?: string | null;
  windowsLicensePurchaseDate?: DateString | null;
  msLicensePurchaseDate?: DateString | null;
  antivirus?: string | null;
  status?: string | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `UpdateAsset` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateAssetData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateAssetData {
  asset_update?: Asset_Key | null;
}
```
### Using `UpdateAsset`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateAsset, UpdateAssetVariables } from '@itam/dataconnect';

// The `UpdateAsset` mutation requires an argument of type `UpdateAssetVariables`:
const updateAssetVars: UpdateAssetVariables = {
  id: ..., 
  assetTag: ..., // optional
  type: ..., // optional
  departmentId: ..., // optional
  employeeId: ..., // optional
  vendorId: ..., // optional
  cpuBrand: ..., // optional
  monitorBrand: ..., // optional
  keyboardBrand: ..., // optional
  mouseBrand: ..., // optional
  cpuSerial: ..., // optional
  monitorSerial: ..., // optional
  keyboardSerial: ..., // optional
  mouseSerial: ..., // optional
  macAddress: ..., // optional
  invoiceNumber: ..., // optional
  purchaseDate: ..., // optional
  warrantyYears: ..., // optional
  warrantyExpiry: ..., // optional
  windowsLicense: ..., // optional
  msLicense: ..., // optional
  windowsLicensePurchaseDate: ..., // optional
  msLicensePurchaseDate: ..., // optional
  antivirus: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `updateAsset()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateAsset(updateAssetVars);
// Variables can be defined inline as well.
const { data } = await updateAsset({ id: ..., assetTag: ..., type: ..., departmentId: ..., employeeId: ..., vendorId: ..., cpuBrand: ..., monitorBrand: ..., keyboardBrand: ..., mouseBrand: ..., cpuSerial: ..., monitorSerial: ..., keyboardSerial: ..., mouseSerial: ..., macAddress: ..., invoiceNumber: ..., purchaseDate: ..., warrantyYears: ..., warrantyExpiry: ..., windowsLicense: ..., msLicense: ..., windowsLicensePurchaseDate: ..., msLicensePurchaseDate: ..., antivirus: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateAsset(dataConnect, updateAssetVars);

console.log(data.asset_update);

// Or, you can use the `Promise` API.
updateAsset(updateAssetVars).then((response) => {
  const data = response.data;
  console.log(data.asset_update);
});
```

### Using `UpdateAsset`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateAssetRef, UpdateAssetVariables } from '@itam/dataconnect';

// The `UpdateAsset` mutation requires an argument of type `UpdateAssetVariables`:
const updateAssetVars: UpdateAssetVariables = {
  id: ..., 
  assetTag: ..., // optional
  type: ..., // optional
  departmentId: ..., // optional
  employeeId: ..., // optional
  vendorId: ..., // optional
  cpuBrand: ..., // optional
  monitorBrand: ..., // optional
  keyboardBrand: ..., // optional
  mouseBrand: ..., // optional
  cpuSerial: ..., // optional
  monitorSerial: ..., // optional
  keyboardSerial: ..., // optional
  mouseSerial: ..., // optional
  macAddress: ..., // optional
  invoiceNumber: ..., // optional
  purchaseDate: ..., // optional
  warrantyYears: ..., // optional
  warrantyExpiry: ..., // optional
  windowsLicense: ..., // optional
  msLicense: ..., // optional
  windowsLicensePurchaseDate: ..., // optional
  msLicensePurchaseDate: ..., // optional
  antivirus: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `updateAssetRef()` function to get a reference to the mutation.
const ref = updateAssetRef(updateAssetVars);
// Variables can be defined inline as well.
const ref = updateAssetRef({ id: ..., assetTag: ..., type: ..., departmentId: ..., employeeId: ..., vendorId: ..., cpuBrand: ..., monitorBrand: ..., keyboardBrand: ..., mouseBrand: ..., cpuSerial: ..., monitorSerial: ..., keyboardSerial: ..., mouseSerial: ..., macAddress: ..., invoiceNumber: ..., purchaseDate: ..., warrantyYears: ..., warrantyExpiry: ..., windowsLicense: ..., msLicense: ..., windowsLicensePurchaseDate: ..., msLicensePurchaseDate: ..., antivirus: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateAssetRef(dataConnect, updateAssetVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.asset_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.asset_update);
});
```

## UpdateAssetStatus
You can execute the `UpdateAssetStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
updateAssetStatus(vars: UpdateAssetStatusVariables): MutationPromise<UpdateAssetStatusData, UpdateAssetStatusVariables>;

interface UpdateAssetStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAssetStatusVariables): MutationRef<UpdateAssetStatusData, UpdateAssetStatusVariables>;
}
export const updateAssetStatusRef: UpdateAssetStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateAssetStatus(dc: DataConnect, vars: UpdateAssetStatusVariables): MutationPromise<UpdateAssetStatusData, UpdateAssetStatusVariables>;

interface UpdateAssetStatusRef {
  ...
  (dc: DataConnect, vars: UpdateAssetStatusVariables): MutationRef<UpdateAssetStatusData, UpdateAssetStatusVariables>;
}
export const updateAssetStatusRef: UpdateAssetStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateAssetStatusRef:
```typescript
const name = updateAssetStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateAssetStatus` mutation requires an argument of type `UpdateAssetStatusVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateAssetStatusVariables {
  id: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `UpdateAssetStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateAssetStatusData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateAssetStatusData {
  asset_update?: Asset_Key | null;
}
```
### Using `UpdateAssetStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateAssetStatus, UpdateAssetStatusVariables } from '@itam/dataconnect';

// The `UpdateAssetStatus` mutation requires an argument of type `UpdateAssetStatusVariables`:
const updateAssetStatusVars: UpdateAssetStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateAssetStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateAssetStatus(updateAssetStatusVars);
// Variables can be defined inline as well.
const { data } = await updateAssetStatus({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateAssetStatus(dataConnect, updateAssetStatusVars);

console.log(data.asset_update);

// Or, you can use the `Promise` API.
updateAssetStatus(updateAssetStatusVars).then((response) => {
  const data = response.data;
  console.log(data.asset_update);
});
```

### Using `UpdateAssetStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateAssetStatusRef, UpdateAssetStatusVariables } from '@itam/dataconnect';

// The `UpdateAssetStatus` mutation requires an argument of type `UpdateAssetStatusVariables`:
const updateAssetStatusVars: UpdateAssetStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateAssetStatusRef()` function to get a reference to the mutation.
const ref = updateAssetStatusRef(updateAssetStatusVars);
// Variables can be defined inline as well.
const ref = updateAssetStatusRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateAssetStatusRef(dataConnect, updateAssetStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.asset_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.asset_update);
});
```

## UpdateAssetAssignment
You can execute the `UpdateAssetAssignment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
updateAssetAssignment(vars: UpdateAssetAssignmentVariables): MutationPromise<UpdateAssetAssignmentData, UpdateAssetAssignmentVariables>;

interface UpdateAssetAssignmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAssetAssignmentVariables): MutationRef<UpdateAssetAssignmentData, UpdateAssetAssignmentVariables>;
}
export const updateAssetAssignmentRef: UpdateAssetAssignmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateAssetAssignment(dc: DataConnect, vars: UpdateAssetAssignmentVariables): MutationPromise<UpdateAssetAssignmentData, UpdateAssetAssignmentVariables>;

interface UpdateAssetAssignmentRef {
  ...
  (dc: DataConnect, vars: UpdateAssetAssignmentVariables): MutationRef<UpdateAssetAssignmentData, UpdateAssetAssignmentVariables>;
}
export const updateAssetAssignmentRef: UpdateAssetAssignmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateAssetAssignmentRef:
```typescript
const name = updateAssetAssignmentRef.operationName;
console.log(name);
```

### Variables
The `UpdateAssetAssignment` mutation requires an argument of type `UpdateAssetAssignmentVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateAssetAssignmentVariables {
  id: UUIDString;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `UpdateAssetAssignment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateAssetAssignmentData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateAssetAssignmentData {
  asset_update?: Asset_Key | null;
}
```
### Using `UpdateAssetAssignment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateAssetAssignment, UpdateAssetAssignmentVariables } from '@itam/dataconnect';

// The `UpdateAssetAssignment` mutation requires an argument of type `UpdateAssetAssignmentVariables`:
const updateAssetAssignmentVars: UpdateAssetAssignmentVariables = {
  id: ..., 
  departmentId: ..., // optional
  employeeId: ..., // optional
};

// Call the `updateAssetAssignment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateAssetAssignment(updateAssetAssignmentVars);
// Variables can be defined inline as well.
const { data } = await updateAssetAssignment({ id: ..., departmentId: ..., employeeId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateAssetAssignment(dataConnect, updateAssetAssignmentVars);

console.log(data.asset_update);

// Or, you can use the `Promise` API.
updateAssetAssignment(updateAssetAssignmentVars).then((response) => {
  const data = response.data;
  console.log(data.asset_update);
});
```

### Using `UpdateAssetAssignment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateAssetAssignmentRef, UpdateAssetAssignmentVariables } from '@itam/dataconnect';

// The `UpdateAssetAssignment` mutation requires an argument of type `UpdateAssetAssignmentVariables`:
const updateAssetAssignmentVars: UpdateAssetAssignmentVariables = {
  id: ..., 
  departmentId: ..., // optional
  employeeId: ..., // optional
};

// Call the `updateAssetAssignmentRef()` function to get a reference to the mutation.
const ref = updateAssetAssignmentRef(updateAssetAssignmentVars);
// Variables can be defined inline as well.
const ref = updateAssetAssignmentRef({ id: ..., departmentId: ..., employeeId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateAssetAssignmentRef(dataConnect, updateAssetAssignmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.asset_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.asset_update);
});
```

## DeleteAsset
You can execute the `DeleteAsset` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deleteAsset(vars: DeleteAssetVariables): MutationPromise<DeleteAssetData, DeleteAssetVariables>;

interface DeleteAssetRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAssetVariables): MutationRef<DeleteAssetData, DeleteAssetVariables>;
}
export const deleteAssetRef: DeleteAssetRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAsset(dc: DataConnect, vars: DeleteAssetVariables): MutationPromise<DeleteAssetData, DeleteAssetVariables>;

interface DeleteAssetRef {
  ...
  (dc: DataConnect, vars: DeleteAssetVariables): MutationRef<DeleteAssetData, DeleteAssetVariables>;
}
export const deleteAssetRef: DeleteAssetRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAssetRef:
```typescript
const name = deleteAssetRef.operationName;
console.log(name);
```

### Variables
The `DeleteAsset` mutation requires an argument of type `DeleteAssetVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteAssetVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteAsset` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAssetData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAssetData {
  asset_delete?: Asset_Key | null;
}
```
### Using `DeleteAsset`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAsset, DeleteAssetVariables } from '@itam/dataconnect';

// The `DeleteAsset` mutation requires an argument of type `DeleteAssetVariables`:
const deleteAssetVars: DeleteAssetVariables = {
  id: ..., 
};

// Call the `deleteAsset()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAsset(deleteAssetVars);
// Variables can be defined inline as well.
const { data } = await deleteAsset({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAsset(dataConnect, deleteAssetVars);

console.log(data.asset_delete);

// Or, you can use the `Promise` API.
deleteAsset(deleteAssetVars).then((response) => {
  const data = response.data;
  console.log(data.asset_delete);
});
```

### Using `DeleteAsset`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAssetRef, DeleteAssetVariables } from '@itam/dataconnect';

// The `DeleteAsset` mutation requires an argument of type `DeleteAssetVariables`:
const deleteAssetVars: DeleteAssetVariables = {
  id: ..., 
};

// Call the `deleteAssetRef()` function to get a reference to the mutation.
const ref = deleteAssetRef(deleteAssetVars);
// Variables can be defined inline as well.
const ref = deleteAssetRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAssetRef(dataConnect, deleteAssetVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.asset_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.asset_delete);
});
```

## CreateMovement
You can execute the `CreateMovement` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createMovement(vars: CreateMovementVariables): MutationPromise<CreateMovementData, CreateMovementVariables>;

interface CreateMovementRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovementVariables): MutationRef<CreateMovementData, CreateMovementVariables>;
}
export const createMovementRef: CreateMovementRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMovement(dc: DataConnect, vars: CreateMovementVariables): MutationPromise<CreateMovementData, CreateMovementVariables>;

interface CreateMovementRef {
  ...
  (dc: DataConnect, vars: CreateMovementVariables): MutationRef<CreateMovementData, CreateMovementVariables>;
}
export const createMovementRef: CreateMovementRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMovementRef:
```typescript
const name = createMovementRef.operationName;
console.log(name);
```

### Variables
The `CreateMovement` mutation requires an argument of type `CreateMovementVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMovementVariables {
  movementType: string;
  movementDate?: TimestampString | null;
  fromLocation?: string | null;
  toLocation?: string | null;
  assetId: UUIDString;
  departmentId?: UUIDString | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `CreateMovement` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMovementData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMovementData {
  movement_insert: Movement_Key;
}
```
### Using `CreateMovement`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMovement, CreateMovementVariables } from '@itam/dataconnect';

// The `CreateMovement` mutation requires an argument of type `CreateMovementVariables`:
const createMovementVars: CreateMovementVariables = {
  movementType: ..., 
  movementDate: ..., // optional
  fromLocation: ..., // optional
  toLocation: ..., // optional
  assetId: ..., 
  departmentId: ..., // optional
  notes: ..., // optional
};

// Call the `createMovement()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMovement(createMovementVars);
// Variables can be defined inline as well.
const { data } = await createMovement({ movementType: ..., movementDate: ..., fromLocation: ..., toLocation: ..., assetId: ..., departmentId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMovement(dataConnect, createMovementVars);

console.log(data.movement_insert);

// Or, you can use the `Promise` API.
createMovement(createMovementVars).then((response) => {
  const data = response.data;
  console.log(data.movement_insert);
});
```

### Using `CreateMovement`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMovementRef, CreateMovementVariables } from '@itam/dataconnect';

// The `CreateMovement` mutation requires an argument of type `CreateMovementVariables`:
const createMovementVars: CreateMovementVariables = {
  movementType: ..., 
  movementDate: ..., // optional
  fromLocation: ..., // optional
  toLocation: ..., // optional
  assetId: ..., 
  departmentId: ..., // optional
  notes: ..., // optional
};

// Call the `createMovementRef()` function to get a reference to the mutation.
const ref = createMovementRef(createMovementVars);
// Variables can be defined inline as well.
const ref = createMovementRef({ movementType: ..., movementDate: ..., fromLocation: ..., toLocation: ..., assetId: ..., departmentId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMovementRef(dataConnect, createMovementVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movement_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movement_insert);
});
```

## CreateTransfer
You can execute the `CreateTransfer` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createTransfer(vars: CreateTransferVariables): MutationPromise<CreateTransferData, CreateTransferVariables>;

interface CreateTransferRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTransferVariables): MutationRef<CreateTransferData, CreateTransferVariables>;
}
export const createTransferRef: CreateTransferRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createTransfer(dc: DataConnect, vars: CreateTransferVariables): MutationPromise<CreateTransferData, CreateTransferVariables>;

interface CreateTransferRef {
  ...
  (dc: DataConnect, vars: CreateTransferVariables): MutationRef<CreateTransferData, CreateTransferVariables>;
}
export const createTransferRef: CreateTransferRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createTransferRef:
```typescript
const name = createTransferRef.operationName;
console.log(name);
```

### Variables
The `CreateTransfer` mutation requires an argument of type `CreateTransferVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateTransferVariables {
  transferDate?: TimestampString | null;
  assetId: UUIDString;
  fromDepartmentId?: UUIDString | null;
  toDepartmentId?: UUIDString | null;
  fromEmployeeId?: UUIDString | null;
  toEmployeeId?: UUIDString | null;
  reason?: string | null;
  approvedBy?: string | null;
  handover?: string | null;
  notes?: string | null;
  status?: string | null;
}
```
### Return Type
Recall that executing the `CreateTransfer` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTransferData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateTransferData {
  transfer_insert: Transfer_Key;
}
```
### Using `CreateTransfer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTransfer, CreateTransferVariables } from '@itam/dataconnect';

// The `CreateTransfer` mutation requires an argument of type `CreateTransferVariables`:
const createTransferVars: CreateTransferVariables = {
  transferDate: ..., // optional
  assetId: ..., 
  fromDepartmentId: ..., // optional
  toDepartmentId: ..., // optional
  fromEmployeeId: ..., // optional
  toEmployeeId: ..., // optional
  reason: ..., // optional
  approvedBy: ..., // optional
  handover: ..., // optional
  notes: ..., // optional
  status: ..., // optional
};

// Call the `createTransfer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTransfer(createTransferVars);
// Variables can be defined inline as well.
const { data } = await createTransfer({ transferDate: ..., assetId: ..., fromDepartmentId: ..., toDepartmentId: ..., fromEmployeeId: ..., toEmployeeId: ..., reason: ..., approvedBy: ..., handover: ..., notes: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTransfer(dataConnect, createTransferVars);

console.log(data.transfer_insert);

// Or, you can use the `Promise` API.
createTransfer(createTransferVars).then((response) => {
  const data = response.data;
  console.log(data.transfer_insert);
});
```

### Using `CreateTransfer`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTransferRef, CreateTransferVariables } from '@itam/dataconnect';

// The `CreateTransfer` mutation requires an argument of type `CreateTransferVariables`:
const createTransferVars: CreateTransferVariables = {
  transferDate: ..., // optional
  assetId: ..., 
  fromDepartmentId: ..., // optional
  toDepartmentId: ..., // optional
  fromEmployeeId: ..., // optional
  toEmployeeId: ..., // optional
  reason: ..., // optional
  approvedBy: ..., // optional
  handover: ..., // optional
  notes: ..., // optional
  status: ..., // optional
};

// Call the `createTransferRef()` function to get a reference to the mutation.
const ref = createTransferRef(createTransferVars);
// Variables can be defined inline as well.
const ref = createTransferRef({ transferDate: ..., assetId: ..., fromDepartmentId: ..., toDepartmentId: ..., fromEmployeeId: ..., toEmployeeId: ..., reason: ..., approvedBy: ..., handover: ..., notes: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTransferRef(dataConnect, createTransferVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.transfer_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.transfer_insert);
});
```

## CreateSoftwareLicense
You can execute the `CreateSoftwareLicense` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createSoftwareLicense(vars: CreateSoftwareLicenseVariables): MutationPromise<CreateSoftwareLicenseData, CreateSoftwareLicenseVariables>;

interface CreateSoftwareLicenseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSoftwareLicenseVariables): MutationRef<CreateSoftwareLicenseData, CreateSoftwareLicenseVariables>;
}
export const createSoftwareLicenseRef: CreateSoftwareLicenseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSoftwareLicense(dc: DataConnect, vars: CreateSoftwareLicenseVariables): MutationPromise<CreateSoftwareLicenseData, CreateSoftwareLicenseVariables>;

interface CreateSoftwareLicenseRef {
  ...
  (dc: DataConnect, vars: CreateSoftwareLicenseVariables): MutationRef<CreateSoftwareLicenseData, CreateSoftwareLicenseVariables>;
}
export const createSoftwareLicenseRef: CreateSoftwareLicenseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSoftwareLicenseRef:
```typescript
const name = createSoftwareLicenseRef.operationName;
console.log(name);
```

### Variables
The `CreateSoftwareLicense` mutation requires an argument of type `CreateSoftwareLicenseVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateSoftwareLicenseVariables {
  licenseNumber: string;
  type: string;
  edition?: string | null;
  productKey?: string | null;
  assetId?: UUIDString | null;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
  vendorId?: UUIDString | null;
  purchaseDate?: DateString | null;
  expiryDate?: DateString | null;
  status?: string | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `CreateSoftwareLicense` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSoftwareLicenseData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSoftwareLicenseData {
  softwareLicense_insert: SoftwareLicense_Key;
}
```
### Using `CreateSoftwareLicense`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSoftwareLicense, CreateSoftwareLicenseVariables } from '@itam/dataconnect';

// The `CreateSoftwareLicense` mutation requires an argument of type `CreateSoftwareLicenseVariables`:
const createSoftwareLicenseVars: CreateSoftwareLicenseVariables = {
  licenseNumber: ..., 
  type: ..., 
  edition: ..., // optional
  productKey: ..., // optional
  assetId: ..., // optional
  departmentId: ..., // optional
  employeeId: ..., // optional
  vendorId: ..., // optional
  purchaseDate: ..., // optional
  expiryDate: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `createSoftwareLicense()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSoftwareLicense(createSoftwareLicenseVars);
// Variables can be defined inline as well.
const { data } = await createSoftwareLicense({ licenseNumber: ..., type: ..., edition: ..., productKey: ..., assetId: ..., departmentId: ..., employeeId: ..., vendorId: ..., purchaseDate: ..., expiryDate: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSoftwareLicense(dataConnect, createSoftwareLicenseVars);

console.log(data.softwareLicense_insert);

// Or, you can use the `Promise` API.
createSoftwareLicense(createSoftwareLicenseVars).then((response) => {
  const data = response.data;
  console.log(data.softwareLicense_insert);
});
```

### Using `CreateSoftwareLicense`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSoftwareLicenseRef, CreateSoftwareLicenseVariables } from '@itam/dataconnect';

// The `CreateSoftwareLicense` mutation requires an argument of type `CreateSoftwareLicenseVariables`:
const createSoftwareLicenseVars: CreateSoftwareLicenseVariables = {
  licenseNumber: ..., 
  type: ..., 
  edition: ..., // optional
  productKey: ..., // optional
  assetId: ..., // optional
  departmentId: ..., // optional
  employeeId: ..., // optional
  vendorId: ..., // optional
  purchaseDate: ..., // optional
  expiryDate: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `createSoftwareLicenseRef()` function to get a reference to the mutation.
const ref = createSoftwareLicenseRef(createSoftwareLicenseVars);
// Variables can be defined inline as well.
const ref = createSoftwareLicenseRef({ licenseNumber: ..., type: ..., edition: ..., productKey: ..., assetId: ..., departmentId: ..., employeeId: ..., vendorId: ..., purchaseDate: ..., expiryDate: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSoftwareLicenseRef(dataConnect, createSoftwareLicenseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.softwareLicense_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.softwareLicense_insert);
});
```

## UpdateSoftwareLicense
You can execute the `UpdateSoftwareLicense` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
updateSoftwareLicense(vars: UpdateSoftwareLicenseVariables): MutationPromise<UpdateSoftwareLicenseData, UpdateSoftwareLicenseVariables>;

interface UpdateSoftwareLicenseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSoftwareLicenseVariables): MutationRef<UpdateSoftwareLicenseData, UpdateSoftwareLicenseVariables>;
}
export const updateSoftwareLicenseRef: UpdateSoftwareLicenseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSoftwareLicense(dc: DataConnect, vars: UpdateSoftwareLicenseVariables): MutationPromise<UpdateSoftwareLicenseData, UpdateSoftwareLicenseVariables>;

interface UpdateSoftwareLicenseRef {
  ...
  (dc: DataConnect, vars: UpdateSoftwareLicenseVariables): MutationRef<UpdateSoftwareLicenseData, UpdateSoftwareLicenseVariables>;
}
export const updateSoftwareLicenseRef: UpdateSoftwareLicenseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSoftwareLicenseRef:
```typescript
const name = updateSoftwareLicenseRef.operationName;
console.log(name);
```

### Variables
The `UpdateSoftwareLicense` mutation requires an argument of type `UpdateSoftwareLicenseVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateSoftwareLicenseVariables {
  id: UUIDString;
  licenseNumber?: string | null;
  type?: string | null;
  edition?: string | null;
  productKey?: string | null;
  assetId?: UUIDString | null;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
  vendorId?: UUIDString | null;
  purchaseDate?: DateString | null;
  expiryDate?: DateString | null;
  status?: string | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `UpdateSoftwareLicense` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSoftwareLicenseData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSoftwareLicenseData {
  softwareLicense_update?: SoftwareLicense_Key | null;
}
```
### Using `UpdateSoftwareLicense`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSoftwareLicense, UpdateSoftwareLicenseVariables } from '@itam/dataconnect';

// The `UpdateSoftwareLicense` mutation requires an argument of type `UpdateSoftwareLicenseVariables`:
const updateSoftwareLicenseVars: UpdateSoftwareLicenseVariables = {
  id: ..., 
  licenseNumber: ..., // optional
  type: ..., // optional
  edition: ..., // optional
  productKey: ..., // optional
  assetId: ..., // optional
  departmentId: ..., // optional
  employeeId: ..., // optional
  vendorId: ..., // optional
  purchaseDate: ..., // optional
  expiryDate: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `updateSoftwareLicense()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSoftwareLicense(updateSoftwareLicenseVars);
// Variables can be defined inline as well.
const { data } = await updateSoftwareLicense({ id: ..., licenseNumber: ..., type: ..., edition: ..., productKey: ..., assetId: ..., departmentId: ..., employeeId: ..., vendorId: ..., purchaseDate: ..., expiryDate: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSoftwareLicense(dataConnect, updateSoftwareLicenseVars);

console.log(data.softwareLicense_update);

// Or, you can use the `Promise` API.
updateSoftwareLicense(updateSoftwareLicenseVars).then((response) => {
  const data = response.data;
  console.log(data.softwareLicense_update);
});
```

### Using `UpdateSoftwareLicense`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSoftwareLicenseRef, UpdateSoftwareLicenseVariables } from '@itam/dataconnect';

// The `UpdateSoftwareLicense` mutation requires an argument of type `UpdateSoftwareLicenseVariables`:
const updateSoftwareLicenseVars: UpdateSoftwareLicenseVariables = {
  id: ..., 
  licenseNumber: ..., // optional
  type: ..., // optional
  edition: ..., // optional
  productKey: ..., // optional
  assetId: ..., // optional
  departmentId: ..., // optional
  employeeId: ..., // optional
  vendorId: ..., // optional
  purchaseDate: ..., // optional
  expiryDate: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `updateSoftwareLicenseRef()` function to get a reference to the mutation.
const ref = updateSoftwareLicenseRef(updateSoftwareLicenseVars);
// Variables can be defined inline as well.
const ref = updateSoftwareLicenseRef({ id: ..., licenseNumber: ..., type: ..., edition: ..., productKey: ..., assetId: ..., departmentId: ..., employeeId: ..., vendorId: ..., purchaseDate: ..., expiryDate: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSoftwareLicenseRef(dataConnect, updateSoftwareLicenseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.softwareLicense_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.softwareLicense_update);
});
```

## DeleteSoftwareLicense
You can execute the `DeleteSoftwareLicense` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deleteSoftwareLicense(vars: DeleteSoftwareLicenseVariables): MutationPromise<DeleteSoftwareLicenseData, DeleteSoftwareLicenseVariables>;

interface DeleteSoftwareLicenseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSoftwareLicenseVariables): MutationRef<DeleteSoftwareLicenseData, DeleteSoftwareLicenseVariables>;
}
export const deleteSoftwareLicenseRef: DeleteSoftwareLicenseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteSoftwareLicense(dc: DataConnect, vars: DeleteSoftwareLicenseVariables): MutationPromise<DeleteSoftwareLicenseData, DeleteSoftwareLicenseVariables>;

interface DeleteSoftwareLicenseRef {
  ...
  (dc: DataConnect, vars: DeleteSoftwareLicenseVariables): MutationRef<DeleteSoftwareLicenseData, DeleteSoftwareLicenseVariables>;
}
export const deleteSoftwareLicenseRef: DeleteSoftwareLicenseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteSoftwareLicenseRef:
```typescript
const name = deleteSoftwareLicenseRef.operationName;
console.log(name);
```

### Variables
The `DeleteSoftwareLicense` mutation requires an argument of type `DeleteSoftwareLicenseVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteSoftwareLicenseVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteSoftwareLicense` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteSoftwareLicenseData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteSoftwareLicenseData {
  softwareLicense_delete?: SoftwareLicense_Key | null;
}
```
### Using `DeleteSoftwareLicense`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteSoftwareLicense, DeleteSoftwareLicenseVariables } from '@itam/dataconnect';

// The `DeleteSoftwareLicense` mutation requires an argument of type `DeleteSoftwareLicenseVariables`:
const deleteSoftwareLicenseVars: DeleteSoftwareLicenseVariables = {
  id: ..., 
};

// Call the `deleteSoftwareLicense()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteSoftwareLicense(deleteSoftwareLicenseVars);
// Variables can be defined inline as well.
const { data } = await deleteSoftwareLicense({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteSoftwareLicense(dataConnect, deleteSoftwareLicenseVars);

console.log(data.softwareLicense_delete);

// Or, you can use the `Promise` API.
deleteSoftwareLicense(deleteSoftwareLicenseVars).then((response) => {
  const data = response.data;
  console.log(data.softwareLicense_delete);
});
```

### Using `DeleteSoftwareLicense`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteSoftwareLicenseRef, DeleteSoftwareLicenseVariables } from '@itam/dataconnect';

// The `DeleteSoftwareLicense` mutation requires an argument of type `DeleteSoftwareLicenseVariables`:
const deleteSoftwareLicenseVars: DeleteSoftwareLicenseVariables = {
  id: ..., 
};

// Call the `deleteSoftwareLicenseRef()` function to get a reference to the mutation.
const ref = deleteSoftwareLicenseRef(deleteSoftwareLicenseVars);
// Variables can be defined inline as well.
const ref = deleteSoftwareLicenseRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteSoftwareLicenseRef(dataConnect, deleteSoftwareLicenseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.softwareLicense_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.softwareLicense_delete);
});
```

## CreateInventoryItem
You can execute the `CreateInventoryItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createInventoryItem(vars: CreateInventoryItemVariables): MutationPromise<CreateInventoryItemData, CreateInventoryItemVariables>;

interface CreateInventoryItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInventoryItemVariables): MutationRef<CreateInventoryItemData, CreateInventoryItemVariables>;
}
export const createInventoryItemRef: CreateInventoryItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInventoryItem(dc: DataConnect, vars: CreateInventoryItemVariables): MutationPromise<CreateInventoryItemData, CreateInventoryItemVariables>;

interface CreateInventoryItemRef {
  ...
  (dc: DataConnect, vars: CreateInventoryItemVariables): MutationRef<CreateInventoryItemData, CreateInventoryItemVariables>;
}
export const createInventoryItemRef: CreateInventoryItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInventoryItemRef:
```typescript
const name = createInventoryItemRef.operationName;
console.log(name);
```

### Variables
The `CreateInventoryItem` mutation requires an argument of type `CreateInventoryItemVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateInventoryItemVariables {
  type: string;
  brand?: string | null;
  serial?: string | null;
  productKey?: string | null;
  condition?: string | null;
  assignedTo?: string | null;
  departmentId?: UUIDString | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `CreateInventoryItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInventoryItemData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInventoryItemData {
  inventoryItem_insert: InventoryItem_Key;
}
```
### Using `CreateInventoryItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInventoryItem, CreateInventoryItemVariables } from '@itam/dataconnect';

// The `CreateInventoryItem` mutation requires an argument of type `CreateInventoryItemVariables`:
const createInventoryItemVars: CreateInventoryItemVariables = {
  type: ..., 
  brand: ..., // optional
  serial: ..., // optional
  productKey: ..., // optional
  condition: ..., // optional
  assignedTo: ..., // optional
  departmentId: ..., // optional
  notes: ..., // optional
};

// Call the `createInventoryItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInventoryItem(createInventoryItemVars);
// Variables can be defined inline as well.
const { data } = await createInventoryItem({ type: ..., brand: ..., serial: ..., productKey: ..., condition: ..., assignedTo: ..., departmentId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInventoryItem(dataConnect, createInventoryItemVars);

console.log(data.inventoryItem_insert);

// Or, you can use the `Promise` API.
createInventoryItem(createInventoryItemVars).then((response) => {
  const data = response.data;
  console.log(data.inventoryItem_insert);
});
```

### Using `CreateInventoryItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInventoryItemRef, CreateInventoryItemVariables } from '@itam/dataconnect';

// The `CreateInventoryItem` mutation requires an argument of type `CreateInventoryItemVariables`:
const createInventoryItemVars: CreateInventoryItemVariables = {
  type: ..., 
  brand: ..., // optional
  serial: ..., // optional
  productKey: ..., // optional
  condition: ..., // optional
  assignedTo: ..., // optional
  departmentId: ..., // optional
  notes: ..., // optional
};

// Call the `createInventoryItemRef()` function to get a reference to the mutation.
const ref = createInventoryItemRef(createInventoryItemVars);
// Variables can be defined inline as well.
const ref = createInventoryItemRef({ type: ..., brand: ..., serial: ..., productKey: ..., condition: ..., assignedTo: ..., departmentId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInventoryItemRef(dataConnect, createInventoryItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inventoryItem_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryItem_insert);
});
```

## UpdateInventoryItem
You can execute the `UpdateInventoryItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
updateInventoryItem(vars: UpdateInventoryItemVariables): MutationPromise<UpdateInventoryItemData, UpdateInventoryItemVariables>;

interface UpdateInventoryItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInventoryItemVariables): MutationRef<UpdateInventoryItemData, UpdateInventoryItemVariables>;
}
export const updateInventoryItemRef: UpdateInventoryItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateInventoryItem(dc: DataConnect, vars: UpdateInventoryItemVariables): MutationPromise<UpdateInventoryItemData, UpdateInventoryItemVariables>;

interface UpdateInventoryItemRef {
  ...
  (dc: DataConnect, vars: UpdateInventoryItemVariables): MutationRef<UpdateInventoryItemData, UpdateInventoryItemVariables>;
}
export const updateInventoryItemRef: UpdateInventoryItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateInventoryItemRef:
```typescript
const name = updateInventoryItemRef.operationName;
console.log(name);
```

### Variables
The `UpdateInventoryItem` mutation requires an argument of type `UpdateInventoryItemVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateInventoryItemVariables {
  id: UUIDString;
  type?: string | null;
  brand?: string | null;
  serial?: string | null;
  productKey?: string | null;
  condition?: string | null;
  assignedTo?: string | null;
  departmentId?: UUIDString | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `UpdateInventoryItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateInventoryItemData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateInventoryItemData {
  inventoryItem_update?: InventoryItem_Key | null;
}
```
### Using `UpdateInventoryItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateInventoryItem, UpdateInventoryItemVariables } from '@itam/dataconnect';

// The `UpdateInventoryItem` mutation requires an argument of type `UpdateInventoryItemVariables`:
const updateInventoryItemVars: UpdateInventoryItemVariables = {
  id: ..., 
  type: ..., // optional
  brand: ..., // optional
  serial: ..., // optional
  productKey: ..., // optional
  condition: ..., // optional
  assignedTo: ..., // optional
  departmentId: ..., // optional
  notes: ..., // optional
};

// Call the `updateInventoryItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateInventoryItem(updateInventoryItemVars);
// Variables can be defined inline as well.
const { data } = await updateInventoryItem({ id: ..., type: ..., brand: ..., serial: ..., productKey: ..., condition: ..., assignedTo: ..., departmentId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateInventoryItem(dataConnect, updateInventoryItemVars);

console.log(data.inventoryItem_update);

// Or, you can use the `Promise` API.
updateInventoryItem(updateInventoryItemVars).then((response) => {
  const data = response.data;
  console.log(data.inventoryItem_update);
});
```

### Using `UpdateInventoryItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateInventoryItemRef, UpdateInventoryItemVariables } from '@itam/dataconnect';

// The `UpdateInventoryItem` mutation requires an argument of type `UpdateInventoryItemVariables`:
const updateInventoryItemVars: UpdateInventoryItemVariables = {
  id: ..., 
  type: ..., // optional
  brand: ..., // optional
  serial: ..., // optional
  productKey: ..., // optional
  condition: ..., // optional
  assignedTo: ..., // optional
  departmentId: ..., // optional
  notes: ..., // optional
};

// Call the `updateInventoryItemRef()` function to get a reference to the mutation.
const ref = updateInventoryItemRef(updateInventoryItemVars);
// Variables can be defined inline as well.
const ref = updateInventoryItemRef({ id: ..., type: ..., brand: ..., serial: ..., productKey: ..., condition: ..., assignedTo: ..., departmentId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateInventoryItemRef(dataConnect, updateInventoryItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inventoryItem_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryItem_update);
});
```

## DeleteInventoryItem
You can execute the `DeleteInventoryItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deleteInventoryItem(vars: DeleteInventoryItemVariables): MutationPromise<DeleteInventoryItemData, DeleteInventoryItemVariables>;

interface DeleteInventoryItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteInventoryItemVariables): MutationRef<DeleteInventoryItemData, DeleteInventoryItemVariables>;
}
export const deleteInventoryItemRef: DeleteInventoryItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteInventoryItem(dc: DataConnect, vars: DeleteInventoryItemVariables): MutationPromise<DeleteInventoryItemData, DeleteInventoryItemVariables>;

interface DeleteInventoryItemRef {
  ...
  (dc: DataConnect, vars: DeleteInventoryItemVariables): MutationRef<DeleteInventoryItemData, DeleteInventoryItemVariables>;
}
export const deleteInventoryItemRef: DeleteInventoryItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteInventoryItemRef:
```typescript
const name = deleteInventoryItemRef.operationName;
console.log(name);
```

### Variables
The `DeleteInventoryItem` mutation requires an argument of type `DeleteInventoryItemVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteInventoryItemVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteInventoryItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteInventoryItemData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteInventoryItemData {
  inventoryItem_delete?: InventoryItem_Key | null;
}
```
### Using `DeleteInventoryItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteInventoryItem, DeleteInventoryItemVariables } from '@itam/dataconnect';

// The `DeleteInventoryItem` mutation requires an argument of type `DeleteInventoryItemVariables`:
const deleteInventoryItemVars: DeleteInventoryItemVariables = {
  id: ..., 
};

// Call the `deleteInventoryItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteInventoryItem(deleteInventoryItemVars);
// Variables can be defined inline as well.
const { data } = await deleteInventoryItem({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteInventoryItem(dataConnect, deleteInventoryItemVars);

console.log(data.inventoryItem_delete);

// Or, you can use the `Promise` API.
deleteInventoryItem(deleteInventoryItemVars).then((response) => {
  const data = response.data;
  console.log(data.inventoryItem_delete);
});
```

### Using `DeleteInventoryItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteInventoryItemRef, DeleteInventoryItemVariables } from '@itam/dataconnect';

// The `DeleteInventoryItem` mutation requires an argument of type `DeleteInventoryItemVariables`:
const deleteInventoryItemVars: DeleteInventoryItemVariables = {
  id: ..., 
};

// Call the `deleteInventoryItemRef()` function to get a reference to the mutation.
const ref = deleteInventoryItemRef(deleteInventoryItemVars);
// Variables can be defined inline as well.
const ref = deleteInventoryItemRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteInventoryItemRef(dataConnect, deleteInventoryItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inventoryItem_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryItem_delete);
});
```

## CreateTelephone
You can execute the `CreateTelephone` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createTelephone(vars?: CreateTelephoneVariables): MutationPromise<CreateTelephoneData, CreateTelephoneVariables>;

interface CreateTelephoneRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreateTelephoneVariables): MutationRef<CreateTelephoneData, CreateTelephoneVariables>;
}
export const createTelephoneRef: CreateTelephoneRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createTelephone(dc: DataConnect, vars?: CreateTelephoneVariables): MutationPromise<CreateTelephoneData, CreateTelephoneVariables>;

interface CreateTelephoneRef {
  ...
  (dc: DataConnect, vars?: CreateTelephoneVariables): MutationRef<CreateTelephoneData, CreateTelephoneVariables>;
}
export const createTelephoneRef: CreateTelephoneRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createTelephoneRef:
```typescript
const name = createTelephoneRef.operationName;
console.log(name);
```

### Variables
The `CreateTelephone` mutation has an optional argument of type `CreateTelephoneVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateTelephoneVariables {
  extension?: string | null;
  contactNumber?: string | null;
  assignedTo?: string | null;
  organization?: string | null;
  serial?: string | null;
  status?: string | null;
}
```
### Return Type
Recall that executing the `CreateTelephone` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTelephoneData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateTelephoneData {
  telephone_insert: Telephone_Key;
}
```
### Using `CreateTelephone`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTelephone, CreateTelephoneVariables } from '@itam/dataconnect';

// The `CreateTelephone` mutation has an optional argument of type `CreateTelephoneVariables`:
const createTelephoneVars: CreateTelephoneVariables = {
  extension: ..., // optional
  contactNumber: ..., // optional
  assignedTo: ..., // optional
  organization: ..., // optional
  serial: ..., // optional
  status: ..., // optional
};

// Call the `createTelephone()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTelephone(createTelephoneVars);
// Variables can be defined inline as well.
const { data } = await createTelephone({ extension: ..., contactNumber: ..., assignedTo: ..., organization: ..., serial: ..., status: ..., });
// Since all variables are optional for this mutation, you can omit the `CreateTelephoneVariables` argument.
const { data } = await createTelephone();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTelephone(dataConnect, createTelephoneVars);

console.log(data.telephone_insert);

// Or, you can use the `Promise` API.
createTelephone(createTelephoneVars).then((response) => {
  const data = response.data;
  console.log(data.telephone_insert);
});
```

### Using `CreateTelephone`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTelephoneRef, CreateTelephoneVariables } from '@itam/dataconnect';

// The `CreateTelephone` mutation has an optional argument of type `CreateTelephoneVariables`:
const createTelephoneVars: CreateTelephoneVariables = {
  extension: ..., // optional
  contactNumber: ..., // optional
  assignedTo: ..., // optional
  organization: ..., // optional
  serial: ..., // optional
  status: ..., // optional
};

// Call the `createTelephoneRef()` function to get a reference to the mutation.
const ref = createTelephoneRef(createTelephoneVars);
// Variables can be defined inline as well.
const ref = createTelephoneRef({ extension: ..., contactNumber: ..., assignedTo: ..., organization: ..., serial: ..., status: ..., });
// Since all variables are optional for this mutation, you can omit the `CreateTelephoneVariables` argument.
const ref = createTelephoneRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTelephoneRef(dataConnect, createTelephoneVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.telephone_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.telephone_insert);
});
```

## DeleteTelephone
You can execute the `DeleteTelephone` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deleteTelephone(vars: DeleteTelephoneVariables): MutationPromise<DeleteTelephoneData, DeleteTelephoneVariables>;

interface DeleteTelephoneRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTelephoneVariables): MutationRef<DeleteTelephoneData, DeleteTelephoneVariables>;
}
export const deleteTelephoneRef: DeleteTelephoneRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteTelephone(dc: DataConnect, vars: DeleteTelephoneVariables): MutationPromise<DeleteTelephoneData, DeleteTelephoneVariables>;

interface DeleteTelephoneRef {
  ...
  (dc: DataConnect, vars: DeleteTelephoneVariables): MutationRef<DeleteTelephoneData, DeleteTelephoneVariables>;
}
export const deleteTelephoneRef: DeleteTelephoneRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteTelephoneRef:
```typescript
const name = deleteTelephoneRef.operationName;
console.log(name);
```

### Variables
The `DeleteTelephone` mutation requires an argument of type `DeleteTelephoneVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteTelephoneVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteTelephone` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteTelephoneData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteTelephoneData {
  telephone_delete?: Telephone_Key | null;
}
```
### Using `DeleteTelephone`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteTelephone, DeleteTelephoneVariables } from '@itam/dataconnect';

// The `DeleteTelephone` mutation requires an argument of type `DeleteTelephoneVariables`:
const deleteTelephoneVars: DeleteTelephoneVariables = {
  id: ..., 
};

// Call the `deleteTelephone()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteTelephone(deleteTelephoneVars);
// Variables can be defined inline as well.
const { data } = await deleteTelephone({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteTelephone(dataConnect, deleteTelephoneVars);

console.log(data.telephone_delete);

// Or, you can use the `Promise` API.
deleteTelephone(deleteTelephoneVars).then((response) => {
  const data = response.data;
  console.log(data.telephone_delete);
});
```

### Using `DeleteTelephone`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteTelephoneRef, DeleteTelephoneVariables } from '@itam/dataconnect';

// The `DeleteTelephone` mutation requires an argument of type `DeleteTelephoneVariables`:
const deleteTelephoneVars: DeleteTelephoneVariables = {
  id: ..., 
};

// Call the `deleteTelephoneRef()` function to get a reference to the mutation.
const ref = deleteTelephoneRef(deleteTelephoneVars);
// Variables can be defined inline as well.
const ref = deleteTelephoneRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteTelephoneRef(dataConnect, deleteTelephoneVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.telephone_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.telephone_delete);
});
```

## CreatePrinter
You can execute the `CreatePrinter` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createPrinter(vars?: CreatePrinterVariables): MutationPromise<CreatePrinterData, CreatePrinterVariables>;

interface CreatePrinterRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreatePrinterVariables): MutationRef<CreatePrinterData, CreatePrinterVariables>;
}
export const createPrinterRef: CreatePrinterRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPrinter(dc: DataConnect, vars?: CreatePrinterVariables): MutationPromise<CreatePrinterData, CreatePrinterVariables>;

interface CreatePrinterRef {
  ...
  (dc: DataConnect, vars?: CreatePrinterVariables): MutationRef<CreatePrinterData, CreatePrinterVariables>;
}
export const createPrinterRef: CreatePrinterRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPrinterRef:
```typescript
const name = createPrinterRef.operationName;
console.log(name);
```

### Variables
The `CreatePrinter` mutation has an optional argument of type `CreatePrinterVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePrinterVariables {
  serial?: string | null;
  brand?: string | null;
  model?: string | null;
  productNumber?: string | null;
  assignedTo?: string | null;
  status?: string | null;
}
```
### Return Type
Recall that executing the `CreatePrinter` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePrinterData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePrinterData {
  printer_insert: Printer_Key;
}
```
### Using `CreatePrinter`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPrinter, CreatePrinterVariables } from '@itam/dataconnect';

// The `CreatePrinter` mutation has an optional argument of type `CreatePrinterVariables`:
const createPrinterVars: CreatePrinterVariables = {
  serial: ..., // optional
  brand: ..., // optional
  model: ..., // optional
  productNumber: ..., // optional
  assignedTo: ..., // optional
  status: ..., // optional
};

// Call the `createPrinter()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPrinter(createPrinterVars);
// Variables can be defined inline as well.
const { data } = await createPrinter({ serial: ..., brand: ..., model: ..., productNumber: ..., assignedTo: ..., status: ..., });
// Since all variables are optional for this mutation, you can omit the `CreatePrinterVariables` argument.
const { data } = await createPrinter();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPrinter(dataConnect, createPrinterVars);

console.log(data.printer_insert);

// Or, you can use the `Promise` API.
createPrinter(createPrinterVars).then((response) => {
  const data = response.data;
  console.log(data.printer_insert);
});
```

### Using `CreatePrinter`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPrinterRef, CreatePrinterVariables } from '@itam/dataconnect';

// The `CreatePrinter` mutation has an optional argument of type `CreatePrinterVariables`:
const createPrinterVars: CreatePrinterVariables = {
  serial: ..., // optional
  brand: ..., // optional
  model: ..., // optional
  productNumber: ..., // optional
  assignedTo: ..., // optional
  status: ..., // optional
};

// Call the `createPrinterRef()` function to get a reference to the mutation.
const ref = createPrinterRef(createPrinterVars);
// Variables can be defined inline as well.
const ref = createPrinterRef({ serial: ..., brand: ..., model: ..., productNumber: ..., assignedTo: ..., status: ..., });
// Since all variables are optional for this mutation, you can omit the `CreatePrinterVariables` argument.
const ref = createPrinterRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPrinterRef(dataConnect, createPrinterVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.printer_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.printer_insert);
});
```

## DeletePrinter
You can execute the `DeletePrinter` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deletePrinter(vars: DeletePrinterVariables): MutationPromise<DeletePrinterData, DeletePrinterVariables>;

interface DeletePrinterRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePrinterVariables): MutationRef<DeletePrinterData, DeletePrinterVariables>;
}
export const deletePrinterRef: DeletePrinterRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePrinter(dc: DataConnect, vars: DeletePrinterVariables): MutationPromise<DeletePrinterData, DeletePrinterVariables>;

interface DeletePrinterRef {
  ...
  (dc: DataConnect, vars: DeletePrinterVariables): MutationRef<DeletePrinterData, DeletePrinterVariables>;
}
export const deletePrinterRef: DeletePrinterRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePrinterRef:
```typescript
const name = deletePrinterRef.operationName;
console.log(name);
```

### Variables
The `DeletePrinter` mutation requires an argument of type `DeletePrinterVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePrinterVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePrinter` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePrinterData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePrinterData {
  printer_delete?: Printer_Key | null;
}
```
### Using `DeletePrinter`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePrinter, DeletePrinterVariables } from '@itam/dataconnect';

// The `DeletePrinter` mutation requires an argument of type `DeletePrinterVariables`:
const deletePrinterVars: DeletePrinterVariables = {
  id: ..., 
};

// Call the `deletePrinter()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePrinter(deletePrinterVars);
// Variables can be defined inline as well.
const { data } = await deletePrinter({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePrinter(dataConnect, deletePrinterVars);

console.log(data.printer_delete);

// Or, you can use the `Promise` API.
deletePrinter(deletePrinterVars).then((response) => {
  const data = response.data;
  console.log(data.printer_delete);
});
```

### Using `DeletePrinter`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePrinterRef, DeletePrinterVariables } from '@itam/dataconnect';

// The `DeletePrinter` mutation requires an argument of type `DeletePrinterVariables`:
const deletePrinterVars: DeletePrinterVariables = {
  id: ..., 
};

// Call the `deletePrinterRef()` function to get a reference to the mutation.
const ref = deletePrinterRef(deletePrinterVars);
// Variables can be defined inline as well.
const ref = deletePrinterRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePrinterRef(dataConnect, deletePrinterVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.printer_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.printer_delete);
});
```

## CreateAuditLog
You can execute the `CreateAuditLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createAuditLog(vars: CreateAuditLogVariables): MutationPromise<CreateAuditLogData, CreateAuditLogVariables>;

interface CreateAuditLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAuditLogVariables): MutationRef<CreateAuditLogData, CreateAuditLogVariables>;
}
export const createAuditLogRef: CreateAuditLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAuditLog(dc: DataConnect, vars: CreateAuditLogVariables): MutationPromise<CreateAuditLogData, CreateAuditLogVariables>;

interface CreateAuditLogRef {
  ...
  (dc: DataConnect, vars: CreateAuditLogVariables): MutationRef<CreateAuditLogData, CreateAuditLogVariables>;
}
export const createAuditLogRef: CreateAuditLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAuditLogRef:
```typescript
const name = createAuditLogRef.operationName;
console.log(name);
```

### Variables
The `CreateAuditLog` mutation requires an argument of type `CreateAuditLogVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateAuditLogVariables {
  action: string;
  entity: string;
  entityId?: UUIDString | null;
  performedBy?: string | null;
  details?: string | null;
}
```
### Return Type
Recall that executing the `CreateAuditLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAuditLogData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAuditLogData {
  auditLog_insert: AuditLog_Key;
}
```
### Using `CreateAuditLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAuditLog, CreateAuditLogVariables } from '@itam/dataconnect';

// The `CreateAuditLog` mutation requires an argument of type `CreateAuditLogVariables`:
const createAuditLogVars: CreateAuditLogVariables = {
  action: ..., 
  entity: ..., 
  entityId: ..., // optional
  performedBy: ..., // optional
  details: ..., // optional
};

// Call the `createAuditLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAuditLog(createAuditLogVars);
// Variables can be defined inline as well.
const { data } = await createAuditLog({ action: ..., entity: ..., entityId: ..., performedBy: ..., details: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAuditLog(dataConnect, createAuditLogVars);

console.log(data.auditLog_insert);

// Or, you can use the `Promise` API.
createAuditLog(createAuditLogVars).then((response) => {
  const data = response.data;
  console.log(data.auditLog_insert);
});
```

### Using `CreateAuditLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAuditLogRef, CreateAuditLogVariables } from '@itam/dataconnect';

// The `CreateAuditLog` mutation requires an argument of type `CreateAuditLogVariables`:
const createAuditLogVars: CreateAuditLogVariables = {
  action: ..., 
  entity: ..., 
  entityId: ..., // optional
  performedBy: ..., // optional
  details: ..., // optional
};

// Call the `createAuditLogRef()` function to get a reference to the mutation.
const ref = createAuditLogRef(createAuditLogVars);
// Variables can be defined inline as well.
const ref = createAuditLogRef({ action: ..., entity: ..., entityId: ..., performedBy: ..., details: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAuditLogRef(dataConnect, createAuditLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.auditLog_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.auditLog_insert);
});
```

## CreateAdminUser
You can execute the `CreateAdminUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
createAdminUser(vars: CreateAdminUserVariables): MutationPromise<CreateAdminUserData, CreateAdminUserVariables>;

interface CreateAdminUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAdminUserVariables): MutationRef<CreateAdminUserData, CreateAdminUserVariables>;
}
export const createAdminUserRef: CreateAdminUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAdminUser(dc: DataConnect, vars: CreateAdminUserVariables): MutationPromise<CreateAdminUserData, CreateAdminUserVariables>;

interface CreateAdminUserRef {
  ...
  (dc: DataConnect, vars: CreateAdminUserVariables): MutationRef<CreateAdminUserData, CreateAdminUserVariables>;
}
export const createAdminUserRef: CreateAdminUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAdminUserRef:
```typescript
const name = createAdminUserRef.operationName;
console.log(name);
```

### Variables
The `CreateAdminUser` mutation requires an argument of type `CreateAdminUserVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateAdminUserVariables {
  username: string;
  password: string;
  role?: string | null;
}
```
### Return Type
Recall that executing the `CreateAdminUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAdminUserData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAdminUserData {
  adminUser_insert: AdminUser_Key;
}
```
### Using `CreateAdminUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAdminUser, CreateAdminUserVariables } from '@itam/dataconnect';

// The `CreateAdminUser` mutation requires an argument of type `CreateAdminUserVariables`:
const createAdminUserVars: CreateAdminUserVariables = {
  username: ..., 
  password: ..., 
  role: ..., // optional
};

// Call the `createAdminUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAdminUser(createAdminUserVars);
// Variables can be defined inline as well.
const { data } = await createAdminUser({ username: ..., password: ..., role: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAdminUser(dataConnect, createAdminUserVars);

console.log(data.adminUser_insert);

// Or, you can use the `Promise` API.
createAdminUser(createAdminUserVars).then((response) => {
  const data = response.data;
  console.log(data.adminUser_insert);
});
```

### Using `CreateAdminUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAdminUserRef, CreateAdminUserVariables } from '@itam/dataconnect';

// The `CreateAdminUser` mutation requires an argument of type `CreateAdminUserVariables`:
const createAdminUserVars: CreateAdminUserVariables = {
  username: ..., 
  password: ..., 
  role: ..., // optional
};

// Call the `createAdminUserRef()` function to get a reference to the mutation.
const ref = createAdminUserRef(createAdminUserVars);
// Variables can be defined inline as well.
const ref = createAdminUserRef({ username: ..., password: ..., role: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAdminUserRef(dataConnect, createAdminUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.adminUser_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.adminUser_insert);
});
```

## UpdateAdminUserPassword
You can execute the `UpdateAdminUserPassword` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
updateAdminUserPassword(vars: UpdateAdminUserPasswordVariables): MutationPromise<UpdateAdminUserPasswordData, UpdateAdminUserPasswordVariables>;

interface UpdateAdminUserPasswordRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAdminUserPasswordVariables): MutationRef<UpdateAdminUserPasswordData, UpdateAdminUserPasswordVariables>;
}
export const updateAdminUserPasswordRef: UpdateAdminUserPasswordRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateAdminUserPassword(dc: DataConnect, vars: UpdateAdminUserPasswordVariables): MutationPromise<UpdateAdminUserPasswordData, UpdateAdminUserPasswordVariables>;

interface UpdateAdminUserPasswordRef {
  ...
  (dc: DataConnect, vars: UpdateAdminUserPasswordVariables): MutationRef<UpdateAdminUserPasswordData, UpdateAdminUserPasswordVariables>;
}
export const updateAdminUserPasswordRef: UpdateAdminUserPasswordRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateAdminUserPasswordRef:
```typescript
const name = updateAdminUserPasswordRef.operationName;
console.log(name);
```

### Variables
The `UpdateAdminUserPassword` mutation requires an argument of type `UpdateAdminUserPasswordVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateAdminUserPasswordVariables {
  id: UUIDString;
  password: string;
}
```
### Return Type
Recall that executing the `UpdateAdminUserPassword` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateAdminUserPasswordData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateAdminUserPasswordData {
  adminUser_update?: AdminUser_Key | null;
}
```
### Using `UpdateAdminUserPassword`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateAdminUserPassword, UpdateAdminUserPasswordVariables } from '@itam/dataconnect';

// The `UpdateAdminUserPassword` mutation requires an argument of type `UpdateAdminUserPasswordVariables`:
const updateAdminUserPasswordVars: UpdateAdminUserPasswordVariables = {
  id: ..., 
  password: ..., 
};

// Call the `updateAdminUserPassword()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateAdminUserPassword(updateAdminUserPasswordVars);
// Variables can be defined inline as well.
const { data } = await updateAdminUserPassword({ id: ..., password: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateAdminUserPassword(dataConnect, updateAdminUserPasswordVars);

console.log(data.adminUser_update);

// Or, you can use the `Promise` API.
updateAdminUserPassword(updateAdminUserPasswordVars).then((response) => {
  const data = response.data;
  console.log(data.adminUser_update);
});
```

### Using `UpdateAdminUserPassword`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateAdminUserPasswordRef, UpdateAdminUserPasswordVariables } from '@itam/dataconnect';

// The `UpdateAdminUserPassword` mutation requires an argument of type `UpdateAdminUserPasswordVariables`:
const updateAdminUserPasswordVars: UpdateAdminUserPasswordVariables = {
  id: ..., 
  password: ..., 
};

// Call the `updateAdminUserPasswordRef()` function to get a reference to the mutation.
const ref = updateAdminUserPasswordRef(updateAdminUserPasswordVars);
// Variables can be defined inline as well.
const ref = updateAdminUserPasswordRef({ id: ..., password: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateAdminUserPasswordRef(dataConnect, updateAdminUserPasswordVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.adminUser_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.adminUser_update);
});
```

## DeleteAdminUser
You can execute the `DeleteAdminUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [generated/index.d.ts](./index.d.ts):
```typescript
deleteAdminUser(vars: DeleteAdminUserVariables): MutationPromise<DeleteAdminUserData, DeleteAdminUserVariables>;

interface DeleteAdminUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAdminUserVariables): MutationRef<DeleteAdminUserData, DeleteAdminUserVariables>;
}
export const deleteAdminUserRef: DeleteAdminUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAdminUser(dc: DataConnect, vars: DeleteAdminUserVariables): MutationPromise<DeleteAdminUserData, DeleteAdminUserVariables>;

interface DeleteAdminUserRef {
  ...
  (dc: DataConnect, vars: DeleteAdminUserVariables): MutationRef<DeleteAdminUserData, DeleteAdminUserVariables>;
}
export const deleteAdminUserRef: DeleteAdminUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAdminUserRef:
```typescript
const name = deleteAdminUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteAdminUser` mutation requires an argument of type `DeleteAdminUserVariables`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteAdminUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteAdminUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAdminUserData`, which is defined in [generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAdminUserData {
  adminUser_delete?: AdminUser_Key | null;
}
```
### Using `DeleteAdminUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAdminUser, DeleteAdminUserVariables } from '@itam/dataconnect';

// The `DeleteAdminUser` mutation requires an argument of type `DeleteAdminUserVariables`:
const deleteAdminUserVars: DeleteAdminUserVariables = {
  id: ..., 
};

// Call the `deleteAdminUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAdminUser(deleteAdminUserVars);
// Variables can be defined inline as well.
const { data } = await deleteAdminUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAdminUser(dataConnect, deleteAdminUserVars);

console.log(data.adminUser_delete);

// Or, you can use the `Promise` API.
deleteAdminUser(deleteAdminUserVars).then((response) => {
  const data = response.data;
  console.log(data.adminUser_delete);
});
```

### Using `DeleteAdminUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAdminUserRef, DeleteAdminUserVariables } from '@itam/dataconnect';

// The `DeleteAdminUser` mutation requires an argument of type `DeleteAdminUserVariables`:
const deleteAdminUserVars: DeleteAdminUserVariables = {
  id: ..., 
};

// Call the `deleteAdminUserRef()` function to get a reference to the mutation.
const ref = deleteAdminUserRef(deleteAdminUserVars);
// Variables can be defined inline as well.
const ref = deleteAdminUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAdminUserRef(dataConnect, deleteAdminUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.adminUser_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.adminUser_delete);
});
```


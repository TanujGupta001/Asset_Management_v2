# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createDepartment, updateDepartment, deleteDepartment, createEmployee, updateEmployee, deleteEmployee, createVendor, deleteVendor, createAsset, updateAsset } from '@itam/dataconnect';


// Operation CreateDepartment:  For variables, look at type CreateDepartmentVars in ../index.d.ts
const { data } = await CreateDepartment(dataConnect, createDepartmentVars);

// Operation UpdateDepartment:  For variables, look at type UpdateDepartmentVars in ../index.d.ts
const { data } = await UpdateDepartment(dataConnect, updateDepartmentVars);

// Operation DeleteDepartment:  For variables, look at type DeleteDepartmentVars in ../index.d.ts
const { data } = await DeleteDepartment(dataConnect, deleteDepartmentVars);

// Operation CreateEmployee:  For variables, look at type CreateEmployeeVars in ../index.d.ts
const { data } = await CreateEmployee(dataConnect, createEmployeeVars);

// Operation UpdateEmployee:  For variables, look at type UpdateEmployeeVars in ../index.d.ts
const { data } = await UpdateEmployee(dataConnect, updateEmployeeVars);

// Operation DeleteEmployee:  For variables, look at type DeleteEmployeeVars in ../index.d.ts
const { data } = await DeleteEmployee(dataConnect, deleteEmployeeVars);

// Operation CreateVendor:  For variables, look at type CreateVendorVars in ../index.d.ts
const { data } = await CreateVendor(dataConnect, createVendorVars);

// Operation DeleteVendor:  For variables, look at type DeleteVendorVars in ../index.d.ts
const { data } = await DeleteVendor(dataConnect, deleteVendorVars);

// Operation CreateAsset:  For variables, look at type CreateAssetVars in ../index.d.ts
const { data } = await CreateAsset(dataConnect, createAssetVars);

// Operation UpdateAsset:  For variables, look at type UpdateAssetVars in ../index.d.ts
const { data } = await UpdateAsset(dataConnect, updateAssetVars);


```
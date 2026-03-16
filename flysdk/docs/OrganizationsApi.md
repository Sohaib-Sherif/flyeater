# OrganizationsApi

All URIs are relative to *https://api.machines.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**machinesOrgList**](#machinesorglist) | **GET** /orgs/{org_slug}/machines | List All Machines|

# **machinesOrgList**
> OrgMachinesResponse machinesOrgList()

List all Machines associated with a specific organization. Machines are sorted by their `updated_at` timestamps, oldest to newest.  This API call represents \"a point in time\". Recent machine changes, including creations and destructions, may take time to propagate. When polling with `updated_after`, offset your timestamps to catch late-arriving events. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgSlug: string; //Fly Organization Slug (default to undefined)
let includeDeleted: boolean; //Include deleted machines (optional) (default to undefined)
let region: string; //Region filter (optional) (default to undefined)
let state: string; //Comma separated list of states to filter (created, started, stopped, suspended) (optional) (default to undefined)
let updatedAfter: string; //Only return machines updated after this time. Timestamp must be in the RFC 3339 format (optional) (default to undefined)
let cursor: string; //Pagination cursor from previous response (takes precedence over updated_after) (optional) (default to undefined)
let limit: number; //The number of machines to fetch (max of 2000). This limit is advisory. Responses may be shorter, even when more machines remain. If omitted, the maximum is used (optional) (default to undefined)

const { status, data } = await apiInstance.machinesOrgList(
    orgSlug,
    includeDeleted,
    region,
    state,
    updatedAfter,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgSlug** | [**string**] | Fly Organization Slug | defaults to undefined|
| **includeDeleted** | [**boolean**] | Include deleted machines | (optional) defaults to undefined|
| **region** | [**string**] | Region filter | (optional) defaults to undefined|
| **state** | [**string**] | Comma separated list of states to filter (created, started, stopped, suspended) | (optional) defaults to undefined|
| **updatedAfter** | [**string**] | Only return machines updated after this time. Timestamp must be in the RFC 3339 format | (optional) defaults to undefined|
| **cursor** | [**string**] | Pagination cursor from previous response (takes precedence over updated_after) | (optional) defaults to undefined|
| **limit** | [**number**] | The number of machines to fetch (max of 2000). This limit is advisory. Responses may be shorter, even when more machines remain. If omitted, the maximum is used | (optional) defaults to undefined|


### Return type

**OrgMachinesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


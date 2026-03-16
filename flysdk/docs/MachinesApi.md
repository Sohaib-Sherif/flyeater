# MachinesApi

All URIs are relative to *https://api.machines.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**machinesCordon**](#machinescordon) | **POST** /apps/{app_name}/machines/{machine_id}/cordon | Cordon Machine|
|[**machinesCreate**](#machinescreate) | **POST** /apps/{app_name}/machines | Create Machine|
|[**machinesCreateLease**](#machinescreatelease) | **POST** /apps/{app_name}/machines/{machine_id}/lease | Create Lease|
|[**machinesDelete**](#machinesdelete) | **DELETE** /apps/{app_name}/machines/{machine_id} | Destroy Machine|
|[**machinesDeleteMetadata**](#machinesdeletemetadata) | **DELETE** /apps/{app_name}/machines/{machine_id}/metadata/{key} | Delete Metadata|
|[**machinesExec**](#machinesexec) | **POST** /apps/{app_name}/machines/{machine_id}/exec | Execute Command|
|[**machinesGetMemory**](#machinesgetmemory) | **GET** /apps/{app_name}/machines/{machine_id}/memory | Get Machine Memory|
|[**machinesGetMetadataKey**](#machinesgetmetadatakey) | **GET** /apps/{app_name}/machines/{machine_id}/metadata/{key} | Get Metadata Value|
|[**machinesList**](#machineslist) | **GET** /apps/{app_name}/machines | List Machines|
|[**machinesListEvents**](#machineslistevents) | **GET** /apps/{app_name}/machines/{machine_id}/events | List Events|
|[**machinesListProcesses**](#machineslistprocesses) | **GET** /apps/{app_name}/machines/{machine_id}/ps | List Processes|
|[**machinesListVersions**](#machineslistversions) | **GET** /apps/{app_name}/machines/{machine_id}/versions | List Versions|
|[**machinesReclaimMemory**](#machinesreclaimmemory) | **POST** /apps/{app_name}/machines/{machine_id}/memory/reclaim | Reclaim Machine Memory|
|[**machinesReleaseLease**](#machinesreleaselease) | **DELETE** /apps/{app_name}/machines/{machine_id}/lease | Release Lease|
|[**machinesRestart**](#machinesrestart) | **POST** /apps/{app_name}/machines/{machine_id}/restart | Restart Machine|
|[**machinesSetMemoryLimit**](#machinessetmemorylimit) | **PUT** /apps/{app_name}/machines/{machine_id}/memory | Set Machine Memory Limit|
|[**machinesShow**](#machinesshow) | **GET** /apps/{app_name}/machines/{machine_id} | Get Machine|
|[**machinesShowLease**](#machinesshowlease) | **GET** /apps/{app_name}/machines/{machine_id}/lease | Get Lease|
|[**machinesShowMetadata**](#machinesshowmetadata) | **GET** /apps/{app_name}/machines/{machine_id}/metadata | Get Metadata|
|[**machinesSignal**](#machinessignal) | **POST** /apps/{app_name}/machines/{machine_id}/signal | Signal Machine|
|[**machinesStart**](#machinesstart) | **POST** /apps/{app_name}/machines/{machine_id}/start | Start Machine|
|[**machinesStop**](#machinesstop) | **POST** /apps/{app_name}/machines/{machine_id}/stop | Stop Machine|
|[**machinesSuspend**](#machinessuspend) | **POST** /apps/{app_name}/machines/{machine_id}/suspend | Suspend Machine|
|[**machinesUncordon**](#machinesuncordon) | **POST** /apps/{app_name}/machines/{machine_id}/uncordon | Uncordon Machine|
|[**machinesUpdate**](#machinesupdate) | **POST** /apps/{app_name}/machines/{machine_id} | Update Machine|
|[**machinesUpdateMetadata**](#machinesupdatemetadata) | **PUT** /apps/{app_name}/machines/{machine_id}/metadata | Update Metadata (set/remove multiple keys)|
|[**machinesUpsertMetadata**](#machinesupsertmetadata) | **POST** /apps/{app_name}/machines/{machine_id}/metadata/{key} | Upsert Metadata Key|
|[**machinesWait**](#machineswait) | **GET** /apps/{app_name}/machines/{machine_id}/wait | Wait for State|

# **machinesCordon**
> machinesCordon()

“Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of Machines is started up with services disabled, and when they are all healthy, the services are enabled on the new Machines and disabled on the old ones. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesCordon(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesCreate**
> Machine machinesCreate(request)

Create a Machine within a specific app using the details provided in the request body.  **Important**: This request can fail, and you’re responsible for handling that failure. If you ask for a large Machine, or a Machine in a region we happen to be at capacity for, you might need to retry the request, or to fall back to another region. If you’re working directly with the Machines API, you’re taking some responsibility for your own orchestration! 

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    CreateMachineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let request: CreateMachineRequest; //Create machine request

const { status, data } = await apiInstance.machinesCreate(
    appName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **CreateMachineRequest**| Create machine request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**Machine**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesCreateLease**
> Lease machinesCreateLease(request)

Create a lease for a specific Machine within an app using the details provided in the request body. Machine leases can be used to obtain an exclusive lock on modifying a Machine. 

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    CreateLeaseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let request: CreateLeaseRequest; //Request body
let flyMachineLeaseNonce: string; //Existing lease nonce to refresh by ttl, empty or non-existent to create a new lease (optional) (default to undefined)

const { status, data } = await apiInstance.machinesCreateLease(
    appName,
    machineId,
    request,
    flyMachineLeaseNonce
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **CreateLeaseRequest**| Request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **flyMachineLeaseNonce** | [**string**] | Existing lease nonce to refresh by ttl, empty or non-existent to create a new lease | (optional) defaults to undefined|


### Return type

**Lease**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesDelete**
> machinesDelete()

Delete a specific Machine within an app by Machine ID, with an optional force parameter to force kill the Machine if it\'s running. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let force: boolean; //Force kill the machine if it\'s running (optional) (default to undefined)

const { status, data } = await apiInstance.machinesDelete(
    appName,
    machineId,
    force
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **force** | [**boolean**] | Force kill the machine if it\&#39;s running | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesDeleteMetadata**
> machinesDeleteMetadata()

Delete metadata for a specific Machine within an app by providing a metadata key. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let key: string; //Metadata Key (default to undefined)

const { status, data } = await apiInstance.machinesDeleteMetadata(
    appName,
    machineId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **key** | [**string**] | Metadata Key | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesExec**
> Flydv1ExecResponse machinesExec(request)

Execute a command on a specific Machine and return the raw command output bytes. 

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    MachineExecRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let request: MachineExecRequest; //Request body

const { status, data } = await apiInstance.machinesExec(
    appName,
    machineId,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **MachineExecRequest**| Request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**Flydv1ExecResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | stdout, stderr, exit code, and exit signal are returned |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesGetMemory**
> MainMemoryResponse machinesGetMemory()

Get current memory limit and available capacity for a machine

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesGetMemory(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**MainMemoryResponse**

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

# **machinesGetMetadataKey**
> MetadataValueResponse machinesGetMetadataKey()

Get the value of a specific metadata key

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let key: string; //Metadata Key (default to undefined)

const { status, data } = await apiInstance.machinesGetMetadataKey(
    appName,
    machineId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **key** | [**string**] | Metadata Key | defaults to undefined|


### Return type

**MetadataValueResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesList**
> Array<Machine> machinesList()

List all Machines associated with a specific app, with optional filters for including deleted Machines and filtering by region. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let includeDeleted: boolean; //Include deleted machines (optional) (default to undefined)
let region: string; //Region filter (optional) (default to undefined)
let state: string; //comma separated list of states to filter (created, started, stopped, suspended) (optional) (default to undefined)
let summary: boolean; //Only return summary info about machines (omit config, checks, events, host_status, nonce, etc.) (optional) (default to undefined)

const { status, data } = await apiInstance.machinesList(
    appName,
    includeDeleted,
    region,
    state,
    summary
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **includeDeleted** | [**boolean**] | Include deleted machines | (optional) defaults to undefined|
| **region** | [**string**] | Region filter | (optional) defaults to undefined|
| **state** | [**string**] | comma separated list of states to filter (created, started, stopped, suspended) | (optional) defaults to undefined|
| **summary** | [**boolean**] | Only return summary info about machines (omit config, checks, events, host_status, nonce, etc.) | (optional) defaults to undefined|


### Return type

**Array<Machine>**

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

# **machinesListEvents**
> Array<MachineEvent> machinesListEvents()

List all events associated with a specific Machine within an app. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let limit: number; //The number of events to fetch (max of 50). If omitted, this is set to 20 by default. (optional) (default to undefined)

const { status, data } = await apiInstance.machinesListEvents(
    appName,
    machineId,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **limit** | [**number**] | The number of events to fetch (max of 50). If omitted, this is set to 20 by default. | (optional) defaults to undefined|


### Return type

**Array<MachineEvent>**

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

# **machinesListProcesses**
> Array<ProcessStat> machinesListProcesses()

List all processes running on a specific Machine within an app, with optional sorting parameters. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let sortBy: string; //Sort by (optional) (default to undefined)
let order: string; //Order (optional) (default to undefined)

const { status, data } = await apiInstance.machinesListProcesses(
    appName,
    machineId,
    sortBy,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **sortBy** | [**string**] | Sort by | (optional) defaults to undefined|
| **order** | [**string**] | Order | (optional) defaults to undefined|


### Return type

**Array<ProcessStat>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesListVersions**
> Array<MachineVersion> machinesListVersions()

List all versions of the configuration for a specific Machine within an app. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesListVersions(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**Array<MachineVersion>**

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

# **machinesReclaimMemory**
> MainReclaimMemoryResponse machinesReclaimMemory(body)

Trigger the balloon device to reclaim memory from a machine

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    MainReclaimMemoryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let body: MainReclaimMemoryRequest; //Reclaim memory request

const { status, data } = await apiInstance.machinesReclaimMemory(
    appName,
    machineId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **MainReclaimMemoryRequest**| Reclaim memory request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**MainReclaimMemoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesReleaseLease**
> machinesReleaseLease()

Release the lease of a specific Machine within an app. Machine leases can be used to obtain an exclusive lock on modifying a Machine. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let flyMachineLeaseNonce: string; //Existing lease nonce (default to undefined)

const { status, data } = await apiInstance.machinesReleaseLease(
    appName,
    machineId,
    flyMachineLeaseNonce
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **flyMachineLeaseNonce** | [**string**] | Existing lease nonce | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesRestart**
> machinesRestart()

Restart a specific Machine within an app, with an optional timeout parameter. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let timeout: string; //Restart timeout as a Go duration string or number of seconds (optional) (default to undefined)
let signal: string; //Unix signal name (optional) (default to undefined)

const { status, data } = await apiInstance.machinesRestart(
    appName,
    machineId,
    timeout,
    signal
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **timeout** | [**string**] | Restart timeout as a Go duration string or number of seconds | (optional) defaults to undefined|
| **signal** | [**string**] | Unix signal name | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesSetMemoryLimit**
> MainMemoryResponse machinesSetMemoryLimit(body)

Set the memory limit for a machine using the balloon device

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    MainSetMemoryLimitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let body: MainSetMemoryLimitRequest; //Set memory limit request

const { status, data } = await apiInstance.machinesSetMemoryLimit(
    appName,
    machineId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **MainSetMemoryLimitRequest**| Set memory limit request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**MainMemoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesShow**
> Machine machinesShow()

Get details of a specific Machine within an app by the Machine ID. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesShow(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**Machine**

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

# **machinesShowLease**
> Lease machinesShowLease()

Retrieve the current lease of a specific Machine within an app. Machine leases can be used to obtain an exclusive lock on modifying a Machine. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesShowLease(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**Lease**

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

# **machinesShowMetadata**
> { [key: string]: string; } machinesShowMetadata()

Retrieve metadata for a specific Machine within an app. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesShowMetadata(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**{ [key: string]: string; }**

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

# **machinesSignal**
> machinesSignal(request)

Send a signal to a specific Machine within an app using the details provided in the request body. 

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    SignalRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let request: SignalRequest; //Request body

const { status, data } = await apiInstance.machinesSignal(
    appName,
    machineId,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **SignalRequest**| Request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesStart**
> machinesStart()

Start a specific Machine within an app. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesStart(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesStop**
> machinesStop()

Stop a specific Machine within an app, with an optional request body to specify signal and timeout. 

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    StopRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let request: StopRequest; //Optional request body (optional)

const { status, data } = await apiInstance.machinesStop(
    appName,
    machineId,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **StopRequest**| Optional request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesSuspend**
> machinesSuspend()

Suspend a specific Machine within an app. The next start operation will attempt (but is not guaranteed) to resume the Machine from a snapshot taken at suspension time, rather than performing a cold boot. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesSuspend(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesUncordon**
> machinesUncordon()

“Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of Machines is started up with services disabled, and when they are all healthy, the services are enabled on the new Machines and disabled on the old ones. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)

const { status, data } = await apiInstance.machinesUncordon(
    appName,
    machineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesUpdate**
> Machine machinesUpdate(request)

Update a Machine\'s configuration using the details provided in the request body. 

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    UpdateMachineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let request: UpdateMachineRequest; //Request body

const { status, data } = await apiInstance.machinesUpdate(
    appName,
    machineId,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **UpdateMachineRequest**| Request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

**Machine**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesUpdateMetadata**
> machinesUpdateMetadata(request)

Update multiple metadata keys at once. Null values and empty strings remove keys. + If `machine_version` is provided and no longer matches the current machine version, returns 412 Precondition Failed.

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    UpdateMetadataRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let request: UpdateMetadataRequest; //Update metadata request

const { status, data } = await apiInstance.machinesUpdateMetadata(
    appName,
    machineId,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **UpdateMetadataRequest**| Update metadata request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**412** | Precondition Failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesUpsertMetadata**
> machinesUpsertMetadata(request)

Update metadata for a specific machine within an app by providing a metadata key. 

### Example

```typescript
import {
    MachinesApi,
    Configuration,
    UpsertMetadataKeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let key: string; //Metadata Key (default to undefined)
let request: UpsertMetadataKeyRequest; //Upsert metadata key request

const { status, data } = await apiInstance.machinesUpsertMetadata(
    appName,
    machineId,
    key,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **UpsertMetadataKeyRequest**| Upsert metadata key request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **key** | [**string**] | Metadata Key | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machinesWait**
> WaitMachineResponse machinesWait()

Wait for a Machine to reach a specific state. Specify the desired state with the state parameter. See the [Machine states table](https://fly.io/docs/machines/working-with-machines/#machine-states) for a list of possible states. The default for this parameter is `started`.  This request will block for up to 60 seconds. Set a shorter timeout with the timeout parameter. 

### Example

```typescript
import {
    MachinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MachinesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let machineId: string; //Machine ID (default to undefined)
let version: string; //26-character Machine version ID (optional) (default to undefined)
let instanceId: string; //26-character Machine version ID (deprecated; use version) (optional) (default to undefined)
let fromEventId: string; //26-character Machine event ID to start waiting after (optional) (default to undefined)
let timeout: number; //wait timeout. default 60s (optional) (default to undefined)
let state: 'started' | 'stopped' | 'suspended' | 'destroyed' | 'failed' | 'settled'; //desired state(s), supports repeated or comma-separated values (optional) (default to undefined)

const { status, data } = await apiInstance.machinesWait(
    appName,
    machineId,
    version,
    instanceId,
    fromEventId,
    timeout,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **machineId** | [**string**] | Machine ID | defaults to undefined|
| **version** | [**string**] | 26-character Machine version ID | (optional) defaults to undefined|
| **instanceId** | [**string**] | 26-character Machine version ID (deprecated; use version) | (optional) defaults to undefined|
| **fromEventId** | [**string**] | 26-character Machine event ID to start waiting after | (optional) defaults to undefined|
| **timeout** | [**number**] | wait timeout. default 60s | (optional) defaults to undefined|
| **state** | [**&#39;started&#39; | &#39;stopped&#39; | &#39;suspended&#39; | &#39;destroyed&#39; | &#39;failed&#39; | &#39;settled&#39;**]**Array<&#39;started&#39; &#124; &#39;stopped&#39; &#124; &#39;suspended&#39; &#124; &#39;destroyed&#39; &#124; &#39;failed&#39; &#124; &#39;settled&#39;>** | desired state(s), supports repeated or comma-separated values | (optional) defaults to undefined|


### Return type

**WaitMachineResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


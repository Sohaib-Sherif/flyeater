# AppsApi

All URIs are relative to *https://api.machines.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**appCreateDeployToken**](#appcreatedeploytoken) | **POST** /apps/{app_name}/deploy_token | Create App deploy token|
|[**appIPAssignmentsCreate**](#appipassignmentscreate) | **POST** /apps/{app_name}/ip_assignments | Assign new IP address to app|
|[**appIPAssignmentsDelete**](#appipassignmentsdelete) | **DELETE** /apps/{app_name}/ip_assignments/{ip} | Remove IP assignment from app|
|[**appIPAssignmentsList**](#appipassignmentslist) | **GET** /apps/{app_name}/ip_assignments | List IP assignments for app|
|[**appsCreate**](#appscreate) | **POST** /apps | Create App|
|[**appsDelete**](#appsdelete) | **DELETE** /apps/{app_name} | Destroy App|
|[**appsList**](#appslist) | **GET** /apps | List Apps|
|[**appsShow**](#appsshow) | **GET** /apps/{app_name} | Get App|

# **appCreateDeployToken**
> CreateAppResponse appCreateDeployToken(request)


### Example

```typescript
import {
    AppsApi,
    Configuration,
    CreateAppDeployTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AppsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let request: CreateAppDeployTokenRequest; //Request body

const { status, data } = await apiInstance.appCreateDeployToken(
    appName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **CreateAppDeployTokenRequest**| Request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**CreateAppResponse**

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

# **appIPAssignmentsCreate**
> IPAssignment appIPAssignmentsCreate(request)


### Example

```typescript
import {
    AppsApi,
    Configuration,
    AssignIPRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AppsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let request: AssignIPRequest; //Assign IP request

const { status, data } = await apiInstance.appIPAssignmentsCreate(
    appName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **AssignIPRequest**| Assign IP request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**IPAssignment**

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

# **appIPAssignmentsDelete**
> appIPAssignmentsDelete()


### Example

```typescript
import {
    AppsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let ip: string; //IP address (default to undefined)

const { status, data } = await apiInstance.appIPAssignmentsDelete(
    appName,
    ip
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **ip** | [**string**] | IP address | defaults to undefined|


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

# **appIPAssignmentsList**
> ListIPAssignmentsResponse appIPAssignmentsList()


### Example

```typescript
import {
    AppsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppsApi(configuration);

let appName: string; //Fly App Name (default to undefined)

const { status, data } = await apiInstance.appIPAssignmentsList(
    appName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**ListIPAssignmentsResponse**

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

# **appsCreate**
> appsCreate(request)

Create an app with the specified details in the request body. 

### Example

```typescript
import {
    AppsApi,
    Configuration,
    CreateAppRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AppsApi(configuration);

let request: CreateAppRequest; //App body

const { status, data } = await apiInstance.appsCreate(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **CreateAppRequest**| App body | |


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
|**201** | Created |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appsDelete**
> appsDelete()

Delete an app by its name. 

### Example

```typescript
import {
    AppsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppsApi(configuration);

let appName: string; //Fly App Name (default to undefined)

const { status, data } = await apiInstance.appsDelete(
    appName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|


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
|**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appsList**
> ListAppsResponse appsList()

List all apps with the ability to filter by organization slug. 

### Example

```typescript
import {
    AppsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppsApi(configuration);

let orgSlug: string; //The org slug, or \'personal\', to filter apps (default to undefined)
let appRole: string; //Filter apps by role (optional) (default to undefined)

const { status, data } = await apiInstance.appsList(
    orgSlug,
    appRole
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgSlug** | [**string**] | The org slug, or \&#39;personal\&#39;, to filter apps | defaults to undefined|
| **appRole** | [**string**] | Filter apps by role | (optional) defaults to undefined|


### Return type

**ListAppsResponse**

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

# **appsShow**
> App appsShow()

Retrieve details about a specific app by its name. 

### Example

```typescript
import {
    AppsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppsApi(configuration);

let appName: string; //Fly App Name (default to undefined)

const { status, data } = await apiInstance.appsShow(
    appName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**App**

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


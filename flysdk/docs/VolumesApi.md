# VolumesApi

All URIs are relative to *https://api.machines.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createVolumeSnapshot**](#createvolumesnapshot) | **POST** /apps/{app_name}/volumes/{volume_id}/snapshots | Create Snapshot|
|[**volumeDelete**](#volumedelete) | **DELETE** /apps/{app_name}/volumes/{volume_id} | Destroy Volume|
|[**volumesCreate**](#volumescreate) | **POST** /apps/{app_name}/volumes | Create Volume|
|[**volumesExtend**](#volumesextend) | **PUT** /apps/{app_name}/volumes/{volume_id}/extend | Extend Volume|
|[**volumesGetById**](#volumesgetbyid) | **GET** /apps/{app_name}/volumes/{volume_id} | Get Volume|
|[**volumesList**](#volumeslist) | **GET** /apps/{app_name}/volumes | List Volumes|
|[**volumesListSnapshots**](#volumeslistsnapshots) | **GET** /apps/{app_name}/volumes/{volume_id}/snapshots | List Snapshots|
|[**volumesUpdate**](#volumesupdate) | **PUT** /apps/{app_name}/volumes/{volume_id} | Update Volume|

# **createVolumeSnapshot**
> createVolumeSnapshot()

Create a snapshot for a specific volume within an app. 

### Example

```typescript
import {
    VolumesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VolumesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let volumeId: string; //Volume ID (default to undefined)

const { status, data } = await apiInstance.createVolumeSnapshot(
    appName,
    volumeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **volumeId** | [**string**] | Volume ID | defaults to undefined|


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

# **volumeDelete**
> Volume volumeDelete()

Delete a specific volume within an app by volume ID. 

### Example

```typescript
import {
    VolumesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VolumesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let volumeId: string; //Volume ID (default to undefined)

const { status, data } = await apiInstance.volumeDelete(
    appName,
    volumeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **volumeId** | [**string**] | Volume ID | defaults to undefined|


### Return type

**Volume**

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

# **volumesCreate**
> Volume volumesCreate(request)

Create a volume for a specific app using the details provided in the request body. 

### Example

```typescript
import {
    VolumesApi,
    Configuration,
    CreateVolumeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new VolumesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let request: CreateVolumeRequest; //Request body

const { status, data } = await apiInstance.volumesCreate(
    appName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **CreateVolumeRequest**| Request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**Volume**

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

# **volumesExtend**
> ExtendVolumeResponse volumesExtend(request)

Extend a volume\'s size within an app using the details provided in the request body. 

### Example

```typescript
import {
    VolumesApi,
    Configuration,
    ExtendVolumeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new VolumesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let volumeId: string; //Volume ID (default to undefined)
let request: ExtendVolumeRequest; //Request body

const { status, data } = await apiInstance.volumesExtend(
    appName,
    volumeId,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **ExtendVolumeRequest**| Request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **volumeId** | [**string**] | Volume ID | defaults to undefined|


### Return type

**ExtendVolumeResponse**

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

# **volumesGetById**
> Volume volumesGetById()

Retrieve details about a specific volume by its ID within an app. 

### Example

```typescript
import {
    VolumesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VolumesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let volumeId: string; //Volume ID (default to undefined)

const { status, data } = await apiInstance.volumesGetById(
    appName,
    volumeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **volumeId** | [**string**] | Volume ID | defaults to undefined|


### Return type

**Volume**

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

# **volumesList**
> Array<Volume> volumesList()

List all volumes associated with a specific app. 

### Example

```typescript
import {
    VolumesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VolumesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let summary: boolean; //Only return summary info about volumes (omit blocks, block size, etc) (optional) (default to undefined)

const { status, data } = await apiInstance.volumesList(
    appName,
    summary
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **summary** | [**boolean**] | Only return summary info about volumes (omit blocks, block size, etc) | (optional) defaults to undefined|


### Return type

**Array<Volume>**

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

# **volumesListSnapshots**
> Array<VolumeSnapshot> volumesListSnapshots()

List all snapshots for a specific volume within an app. 

### Example

```typescript
import {
    VolumesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VolumesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let volumeId: string; //Volume ID (default to undefined)

const { status, data } = await apiInstance.volumesListSnapshots(
    appName,
    volumeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **volumeId** | [**string**] | Volume ID | defaults to undefined|


### Return type

**Array<VolumeSnapshot>**

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

# **volumesUpdate**
> Volume volumesUpdate(request)

Update a volume\'s configuration using the details provided in the request body. 

### Example

```typescript
import {
    VolumesApi,
    Configuration,
    UpdateVolumeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new VolumesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let volumeId: string; //Volume ID (default to undefined)
let request: UpdateVolumeRequest; //Request body

const { status, data } = await apiInstance.volumesUpdate(
    appName,
    volumeId,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **UpdateVolumeRequest**| Request body | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **volumeId** | [**string**] | Volume ID | defaults to undefined|


### Return type

**Volume**

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


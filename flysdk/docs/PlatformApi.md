# PlatformApi

All URIs are relative to *https://api.machines.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**platformPlacementsPost**](#platformplacementspost) | **POST** /platform/placements | Get Placements|
|[**platformRegionsGet**](#platformregionsget) | **GET** /platform/regions | Get Regions|

# **platformPlacementsPost**
> MainGetPlacementsResponse platformPlacementsPost(request)

Simulates placing the specified number of machines into regions, depending on available capacity and limits.

### Example

```typescript
import {
    PlatformApi,
    Configuration,
    MainGetPlacementsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PlatformApi(configuration);

let request: MainGetPlacementsRequest; //Get placements request

const { status, data } = await apiInstance.platformPlacementsPost(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **MainGetPlacementsRequest**| Get placements request | |


### Return type

**MainGetPlacementsResponse**

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

# **platformRegionsGet**
> MainRegionResponse platformRegionsGet()

List all regions on the platform with their current Machine capacity.

### Example

```typescript
import {
    PlatformApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlatformApi(configuration);

let size: string; //guest machine size preset. default performance-1x (optional) (default to undefined)
let cpuKind: string; //guest CPU kind (optional) (default to undefined)
let memoryMb: number; //guest memory in megabytes (optional) (default to undefined)
let cpus: number; //guest CPU count (optional) (default to undefined)
let gpus: number; //guest GPU count (optional) (default to undefined)
let gpuKind: string; //guest GPU kind (optional) (default to undefined)

const { status, data } = await apiInstance.platformRegionsGet(
    size,
    cpuKind,
    memoryMb,
    cpus,
    gpus,
    gpuKind
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **size** | [**string**] | guest machine size preset. default performance-1x | (optional) defaults to undefined|
| **cpuKind** | [**string**] | guest CPU kind | (optional) defaults to undefined|
| **memoryMb** | [**number**] | guest memory in megabytes | (optional) defaults to undefined|
| **cpus** | [**number**] | guest CPU count | (optional) defaults to undefined|
| **gpus** | [**number**] | guest GPU count | (optional) defaults to undefined|
| **gpuKind** | [**string**] | guest GPU kind | (optional) defaults to undefined|


### Return type

**MainRegionResponse**

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


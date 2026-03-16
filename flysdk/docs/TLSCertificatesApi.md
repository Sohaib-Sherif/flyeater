# TLSCertificatesApi

All URIs are relative to *https://api.machines.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**appCertificatesAcmeCreate**](#appcertificatesacmecreate) | **POST** /apps/{app_name}/certificates/acme | Request ACME certificate|
|[**appCertificatesAcmeDelete**](#appcertificatesacmedelete) | **DELETE** /apps/{app_name}/certificates/{hostname}/acme | Remove ACME certificates|
|[**appCertificatesCheck**](#appcertificatescheck) | **POST** /apps/{app_name}/certificates/{hostname}/check | Check DNS and re-validate certificate|
|[**appCertificatesCustomCreate**](#appcertificatescustomcreate) | **POST** /apps/{app_name}/certificates/custom | Upload custom certificate|
|[**appCertificatesCustomDelete**](#appcertificatescustomdelete) | **DELETE** /apps/{app_name}/certificates/{hostname}/custom | Remove custom certificate|
|[**appCertificatesDelete**](#appcertificatesdelete) | **DELETE** /apps/{app_name}/certificates/{hostname} | Remove certificate|
|[**appCertificatesList**](#appcertificateslist) | **GET** /apps/{app_name}/certificates | List certificates for app|
|[**appCertificatesShow**](#appcertificatesshow) | **GET** /apps/{app_name}/certificates/{hostname} | Get certificate details|

# **appCertificatesAcmeCreate**
> CertificateDetail appCertificatesAcmeCreate(request)


### Example

```typescript
import {
    TLSCertificatesApi,
    Configuration,
    CreateAcmeCertificateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TLSCertificatesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let request: CreateAcmeCertificateRequest; //ACME certificate request

const { status, data } = await apiInstance.appCertificatesAcmeCreate(
    appName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **CreateAcmeCertificateRequest**| ACME certificate request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**CertificateDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appCertificatesAcmeDelete**
> CertificateDetail appCertificatesAcmeDelete()


### Example

```typescript
import {
    TLSCertificatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TLSCertificatesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let hostname: string; //Certificate Hostname (default to undefined)

const { status, data } = await apiInstance.appCertificatesAcmeDelete(
    appName,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **hostname** | [**string**] | Certificate Hostname | defaults to undefined|


### Return type

**CertificateDetail**

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

# **appCertificatesCheck**
> CertificateCheckResponse appCertificatesCheck()


### Example

```typescript
import {
    TLSCertificatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TLSCertificatesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let hostname: string; //Certificate Hostname (default to undefined)

const { status, data } = await apiInstance.appCertificatesCheck(
    appName,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **hostname** | [**string**] | Certificate Hostname | defaults to undefined|


### Return type

**CertificateCheckResponse**

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

# **appCertificatesCustomCreate**
> CertificateDetail appCertificatesCustomCreate(request)


### Example

```typescript
import {
    TLSCertificatesApi,
    Configuration,
    CreateCustomCertificateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TLSCertificatesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let request: CreateCustomCertificateRequest; //Custom certificate request

const { status, data } = await apiInstance.appCertificatesCustomCreate(
    appName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **CreateCustomCertificateRequest**| Custom certificate request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**CertificateDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appCertificatesCustomDelete**
> DestroyCustomCertificateResponse appCertificatesCustomDelete()


### Example

```typescript
import {
    TLSCertificatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TLSCertificatesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let hostname: string; //Certificate Hostname (default to undefined)

const { status, data } = await apiInstance.appCertificatesCustomDelete(
    appName,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **hostname** | [**string**] | Certificate Hostname | defaults to undefined|


### Return type

**DestroyCustomCertificateResponse**

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

# **appCertificatesDelete**
> appCertificatesDelete()


### Example

```typescript
import {
    TLSCertificatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TLSCertificatesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let hostname: string; //Certificate Hostname (default to undefined)

const { status, data } = await apiInstance.appCertificatesDelete(
    appName,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **hostname** | [**string**] | Certificate Hostname | defaults to undefined|


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

# **appCertificatesList**
> ListCertificatesResponse appCertificatesList()


### Example

```typescript
import {
    TLSCertificatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TLSCertificatesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let filter: string; //Hostname filter (substring match) (optional) (default to undefined)
let cursor: string; //Pagination cursor from previous response (optional) (default to undefined)
let limit: number; //Number of results per page (default 25, max 500) (optional) (default to undefined)

const { status, data } = await apiInstance.appCertificatesList(
    appName,
    filter,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **filter** | [**string**] | Hostname filter (substring match) | (optional) defaults to undefined|
| **cursor** | [**string**] | Pagination cursor from previous response | (optional) defaults to undefined|
| **limit** | [**number**] | Number of results per page (default 25, max 500) | (optional) defaults to undefined|


### Return type

**ListCertificatesResponse**

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

# **appCertificatesShow**
> CertificateDetail appCertificatesShow()


### Example

```typescript
import {
    TLSCertificatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TLSCertificatesApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let hostname: string; //Certificate Hostname (default to undefined)

const { status, data } = await apiInstance.appCertificatesShow(
    appName,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **hostname** | [**string**] | Certificate Hostname | defaults to undefined|


### Return type

**CertificateDetail**

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


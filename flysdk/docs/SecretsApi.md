# SecretsApi

All URIs are relative to *https://api.machines.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**secretCreate**](#secretcreate) | **POST** /apps/{app_name}/secrets/{secret_name} | Create or update Secret|
|[**secretDelete**](#secretdelete) | **DELETE** /apps/{app_name}/secrets/{secret_name} | Delete an app secret|
|[**secretGet**](#secretget) | **GET** /apps/{app_name}/secrets/{secret_name} | Get an app secret|
|[**secretkeyDecrypt**](#secretkeydecrypt) | **POST** /apps/{app_name}/secretkeys/{secret_name}/decrypt | Decrypt with a secret key|
|[**secretkeyDelete**](#secretkeydelete) | **DELETE** /apps/{app_name}/secretkeys/{secret_name} | Delete an app\&#39;s secret key|
|[**secretkeyEncrypt**](#secretkeyencrypt) | **POST** /apps/{app_name}/secretkeys/{secret_name}/encrypt | Encrypt with a secret key|
|[**secretkeyGenerate**](#secretkeygenerate) | **POST** /apps/{app_name}/secretkeys/{secret_name}/generate | Generate a random secret key|
|[**secretkeyGet**](#secretkeyget) | **GET** /apps/{app_name}/secretkeys/{secret_name} | Get an app\&#39;s secret key|
|[**secretkeySet**](#secretkeyset) | **POST** /apps/{app_name}/secretkeys/{secret_name} | Create or update a secret key|
|[**secretkeySign**](#secretkeysign) | **POST** /apps/{app_name}/secretkeys/{secret_name}/sign | Sign with a secret key|
|[**secretkeyVerify**](#secretkeyverify) | **POST** /apps/{app_name}/secretkeys/{secret_name}/verify | Verify with a secret key|
|[**secretkeysList**](#secretkeyslist) | **GET** /apps/{app_name}/secretkeys | List secret keys belonging to an app|
|[**secretsList**](#secretslist) | **GET** /apps/{app_name}/secrets | List app secrets belonging to an app|
|[**secretsUpdate**](#secretsupdate) | **POST** /apps/{app_name}/secrets | Update app secrets belonging to an app|

# **secretCreate**
> SetAppSecretResponse secretCreate(request)


### Example

```typescript
import {
    SecretsApi,
    Configuration,
    SetAppSecretRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //App secret name (default to undefined)
let request: SetAppSecretRequest; //Create app secret request

const { status, data } = await apiInstance.secretCreate(
    appName,
    secretName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **SetAppSecretRequest**| Create app secret request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | App secret name | defaults to undefined|


### Return type

**SetAppSecretResponse**

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

# **secretDelete**
> DeleteAppSecretResponse secretDelete()


### Example

```typescript
import {
    SecretsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //App secret name (default to undefined)

const { status, data } = await apiInstance.secretDelete(
    appName,
    secretName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | App secret name | defaults to undefined|


### Return type

**DeleteAppSecretResponse**

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

# **secretGet**
> AppSecret secretGet()


### Example

```typescript
import {
    SecretsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //App secret name (default to undefined)
let minVersion: string; //Minimum secrets version to return. Returned when setting a new secret (optional) (default to undefined)
let showSecrets: boolean; //Show the secret value. (optional) (default to undefined)

const { status, data } = await apiInstance.secretGet(
    appName,
    secretName,
    minVersion,
    showSecrets
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | App secret name | defaults to undefined|
| **minVersion** | [**string**] | Minimum secrets version to return. Returned when setting a new secret | (optional) defaults to undefined|
| **showSecrets** | [**boolean**] | Show the secret value. | (optional) defaults to undefined|


### Return type

**AppSecret**

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

# **secretkeyDecrypt**
> DecryptSecretkeyResponse secretkeyDecrypt(request)


### Example

```typescript
import {
    SecretsApi,
    Configuration,
    DecryptSecretkeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //Secret key name (default to undefined)
let request: DecryptSecretkeyRequest; //Decrypt with secret key request
let minVersion: string; //Minimum secrets version to return. Returned when setting a new secret (optional) (default to undefined)

const { status, data } = await apiInstance.secretkeyDecrypt(
    appName,
    secretName,
    request,
    minVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **DecryptSecretkeyRequest**| Decrypt with secret key request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | Secret key name | defaults to undefined|
| **minVersion** | [**string**] | Minimum secrets version to return. Returned when setting a new secret | (optional) defaults to undefined|


### Return type

**DecryptSecretkeyResponse**

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

# **secretkeyDelete**
> DeleteSecretkeyResponse secretkeyDelete()


### Example

```typescript
import {
    SecretsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //Secret key name (default to undefined)

const { status, data } = await apiInstance.secretkeyDelete(
    appName,
    secretName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | Secret key name | defaults to undefined|


### Return type

**DeleteSecretkeyResponse**

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

# **secretkeyEncrypt**
> EncryptSecretkeyResponse secretkeyEncrypt(request)


### Example

```typescript
import {
    SecretsApi,
    Configuration,
    EncryptSecretkeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //Secret key name (default to undefined)
let request: EncryptSecretkeyRequest; //Encrypt with secret key request
let minVersion: string; //Minimum secrets version to return. Returned when setting a new secret (optional) (default to undefined)

const { status, data } = await apiInstance.secretkeyEncrypt(
    appName,
    secretName,
    request,
    minVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **EncryptSecretkeyRequest**| Encrypt with secret key request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | Secret key name | defaults to undefined|
| **minVersion** | [**string**] | Minimum secrets version to return. Returned when setting a new secret | (optional) defaults to undefined|


### Return type

**EncryptSecretkeyResponse**

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

# **secretkeyGenerate**
> SetSecretkeyResponse secretkeyGenerate(request)


### Example

```typescript
import {
    SecretsApi,
    Configuration,
    SetSecretkeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //Secret key name (default to undefined)
let request: SetSecretkeyRequest; //generate secret key request

const { status, data } = await apiInstance.secretkeyGenerate(
    appName,
    secretName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **SetSecretkeyRequest**| generate secret key request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | Secret key name | defaults to undefined|


### Return type

**SetSecretkeyResponse**

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

# **secretkeyGet**
> SecretKey secretkeyGet()


### Example

```typescript
import {
    SecretsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //Secret key name (default to undefined)
let minVersion: string; //Minimum secrets version to return. Returned when setting a new secret (optional) (default to undefined)

const { status, data } = await apiInstance.secretkeyGet(
    appName,
    secretName,
    minVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | Secret key name | defaults to undefined|
| **minVersion** | [**string**] | Minimum secrets version to return. Returned when setting a new secret | (optional) defaults to undefined|


### Return type

**SecretKey**

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

# **secretkeySet**
> SetSecretkeyResponse secretkeySet(request)


### Example

```typescript
import {
    SecretsApi,
    Configuration,
    SetSecretkeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //Secret key name (default to undefined)
let request: SetSecretkeyRequest; //Create secret key request

const { status, data } = await apiInstance.secretkeySet(
    appName,
    secretName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **SetSecretkeyRequest**| Create secret key request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | Secret key name | defaults to undefined|


### Return type

**SetSecretkeyResponse**

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

# **secretkeySign**
> SignSecretkeyResponse secretkeySign(request)


### Example

```typescript
import {
    SecretsApi,
    Configuration,
    SignSecretkeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //Secret key name (default to undefined)
let request: SignSecretkeyRequest; //Sign with secret key request
let minVersion: string; //Minimum secrets version to return. Returned when setting a new secret (optional) (default to undefined)

const { status, data } = await apiInstance.secretkeySign(
    appName,
    secretName,
    request,
    minVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **SignSecretkeyRequest**| Sign with secret key request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | Secret key name | defaults to undefined|
| **minVersion** | [**string**] | Minimum secrets version to return. Returned when setting a new secret | (optional) defaults to undefined|


### Return type

**SignSecretkeyResponse**

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

# **secretkeyVerify**
> secretkeyVerify(request)


### Example

```typescript
import {
    SecretsApi,
    Configuration,
    VerifySecretkeyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let secretName: string; //Secret key name (default to undefined)
let request: VerifySecretkeyRequest; //Verify with secret key request
let minVersion: string; //Minimum secrets version to return. Returned when setting a new secret (optional) (default to undefined)

const { status, data } = await apiInstance.secretkeyVerify(
    appName,
    secretName,
    request,
    minVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **VerifySecretkeyRequest**| Verify with secret key request | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **secretName** | [**string**] | Secret key name | defaults to undefined|
| **minVersion** | [**string**] | Minimum secrets version to return. Returned when setting a new secret | (optional) defaults to undefined|


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

# **secretkeysList**
> SecretKeys secretkeysList()


### Example

```typescript
import {
    SecretsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let minVersion: string; //Minimum secrets version to return. Returned when setting a new secret (optional) (default to undefined)
let types: string; //Comma-seperated list of secret keys to list (optional) (default to undefined)

const { status, data } = await apiInstance.secretkeysList(
    appName,
    minVersion,
    types
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **minVersion** | [**string**] | Minimum secrets version to return. Returned when setting a new secret | (optional) defaults to undefined|
| **types** | [**string**] | Comma-seperated list of secret keys to list | (optional) defaults to undefined|


### Return type

**SecretKeys**

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

# **secretsList**
> AppSecrets secretsList()


### Example

```typescript
import {
    SecretsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let minVersion: string; //Minimum secrets version to return. Returned when setting a new secret (optional) (default to undefined)
let showSecrets: boolean; //Show the secret values. (optional) (default to undefined)

const { status, data } = await apiInstance.secretsList(
    appName,
    minVersion,
    showSecrets
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appName** | [**string**] | Fly App Name | defaults to undefined|
| **minVersion** | [**string**] | Minimum secrets version to return. Returned when setting a new secret | (optional) defaults to undefined|
| **showSecrets** | [**boolean**] | Show the secret values. | (optional) defaults to undefined|


### Return type

**AppSecrets**

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

# **secretsUpdate**
> AppSecretsUpdateResp secretsUpdate(request)


### Example

```typescript
import {
    SecretsApi,
    Configuration,
    AppSecretsUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let appName: string; //Fly App Name (default to undefined)
let request: AppSecretsUpdateRequest; //Update app secret request, with values to set, or nil to unset

const { status, data } = await apiInstance.secretsUpdate(
    appName,
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **AppSecretsUpdateRequest**| Update app secret request, with values to set, or nil to unset | |
| **appName** | [**string**] | Fly App Name | defaults to undefined|


### Return type

**AppSecretsUpdateResp**

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


# TokensApi

All URIs are relative to *https://api.machines.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**currentTokenShow**](#currenttokenshow) | **GET** /v1/tokens/current | Get Current Token Information|
|[**tokensRequestKms**](#tokensrequestkms) | **POST** /tokens/kms | Request a Petsem token for accessing KMS|
|[**tokensRequestOIDC**](#tokensrequestoidc) | **POST** /tokens/oidc | Request an OIDC token|

# **currentTokenShow**
> CurrentTokenResponse currentTokenShow()

Get information about the current macaroon token(s), including organizations, apps, and whether each token is from a user or machine

### Example

```typescript
import {
    TokensApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TokensApi(configuration);

const { status, data } = await apiInstance.currentTokenShow();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CurrentTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokensRequestKms**
> string tokensRequestKms()

This site hosts documentation generated from the Fly.io Machines API OpenAPI specification. Visit our complete [Machines API docs](https://fly.io/docs/machines/api/apps-resource/) for details about using the Apps resource.

### Example

```typescript
import {
    TokensApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TokensApi(configuration);

const { status, data } = await apiInstance.tokensRequestKms();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | KMS token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokensRequestOIDC**
> string tokensRequestOIDC(request)

Request an Open ID Connect token for your machine. Customize the audience claim with the `aud` parameter. This returns a JWT token. Learn more about [using OpenID Connect](/docs/reference/openid-connect/) on Fly.io. 

### Example

```typescript
import {
    TokensApi,
    Configuration,
    CreateOIDCTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TokensApi(configuration);

let request: CreateOIDCTokenRequest; //Optional request body

const { status, data } = await apiInstance.tokensRequestOIDC(
    request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **request** | **CreateOIDCTokenRequest**| Optional request body | |


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OIDC token |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


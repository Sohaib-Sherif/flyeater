# FlyHTTPHealthcheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**Array&lt;FlyMachineHTTPHeader&gt;**](FlyMachineHTTPHeader.md) | Additional headers to send with the request | [optional] [default to undefined]
**method** | **string** | The HTTP method to use to when making the request | [optional] [default to undefined]
**path** | **string** | The path to send the request to | [optional] [default to undefined]
**port** | **number** | The port to connect to, often the same as internal_port | [optional] [default to undefined]
**scheme** | [**FlyContainerHealthcheckScheme**](FlyContainerHealthcheckScheme.md) | Whether to use http or https | [optional] [default to undefined]
**tls_server_name** | **string** | If the protocol is https, the hostname to use for TLS certificate validation | [optional] [default to undefined]
**tls_skip_verify** | **boolean** | If the protocol is https, whether or not to verify the TLS certificate | [optional] [default to undefined]

## Example

```typescript
import { FlyHTTPHealthcheck } from './api';

const instance: FlyHTTPHealthcheck = {
    headers,
    method,
    path,
    port,
    scheme,
    tls_server_name,
    tls_skip_verify,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# FlyMachineServiceCheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grace_period** | [**FlyDuration**](FlyDuration.md) | The time to wait after a VM starts before checking its health | [optional] [default to undefined]
**headers** | [**Array&lt;FlyMachineHTTPHeader&gt;**](FlyMachineHTTPHeader.md) |  | [optional] [default to undefined]
**interval** | [**FlyDuration**](FlyDuration.md) | The time between connectivity checks | [optional] [default to undefined]
**method** | **string** | For http checks, the HTTP method to use to when making the request | [optional] [default to undefined]
**path** | **string** | For http checks, the path to send the request to | [optional] [default to undefined]
**port** | **number** | The port to connect to, often the same as internal_port | [optional] [default to undefined]
**protocol** | **string** | For http checks, whether to use http or https | [optional] [default to undefined]
**timeout** | [**FlyDuration**](FlyDuration.md) | The maximum time a connection can take before being reported as failing its health check | [optional] [default to undefined]
**tls_server_name** | **string** | If the protocol is https, the hostname to use for TLS certificate validation | [optional] [default to undefined]
**tls_skip_verify** | **boolean** | For http checks with https protocol, whether or not to verify the TLS certificate | [optional] [default to undefined]
**type** | **string** | tcp or http | [optional] [default to undefined]

## Example

```typescript
import { FlyMachineServiceCheck } from './api';

const instance: FlyMachineServiceCheck = {
    grace_period,
    headers,
    interval,
    method,
    path,
    port,
    protocol,
    timeout,
    tls_server_name,
    tls_skip_verify,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

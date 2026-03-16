# FlyDNSConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_forward_rules** | [**Array&lt;FlyDnsForwardRule&gt;**](FlyDnsForwardRule.md) |  | [optional] [default to undefined]
**hostname** | **string** |  | [optional] [default to undefined]
**hostname_fqdn** | **string** |  | [optional] [default to undefined]
**nameservers** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**_options** | [**Array&lt;FlyDnsOption&gt;**](FlyDnsOption.md) |  | [optional] [default to undefined]
**searches** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**skip_registration** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { FlyDNSConfig } from './api';

const instance: FlyDNSConfig = {
    dns_forward_rules,
    hostname,
    hostname_fqdn,
    nameservers,
    _options,
    searches,
    skip_registration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

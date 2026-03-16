# DNSRecords


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**aaaa** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**acme_challenge_cname** | **string** |  | [optional] [default to undefined]
**cname** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**ownership_txt** | **string** |  | [optional] [default to undefined]
**resolved_addresses** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**soa** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DNSRecords } from './api';

const instance: DNSRecords = {
    a,
    aaaa,
    acme_challenge_cname,
    cname,
    ownership_txt,
    resolved_addresses,
    soa,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

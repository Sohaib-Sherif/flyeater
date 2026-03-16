# DNSRequirements


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**aaaa** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**acme_challenge** | [**AcmeChallenge**](AcmeChallenge.md) |  | [optional] [default to undefined]
**cname** | **string** |  | [optional] [default to undefined]
**ownership** | [**OwnershipVerification**](OwnershipVerification.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DNSRequirements } from './api';

const instance: DNSRequirements = {
    a,
    aaaa,
    acme_challenge,
    cname,
    ownership,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

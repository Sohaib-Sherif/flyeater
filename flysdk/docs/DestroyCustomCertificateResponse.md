# DestroyCustomCertificateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acme_requested** | **boolean** |  | [optional] [default to undefined]
**certificates** | [**Array&lt;CertificateEntry&gt;**](CertificateEntry.md) |  | [optional] [default to undefined]
**configured** | **boolean** |  | [optional] [default to undefined]
**dns_provider** | **string** |  | [optional] [default to undefined]
**dns_requirements** | [**DNSRequirements**](DNSRequirements.md) |  | [optional] [default to undefined]
**hostname** | **string** |  | [optional] [default to undefined]
**rate_limited_until** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**validation** | [**CertificateValidation**](CertificateValidation.md) |  | [optional] [default to undefined]
**validation_errors** | [**Array&lt;CertificateValidationError&gt;**](CertificateValidationError.md) |  | [optional] [default to undefined]
**warning** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DestroyCustomCertificateResponse } from './api';

const instance: DestroyCustomCertificateResponse = {
    acme_requested,
    certificates,
    configured,
    dns_provider,
    dns_requirements,
    hostname,
    rate_limited_until,
    status,
    validation,
    validation_errors,
    warning,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

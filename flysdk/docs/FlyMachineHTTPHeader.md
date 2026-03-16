# FlyMachineHTTPHeader

For http checks, an array of objects with string field Name and array of strings field Values. The key/value pairs specify header and header values that will get passed with the check call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The header name | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | The header value | [optional] [default to undefined]

## Example

```typescript
import { FlyMachineHTTPHeader } from './api';

const instance: FlyMachineHTTPHeader = {
    name,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

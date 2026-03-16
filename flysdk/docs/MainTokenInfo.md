# MainTokenInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**org_slug** | **string** |  | [optional] [default to undefined]
**organization** | **string** |  | [optional] [default to undefined]
**restricted_to_machine** | **string** | Machine the token is restricted to (FromMachine caveat) | [optional] [default to undefined]
**source_machine_id** | **string** | Machine making the request | [optional] [default to undefined]
**token_id** | **string** |  | [optional] [default to undefined]
**user** | **string** | User identifier if token is for a user | [optional] [default to undefined]

## Example

```typescript
import { MainTokenInfo } from './api';

const instance: MainTokenInfo = {
    apps,
    org_slug,
    organization,
    restricted_to_machine,
    source_machine_id,
    token_id,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

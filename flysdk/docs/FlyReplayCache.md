# FlyReplayCache


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_bypass** | **boolean** |  | [optional] [default to undefined]
**name** | **string** | Name of the cookie or header to key the cache on | [optional] [default to undefined]
**path_prefix** | **string** |  | [optional] [default to undefined]
**ttl_seconds** | **number** |  | [optional] [default to undefined]
**type** | **string** | Currently either \&quot;cookie\&quot; or \&quot;header\&quot; | [optional] [default to undefined]

## Example

```typescript
import { FlyReplayCache } from './api';

const instance: FlyReplayCache = {
    allow_bypass,
    name,
    path_prefix,
    ttl_seconds,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

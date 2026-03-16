# FlyHTTPOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compress** | **boolean** |  | [optional] [default to undefined]
**h2_backend** | **boolean** |  | [optional] [default to undefined]
**headers_read_timeout** | **number** |  | [optional] [default to undefined]
**idle_timeout** | **number** |  | [optional] [default to undefined]
**replay_cache** | [**Array&lt;FlyReplayCache&gt;**](FlyReplayCache.md) |  | [optional] [default to undefined]
**response** | [**FlyHTTPResponseOptions**](FlyHTTPResponseOptions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlyHTTPOptions } from './api';

const instance: FlyHTTPOptions = {
    compress,
    h2_backend,
    headers_read_timeout,
    idle_timeout,
    replay_cache,
    response,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

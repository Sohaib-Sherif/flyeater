# ProcessStat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **string** |  | [optional] [default to undefined]
**cpu** | **number** |  | [optional] [default to undefined]
**directory** | **string** |  | [optional] [default to undefined]
**listen_sockets** | [**Array&lt;ListenSocket&gt;**](ListenSocket.md) |  | [optional] [default to undefined]
**pid** | **number** |  | [optional] [default to undefined]
**rss** | **number** |  | [optional] [default to undefined]
**rtime** | **number** |  | [optional] [default to undefined]
**stime** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ProcessStat } from './api';

const instance: ProcessStat = {
    command,
    cpu,
    directory,
    listen_sockets,
    pid,
    rss,
    rtime,
    stime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

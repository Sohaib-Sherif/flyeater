# FlyMachineService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autostart** | **boolean** |  | [optional] [default to undefined]
**autostop** | **string** | Accepts a string (new format) or a boolean (old format). For backward compatibility with older clients, the API continues to use booleans for \&quot;off\&quot; and \&quot;stop\&quot; in responses. * \&quot;off\&quot; or false - Do not autostop the Machine. * \&quot;stop\&quot; or true - Automatically stop the Machine. * \&quot;suspend\&quot; - Automatically suspend the Machine, falling back to a full stop if this is not possible. | [optional] [default to undefined]
**checks** | [**Array&lt;FlyMachineServiceCheck&gt;**](FlyMachineServiceCheck.md) | An optional list of service checks | [optional] [default to undefined]
**concurrency** | [**FlyMachineServiceConcurrency**](FlyMachineServiceConcurrency.md) |  | [optional] [default to undefined]
**force_instance_description** | **string** |  | [optional] [default to undefined]
**force_instance_key** | **string** |  | [optional] [default to undefined]
**internal_port** | **number** |  | [optional] [default to undefined]
**min_machines_running** | **number** |  | [optional] [default to undefined]
**ports** | [**Array&lt;FlyMachinePort&gt;**](FlyMachinePort.md) |  | [optional] [default to undefined]
**protocol** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FlyMachineService } from './api';

const instance: FlyMachineService = {
    autostart,
    autostop,
    checks,
    concurrency,
    force_instance_description,
    force_instance_key,
    internal_port,
    min_machines_running,
    ports,
    protocol,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

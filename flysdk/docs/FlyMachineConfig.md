# FlyMachineConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_destroy** | **boolean** | Optional boolean telling the Machine to destroy itself once it’s complete (default false) | [optional] [default to undefined]
**checks** | [**{ [key: string]: FlyMachineCheck; }**](FlyMachineCheck.md) | An optional object that defines one or more named top-level checks. The key for each check is the check name. | [optional] [default to undefined]
**containers** | [**Array&lt;FlyContainerConfig&gt;**](FlyContainerConfig.md) | Containers are a list of containers that will run in the machine. Currently restricted to only specific organizations. | [optional] [default to undefined]
**disable_machine_autostart** | **boolean** | Deprecated: use Service.Autostart instead | [optional] [default to undefined]
**dns** | [**FlyDNSConfig**](FlyDNSConfig.md) |  | [optional] [default to undefined]
**env** | **{ [key: string]: string; }** | An object filled with key/value pairs to be set as environment variables | [optional] [default to undefined]
**files** | [**Array&lt;FlyFile&gt;**](FlyFile.md) |  | [optional] [default to undefined]
**guest** | [**FlyMachineGuest**](FlyMachineGuest.md) |  | [optional] [default to undefined]
**image** | **string** | The docker image to run | [optional] [default to undefined]
**init** | [**FlyMachineInit**](FlyMachineInit.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**metrics** | [**FlyMachineMetrics**](FlyMachineMetrics.md) |  | [optional] [default to undefined]
**mounts** | [**Array&lt;FlyMachineMount&gt;**](FlyMachineMount.md) |  | [optional] [default to undefined]
**processes** | [**Array&lt;FlyMachineProcess&gt;**](FlyMachineProcess.md) |  | [optional] [default to undefined]
**restart** | [**FlyMachineRestart**](FlyMachineRestart.md) |  | [optional] [default to undefined]
**rootfs** | [**FlyMachineRootfs**](FlyMachineRootfs.md) |  | [optional] [default to undefined]
**schedule** | **string** |  | [optional] [default to undefined]
**services** | [**Array&lt;FlyMachineService&gt;**](FlyMachineService.md) |  | [optional] [default to undefined]
**size** | **string** | Deprecated: use Guest instead | [optional] [default to undefined]
**standbys** | **Array&lt;string&gt;** | Standbys enable a machine to be a standby for another. In the event of a hardware failure, the standby machine will be started. | [optional] [default to undefined]
**statics** | [**Array&lt;FlyStatic&gt;**](FlyStatic.md) |  | [optional] [default to undefined]
**stop_config** | [**FlyStopConfig**](FlyStopConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlyMachineConfig } from './api';

const instance: FlyMachineConfig = {
    auto_destroy,
    checks,
    containers,
    disable_machine_autostart,
    dns,
    env,
    files,
    guest,
    image,
    init,
    metadata,
    metrics,
    mounts,
    processes,
    restart,
    rootfs,
    schedule,
    services,
    size,
    standbys,
    statics,
    stop_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

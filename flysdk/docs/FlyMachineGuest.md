# FlyMachineGuest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_kind** | **string** |  | [optional] [default to undefined]
**cpus** | **number** |  | [optional] [default to undefined]
**gpu_kind** | **string** |  | [optional] [default to undefined]
**gpus** | **number** |  | [optional] [default to undefined]
**host_dedication_id** | **string** |  | [optional] [default to undefined]
**kernel_args** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**memory_mb** | **number** |  | [optional] [default to undefined]
**persist_rootfs** | **string** | Deprecated: use MachineConfig.Rootfs instead | [optional] [default to undefined]

## Example

```typescript
import { FlyMachineGuest } from './api';

const instance: FlyMachineGuest = {
    cpu_kind,
    cpus,
    gpu_kind,
    gpus,
    host_dedication_id,
    kernel_args,
    memory_mb,
    persist_rootfs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

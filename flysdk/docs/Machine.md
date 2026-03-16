# Machine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checks** | [**Array&lt;CheckStatus&gt;**](CheckStatus.md) |  | [optional] [default to undefined]
**config** | [**FlyMachineConfig**](FlyMachineConfig.md) |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**events** | [**Array&lt;MachineEvent&gt;**](MachineEvent.md) |  | [optional] [default to undefined]
**host_status** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**image_ref** | [**ImageRef**](ImageRef.md) |  | [optional] [default to undefined]
**incomplete_config** | [**FlyMachineConfig**](FlyMachineConfig.md) |  | [optional] [default to undefined]
**instance_id** | **string** | InstanceID is unique for each version of the machine | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nonce** | **string** | Nonce is only every returned on machine creation if a lease_duration was provided. | [optional] [default to undefined]
**private_ip** | **string** | PrivateIP is the internal 6PN address of the machine. | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Machine } from './api';

const instance: Machine = {
    checks,
    config,
    created_at,
    events,
    host_status,
    id,
    image_ref,
    incomplete_config,
    instance_id,
    name,
    nonce,
    private_ip,
    region,
    state,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

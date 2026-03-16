# UpdateMachineRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**FlyMachineConfig**](FlyMachineConfig.md) | An object defining the Machine configuration | [optional] [default to undefined]
**current_version** | **string** |  | [optional] [default to undefined]
**lease_ttl** | **number** |  | [optional] [default to undefined]
**lsvd** | **boolean** |  | [optional] [default to undefined]
**min_secrets_version** | **number** |  | [optional] [default to undefined]
**name** | **string** | Unique name for this Machine. If omitted, one is generated for you | [optional] [default to undefined]
**region** | **string** | The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you). | [optional] [default to undefined]
**skip_launch** | **boolean** |  | [optional] [default to undefined]
**skip_secrets** | **boolean** |  | [optional] [default to undefined]
**skip_service_registration** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateMachineRequest } from './api';

const instance: UpdateMachineRequest = {
    config,
    current_version,
    lease_ttl,
    lsvd,
    min_secrets_version,
    name,
    region,
    skip_launch,
    skip_secrets,
    skip_service_registration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

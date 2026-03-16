# CreateVolumeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_backup_enabled** | **boolean** | enable scheduled automatic snapshots. Defaults to &#x60;true&#x60; | [optional] [default to undefined]
**compute** | [**FlyMachineGuest**](FlyMachineGuest.md) |  | [optional] [default to undefined]
**compute_image** | **string** |  | [optional] [default to undefined]
**encrypted** | **boolean** |  | [optional] [default to undefined]
**fstype** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**require_unique_zone** | **boolean** |  | [optional] [default to undefined]
**size_gb** | **number** |  | [optional] [default to undefined]
**snapshot_id** | **string** | restore from snapshot | [optional] [default to undefined]
**snapshot_retention** | **number** |  | [optional] [default to undefined]
**source_volume_id** | **string** | fork from remote volume | [optional] [default to undefined]
**unique_zone_app_wide** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateVolumeRequest } from './api';

const instance: CreateVolumeRequest = {
    auto_backup_enabled,
    compute,
    compute_image,
    encrypted,
    fstype,
    name,
    region,
    require_unique_zone,
    size_gb,
    snapshot_id,
    snapshot_retention,
    source_volume_id,
    unique_zone_app_wide,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# MainGetPlacementsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute** | [**FlyMachineGuest**](FlyMachineGuest.md) | Resource requirements for the Machine to simulate. Defaults to a performance-1x machine | [optional] [default to undefined]
**count** | **number** | Number of machines to simulate placement. Defaults to 0, which returns the org-specific limit for each region. | [optional] [default to undefined]
**org_slug** | **string** |  | [default to undefined]
**region** | **string** | Region expression for placement as a comma-delimited set of regions or aliases. Defaults to \&quot;[region],any\&quot;, to prefer the API endpoint\&#39;s local region with any other region as fallback. | [optional] [default to undefined]
**volume_name** | **string** |  | [optional] [default to undefined]
**volume_size_bytes** | **number** |  | [optional] [default to undefined]
**weights** | **{ [key: string]: number; }** | Optional weights to override default placement preferences. | [optional] [default to undefined]

## Example

```typescript
import { MainGetPlacementsRequest } from './api';

const instance: MainGetPlacementsRequest = {
    compute,
    count,
    org_slug,
    region,
    volume_name,
    volume_size_bytes,
    weights,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

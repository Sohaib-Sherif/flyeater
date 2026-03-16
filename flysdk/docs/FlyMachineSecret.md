# FlyMachineSecret

A Secret needing to be set in the environment of the Machine. env_var is required

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env_var** | **string** | EnvVar is required and is the name of the environment variable that will be set from the secret. It must be a valid environment variable name. | [optional] [default to undefined]
**name** | **string** | Name is optional and when provided is used to reference a secret name where the EnvVar is different from what was set as the secret name. | [optional] [default to undefined]

## Example

```typescript
import { FlyMachineSecret } from './api';

const instance: FlyMachineSecret = {
    env_var,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

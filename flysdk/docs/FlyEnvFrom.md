# FlyEnvFrom

EnvVar defines an environment variable to be populated from a machine field, env_var

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env_var** | **string** | EnvVar is required and is the name of the environment variable that will be set from the secret. It must be a valid environment variable name. | [optional] [default to undefined]
**field_ref** | **string** | FieldRef selects a field of the Machine: supports id, version, app_name, private_ip, region, image. | [optional] [default to undefined]

## Example

```typescript
import { FlyEnvFrom } from './api';

const instance: FlyEnvFrom = {
    env_var,
    field_ref,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

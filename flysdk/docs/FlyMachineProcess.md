# FlyMachineProcess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cmd** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**entrypoint** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**env** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**env_from** | [**Array&lt;FlyEnvFrom&gt;**](FlyEnvFrom.md) | EnvFrom can be provided to set environment variables from machine fields. | [optional] [default to undefined]
**exec** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**ignore_app_secrets** | **boolean** | IgnoreAppSecrets can be set to true to ignore the secrets for the App the Machine belongs to and only use the secrets provided at the process level. The default/legacy behavior is to use the secrets provided at the App level. | [optional] [default to undefined]
**secrets** | [**Array&lt;FlyMachineSecret&gt;**](FlyMachineSecret.md) | Secrets can be provided at the process level to explicitly indicate which secrets should be used for the process. If not provided, the secrets provided at the machine level will be used. | [optional] [default to undefined]
**user** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FlyMachineProcess } from './api';

const instance: FlyMachineProcess = {
    cmd,
    entrypoint,
    env,
    env_from,
    exec,
    ignore_app_secrets,
    secrets,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

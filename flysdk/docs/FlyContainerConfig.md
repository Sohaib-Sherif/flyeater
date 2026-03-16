# FlyContainerConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cmd** | **Array&lt;string&gt;** | CmdOverride is used to override the default command of the image. | [optional] [default to undefined]
**depends_on** | [**Array&lt;FlyContainerDependency&gt;**](FlyContainerDependency.md) | DependsOn can be used to define dependencies between containers. The container will only be started after all of its dependent conditions have been satisfied. | [optional] [default to undefined]
**entrypoint** | **Array&lt;string&gt;** | EntrypointOverride is used to override the default entrypoint of the image. | [optional] [default to undefined]
**env** | **{ [key: string]: string; }** | ExtraEnv is used to add additional environment variables to the container. | [optional] [default to undefined]
**env_from** | [**Array&lt;FlyEnvFrom&gt;**](FlyEnvFrom.md) | EnvFrom can be provided to set environment variables from machine fields. | [optional] [default to undefined]
**exec** | **Array&lt;string&gt;** | Image Config overrides - these fields are used to override the image configuration. If not provided, the image configuration will be used. ExecOverride is used to override the default command of the image. | [optional] [default to undefined]
**files** | [**Array&lt;FlyFile&gt;**](FlyFile.md) | Files are files that will be written to the container file system. | [optional] [default to undefined]
**healthchecks** | [**Array&lt;FlyContainerHealthcheck&gt;**](FlyContainerHealthcheck.md) | Healthchecks determine the health of your containers. Healthchecks can use HTTP, TCP or an Exec command. | [optional] [default to undefined]
**image** | **string** | Image is the docker image to run. | [optional] [default to undefined]
**name** | **string** | Name is used to identify the container in the machine. | [optional] [default to undefined]
**restart** | [**FlyMachineRestart**](FlyMachineRestart.md) | Restart is used to define the restart policy for the container. NOTE: spot-price is not supported for containers. | [optional] [default to undefined]
**secrets** | [**Array&lt;FlyMachineSecret&gt;**](FlyMachineSecret.md) | Secrets can be provided at the process level to explicitly indicate which secrets should be used for the process. If not provided, the secrets provided at the machine level will be used. | [optional] [default to undefined]
**stop** | [**FlyStopConfig**](FlyStopConfig.md) | Stop is used to define the signal and timeout for stopping the container. | [optional] [default to undefined]
**user** | **string** | UserOverride is used to override the default user of the image. | [optional] [default to undefined]

## Example

```typescript
import { FlyContainerConfig } from './api';

const instance: FlyContainerConfig = {
    cmd,
    depends_on,
    entrypoint,
    env,
    env_from,
    exec,
    files,
    healthchecks,
    image,
    name,
    restart,
    secrets,
    stop,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

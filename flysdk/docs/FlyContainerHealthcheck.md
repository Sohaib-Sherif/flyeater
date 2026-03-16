# FlyContainerHealthcheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exec** | [**FlyExecHealthcheck**](FlyExecHealthcheck.md) |  | [optional] [default to undefined]
**failure_threshold** | **number** | The number of times the check must fail before considering the container unhealthy. | [optional] [default to undefined]
**grace_period** | **number** | The time in seconds to wait after a container starts before checking its health. | [optional] [default to undefined]
**http** | [**FlyHTTPHealthcheck**](FlyHTTPHealthcheck.md) |  | [optional] [default to undefined]
**interval** | **number** | The time in seconds between executing the defined check. | [optional] [default to undefined]
**kind** | [**FlyContainerHealthcheckKind**](FlyContainerHealthcheckKind.md) | Kind of healthcheck (readiness, liveness) | [optional] [default to undefined]
**name** | **string** | The name of the check. Must be unique within the container. | [optional] [default to undefined]
**success_threshold** | **number** | The number of times the check must succeeed before considering the container healthy. | [optional] [default to undefined]
**tcp** | [**FlyTCPHealthcheck**](FlyTCPHealthcheck.md) |  | [optional] [default to undefined]
**timeout** | **number** | The time in seconds to wait for the check to complete. | [optional] [default to undefined]
**unhealthy** | [**FlyUnhealthyPolicy**](FlyUnhealthyPolicy.md) | Unhealthy policy that determines what action to take if a container is deemed unhealthy | [optional] [default to undefined]

## Example

```typescript
import { FlyContainerHealthcheck } from './api';

const instance: FlyContainerHealthcheck = {
    exec,
    failure_threshold,
    grace_period,
    http,
    interval,
    kind,
    name,
    success_threshold,
    tcp,
    timeout,
    unhealthy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

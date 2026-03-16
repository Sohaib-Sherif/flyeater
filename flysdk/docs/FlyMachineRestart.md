# FlyMachineRestart

The Machine restart policy defines whether and how flyd restarts a Machine after its main process exits. See https://fly.io/docs/machines/guides-examples/machine-restart-policy/.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gpu_bid_price** | **number** | GPU bid price for spot Machines. | [optional] [default to undefined]
**max_retries** | **number** | When policy is on-failure, the maximum number of times to attempt to restart the Machine before letting it stop. | [optional] [default to undefined]
**policy** | **string** | * no - Never try to restart a Machine automatically when its main process exits, whether that’s on purpose or on a crash. * always - Always restart a Machine automatically and never let it enter a stopped state, even when the main process exits cleanly. * on-failure - Try up to MaxRetries times to automatically restart the Machine if it exits with a non-zero exit code. Default when no explicit policy is set, and for Machines with schedules. * spot-price - Starts the Machine only when there is capacity and the spot price is less than or equal to the bid price. | [optional] [default to undefined]

## Example

```typescript
import { FlyMachineRestart } from './api';

const instance: FlyMachineRestart = {
    gpu_bid_price,
    max_retries,
    policy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

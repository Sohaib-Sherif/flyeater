# FlyFile

A file that will be written to the Machine. One of RawValue or SecretName must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guest_path** | **string** | GuestPath is the path on the machine where the file will be written and must be an absolute path. For example: /full/path/to/file.json | [optional] [default to undefined]
**image_config** | **string** | The name of an image to use the OCI image config as the file contents. | [optional] [default to undefined]
**mode** | **number** | Mode bits used to set permissions on this file as accepted by chmod(2). | [optional] [default to undefined]
**raw_value** | **string** | The base64 encoded string of the file contents. | [optional] [default to undefined]
**secret_name** | **string** | The name of the secret that contains the base64 encoded file contents. | [optional] [default to undefined]

## Example

```typescript
import { FlyFile } from './api';

const instance: FlyFile = {
    guest_path,
    image_config,
    mode,
    raw_value,
    secret_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

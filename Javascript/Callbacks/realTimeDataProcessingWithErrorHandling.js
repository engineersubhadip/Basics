// You are tasked with implementing a real-time data processing system. The system receives data from multiple sources simultaneously and needs to process each data point as soon as it arrives. The processing involves a series of asynchronous operations: validateData(data, callback), transformData(data, callback), and storeData(data, callback).

// validateData(data, callback): Validates the incoming data. If the data is valid, it calls the callback with the validated data; otherwise, it passes an error.

// transformData(data, callback): Transforms the validated data into a suitable format for storage. It calls the callback with the transformed data.

// storeData(data, callback): Stores the transformed data. It calls the callback to indicate the completion of the storage operation.
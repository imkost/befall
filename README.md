## Befall — tiny events library

### API

```javascript
import befall from 'befall';

// Create befall function
const onInit = befall();

// Register event handler
onInit((value1, value2) => {
  // ...
});

// Execute all registered handlers
onInit.fire(value1, value2);

// Unregister handler
onInit.off(someHandlerFunction);
```

## Befall — tiny events library

### API

```javascript
import befall from 'befall';

// Create emitter
const onInit = befall();

// Register event handler
onInit((greeting, name) => {
  console.log(`${greeting}, ${name}`);
});

// Execute all registered handlers
onInit('Hello', 'dear user');

// Unregister handler
onInit.off(someHandlerFunction);
```

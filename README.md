## Usage

```javascript
import befall from 'befall';

const onBodyClick = befall();

addEventListener(document.body, 'click', (e) => onBodyClick.fire(e));

onBodyClick(e => {
  console.log('body was clicked');
});

onBodyClick(e => {
  console.log('body was clicked');
});
```

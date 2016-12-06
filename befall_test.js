const befall = require('./befall');

testRegular();
testKinded();
testValues();

function testRegular() {
  const onClick = befall();
  let clicks = 0;

  onClick();
  onClick(() => clicks += 1);
  onClick(() => clicks += 1);
  onClick();
  onClick();

  result('regular', clicks === 4);
}

function testKinded() {
  const onChange = befall(true);
  let first = 0;
  let second = 0;

  onChange('second');
  onChange('first', () => first += 1);
  onChange('second', () => second += 1);
  onChange('first');
  onChange('first', () => first += 1);
  onChange('first');
  onChange('none');
  onChange('second');
  onChange('second');

  result('kinded', first === 3 && second === 2);
}

function testValues() {
  const onClick = befall();
  const onChange = befall(true);
  const value1 = 3;
  const value2 = { wer: 5 };
  let ok = 0;

  onClick((v1, v2) => ok += Number(v1 === value1 && v2 === value2));
  onChange('first', (v1, v2) => ok += Number(v1 === value1 && v2 === value2));
  onChange('first', value1, value2);
  onClick(value1, value2);

  result('values', ok === 2);
}

function result(name, condition) {
  console.log(`${name}: ${condition ? 'ok' : 'fail'}`);
}

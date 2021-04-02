# react-app-ssr-starter/src/client/components/Buttons

![MIT license](https://badgen.now.sh/badge/license/MIT)

[Source](https://github.com/xizon/react-app-ssr-starter/tree/master/src/client/components/Buttons)


## Examples

```js
import React, { Fragment } from 'react';
import Button from './src/client/components/Buttons/index.js';

let spreadOperator = {
  bgColor: 'info',
  btnName: 'Spread Operator',
};


export default function ButtonsExamples() {
  return (
    <Fragment>
		<Button bgColor='' btnName=''/>
		<Button bgColor='success' btnName='success'/>
		<Button bgColor='info' btnName='info'/>
		<Button bgColor='danger' btnName='danger'/>
		<Button bgColor='warning' btnName='warning'/>
		<Button {...spreadOperator}/>
    </Fragment>
  );
}

```
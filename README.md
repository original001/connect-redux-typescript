# connect-redux-typescript

It is Helper for better typescript coverage of redux connect function

## Usage

1. First, init helper function with your redux state and pass connect function

```
import {connectHelperInit} from 'connect-redux-typescript'
import {connect} from 'react-redux'

export const connectHelper = connectHelperInit<State>(connect)

```

2. Use helper in every place you want to use connect function

```
...
import {connectHelper} from './path/to/connectHelper';

const {connect, propsGeneric} = connectHelper(
  (state) => state.example,
  {sayAction}
)
```

3. Pass `typeof propsGeneric` to type of your React component

```
export class ExampleComponent extends React.Component<typeof propsGeneric> {
  render() {
    const {sayText, asyncMessage} = this.props;
    return (
      <div>
        You say: {sayText || 'nothing'}
        <hr />
        <button onClick={() => sayAction(value)}> Say Hello </button>
      </div>
    )
  }
}
```

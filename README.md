# connect-redux-typescript

It is Helper for better typescript coverage of redux connect function
[npm package](https://www.npmjs.com/package/connect-redux-typescript)

## Usage

First, init helper function with your redux state and pass connect function

```
import {connectHelperInit} from 'connect-redux-typescript'
import {connect} from 'react-redux'
import {State} from './path/to/typeof/state'

export const connectHelper = connectHelperInit<State>(connect)

```

Use helper in every place you want to use connect function

```
...
import {connectHelper} from './path/to/connectHelper';

const {connect, propsGeneric} = connectHelper(
  (state) => state.example,
  {sayAction}
)
```

Pass `typeof propsGeneric` to type of your React component

```
export class ExampleComponent extends React.Component<typeof propsGeneric> {
  render() {
    const {sayText, asyncMessage} = this.props
    return (
      <div>
        You say: {sayText || 'nothing'} <hr />
        <button onClick={() => sayAction(value)}> Say Hello </button>
      </div>
    )
  }
}
```

Return connected component

```
export default connect(ExampleComponent)
```

### Notes

If you want to pass own props to component, use this construction

```
interface OwnProps {
  field: string
}

const {connect, propsGeneric} = connectHelper(
  (state, props: OwnProps) => state.example,
  {sayAction}
)
```

If you use async actions like `redux-thunk` and you want to know what type action return, you have to use dispatch explicitly

```
...
    return (
      <div>
        You say: {sayText || 'nothing'}
        <hr />
        <button onClick={() => this.props.dispatch(sayAction(value)).then(value => alert(value))}> 
          Say Hello
        </button>
      </div>
    )
```

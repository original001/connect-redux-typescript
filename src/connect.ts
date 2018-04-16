import * as React from 'react';
import {DispatchProp} from 'react-redux';

interface Func<T> {
  ([...args]: any): T;
}

interface MapStateToProps<TStateProps, TOwnProps, TState> {
  (state: TState, ownProps?: TOwnProps):   TStateProps | ((state: TState) => TStateProps);
}

interface ConnectHelper<TProps, TOwnProps> {
  propsGeneric: TProps & TOwnProps;
  connect: (component) => React.ComponentClass<TOwnProps>;
}

interface ConnectHelperFunction<TState> {
  <TOwnProps>(): ConnectHelper<DispatchProp<TState>, TOwnProps>;
}

interface ConnectHelperFunction<TState> {
  <TStateProps, TOwnProps>(
    mapStateToProps: MapStateToProps<TStateProps, TOwnProps, TState>,
  ): ConnectHelper<TStateProps & DispatchProp<TState>, TOwnProps>;
}

interface ConnectHelperFunction<TState> {
  <TStateProps, TDispatchProps, TOwnProps>(
    mapStateToProps: MapStateToProps<TStateProps, TOwnProps, TState>,
    mapDispatchToProps: Func<TDispatchProps> | TDispatchProps,
  ): ConnectHelper<TStateProps & TDispatchProps, TOwnProps>;
}

export const connectHelperInit = <TState>(connect): ConnectHelperFunction<TState> =>
  (mapStateToProps?, mapDispatchToProps?) => {
    return {
      propsGeneric: null,
      connect: (component) =>
        connect(mapStateToProps, mapDispatchToProps)
          (component),
    };
  }

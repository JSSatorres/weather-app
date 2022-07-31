import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { decrement, increment, incrementByAmount } from '../../store/slices/counter'

const LoginForm = () => {
  const count = useAppSelector(state=>state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(3))}
      >
        Increment 3
      </button>
    </div>
  </div>
  )
}

export default LoginForm




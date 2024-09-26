import { useAppDispatch, useAppSelector } from "../app/hook"
import { decrement, increment } from "../features/user/userSlice";

export default function User() {

    const firstName = useAppSelector((state) => { return state.user.firstName});
    const lastName = useAppSelector((state) => {return state.user.lastName});
    const age = useAppSelector((state) => {return state.user.age});

    console.log("firstName",firstName);

    const dispatch = useAppDispatch();

  return (
    <div>User
        <p>Age of {firstName}{" "}{lastName}: {age}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

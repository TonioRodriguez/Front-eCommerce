import { useContext } from "react"
import { UserContext } from "../../context/UserContext";
import Checkout from "../CheckoutPage/BtnCheckout";

const Home = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = !!user;
  return (
    <div>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      {
        isLoggedIn ?
          (
            <div>
              <h1>Bienvenido {user.username}</h1>

              <Checkout />
            </div>
          )
          :
          (
            <div>
              <h1>Home</h1>
              <p>You are not logged in</p>
            </div>
          )

      }

    </div>
  )
}

export default Home
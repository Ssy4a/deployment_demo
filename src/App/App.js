import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import LoadingElement from "../components/UI/LoadingElement";
import AppAuthorized from './AppAuthorized';
import GlobalStyle from "../styles/GlobalStyles";
import AppNotAuthorized from "./AppNotAuthorized";
import { UrlAPI } from "../constants";

function App() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("JWTAccessToken")) {
      setLoading(true)
      fetch(`${UrlAPI}/auth/refresh`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}`
        },
      }).then(res => {
        if (res.ok) {
          dispatch({ type: "SET_AUTHORIZED_CHECK", payload: true })
        } else if (res.status === 403) {
          localStorage.removeItem("JWTAccessToken")
          throw Error("Час сессії закінчився, авторизуйтеся ще раз.")
        } else throw Error("Помилка з`єднання з базою даних. Спробуйте ще раз.")
      })
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }
    dispatch({ type: "SET_AUTHORIZED_CHECK", payload: false })
  }, [])

  const AppAuthorizedCheck = () => {
    return (
      <div>
        {user.isAuthorized
          ? <AppAuthorized />
          : <AppNotAuthorized error={error} />
        }
      </div>
    )
  }

  return (
    <div>
      {loading
        ? <LoadingElement />
        : <AppAuthorizedCheck />
      }
      <GlobalStyle/>
    </div>
  )
}

export default App;
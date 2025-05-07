/* eslint-disable @typescript-eslint/no-unused-vars */
import useAuthModule from '@/hooks/useAuthModule'
import React from 'react'

const LoginPage = () => {
  const { useLogin, useLogout } = useAuthModule()

  const mutate = useLogin()

  return <div>LoginPage</div>
}

export default LoginPage

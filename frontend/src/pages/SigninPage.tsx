import { useState, useContext, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Store } from '../Store'
import { useSigninMutation } from '../hooks/userHooks'
import { toast } from 'react-toastify'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import { Helmet } from 'react-helmet-async'
import { Button, Container, Form } from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'

export default function SigninPage() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { state, dispatch } = useContext(Store)
  const { userInfo } = state

  const { mutateAsync: singin, isLoading } = useSigninMutation()

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const data = await singin({
        email,
        password,
      })
      dispatch({ type: 'USER_SIGNIN', payload: data })
      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate(redirect || '/')
    } catch (err) {
      toast.error(getError(err as ApiError))
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  return (
    <Container className="small-container">
      <Helmet>
        <title>Zellany | Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button disabled={isLoading} type="submit">
            Sign In
          </Button>
          {isLoading && <LoadingBox />}
        </div>
        <div className="mb-3">
          New user?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create account</Link>
        </div>
      </Form>
    </Container>
  )
}

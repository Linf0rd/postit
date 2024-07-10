import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import { Home } from './_root/pages';
import './globals.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />

        {/* private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App 
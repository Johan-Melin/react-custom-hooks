import React from 'react'
import useLocalStorage from './utils/useLocalStorage'
import useUpdateLogger from './utils/useUpdateLogger'

export default function App() {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLogger(name);
  return (
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)} />
  )
}

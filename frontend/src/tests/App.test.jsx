import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import axios from 'axios'
vi.mock('axios')

test('renders movie list', async () => {
  axios.get.mockResolvedValue({ data: [{ _id: '1', title: 'M1', overview: 'o' }] })
  render(<App />)
  await waitFor(()=> expect(screen.getByText('M1')).toBeInTheDocument())
})

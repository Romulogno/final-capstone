import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookForm from './components/Bookform';

describe('<App/>', () => {

  it('should show the heading text', () => {
    render(<BookForm/>)
  const label = screen.getByRole('heading', {name: 'Book your table'})
  console.log(label)
  expect(label).toBeInTheDocument()
  })


    it ('Should show the time selected', () => {
      render(<BookForm/>)
      const timeSelected = screen.getByTestId('select-test')
      fireEvent.change(timeSelected)
      console.log(timeSelected)
      expect(timeSelected).toBeInTheDocument()
    })

})
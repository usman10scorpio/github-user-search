import { render, screen, waitFor } from '@testing-library/react';
import Home from '../../Home/Home';
import ReactDataTable from './ReactDataTable';


test('React data table component find columns', async () => {
  render(<ReactDataTable username={'usman'} submitClick={true} submitClicked={() => {}}  />);
  const linkElement = await screen.findByText('Loading...');
  expect(linkElement).toBeInTheDocument();
});

test('React data table no records to display', () => {
  render(<ReactDataTable username={''} submitClick={true} submitClicked={() => {}}  />);
  const linkElement = screen.getByText(/There are no records to display/i);
  expect(linkElement).toBeInTheDocument();
});

test('React data table login column', async () => {
  render(<Home testSuccessBit={true}/>);
  await waitFor(() => {
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
  })
});

test('React data table user type column', async () => {
  render(<Home testSuccessBit={true}/>);
  await waitFor(() => {
    expect(screen.getByText(/User Type/i)).toBeInTheDocument()
  })
});

test('React data table avatar column', async () => {
  render(<Home testSuccessBit={true}/>);
  await waitFor(() => {
    expect(screen.getByText(/Avatar Url/i)).toBeInTheDocument()
  })
});

test('React data table heading changed to GUS', async () => {
  render(<Home testSuccessBit={true}/>);
  await waitFor(() => {
    expect(screen.getByText(/GUS/i)).toBeInTheDocument()
  })
});
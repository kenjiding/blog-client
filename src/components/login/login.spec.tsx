import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './index';
import { login } from '../../api/login';

jest.mock('../../api/login');
const fetchMock = login as jest.Mock;

describe('login component', () => {
  test('login component should render correctly', async () => {
    render(<Login onSuccess={() => {}}></Login>);
    const usernameInput: HTMLInputElement = screen.getByRole('textbox', { name: 'Username' });
    expect(usernameInput).toBeInTheDocument();
    // expect(screen.getByRole('textbox', { name: 'Password' })).toBeInTheDocument();

    // 验证input改变值的功能
    fireEvent.change(usernameInput, {target: {value: 'user1'}});
    expect(usernameInput.value).toBe('user1');
  });

  test('login component login feature should be corrected', async () => {
    const successFn = jest.fn();
    // fetchMock.mockRejectedValue({ statusText: 'error123' });
    fetchMock.mockResolvedValue({ access_token: 'fake-token' });
    render(<Login onSuccess={successFn}></Login>);
    // 验证login按钮调用api接口的功能
    const loginButton = screen.getByRole('link', { name: /login in/i });
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    await waitFor(() => {});
    expect(successFn).toHaveBeenCalled();
  });
});
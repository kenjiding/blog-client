
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './index';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'; 

beforeAll(() => {
  // This simulates the scroll event by adding the scroll listener
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

describe('header component', () => {
  test('header title should be displayed', () => {
    render(<Header></Header>);
    const title = screen.getByText('Kenji');
    expect(title).toBeInTheDocument();
  });

  test('title should be clickable', () => {
    const mockFn = jest.fn();
    render(<Header onLogoClick={mockFn}></Header>);
    const title = screen.getByText('Kenji');
    fireEvent.click(title);
    expect(mockFn).toHaveBeenCalled();
  });

  test('header center content should be displayed after scrolling', async () => {
    render(
    <div
      data-testid="header-container"
      style={{ height: '100vh', overflow: 'auto' }}>
      <Header />
    </div>);
    // expect(screen.getByText('Interest is the best teacher')).toBeInTheDocument();

    const container = screen.getByTestId('header-container');
    fireEvent.scroll(container, { target: { scrollY: 3 } });
    await screen.findByText('Interest is the best teacher, keep your passion for learning');
    // Assert that the sentence is visible
    expect(screen.getByText('Interest is the best teacher, keep your passion for learning')).toHaveClass('sentence-show');
  })

  test('link should be clickable', () => {
    const pushFn = jest.fn();
    render(<RouterContext.Provider value={{ push: pushFn } as any}>
        <Header></Header>
      </RouterContext.Provider>);
    function linkTest(name: string, path: string) {
      const homeLink = screen.getByText(name);
      expect(homeLink).toHaveAttribute('href', path);
      expect(homeLink).toBeInTheDocument();
      fireEvent.click(homeLink);
      expect(pushFn).toHaveBeenCalled();
      expect(pushFn).toHaveBeenCalledWith(path, expect.anything());
    }

    linkTest('Home', '/');
    linkTest('Article', '/article');
  });
})
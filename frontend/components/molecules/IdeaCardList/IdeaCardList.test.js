// import { render, cleanup, prettyDOM, fireEvent } from '@testing-library/react';
// import { ThemeProvider } from 'styled-components';
// import IdeaCardList from './IdeaCardList';
// import theme from '../../../public/styles/theme.style';

// jest.mock('../IdeaCard/IdeaCard', () => () => <div>IdeaCard</div>);

// const setup = (updatedProps = {}) => {
//   const ideas = [
//     { node: { id: '1', content: 'a', author: { id: '1' } } },
//     { node: { id: '2', content: 'b', author: { id: '2' } } },
//   ];
//   const initialProps = { loading: false, ideas };
//   const mergedProps = { ...initialProps, ...updatedProps };

//   const result = render(
//     <ThemeProvider theme={theme}>
//       <IdeaCardList {...mergedProps} />
//     </ThemeProvider>
//   );

//   const ideaCards = () => result.queryAllByText('IdeaCard');

//   return { ...result, ideaCards };
// };

// describe('IdeaCardList', () => {
//   afterEach(cleanup);

//   it('renders elements', () => {
//     const utils = setup();

//     expect(utils.ideaCards()).toHaveLength(2);
//   });

//   xit('renders loading element when loading', () => {
//     const utils = setup({ loading: true });

//     console.log('TCL: com', prettyDOM(utils.baseElement));
//   });
// });

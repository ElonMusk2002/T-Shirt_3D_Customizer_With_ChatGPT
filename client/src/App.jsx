import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while rendering.</div>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <ErrorBoundary>
        <Canvas />
      </ErrorBoundary>
      <Customizer />
    </main>
  )
}

export default App;

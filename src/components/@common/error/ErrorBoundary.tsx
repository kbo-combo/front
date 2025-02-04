import {Component, ReactNode} from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>에러가 발생했습니다!</h2>
            <p>{this.state.error?.message || "알 수 없는 오류"}</p>
            <button onClick={this.handleReset}>홈으로 돌아가기</button>
          </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

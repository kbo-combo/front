import {Component, ReactNode} from "react";
import NotFoundPage from "@pages/@common/common/NotFound.tsx";

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
          <NotFoundPage message={"알수없는 에러가 발생했습니다. 잠시후 다시 시도해주세요."} onClick={this.handleReset}/>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

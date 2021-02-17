import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total, next, operation } = this.state;
    const calcData = { total, next, operation };

    const result = calculate(calcData, btnName);

    this.state({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }
}

export default App;

import { Container } from "unstated";

export default class StoreContainer extends Container {
  state = {
    depth: 2,
    counts: new Map(),
    isContinous: false
  };

  updateDepth = value => {
    this.setState({ depth: Math.min(+value, 9) });
  };

  toggleContinous() {
    this.setState({ isContinous: !this.state.isContinous });
  }

  updateCount = id => {
    const updatedCounts = new Map(this.state.counts.entries());
    updatedCounts.set(id, this.state.counts.get(id) + 1 || 1);

    this.setState({
      ...this.state,
      counts: updatedCounts
    });
  };

  updateAllCounts() {
    const incrementedCounts = new Map(this.state.counts.entries());
    incrementedCounts.forEach((value, key, map) => {
      map.set(key, value + 1);
    });

    this.setState({
      ...this.state,
      counts: incrementedCounts
    });
  }
}

import Split from 'react-split';
import Table from './pages/Table/table';
import Settings from './pages/Settings/settings';
import AddData from './pages/AddData/addData';
import Info from './pages/Info/info';
import Header from './components/header';
import Footer from './components/footer';
import { useAppDispatch } from './hooks/redux';
import { splitBottomDragEnd, splitTopDragEnd, splitWrapperWidth } from './store/appReducer';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const [splitWrapper, setSplitWrapper] = useLocalStorage<number[]>('split-wrapper', [75, 25]);
  const [splitTop, setSplitTop] = useLocalStorage<number[]>('split-top', [75, 25]);
  const [splitBottom, setSplitBottom] = useLocalStorage<number[]>('split-bottom', [50, 50]);

  useEffect(() => {
    dispatch(splitWrapperWidth(splitWrapper));
    dispatch(splitTopDragEnd(splitTop));
    dispatch(splitBottomDragEnd(splitBottom));
  }, []);

  const handleSplitWrapperDragEnd = (sizes: number[]) => {
    setSplitWrapper(sizes);
    dispatch(splitWrapperWidth(sizes));
  };

  const handleSplitTopDragEnd = (sizes: number[]) => {
    setSplitTop(sizes);
    dispatch(splitTopDragEnd(sizes));
  };

  const handleSplitBottomDragEnd = (sizes: number[]) => {
    setSplitBottom(sizes);
    dispatch(splitBottomDragEnd(sizes));
  };

  return (
    <main>
      <Header />
      <Split
        className="split-wrapper"
        direction="vertical"
        sizes={splitWrapper}
        onDragEnd={handleSplitWrapperDragEnd}>
        <Split
          className="split-top"
          sizes={splitTop}
          direction="horizontal"
          onDragEnd={handleSplitTopDragEnd}>
          <Table />
          <Settings />
        </Split>
        <Split
          className="split-bottom"
          sizes={splitBottom}
          direction="horizontal"
          onDragEnd={handleSplitBottomDragEnd}>
          <AddData />
          <Info />
        </Split>
      </Split>
      <Footer />
    </main>
  );
}

export default App;

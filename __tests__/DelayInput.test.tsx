import { render, screen, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom';
import { DelayInput } from '@/components/DelayInput'

// DelayInputコンポーネントに関するテスト
describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock
  
  beforeEach(() => { 
    // モック関数を作成 する
    handleChange = jest.fn() 
    
    // モック関数をDelayButtonに渡して描画
    renderResult = render(<DelayInput onChange={handleChange} />)
  })
  
  afterEach(() => {
     renderResult.unmount()
  })

  // span要素のテキストが空であることをテスト
  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    
    // 初期表示は空
    expect(spanNode).toHaveTextContent('入力したテキスト:')
  })

})

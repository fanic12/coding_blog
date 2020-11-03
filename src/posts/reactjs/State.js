import React from 'react'
import { Link } from 'react-router-dom'
import Youtube from '../../components/Youtube'

function State() {
  return (
    <div className='BlogContent'>
      <h2>REACTJS-state</h2>
      <Youtube title='state introduce' src='rOpg2KUPW2M' />
      <p>
        state관련 이론 영상을 잘 보셨나요? 이번에는 이론과 활용을 나눠서 한번
        봐볼겁니다
        <br />
        이론 영상에서는 이론을 최대한 시각적으로 표현하고자 하고있습니다
        <br />
        활용에서 여러분들은 이러한 시각적인 이론을 활용을 통해 표현해보실겁니다
        <br />
        자신이 느끼고 하고자 하는 바를 그대로 표현해보시길 바랍니다
        <br />
        <Youtube title='state conjugate' src='e2c1EUcW7oo' />
        <h4>
          *아래에 Both를 누르시면 코드가 실시간으로 적용되는 웹을 보실수
          있습니다*
        </h4>
        <iframe
          title='stateguide'
          width='100%'
          height='500px'
          src='https://stackblitz.com/edit/state-guide?embed=1&file=src/App.js'></iframe>
        이번에 배워볼 문법은 state라는 문법입니다
        <br />
        state는 props와 연관이 있는 문법이기 때문에
        <br />
        props수업을 안배우셨다면{' '}
        <Link to='/props' className='SetColor'>
          props
        </Link>
        를 배우고 오시길 바랍니다
        <br />
        state는 간단하게는 props의 값을 가져오게 하는 거라고 생각하시면 편합니다
        <br />
        그럼 props랑 뭐가달라? props도 title값 가져오고 그런거 다 되는데? 라고
        생각 하실수 있어요
        <br />
        그렇지만 props에서는 직접적으로 코드에 값을 지정해야 합니다
        <br />
        {'<'}Subject title="불닭"{'>'}
        {'<'}/Subject{'>'}이런식으로 말이죠
        <br />
        그러나 state에서는 props의 값을 0으로 만들고 state내에 props값을 주는
        형식입니다
        <br />
        쉽게 설명하자면 state의 값을 지정하는데 그때 Subject의 title값을 줄수
        있는겁니다
        <br />즉 Subject Component에서나 {'<'}Subject{'>'}
        {'<'}/Subject{'>'}처럼
        <br />
        하위 Component에서 줘야 할 값을 state에서 지정할수 있는거죠
        <br />
        정확히는 state의 값을 하위 Componenet의 props값을 지정해서 줄수
        있는겁니다
        <br />
        state={'{'}Subject:{'{'}title:불닭{'}'}
        {'}'}이런 식인거죠
        <br />
        해당 코드는 이해를 돕기위해서 인위적으로 만든 코드입니다
        <br />
        이런식으로 주면 원래 불닭이라는 단어를 1억개의 파일에서 수정해야 한다면
        <br />
        정말 엄청나게 오래걸리는 작업이 될겁니다
        <br />
        그러나 반대로 state를 사용해서 값을 줬다면
        <br />
        우리는 그저 state내에 title값을 바꾸기만 하면
        <br />
        1억개의 파일 모두가 수정되는 폭팔적인 효과를 보실수 있습니다
        <br />
        문법적으로는 맞지 않습니다
        <br />
        또한 props는 정적인 값만을 사용할수 있습니다
        <br />
        그러나 state는 setState라는 문법을 추가로 넣어 동적으로 사용할수
        있습니다
        <br />
        props는 상위코드의 값을 변화시켜주지 않는 이상 절대 변하지 않습니다
        <br />
        그러나 state는 동적으로 작동하기 때문에 기본 값인 state그리고 setState를
        통해 값이 바뀔수 있습니다
      </p>
    </div>
  )
}

export default State

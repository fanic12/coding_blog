import React from 'react'
import Youtube from '../../components/Youtube'

function Br_and_p() {
  return (
    <div className='BlogContent'>
      <h2>HTML-br and p</h2>
      <Youtube title='br_and_pintrodece' src='SXtp7w7kdDc' />
      <p>
        우리는 지금부터 br과 p 라는 문법을 배워 볼겁니다
        <br />
        br과 p는 각각의 차이점을 가지고 이해하시면 됩니다
        <br />
        br은 순전히 줄바꿈을 위한 코드입니다
        <br />
        p는 문단을 지정해주는 코드입니다
        <br />
        줄을 띄워주는 것은 같지만 그 안의 내용은 전혀 다릅니다
        <br />
        단순히 줄바꿈인 것인지 문단을 정해서 말하고자 하는 바를 나타내는 것인지
        <br />
        의도를 생각하셔서 사용하시면 좋겠습니다
        <br />
        그렇다고 해서 p 또는 br만 사용하라는 것은 아닙니다
        <br />
        의도가 명확하여 그것만으로 해결할수 있으면 좋지만
        <br />
        오히려 하나의 언어를 고집하다보면 쓸데없이 코드가 많이 사용됩니다
        <br />
        그렇기에 p와 br을 섞어서 사용하신다면 조금 더 실용적으로 코딩을 하시게
        되실겁니다
        <iframe
          height='500'
          width='100%'
          scrolling='no'
          title='html-br-and-p'
          src='https://codepen.io/fanic12/embed/rNLdbQv?height=265&theme-id=dark&default-tab=html,result'
          frameborder='no'
          loading='lazy'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen{' '}
          <a href='https://codepen.io/fanic12/pen/rNLdbQv'>html-br-and-p</a> by
          fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
        <h4>
          여기서 {'<'}p{' />'}의 부분은 끝나는 부분이 없기 때문에
          <br />
          enter로 줄바꿈을 해버리면 p안의 내용이라고 인식을 못합니다{' '}
        </h4>
        우리는 이 부분을 한번 문법적으로 옳게 고쳐볼겁니다
        <br />
        이번 경우에는 p를 "_/"를 사용해서 열고 닿는 부분을 줄였죠
        <br />
        닿히는 부분이 정해져 있지 않기 때문에 쓰는 글 전체가 계속 p로 인식이
        되는겁니다
        <br />
        이때 "13번째줄" 부분에 문단바꾸기 한걸 볼수 있는데
        <br />
        p태그에는 말없이 띄어쓰기를 한것이니 당연히 인식이 안된것입니다
        <br /> 그렇기 때문에 p태그에게 "나 띄어쓰기 했어" 라고 알려주기 위해
        <br />
        14번째 줄맨처음에 br코드를 넣어 주시면 됩니다
        <br /> 다른 해결법은 "_/"를 없애고 기본 형태의 p 코드로 12줄부터
        14줄까지 묶어 주시면 됩니다
      </p>
    </div>
  )
}
export default Br_and_p

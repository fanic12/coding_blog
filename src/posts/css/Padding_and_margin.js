import React from 'react'
import Youtube from '../../components/Youtube'

function Padding_and_margin() {
  return (
    <div className='BlogContent'>
      <h2>CSS-padding & margin</h2>
      <Youtube title="padding_and_marg inintroduce" src="MLjCVUspcDo" />
      <p>
        지금부터 padding과 margin을 배워보도록 하겠습니다
        <br />
        padding의 개념은 border를 기준으로 안에있는 값을 조정합니다
        <br />
        margin은 border를 기준으로 밖에 있는 값을 조정합니다
        <br />
        말만 들으셔선 무슨 소리신지 잘 모르겠죠?
        <br />
        검사창에 들어가셔서 오른쪽 아래의 내용을 내려보세요
        <br />
        padding과 margin이 어떠한 형태를 이루고 있는지 보실수 있습니다
        <br />
        우리는 검사를 통해서 필요한 padding과 margin값을 결정할수 있고
        <br />
        얼마나 padding과 margin이 들어갔는가를 "시각적"으로 볼수있습니다
        <br />
        또한 시각적으로 보여주면서 padding과 margin의 값도 확인할수 있습니다
        <br />
        padding과 margin은 px, em, rem, %를 단위로 사용합니다
        <br />
        상황에 맞게 단위를 사용해주시면 좀 더 좋은 웹을 만드실수 있을겁니다
        <h4>
          *em과 rem단위는 아직 범위에 포함되지 않습니다 css내에 em & rem수업을
          참고 해주세요*
        </h4>
        <iframe
          height='500'
          width='100%'
          scrolling='no'
          title='css padding  &amp; margin'
          src='https://codepen.io/fanic12/embed/KKMQbrQ?height=265&theme-id=dark&default-tab=html,result'
          frameborder='no'
          loading='lazy'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen
          <a href='https://codepen.io/fanic12/pen/KKMQbrQ'>
            css padding &amp; margin
          </a>{' '}
          by fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
        <h4>
          검사로 들어가셔서 padding과 margin값을 확인하시고
          <br />
          조금이나마 차이를 느껴보시면 좋을거 같습니다
          <br />
          *문자로는 padding과 margin태그의 차이를 느끼기 힘들수 있습니다
          <br />
          box태그나 grid태그에서 조금 더 느껴보시길 바랍니다*
        </h4>
      </p>
    </div>
  )
}

export default Padding_and_margin

import React from 'react'
import Youtube from '../../components/Youtube'
import Comment from '../../components/Comment'

function Grid() {
  return (
    <div className='BlogContent'>
      <h2>CSS-grid</h2>
      <Youtube title='grid introduce' src='M1eQFIBY2vI' />
      <p>
        이번 수업에서 배워볼 grid라는 코드는 앞서 공부한
        <br />
        padding과 margin을 조금 더 시각적으로 체험할수있을 뿐만 아니라
        <br />
        여러분들은 grid를 통해 최초로 실시간으로 변형되는 웹을 체험
        해보실겁니다.
        <br />
        fr이라는 단위는 고정되어있지 않습니다.
        <br />
        나머지 전부의 값인거죠.
        <br />
        사이트가 커지면 그만큼 길이가 늘어나고
        <br />
        사이트가 작아지면 그만큼 작아지는 겁니다.
        <br />
        단위를제외한 나머지의 값이기 때문이죠.
        <br />
        비율도 똑같습니다.
        <br />
        작을때 비율이나 클때의 비율이나
        <br />
        비율의 크기가 달라지는 것이지 비가 달라지지는 않습니다.
        <br />
        grid를 공부하기전에 먼저 기초지식 하나를 알려드리도록 하겠습니다.
        <br />
        fr이라는 비율을 나타내는 단위입니다.
        <br />
        수학에서 비율은 1:1이라고 표기한다면 웹에서는 1fr:1fr이라고 생각하시면
        됩니다.
        <br />
        혹은 px과같은 단위와 혼용되서 사용된다면 1fr:10px이라고 한다면 어떻게
        풀어나가실건가요?
        <br />
        그럴때는 단위를 통합할려고 하지마시고 따로따로 생각하시면 됩니다.
        <br />
        전체px-10px한 값 : 10px입니다.
        <br />
        이때의 1fr은 나머지를 전부 사용한다고 생각하시면 됩니다.
        <br />즉 fr : fr의 단위는 비율로 생각하시되
        <br />
        px,%,em,rem : fr 의 경우 px,%,em,rem의 값만큼 : 나머지 값(fr) 이라고
        생각하시면 됩니다.
        <br />
        아래의 체험을 해보면서 fr을 조금 더 이해해보시고
        <br />
        단위가 혼용되서 사용되었을때 어떻게 사용되는지도 한번 알아보시길
        바랍니다.
        <iframe
          height='500'
          width='50%'
          scrolling='no'
          title='css grid'
          src='https://codepen.io/fanic12/embed/OJXQGBb?height=265&theme-id=dark&default-tab=html,result'
          frameborder='no'
          loading='lazy'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen{' '}
          <a href='https://codepen.io/fanic12/pen/OJXQGBb'>css grid</a> by
          fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
        <br />
        id grid로 div를 묶어서 display:grid를같게 적용하므로
        <br />
        div의 border가 삐삐와 약약을 개개인을 감싸고
        <br />그 border를 id grid가 감싸면서 같은 border가 적용이 됩니다.
        <br />즉 div의 border는 야식과 땡긴다를 각각 따로
        <br />
        id grid의 border는 야식,땡긴다를 전부 감싸주는 겁니다.
        <br />
        그러므로 id grid의 border의 크기는 변함이 없어지고
        <br />
        개개인을 감싸고 있는 div의 border의 크기가 바뀌는 거죠.
        <br />
        또한fr이라는 단위는 고정되어있지 않습니다.
        <br />
        나머지 전부의 값인거죠.
        <br />
        사이트가 커지면 그만큼 길이가 늘어나고
        <br />
        사이트가 작아지면 그만큼 작아지는 겁니다.
        <br />
        단위를제외한 나머지의 값이기 때문이죠.
        <br />
        비율도 똑같습니다.
        <br />
        작을때 비율이나 클때의 비율이나.
        <br />
        비율의 크기가 달라지는 것이지 비가 달라지지는 않습니다.
        <br />
        fr : fr의 비일때는 fr을 빼고 숫자만 계산하시면 됩니다.
        <br />
        단위의 비 : fr의 비일때는 단위의비만큼을
        <br />
        제외한 나머지값이 fr이라고 생각하시면 됩니다.
        <br />
        여기서는 전체3fr중 삐삐가 2fr 약약이 1fr이니
        <br />
        fr을 제외한 2:1의 비율로 보시면 됩니다.
        <br />
        이번에 다른 유형인 단위 : fr의 비는
        <br />
        야식이 전체px중에서 100px을 가져가고
        <br />
        나머지 px을 fr이 가져가는 식입니다
        <br />즉 1000px: 전체px-100px 인셈입니다.
      </p>
      <Comment identifier='css_grid' url='/grid' title='CSS-grid' />
    </div>
  )
}

export default Grid

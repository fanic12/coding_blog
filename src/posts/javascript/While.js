import React from 'react'
import Youtube from '../../components/Youtube'
import Comment from '../../components/Comment'

function While() {
  return (
    <div className='BlogContent'>
      <h2>javascript-while</h2>
      <Youtube title="while introduce" src="ZupPmuWPSdE" />
      <p>
        이번에 배워볼 문법은 바로 while(반복문)입니다.
        <br />
        if(조건문)과 마찬가지로 정말 학생들에겐 익숙한 단어일겁니다.
        <br />
        또한 이친구도 같아요 if문은 문법과 똑같은 조건에 따라 동적으로 작동하는
        코드였다면
        <br />
        while(반복문)은 이름그대로 if문처럼 조건이 맞다면 반복합니다.
        <br />
        형태는 if(조건문)과 크게 다르지 않습니다.
        <br />
        while(){'{'}명령어{'}'}가 반복문의 기본 형태입니다.
        <br />
        어떻게 반복시키냐 라고 생각하시는 분들도 있을겁니다.
        <br />
        가장 기본적인 방법은 미지수를 정해놓는 겁니다.
        <br />
        미지수 i의 값을 0으로 정해놓고 반복문이 한번 실행될때마다
        <br />
        i의 값을 1씩 올라가게 만드는 거죠.
        <br />
        그럼 조건에는 i의 값의 크기를 넣으면 되는 겁니다.
        <br />
        이때 주의하실점은 i의 값을 0으로 만드는
        <br />
        i=0;의 코드는 while(반복문) 밖에 적용시켜야 한다는겁니다.
        <br />
        안에 적용시켜버리면 while(반복문)이 반복될때마다
        <br />
        i의 값이 0으로 초기화되서 무한정으로 실행됩니다.
        <br />
        또한 지금 미지수로 적용된 i의 이름을 바꿀수도 있습니다.
        <br />x y와같은 여러가지 원하는 이름으로 바꿀수 있습니다.
        <br />
        이때 i의값을 0으로 만드는 코드에 왜 var이 붙는지 궁금하신 분들도
        계실겁니다.
        <br />
        지금은 그냥 문법이구나 하고 넘기시면 되겠습니다.
        <h4>
          *우리수업은 var을 포함하고 있지 않기 때문에 그러려니 하고 넘기시면
          됩니다*
        </h4>
        <iframe
          height='500'
          width='100%'
          scrolling='no'
          title='javascript while(반복문)'
          src='https://codepen.io/fanic12/embed/mdExvbV?height=265&theme-id=dark&default-tab=html,result'
          frameborder='no'
          loading='lazy'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen{' '}
          <a href='https://codepen.io/fanic12/pen/mdExvbV'>
            javascript while(반복문)
          </a>{' '}
          by fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
        코드는 {'<'} li {'<'} {'<'} /li {'>'}태그에 묶인 까르보와 불닭의 값을
        <br />
        본문에 넣으라는 뜻입니다.
        <br />
        이때 반복문의 조건은 i의 값이 4미만까지만
        <br />
        작동을 하도록 했기때문에
        <br />즉 맨처음 i의 값을 0으로 적용한
        <br />
        순간부터 0 1 2 3 해서 즉 4번의 까르보와 불닭을 넣은거죠.
        <br />
        만약 i의 값이 1이라면 1 2 3 해서 3번만을 넣을것이고
        <br />
        i의 값이 4라면 작동하지 않을것입니다.
        <br />즉 i의 값에 따라 동적으로 작동하는 코드입니다.
        <br />
        또한 여러분들이 미지수의 이름을 바꿀수도 있습니다.
        <br />
        x로 놓을수도 있고 y로 놓을수도 있습니다.
        <br />
        여러분들이 명령어와 조건 미지수의 이름을
        <br />
        직접 수정해 보시면서 while(반복문)을 조금 더
        <br />
        체험해 가시면 되겠습니다.
      </p>
      <Comment identifier="javascript_while" url="/while" title="JAVASCRIPT-while" />
    </div>
  )
}
export default While

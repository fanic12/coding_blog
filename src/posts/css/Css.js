import React from 'react'
import { Link } from 'react-router-dom'
import Youtube from '../../components/Youtube'
import Href from '../../components/Href'
import Comment from '../../components/Comment'

function Css() {
  return (
    <div className='BlogContent'>
      <h2>CSS-introduce</h2>
      <Youtube title="css introduce" src="Ok0bBJPtgJI" />
      <p>
        <Href title="css guide" url="https://namu.wiki/w/CSS">
          CSS
        </Href>
        단계로 오신 여러분들 환영합니다.
        <br />
        이번수업은
        <Href title="html5 guide" url="https://ko.wikipedia.org/wiki/HTML">
          HTML
        </Href>
        을 기반으로 웹을 꾸미는 기술들을 배울겁니다.
        <br />
        <Href title="css guide" url="https://namu.wiki/w/CSS">
          CSS
        </Href>
        는 오로지 디자인을 위한 언어이기에 디자인이보다
        <br />
        조금 더 기술적인 부분을 알고 싶으신 분들은
        <Link to='/javascript' className='SetColor'>
          {' '}
          javascript{' '}
        </Link>{' '}
        강의로 가시길 바랍니다 이제 우리는 우리가
        <Href title="html5 guide" url="https://ko.wikipedia.org/wiki/HTML">
          HTML
        </Href>
        로 만든 웹에 살을 더해주는 작업을 할겁니다.
        <br />
        디자인 하나의 차이가 얼마나 큰지를 여러분들은 이번 강의에서 경험하게
        되실겁니다.
        <br />
        <Href title="css guide" url="https://namu.wiki/w/CSS">
          css
        </Href>
        를 배우기 전에 수업에 기본적으로 사용되는 검사를 알려드릴려고 합니다.
        <br />
        먼저 배우기에 앞서 만드신 사이트에 우클릭 하시고 맨아래에 검사를
        눌러보세요.
        <br />
        검사는 css값을 효율적으로 볼수있게 해주며 그외 오류들도 알려줍니다.
        <br />
        그리고 css값을 검사내에서 테스트 해볼수도 있습니다.
        <br />
        우리수업은 앞으로 검사를 주로 사용할겁니다.
        <br />
        수업에 들어가시기 전에 미리 검사를 한번 체험해보시고 가시는 것도
        추천드립니다.
      </p>
      <iframe
        height='500'
        width='100%'
        scrolling='no'
        title='css guide'
        src='https://codepen.io/fanic12/embed/NWrYmOd?height=265&theme-id=dark&default-tab=html,result'
        frameborder='no'
        loading='lazy'
        allowtransparency='true'
        allowfullscreen='true'>
        See the Pen{' '}
        <a href='https://codepen.io/fanic12/pen/NWrYmOd'>css guide</a> by
        fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
        <a href='https://codepen.io'>CodePen</a>.
      </iframe>
      <Comment identifier="css" url="/css" title="CSS" />
    </div>
  )
}

export default Css

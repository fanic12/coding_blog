import React from 'react'
import Href from '../../components/Href'
import Youtube from '../../components/Youtube'
import Comment from '../../components/Comment'

function Script() {
  return (
    <div className='BlogContent'>
      <h2>javascript-script</h2>
      <Youtube title='script introduce' src='Ru5zGHkOgic' />
      <p>
        이번에 배워볼 것은{' '}
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        에 script라는 코드입니다.
        <br />
        이번 코드는{' '}
        <Href title='css guide' url='https://namu.wiki/w/CSS'>
          css
        </Href>
        에 style코드와 비슷합니다.
        <br />
        <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
          html
        </Href>
        안에{' '}
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        코드를 사용하게 해주는 코드입니다.
        <br />즉 확장자명이{' '}
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        가 아닌{' '}
        <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
          html
        </Href>
        일지라도
        <br />
        script코드를 통해{' '}
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        를 사용할수 있는 것입니다.
        <br />
        style코드와 다른점을 찾아보자면
        <br />
        script코드는 오로지 한개의 형태만을 고수한다는 점입니다.
        <br />
        오로지 script코드 안의 내용들만{' '}
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        로 인식하며
        <br />
        다른 형태로는 작동을 하지 않습니다.
        <iframe
          height='500'
          width='100%'
          scrolling='no'
          title='javascript script'
          src='https://codepen.io/fanic12/embed/LYZdQbE?height=265&theme-id=dark&default-tab=html,result'
          frameborder='no'
          loading='lazy'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen{' '}
          <a href='https://codepen.io/fanic12/pen/LYZdQbE'>
            javascript script
          </a>{' '}
          by fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
        이렇게 보면 같은 값인데 왜{' '}
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        는 이렇게나
        <br />긴 코드를 사용해야 할까요?
        <br />
        이렇게만 놓고 보면{' '}
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        는 정말 불편한 언어라고
        <br />
        생각하실수 있습니다.
        <br />왜 그렇냐면{' '}
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        는 동적으로 작동하기 때문에
        <br />
        이런 코드가 필요합니다.
        <br />
        해당 글을 입력하기만 하는건 간단하지만
        <br />
        위의 클만 보셔도{' '}
        <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
          html
        </Href>
        은 1+1로 고정되어 있지만
        <br />
        <Href
          title='javascript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javascript
        </Href>
        는 2로 코드 스스로 동적으로 활동합니다.
        <br />
        그렇기 때문에{' '}
        <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
          html
        </Href>
        에선 할 수 없었던 새로운 스타일을
        <br />
        접하시게 되실겁니다 유저와 소통하는 스타일을 말이죠.
        <br />
        동적인 스타일을{' '}
        <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
          html
        </Href>
        내어서 사용하게 해주는 코드가 바로
        <br />
        script코드입니다.
      </p>
      <Comment identifier="javascript_script" url="/script" title="JAVASCRIPT-script" />
    </div>
  )
}

export default Script

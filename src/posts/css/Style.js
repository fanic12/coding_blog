import React from 'react'
import Youtube from '../../components/Youtube'
import Href from '../../components/Href'
import Comment from '../../components/Comment'

function Style() {
  return (
    <div className='BlogContent'>
      <h2>CSS-style</h2>
      <Youtube title='style introduce' src='h0AlL9YI6bM' />
      <p>
        style코드는 간단합니다.
        <br />
        단위가확장자명이
        <Href title='css guide' url='https://namu.wiki/w/CSS'>
          css
        </Href>
        가 아닌 파일에 style코드를 넣어서
        <br />
        확장자명이{' '}
        <Href title='css guide' url='https://namu.wiki/w/CSS'>
          css
        </Href>
        가 아닐때에는{' '}
        <Href title='css guide' url='https://namu.wiki/w/CSS'>
          css
        </Href>
        를 사용할수 없지만
        <br />
        style코드를 넣음으로써 style코드 안에서는{' '}
        <Href title='css guide' url='https://namu.wiki/w/CSS'>
          css
        </Href>{' '}
        사용을 할수있게 만드는 겁니다.
        <br />
        style코드의 형태는 {'<'}style{'>'}
        {'<'}/style{'>'}만있는 것이 아닙니다.
        <br />
        다른 코드내에서도 들어가 사용할수 있는게 style코드입니다.
        <h4>
          *해당 수업을 듣고 싶으신 분들은 style태그의 변형수업을 참고하시면
          됩니다*
        </h4>
        <iframe
          height='500'
          width='50%'
          scrolling='no'
          title='VwjyoJj'
          src='https://codepen.io/fanic12/embed/VwjyoJj?height=265&theme-id=dark&default-tab=html,result'
          frameborder='no'
          loading='lazy'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen{' '}
          <a href='https://codepen.io/fanic12/pen/VwjyoJj'>VwjyoJj</a> by
          fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
        <br />왜 위의코드가 적용이 안될까요?
        <br />
        바로 style태그 안에 없기때문에
        <br />
        <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
          html
        </Href>
        이 그냥 글자로 인식하기 때문입니다.
        <br />
        해당 파일의 확장자명은{' '}
        <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
          html
        </Href>
        이기 때문에
        <br />
        style코드로 나 여기부터 여기까지는{' '}
        <Href title='css guide' url='https://namu.wiki/w/CSS'>
          css
        </Href>
        사용할거야
        <br />
        라고 알려주지 않았기 때문입니다.
        <br />
        그럼{' '}
        <Href title='css guide' url='https://namu.wiki/w/CSS'>
          css
        </Href>
        로 인식시켜 줘야겠죠?
        <br />
        해당 명령어를 복사 (CTRL+C)하고
        <br />
        style태그안에 붙여넣기 (CTRL+V)해봅시다.
      </p>
      <Comment identifier='css_style' url='/style' title='CSS-style' />
    </div>
  )
}

export default Style

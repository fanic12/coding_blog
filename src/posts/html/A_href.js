import React from 'react'
import Youtube from '../../components/Youtube'

function A_href() {
  return (
    <div className='BlogContent'>
      <h2>HTML-a href</h2>
      <Youtube title='a_hrefintroduce' src='V3pkC1hE-as' />
      <p>
        a태그는 하이퍼링크를 적용시켜주는 태그라고 생각하시면 편합니다
        <br />
        단위가원하는 곳으로 보내줄수있는 아주 친절한 코드입니다
        <br />
        단위가지정한 글자 혹은 그림등을 클릭하였을때 발동되는 onclick 형식이라고
        보시면 됩니다
        <br />
        단위가또한 여기서 사용되는 title코드는 코드에 마우스를 가져다 놓았을때
        <br />
        단위가지정한 title을 보여주는 역할입니다
        <iframe
          height='500'
          width='100%'
          scrolling='no'
          title='html a href'
          src='https://codepen.io/fanic12/embed/rNLdXrd?height=265&theme-id=dark&default-tab=html,result'
          frameborder='no'
          loading='lazy'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen{' '}
          <a href='https://codepen.io/fanic12/pen/rNLdXrd'>html a href</a> by
          fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
        ""안에 url을 넣어주시면 해당 글자를 클릭했을때
        <br />
        원하는 곳으로 가게 만들수 있습니다
        <br /> a태그와 /a태그사이에 원하는 글자등을 넣으시면
        <br /> 해당 글자를 클릭했을때 a태그가 발동됩니다
        <br />
        rel코드와 title코드는 jsx문법을 맞추기 위한 것이므로
        <br />
        atom에서는 사용하지 않으셔도 됩니다
        <br />
        또한 문법이외에 title코드의 용도는
        <br />
        링크에 마우스를 가져다 놓았을때 지정한 제목을 표시해 주는 정도입니다
        <br />
        target="_blank"태그 유무의 차이점은
        <br />
        현재 사이트가 a href=""태그안에 있는 웹으로
        <br />
        바뀌는 것이 target="_blank"태그가 없는것입니다
        <br />
        target="_blank"태그를 사용하시면
        <br />
        a태를 발동했을때 새창을 열면서 a href=""안에 있는 웹로 이동됩니다
      </p>
    </div>
  )
}

export default A_href

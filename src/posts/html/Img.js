import React from 'react'
import Href from '../../components/Href'
import Comment from '../../components/Comment'

function Img() {
  return (
    <div className='BlogContent'>
      <h2>HTML-img</h2>
      <iframe
        title='imgintroduce'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/RhE-RHdi-NY'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen='true'></iframe>
      <p>
        우리는 웹사이트안에 있는 이미지 파일을 불러와 웹에 넣는 활동을
        해볼겁니다.
        <br />
        가로 세로 길이를 width태그와 height태그를 통해서 넣어 주실수도 있습니다.
        <br />
        추가로 그림의 모양도 바꾸실수 있습니다.
        <br />
        가장 주로 쓰이는 것은 그림의 테두리를 둥글게 하거나 원모양으로 만드는
        것입니다.
        <br />
        그림을 원모양 또는 테두리가 둥글게 하고 싶다면 border-radius태그를
        사용하시면 됩니다.
        <br />
        실습을 하실때 이미지의 저작권이 걱정이시라면 public domain image이라고
        검색해보세요.
        <br />
        저작권이 없는 이미지 파일들을 구하실수 있을겁니다.
        <br />
        또는 원하는 사진이 안나오신다면{' '}
        <Href title='img guide' url='https://unsplash.com/'>
          upsplash
        </Href>
        이라고 검색해보세요.
        <br />
        해당 사이트에서는 해당사이트안에 있는 저작권이 없는 사진들을
        <br /> 검색을 통해 좀더 쉽게 빠르게 찾으실수 있습니다.
        <iframe
          height='500'
          width='50%'
          scrolling='no'
          title='html img'
          src='https://codepen.io/fanic12/embed/xxOWvzy?height=265&theme-id=dark&default-tab=html,result'
          frameborder='no'
          loading='lazy'
          allowtransparency='true'
          allowfullscreen='true'>
          See the Pen{' '}
          <a href='https://codepen.io/fanic12/pen/xxOWvzy'>html img</a> by
          fanic12 (<a href='https://codepen.io/fanic12'>@fanic12</a>) on{' '}
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
        src부분에 주소를 넣게 되면
        <br></br>이미지가 여러분의 컴퓨터에 없어도 사용하실수 있습니다.
        <br></br>width는 가로 height는 세로를 의미합니다.
        <br></br>atom에서 사용 하실때는 title태그와 alt태그를 사용하지 않으셔도
        됩니다.
        <br></br>title과alt는 jsx문법이므로 React로 이미지를 넣으실때 사용하시면
        됩니다.
      </p>
      <Comment identifier='html_img' url='/img' title='HTML-img' />
    </div>
  )
}

export default Img

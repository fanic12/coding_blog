import React from "react";

function Img() {
    return <div className="BlogContent"> 
        <h2>HTML-img</h2>
        <iframe
        title="imgintroduce" 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/RhE-RHdi-NY" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="true">
        </iframe>
        <p>
          우리는 atom폴더안에 있는 이미지 파일을 불러와 웹에 넣는 활동을 해볼겁니다
          <br />가로 세로 길이를 width태그와 height태그를 통해서 넣어 주실수도 있습니다 
          <br />추가로 그림의 모양도 바꾸실수 있습니다 
          <br />가장 주로 쓰이는 것은 그림의 테두리를 둥글게 하거나 원모양으로 만드는 것입니다
          <br />그림을 원모양 또는 테두리가 둥글게 하고 싶다면 border-radius태그를 사용하시면 됩니다
          <br />실습을 하실때 이미지의 저작권이 걱정이시라면 public domain image이라고 검색해보세요
          <br />저작권이 없는 이미지 파일들을 구하실수 있을겁니다
          <br />또는 원하는 사진이 안나오신다면 <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer"  title="img guide" className="SetColor">upsplash</a>이라고 검색해보세요
          <br />해당 사이트에서는 해당사이트안에 있는 저작권이 없는 사진들을
          <br /> 검색을 통해 좀더 쉽게 빠르게 찾으실수 있습니다
        </p>
        <iframe height="500" width= "100%" scrolling="no" title="html img" src="https://codepen.io/fanic12/embed/xxOWvzy?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fanic12/pen/xxOWvzy'>html img</a> by fanic12
  (<a href='https://codepen.io/fanic12'>@fanic12</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
    </div>
}

export default Img
import React from 'react'
import Youtube from '../../components/Youtube'
import Comment from '../../components/Comment'

function Map() {
  return (
    <div className='BlogContent'>
      <h2>REACTJS-map </h2>
      <h4>
        영어가 되시는 분들이라면 그냥 들으시고 아니라면
        <br /> 오른쪽 아래의 설정(톱니바퀴) 버튼을 누르셔서
        <br />
        반드시 자막을 한글로 설정해놓으시고 들으시길 권장드립니다.
      </h4>
      <Youtube title='map introduce' src='vUB3TfLWzL0?cc_load_policy=1' />
      <p>
        이번에 배워볼 문법은 map이라는 문법입니다.
        <br />
        map은 겉으로보기에는 props와 state와 별차이 없게 느끼실수 있습니다.
        <br />
        물론 props와 state의 차이를 못느끼시는 분들도 계시겠죠.
        <br />
        일반적인 작은 값들을 불러오기 할때는 map의 효율이 크게 발휘되지는
        않습니다.
        <br />
        이를테면 i라는 값 하나를 불러올려고 map과같은 문법을 쓰는건
        비효율적이죠.
        <br />
        차라리 state나 props를 쓰는게 훨신 효율적일겁니다.
        <br />
        그럼 map은 어디에 쓰나요? 라고 물으신다면
        <br />
        map은 방대한 자료를 불러오는데 사용합니다.
        <br />
        그자료는 본인이 만들었을수도 있고 혹은
        <br />
        다른 api에서 불러올수도 있습니다.
        <br />
        api에서 불러올때의 장점은 그것을 일일이 state로 만들려면 정말 오래
        걸릴뿐더러
        <br />
        너무 많은 값들이 존재합니다 잘못써서 오류가 날수도 있겠죠?
        <br />
        그러나 map으로 api에서 불러온다면 제대로된 값을 그대로 배껴올수 있는
        겁니다.
        <br />
        또한 react내에서 배열을 사용할때 map을 쓰시면 상당히 편리하실 겁니다.
        <br />
        그냥 적는다면 코드가 상당히 길어지고 반복되는 코드가 많이 생길겁니다.
        <br />
        그런 비효율적인 상황을 막기 위해서 map이 있는겁니다.
        <h4>
          *아래에 Both를 누르시면 코드가 실시간으로 적용되는 웹을 보실수
          있습니다*
        </h4>
        <iframe
          title='mapguide'
          width='50%'
          height='500px'
          src='https://stackblitz.com/edit/react-map?embed=1&file=src/App.js'></iframe>
        map은 주로 list라는 부모Component로 값을 묶고
        <br />
        그아래 자식Component로 여러개의 값을 줄수 있는겁니다.
        <br />
        renderFood라는 function으로 Food안에있는 name, picture의 값들을
        <br />
        name={'{'}dish.name{'}'} picture={'{'}dish.img{'}'}라고 정해주는 겁니다.
        <br />
        이때 dish는 맵의 이름입니다.
        <br />
        여러분들이 그 이름을 마음대로 정하실수 있고 큰 이유는 없습니다.
        <br />
        App이라는 function내에서 foodILIke라는 componenet안에 renderFood라는
        값들이다.
        <br />
        라는 뜻입니다 이제 값들이 정해졌으니 Food function에서 내보내는 것이죠.
        <br />
        또한 id라는 것이 필요합니다.
        <br />
        react는 지금 자식Component에있는 값들인 name과 같은 props들을 가지고
        있습니다.
        <br />
        그렇기 때문에 react에게 이것들은 다른거야 혼동하지마 라고 알려주기
        위해서
        <br />
        key값을 주는 겁니다 react의 문법이라고 생각하시면 됩니다.
        <br />
        또한 img에 alt={'{'}name{'}'}이렇게 되어 있는걸 보실수 있는데
        <br />
        이때 alt는 시각장애인들을 위한 것입니다.
      </p>
      <Comment identifier='react_map' url='/map' title='REACTJS-map' />
    </div>
  )
}

export default Map

import './App.css';

import Header from "./Header";
import Footer from './Footer'
import Profile from './Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Introduction from './Introduction';
import Careers from './Careers';
import Card from './Card';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Container maxWidth='lg' className='app__container'>
          <Profile />

          <Route exact path="/">
            <Introduction />
          </Route>

          <Route path="/careers">
            <Careers />
          </Route>

          <Route path="/activities">

            <Card image="https://www.hanium.or.kr/2019/images/ico_service01_off.png"
              title="2018한이음ICT 멘토링" date="수행기간: 2018.04 ~ 2018.11"
              desc="팀원들과 함께 멘토링에 참여하여, 공기청정기 자동화 시스템을 구현했습니다." />

            <Card image="https://www.hanium.or.kr/2019/images/ico_service01_off.png"
              title="2019한이음ICT 멘토링" date="수행기간: 2019.04 ~ 2019.11"
              desc="팀원들과 함께 멘토링에 참여하여, VR기반 헬스 트레이닝 시스템을 구현했습니다." />

            <Card image="https://cdn-images-1.medium.com/max/1018/1*I5O6NX_DIKYI1VBuLfX77Q.jpeg"
              title="연구실 인턴쉽" date="수행기간: 2019.12 ~ 2020.01"
              desc="연구실 인턴쉽으로 활동하는 동안, 딥러닝 기초, CNN, GAN, RNN를 학습했습니다." />


            <div className='app__container__panel__area__row'>
              <Card image="https://cdn-images-1.medium.com/max/1018/1*I5O6NX_DIKYI1VBuLfX77Q.jpeg"
                title="졸업 논문" date="수행기간: 2020.03 ~ 2020.06"
                desc="오픈소스로 제공되는, RGB이미지 기반 가상 착의(virtual fitting)를 위한 데이터 생성 모델을 가져오고,
                  손실 함수를 다르게 정의하여 나온 각 결과를 비교했습니다."
              />
              
              <Card image="https://webcachecdn.multicampus.com/prd/pv00/FA00FC/FA00FC_PV_TN_IM_1.jpg"
                title="K-digital training" date="수행기간: 2020.12 ~ "
                desc="AWS, Docker, K8s를 학습하고 이를 응용한 프로젝트를 진행하고 있습니다." />
            </div>

          </Route>
        </Container>
        <Footer />
      </div>
    </Router>


  );
}

export default App;

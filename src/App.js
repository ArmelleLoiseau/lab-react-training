import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import './styles/App.css';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import FacebookAdvanced from './components/FacebookAdvanced';

function App() {
  return (
    <div className="App">
      <h2>Iteration 1 | Component: IdCard</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <hr />
      <h2>Iteration 2 | Component: Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <hr />
      <h2>Iteration 3 | Component: Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <hr />
      <h2>Iteration 4 | Component: BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <hr />
      <h2>Iteration 5 | Component: CreditCard</h2>
      <div className="credit-card-main">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <hr />
      <h2>Iteration 6 | Component: Rating</h2>
      <div>
        <Rating>0</Rating> <br />
        <Rating>1.49</Rating> <br />
        <Rating>1.5</Rating>
        <br />
        <Rating>3</Rating>
        <br />
        <Rating>4</Rating>
        <br />
        <Rating>5</Rating>
        <br />
      </div>
      <hr />
      <h2>Iteration 7 | Component: DriverCard</h2>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <hr />
      <h2>Iteration 8 | State: LikeButton</h2>
      <LikeButton />
      <LikeButton />
      <hr />
      <h2>Iteration 9: State: ClickablePicture</h2>
      <ClickablePicture
        image="/maxence.png"
        imgClicked="/maxence-glasses.png"
      />
      <hr />
      <h2>Iteration 10 | State: Dice</h2>
      <Dice />
      <hr />
      <h2>Iteration 11 | State: Carousel</h2>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <hr />
      <h2>Iteration 12 | List and Keys | NumbersTable</h2>
      <NumbersTable limit={12} />
      <hr />
      <h2>Iteration 13 | List and Keys - FaceBook (Simple)</h2>
      <Facebook />
      <hr />
      <h2>Iteration 14 | List and Keys - FaceBook (Advanced)</h2>
      <FacebookAdvanced />
    </div>
  );
}

export default App;
